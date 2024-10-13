"use client";

import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {doc, getDoc} from "@firebase/firestore"; // Import Firestore methods

import mammoth from "mammoth";
import {db} from "../../../firebase";
import {usePathname} from "next/navigation";

export default function Page({}) {
  // Accept bookId as a prop
  const bookId = usePathname().slice(15);
  // console.log(pathName.slice(15));

  const [wordContent, setWordContent] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // default white background
  const [fontColor, setFontColor] = useState("#000000"); // default black font color
  const [isLoading, setIsLoading] = useState(true); // loading state
  const fontFamily = useSelector((state) => state.toolBar.font); // dynamic font family
  const fontSize = useSelector((state) => state.toolBar.fontSize); // dynamic font size
  const mode = useSelector((state) => state.toolBar.mode); // dynamic mode

  useEffect(() => {
    const fetchBookData = async () => {
      setIsLoading(true); // Set loading to true before fetching
      const docRef = doc(db, "books", bookId); // Get reference to the Firestore document
      const docSnap = await getDoc(docRef); // Fetch the document

      if (docSnap.exists()) {
        const bookData = docSnap.data();
        const bookFileUrl = await bookData.book; // Get the download URL for the book

        // Fetch and display the Word document content
        const response = await fetch(bookFileUrl);
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.convertToHtml({arrayBuffer});
        setWordContent(result.value); // Set the converted HTML content
      } else {
        console.error("No such document!");
      }
      setIsLoading(false); // Set loading to false after fetching
    };

    fetchBookData();
  }, [bookId]);

  useEffect(() => {
    if (mode === "dark") {
      setBackgroundColor("#292929"); // dark mode background color
      setFontColor("#ffffff"); // dark mode font color
    } else if (mode === "light") {
      setBackgroundColor("#ffffff"); // light mode background color
      setFontColor("#000000"); // light mode font color
    } else {
      setBackgroundColor("#FAE6B5"); // default background color
      setFontColor("#000000"); // default font color
    }
  }, [mode]);

  return (
    <div className="p-6">
      {/* Display the Document */}
      <div className="mt-6 p-4">
        {isLoading ? (
          <div>Loading...</div> // Loading indicator
        ) : (
          <div
            className={`prose max-w-full p-4 rounded-md h-[60vh] overflow-y-auto ${fontFamily} `}
            style={{
              backgroundColor: backgroundColor, // dynamic background color
              fontSize: fontSize, // dynamic font size
              color: fontColor, // dynamic font color
            }}
          >
            <div
              className="word-content"
              dangerouslySetInnerHTML={{__html: wordContent}}
            />
          </div>
        )}
      </div>
    </div>
  );
}

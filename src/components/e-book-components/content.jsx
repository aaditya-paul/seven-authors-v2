"use client";

import React, {useEffect, useRef, useState} from "react";
import {doc, getDoc} from "@firebase/firestore";
import mammoth from "mammoth";
import {db} from "../../../firebase";
import {usePathname} from "next/navigation";
import {useSelector} from "react-redux";

export default function Page({
  currentPage,
  setPages,
  setWordContent,
  wordContent,
  setBookTitle,
}) {
  const bookId = usePathname().slice(15);
  // const [wordContent, setWordContent] = useState("");
  const [bookmarks, setBookmarks] = useState([]); // Store bookmarks
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // default white background
  const [fontColor, setFontColor] = useState("#000000"); // default black font color

  const contentRef = useRef(null);

  const fontFamily = useSelector((state) => state.toolBar.font); // dynamic font family
  const fontSize = useSelector((state) => state.toolBar.fontSize); // dynamic font size
  const mode = useSelector((state) => state.toolBar.mode); // dynamic mode

  const [localBookMark, setLocalBookMark] = useState();

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0; // Scroll to the top of the content div
    }
  }, [currentPage]);

  useEffect(() => {
    const fetchBookData = async () => {
      setIsLoading(true); // Set loading to true before fetching
      const docRef = doc(db, "books", bookId); // Get reference to the Firestore document
      const docSnap = await getDoc(docRef); // Fetch the document

      if (docSnap.exists()) {
        const bookData = docSnap.data();
        const bookFileUrl = await bookData.book; // Get the download URL for the book
        setBookTitle(bookData.title); // Set the book title
        // Fetch and display the Word document content
        const response = await fetch(bookFileUrl);
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.convertToHtml({arrayBuffer});
        splitContentIntoPages(result.value); // Split content into pages
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

  // Split content into pages based on word count
  const splitContentIntoPages = (htmlContent) => {
    const wordsPerPage = 500; // Example words per page
    const contentArray = htmlContent.split(/\s+/); // Split content into words
    const totalPages = Math.ceil(contentArray.length / wordsPerPage);

    const paginatedContent = [];
    for (let i = 0; i < totalPages; i++) {
      const pageContent = contentArray.slice(
        i * wordsPerPage,
        (i + 1) * wordsPerPage
      );
      paginatedContent.push(pageContent.join(" "));
    }
    setPages(paginatedContent); // Set paginated content
    setWordContent(paginatedContent[currentPage]); // Display the first page
  };

  return (
    <div className="p-6">
      {/* Display the Document */}
      <div className="">
        {isLoading ? (
          <div>Loading...</div> // Loading indicator
        ) : (
          <div
            ref={contentRef}
            className={`prose max-w-full  h-[75vh] overflow-y-auto ${fontFamily}`}
          >
            <div
              dangerouslySetInnerHTML={{__html: wordContent}}
              style={{
                backgroundColor: backgroundColor, // dynamic background color
                fontSize: fontSize, // dynamic font size
                color: fontColor, // dynamic font color
              }}
              className="p-4 rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
}

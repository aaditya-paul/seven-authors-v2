"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import BOOK from "/public/assets/img/book-demo.svg";
import { usePathname } from "next/navigation";
import { fetchBooks, fetchSingleBook } from "@/utils/fetchBooks";
import { arrayUnion, doc, increment, setDoc } from "@firebase/firestore";
import { db } from "../../../../../../firebase";
import { useSelector } from "react-redux";
import Link from "next/link";
import BookImage from "@/components/e-book-components/bookImage";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import Loader from "@/components/LoaderComponent/Loader";

const Page = () => {
  const q = usePathname().slice(21);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [more, setMore] = useState(false);
  const [buying, setBuying] = useState(false); // New state for buying process
  const UID = useSelector((state) => state.AdminRedux.user.uid);
  const boughtBooks = useSelector((state) => state.AdminRedux.user.booksBought);

  const handleBuy = async () => {
    const confirmm = confirm("Are you sure you want to buy this book?");
    if (confirmm) {
      setBuying(true); // Set buying state to true
      try {
        // increase the total sales of the book
        await setDoc(
          doc(db, "books", q),
          { totalSales: increment(1) },
          { merge: true }
        );
        await setDoc(
          doc(db, "users", UID),
          { booksBought: arrayUnion(q) },
          { merge: true }
        );
        alert("Book bought successfully");
        window.location.reload();
      } catch (error) {
        console.error("Error buying book: ", error);
        alert("Failed to buy the book. Please try again.");
      } finally {
        setBuying(false); // Set buying state to false
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchSingleBook(q).then((data) => {
      console.log(data);
      setBook(data);
      setLoading(false);
    });
  }, [q]);

  if (loading) {
    return <Loader />;
  }

  if (!book) {
    return (
      <div className="w-full lg:h-[90vh] text-white text-2xl font-bold text-center my-10">
        Book not found
      </div>
    );
  }

  return (
    <div className="text-white w-full rounded-lg overflow-hidden p-6">
      {/* Book Image */}
      <div className="flex flex-col md:flex-row w-full justify-center items-start md:items-start md:justify-evenly">
        <div className="w-fit gap-16">
          <BookImage book={book} />
          {/* Buttons */}
          <div className="mt-4 flex flex-col gap-4">
            <Link
              href={`/e-book/e-book/${q}`}
              className="w-full text-center bg-transparent border border-red-500 text-red-500 py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors"
            >
              {boughtBooks && boughtBooks.includes(q) ? "Read Book" : "Preview"}{" "}
              {/* Change button text based on whether the book is bought or not */}
              {/* Preview */}
            </Link>
            {
              // Show buy button only if the book is not bought
              boughtBooks && boughtBooks.includes(q) ? null : (
                <button
                  onClick={handleBuy}
                  className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                  disabled={buying} // Disable button while buying
                >
                  {buying ? "Processing..." : "₹ " + book.price}{" "}
                </button>
              )
            }
          </div>
        </div>

        {/* Book Info */}
        <div className="mt-4 md:mt-0 md:ml-6 flex-grow">
          <h2 className="text-2xl font-bold">{book.title}</h2>
          <p className="text-gray-400 mb-2">{book.author}</p>

          {/* Ratings */}
          <div className="flex items-center mb-2">
            <span className="text-red-500">⭐</span>
            <span className="text-red-500">⭐</span>
            <span className="text-red-500">⭐</span>
            <span className="text-red-500">⭐</span>
            <span className="text-gray-500">⭐</span>
          </div>

          {/* Genre */}
          <div className="flex space-x-2 mb-2">
            {/* TODO CHANGE GENRE COLOR */}
            <span className="px-2 py-1 bg-gray-700 text-xs rounded-md">
              {capitalizeFirstLetter(book.genre)}
            </span>
          </div>

          <p className="text-gray-300 mb-4">{book.totalSales} Copies Sold</p>

          {/* Synopsis */}
          <div>
            <h3 className="font-bold mb-1">Synopsis</h3>
            <p
              className={`text-sm text-gray-400 ${
                !more ? "line-clamp-2 md:line-clamp-[10]" : "line-clamp-none"
              } max-w-[120ch]`}
            >
              {book.description}
            </p>
            <button
              onClick={() => setMore(!more)}
              className="text-red-500 mt-2 outline-none"
            >
              {!more ? "Show more" : "Show less"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

import Link from "next/link";
import React from "react";
import BookImage from "./e-book-components/bookImage";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import BookGenre from "./bookGenre";

function BookCards({ books, type }) {
  return (
    <div className="flex md:w-full p-0 rounded-lg md:py-0 md:px-0 flex-col gap-3 py-4  w-full">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 overflow-x-scroll w-full no-scrollbar">
        {books.map((book, index) => (
          <Link
            href={{
              pathname: `/e-book/book-details/${book.slug}`,
            }}
            key={index}
            className="flex cursor-pointer flex-col justify-between gap-3 sm:w-full md:w-full my-3 md:my-5"
          >
            <BookImage size="sm" book={book} />
            <p className="text-white text-sm font-medium font-roboto">
              {capitalizeFirstLetter(book.title)}
            </p>
            <div className={`${type === "progress" ? "hidden" : "flex"} `}>
              <BookGenre genre={book.genre} />
            </div>
            <div
              className={`${type === "progress" ? "flex flex-col" : "hidden"}`}
            >
              <div className="flex items-center mb-2">
                <div className="relative w-full h-1 bg-gray-300 rounded-full">
                  <div
                    className="absolute h-full bg-red-600 rounded-full"
                    style={{ width: `${book.progress ? book.progress : 0}%` }} // Assuming 'progress' is a percentage from 0 to 100
                  />
                </div>
              </div>
              <div className=" flex items-center gap-2 text-white/80">
                <h1 className=" text-xs">
                  {capitalizeFirstLetter("in progress")}
                </h1>
                <h1 className=" text-xs ">
                  {book.progress ? book.progress : 0}%
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BookCards;

"use client";

import Image from "next/image";
import React, {useEffect, useState} from "react";
import BOOK from "/public/assets/img/book-demo.svg";
import {useRouter} from "next/navigation";
import {fetchBooks} from "@/utils/fetchBooks";
import Link from "next/link";
import BookImage from "@/components/e-book-components/bookImage";

function Page() {
  const [books, setBooks] = useState([]); // Use plural form for books state
  const router = useRouter();

  // Fetching books data
  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchBooks();
        console.log(data);
        setBooks(data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };

    getBooks();
  }, []);

  return (
    <div>
      {/* Search Bar */}
      <div className="mx-5 md:mx-12 my-5">
        <input
          type="text"
          placeholder="Search Books"
          className="bg-transparent outline-none text-white border-gray-400 border rounded-md md:w-[40%] w-fit p-2 md:p-4 mx:p-4"
        />
        <button className="ml-4 bg-transparent outline-none text-white px-3 p-2 md:px-8 md:p-4 border border-gray-400 rounded-md">
          Filter
        </button>
      </div>
      {books.length > 0 ? (
        <div className="flex flex-col md:gap-12 md:my-12 gap-5 my-12">
          {/* Recommended Section */}
          <div>
            <h1 className="text-white text-2xl mx-5 md:mx-12 font-bold">
              Recommended For You
            </h1>
            <div className="flex md:w-fit p-4 rounded-lg md:py-0 md:px-16 flex-col gap-3 py-4 px-6 w-full">
              <div className="grid grid-cols-2 md:grid-cols-6 md:gap-8 overflow-x-scroll w-full no-scrollbar">
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
                      {book.title}
                    </p>
                    <div className="flex">
                      <p className="bg-[#7F237F] py-1 px-2 text-white rounded-full text-xs">
                        {book.genre} {/* Use genre from fetched book */}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <a className="text-[#e12f3b] text-base font-medium hover:text-red-400 cursor-pointer">
                See more
              </a>
            </div>
          </div>

          {/* Best Seller Section */}
          <div>
            <h1 className="text-white text-2xl mx-5 md:mx-12 font-bold">
              Best Seller
            </h1>
            <div className="flex md:w-fit p-4 rounded-lg md:py-0 md:px-16 flex-col gap-3 py-4 px-6 w-full">
              <div className="grid grid-cols-2 md:grid-cols-6 md:gap-8 overflow-x-scroll w-full no-scrollbar">
                {books.map((book, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      router.push(`/e-book/e-book/${book.id}`); // Use a dynamic slug
                    }}
                    className="flex cursor-pointer flex-col gap-3 sm:w-full md:w-full my-3 md:my-5"
                  >
                    <Image
                      src={BOOK}
                      alt="Book Cover"
                      className="max-w-[120px] h-[180px] rounded-lg shadow"
                      loading="lazy"
                    />
                    <p className="text-white text-xs font-normal">
                      {book.name}
                    </p>
                    <div className="flex">
                      <p className="bg-[#7F237F] py-1 px-2 text-white rounded-full text-xs">
                        {book.genre} {/* Use genre from fetched book */}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <a className="text-[#e12f3b] text-base font-medium hover:text-red-400 cursor-pointer">
                See more
              </a>
            </div>
          </div>

          {/* Newly Launched Section */}
          <div>
            <h1 className="text-white text-2xl mx-5 md:mx-12 font-bold">
              Newly Launched
            </h1>
            <div className="flex md:w-fit p-4 rounded-lg md:py-0 md:px-16 flex-col gap-3 py-4 px-6 w-full">
              <div className="grid grid-cols-2 md:grid-cols-6 md:gap-8 overflow-x-scroll w-full no-scrollbar">
                {books.map((book, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      router.push(`/e-book/e-book/${book.slug}`); // Use a dynamic slug
                    }}
                    className="flex cursor-pointer flex-col gap-3 sm:w-full md:w-full my-3 md:my-5"
                  >
                    <Image
                      src={BOOK}
                      alt="Book Cover"
                      className="max-w-[120px] h-[180px] rounded-lg shadow"
                    />
                    <p className="text-white text-xs font-normal">
                      {book.name}
                    </p>
                    <div className="flex">
                      <p className="bg-[#7F237F] py-1 px-2 text-white rounded-full text-xs">
                        {book.genre} {/* Use genre from fetched book */}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <a className="text-[#e12f3b] text-base font-medium hover:text-red-400 cursor-pointer">
                See more
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white text-xl font-bold">
          No books available. Loading...
        </div>
      )}
    </div>
  );
}

export default Page;

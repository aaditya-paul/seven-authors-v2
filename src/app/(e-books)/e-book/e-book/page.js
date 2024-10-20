"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import BOOK from "/public/assets/img/book-demo.svg";
import { useRouter } from "next/navigation";
import { fetchBooks } from "@/utils/fetchBooks";
import Link from "next/link";
import BookImage from "@/components/e-book-components/bookImage";
import Loader from "@/components/LoaderComponent/Loader";

function Page() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState(""); // Sorting state
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

  // Filtered Books based on Search Term
  const filteredBooks = books
    .filter((book) =>
      book.title?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      // Sorting logic
      if (sortOption === "alphabetical-asc") {
        return a.title.localeCompare(b.title);
      } else if (sortOption === "alphabetical-desc") {
        return b.title.localeCompare(a.title);
      } else if (sortOption === "newest") {
        return new Date(b.creationDate) - new Date(a.creationDate);
      } else if (sortOption === "oldest") {
        return new Date(a.creationDate) - new Date(b.creationDate);
      }
      return 0; // No sorting if no option is selected
    });

  return (
    <div>
      {/* Search Bar */}
      <div className="mx-5 md:mx-12 my-5 flex flex-row md:flex-row">
        <input
          type="text"
          placeholder="Search Books"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent outline-none text-white border-gray-400 border rounded-md md:w-[40%] w-fit p-2 md:p-4 mx:p-4"
        />
        {/* Sorting Dropdown */}
        <select
          onChange={(e) => setSortOption(e.target.value)}
          className="ml-4 md:w-fit px-2 py-4 w-[100px] outline-none bg-bgColor text-white p-2 md:p-4 mx:p-4 border border-gray-400 rounded-md    "
        >
          <option value="">Sort by</option>
          <option value="alphabetical-asc">Alphabetical A-Z</option>
          <option value="alphabetical-desc">Alphabetical Z-A</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {books.length > 0 ? (
        <div className="flex flex-col md:gap-12 md:my-12 gap-5 my-12">
          {/* Recommended Section */}
          <div>
            <h1 className="text-white text-2xl mx-5 md:mx-12 font-bold">
              All E-books
            </h1>
            <div className="flex md:w-fit p-4 rounded-lg md:py-0 md:px-16 flex-col gap-3 py-4 px-6 w-full">
              <div className="grid grid-cols-2 gap-10 md:grid-cols-6 overflow-x-scroll w-full no-scrollbar">
                {filteredBooks.map((book, index) => (
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
                        {book.genre}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader height={"70"} />
      )}
    </div>
  );
}

export default Page;

"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import BOOK from "/public/assets/img/book-demo.svg";
import { useRouter } from "next/navigation";
import { fetchBooks } from "@/utils/fetchBooks";
import Link from "next/link";
import BookImage from "@/components/e-book-components/bookImage";
import BookCards from "@/components/bookCards";
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
        <div className=" my-9 mx-12 w-fit">
          {/* Recommended Section */}
          <div className=" flex flex-col ">
            <h1 className="text-white text-2xl font-bold">All E-books</h1>
            <BookCards books={filteredBooks} />
          </div>
        </div>
      ) : (
        <Loader height={"70"} />
      )}
    </div>
  );
}

export default Page;

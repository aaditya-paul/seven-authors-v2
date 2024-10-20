"use client";

import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {fetchBooks} from "@/utils/fetchBooks";
import BookCards from "@/components/bookCards";

function Page() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const user = useSelector((state) => state.AdminRedux.user); // Accessing user data

  // Fetching books data
  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchBooks();
        console.log(data);

        // Set only books that are bookmarked by the user
        const bookmarkedBooks = user.bookMark || [];
        const userBooks = data.filter((book) =>
          bookmarkedBooks.some((bookmark) => bookmark.bookId === book.id)
        );

        // Reverse the array to show the last read book on top
        console.log("User Books:", userBooks.reverse());

        setBooks(await userBooks.reverse());
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };

    getBooks();
  }, [user]); // Add user as a dependency to re-fetch when user changes

  // Filtered Books based on Search Term
  const filteredBooks = books
    .filter((book) =>
      book.title?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "alphabetical-asc") {
        return a.title.localeCompare(b.title);
      } else if (sortOption === "alphabetical-desc") {
        return b.title.localeCompare(a.title);
      } else if (sortOption === "newest") {
        return new Date(b.creationDate) - new Date(a.creationDate);
      } else if (sortOption === "oldest") {
        return new Date(a.creationDate) - new Date(b.creationDate);
      }
      return 0;
    });

  // Calculate progress for each book
  const booksWithProgress = filteredBooks.map((book) => {
    const bookmark = user.bookMark.find(
      (bookmark) => bookmark.bookId === book.id
    );
    const progress = bookmark ? (bookmark.page / bookmark.totalPages) * 100 : 0; // If no bookmark, progress is 0%

    return {
      ...book,
      progress: Math.round(progress), // Add progress to book object, rounded to nearest integer
    };
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
          className="ml-4 md:w-fit px-2 py-4 w-[100px] outline-none bg-bgColor text-white p-2 md:p-4 mx:p-4 border border-gray-400 rounded-md"
        >
          <option value="">Sort by</option>
          <option value="alphabetical-asc">Alphabetical A-Z</option>
          <option value="alphabetical-desc">Alphabetical Z-A</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {booksWithProgress.length > 0 ? (
        <div className="my-9 mx-12 w-fit">
          {/* Recommended Section */}
          <div className="flex flex-col">
            <h1 className="text-white text-2xl font-bold">Your Bookmarks</h1>
            <BookCards type="progress" books={booksWithProgress} />
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

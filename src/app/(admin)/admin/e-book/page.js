"use client";

import {useRouter} from "next/navigation";
import React, {useState} from "react";

// BookRow Component
const BookRow = ({index, book}) => {
  return (
    <div className="flex justify-evenly px-4 py-1 text-white items-center text-xs">
      <div className="basis-[10%] flex flex-col w-full">
        <div>{index + 1}.</div>
      </div>
      <div className="basis-[33.33%] flex flex-col w-full">
        <div>{book.name}</div>
      </div>
      <div className="basis-[8.5%] flex flex-col w-full">
        <div>{book.basePrice}</div>
      </div>
      <div className="basis-[8.5%] flex flex-col w-full">
        <div>{book.createdAt}</div>
      </div>
      <div className="basis-[8.5%] flex flex-col w-full">
        <div>{book.totalSales}</div>
      </div>
      <div className="basis-[8.5%] flex flex-col w-full">
        <div>{book.total}</div>
      </div>
      <div className="basis-[12.5%] flex flex-col w-full">
        <div className="flex gap-4">
          <div className="px-4 py-2 border rounded-md cursor-pointer border-blue-500">
            View
          </div>
          <div className="px-4 py-2 border rounded-md cursor-pointer border-yellow-500">
            Edit
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Page Component
function Page() {
  const router = useRouter();
  const [books, setBooks] = useState([
    {
      name: "Harry Potter",
      basePrice: 1000,
      createdAt: "2024-01-01",
      totalSales: 100,
      total: 1000,
    },
    {
      name: "The Hobbit",
      basePrice: 800,
      createdAt: "2024-01-02",
      totalSales: 50,
      total: 800,
    },
    // Add more book objects here
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAddBook = () => {
    // Logic to add a new book can be implemented here
    const newBook = {
      name: "New Book", // Replace with user input
      basePrice: 900, // Replace with user input
      createdAt: new Date().toISOString().split("T")[0],
      totalSales: 0,
      total: 900,
    };
    setBooks([...books, newBook]);
  };

  // Filtered Books based on Search Term
  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-5 md:px-12 py-5">
      <div className="text-white text-xl font-bold">E-Book Details</div>
      {/* Search Bar */}
      <div className="my-5 flex flex-col md:flex-row items-start gap-2">
        <input
          type="text"
          placeholder="Search Books"
          className="bg-transparent outline-none text-white border-gray-400 border rounded-md md:w-[40%] w-fit p-2 md:p-2 mx:p-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => {
            router.push("/admin/e-book/add-new-book");
          }}
          className="md:ml-4 bg-red-700 outline-none text-white px-3 p-2 md:px-5 md:p-2 rounded-md"
        >
          Add New Book
        </button>
      </div>
      {/* Board */}
      <div className="bg-navBarBGPrimary h-[70vh] overflow-y-scroll no-scrollbar">
        {/* Table Headings */}
        <div className="flex justify-evenly p-4 text-white/50 font-semibold text-xs">
          <div className="basis-[10%]">Sr. No.</div>
          <div className="basis-[33.33%]">Name</div>
          <div className="basis-[8.5%]">Base Price</div>
          <div className="basis-[8.5%]">Created At</div>
          <div className="basis-[8.5%]">Total Sales</div>
          <div className="basis-[8.5%]">Total</div>
          <div className="basis-[12.5%]">Actions</div>
        </div>
        {/* Book Rows */}
        {filteredBooks.map((book, index) => (
          <BookRow key={index} index={index} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Page;

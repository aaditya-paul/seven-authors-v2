"use client";

import {fetchBooks} from "@/utils/fetchBooks";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";

// BookRow Component
const BookRow = ({book, index}) => {
  return (
    <tr className="text-white text-xs">
      <td className="text-left">{index + 1}.</td>
      <td className="text-left">{book.title}</td>
      <td className="text-left">{book.price}</td>
      <td className="">{book.creationDate}</td>
      <td className="text-left">{book.totalSales}</td>
      <td className="text-left">{book.total}</td>
      <td className="text-left">
        <div className="flex justify-center gap-2">
          <div className="px-4 py-2 border rounded-md cursor-pointer border-blue-500">
            View
          </div>
          <div className="px-4 py-2 border rounded-md cursor-pointer border-yellow-500">
            Edit
          </div>
        </div>
      </td>
    </tr>
  );
};

// Main Page Component
function Page() {
  const router = useRouter();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBooks(); // Fetch books data
        console.log("Fetched data:", data); // Log fetched data
        setBooks(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  // Filtered Books based on Search Term
  const filteredBooks = books.filter((book) =>
    book.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="text-white text-xl font-bold">Loading...</div>;
  }

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
        <table className="w-full text-left border-collapse p-4 m-4">
          <thead>
            <tr className="text-white/50 font-semibold text-xs ">
              <th className="basis-[10%]">Sr. No.</th>
              <th className="basis-[33.33%]">Name</th>
              <th className="basis-[8.5%]">Base Price</th>
              <th className="basis-[8.5%]">Created At</th>
              <th className="basis-[8.5%]">Total Sales</th>
              <th className="basis-[8.5%]">Total</th>
              {/* <th className="basis-[12.5%]">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <BookRow key={index} book={book} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;

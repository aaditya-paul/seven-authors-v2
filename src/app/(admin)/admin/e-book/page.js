"use client";

import {fetchBooks} from "@/utils/fetchBooks";
import {deleteDoc, doc} from "@firebase/firestore";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {db, storage} from "../../../../../firebase";
import {deleteObject, listAll, ref} from "@firebase/storage";
import {useSelector} from "react-redux";

// BookRow Component
const BookRow = ({book, index}) => {
  const router = useRouter();

  const onClickDelete = async () => {
    console.log(book.slug);

    if (confirm("Are you sure you want to delete this book?") === true) {
      try {
        // First, delete all files in the folder
        const folderRef = ref(storage, `books/${book.slug}`);
        const listResult = await listAll(folderRef);
        console.log("Files to delete:", listResult.items);
        // Delete each file in the folder
        const deletePromises = listResult.items.map((item) =>
          deleteObject(item)
        );

        // Wait for all file deletions to complete
        await Promise.all(deletePromises);
        console.log(
          `All files in folder 'books/${book.slug}' deleted successfully.`
        );

        // Now delete the document from Firestore
        await deleteDoc(doc(db, "books", book.slug));
        alert("Book Deleted Successfully");
        window.location.reload();
      } catch (error) {
        alert("Error Deleting Book: " + error.message); // Use error.message for a better error message
        console.error("Error Deleting Book:", error); // Log the error for debugging
      }
    }
  };

  const onClickView = () => {
    window.open(`/e-book/e-book/${book.slug}`, "_blank");
  };
  return (
    <tr className="text-white text-xs">
      <td className="text-left">{index + 1}.</td>
      <td className="text-left">{book.title}</td>
      <td className="text-left">{book.price}</td>
      <td className="">{book.creationDate}</td>
      <td className="text-left">{book.totalSales}</td>
      <td className="text-left">{book.total}</td>
      <td className="text-left">
        <div className="flex gap-2 justify-center">
          <div
            onClick={onClickView}
            className="px-4 py-2 border rounded-md cursor-pointer border-blue-500"
          >
            View
          </div>
          <div className="px-4 py-2 border rounded-md cursor-pointer border-yellow-500">
            Edit
          </div>
          <div
            onClick={onClickDelete}
            className=" active:scale-95 transition-all ease-linear px-2 py-2 border rounded-md cursor-pointer border-red-500"
          >
            Delete
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
  const user = useSelector((state) => state.AdminRedux.user);
  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const data = await fetchBooks(); // Fetch books data
          console.log("Fetched data:", data); // Log fetched data
          const booksWithPurchaseInfo = data.filter(
            (book) => user.uid == book.authorUID
          );

          setBooks(booksWithPurchaseInfo);
        } catch (error) {
          console.error(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData(); // Call the fetch function
    }
  }, [user]);

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
            <tr className="text-white/50 font-semibold text-xs">
              <th className="w-[8.5%]">Sr. No.</th>
              <th className="w-[15%]">Name</th> {/* 3x space */}
              <th className="w-[8%]">Base Price</th>
              <th className="w-[8%]">Created At</th>
              <th className="w-[8%]">Total Sales</th>
              <th className="w-[8%]">Total</th>
              <th className="w-[10.5%] text-center">Actions</th>
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

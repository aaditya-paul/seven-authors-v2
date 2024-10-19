"use client";

import {fetchSingleBook} from "@/utils/fetchBooks";
import {usePathname} from "next/navigation";
import React, {useEffect, useState} from "react";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import Image from "next/image";
import {db, storage} from "../../../../../../../firebase";
import {doc, setDoc, updateDoc} from "@firebase/firestore";

function Page() {
  const q = usePathname().slice(19); // Assuming this is the book ID
  const [notFound, setNotFound] = useState(false);
  const [book, setBook] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [bookURL, setBookURL] = useState(null); // For the book file URL
  const [newBookFile, setNewBookFile] = useState(null); // For uploading a new book file

  useEffect(() => {
    fetchSingleBook(q).then((data) => {
      if (data === -1) {
        setNotFound(true);
      } else {
        setBook(data);
        setCoverImagePreview(data.coverImage);
        setBookURL(data.book); // Set the current book file URL
      }
    });
  }, [q]);

  const handleFileUpload = async (file, id, type) => {
    if (!file) return null;

    try {
      const storageRef = ref(storage, `books/${id}/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error(`Error uploading ${type} file: `, error);
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);

    if (file) {
      const imagePreviewUrl = URL.createObjectURL(file);
      setCoverImagePreview(imagePreviewUrl);
    }
  };

  const updateBook = async (bookId, updatedData) => {
    try {
      const bookRef = doc(db, "books", bookId); // 'books' is your Firestore collection

      // Update the book details with the provided data
      await setDoc(bookRef, updatedData, {merge: true});

      console.log("Book updated successfully");
    } catch (error) {
      console.error("Error updating the book: ", error);
      throw new Error("Failed to update the book");
    }
  };

  const handleBookFileChange = (e) => {
    const file = e.target.files[0];
    setNewBookFile(file);
  };

  if (notFound) {
    return <div>Book not found</div>;
  }

  if (!book) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Upload the cover image if a new one is selected
    const newCoverImageURL = coverImage
      ? await handleFileUpload(coverImage, q, "cover image")
      : book.coverImage;

    // Upload the new book file if selected
    const newBookFileURL = newBookFile
      ? await handleFileUpload(newBookFile, q, "book file")
      : bookURL;

    // Update the book with the new details and URLs
    // (assuming an updateBook function exists to handle this)
    await updateBook(q, {
      title: book.title,
      description: book.description,
      irn: book.irn,
      genre: book.genre,
      creationDate: book.creationDate,
      price: book.price,
      copyright: book.copyright,
      coverImage: await newCoverImageURL,
      book: await newBookFileURL,
    });

    alert("Book updated successfully!");
    setIsLoading(false);
  };

  return (
    <div className=" w-full flex justify-center p-6">
      <div className="flex flex-col p-5 space-y-4 bg-navBarBGPrimary  rounded-lg w-[80%] h-[90%]  text-white">
        <h1 className="text-xl font-bold px-5">Edit E-Book Details</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-[80%] self-center flex flex-col"
        >
          <div className=" flex gap-10 items-center justify-between outline-none ">
            <label className="block">Enter the title of the book: </label>
            <input
              type="text"
              value={book.title}
              onChange={(e) => setBook({...book, title: e.target.value})}
              className=" w-64 p-2 border border-gray-400 rounded-md bg-transparent outline-none"
              required
            />
          </div>
          <div className=" flex gap-10 items-center justify-between outline-none">
            <label className="block">Enter the description: </label>
            <textarea
              value={book.description}
              onChange={(e) => setBook({...book, description: e.target.value})}
              className=" w-64 p-2 border border-gray-400 rounded-md bg-transparent outline-none"
              required
            />
          </div>
          <div className=" flex gap-10 items-center justify-between outline-none">
            <label className="block">Enter the IRN number</label>
            <input
              type="number"
              value={book.irn}
              onChange={(e) => setBook({...book, irn: e.target.value})}
              className=" w-64 p-2 border border-gray-400 rounded-md bg-transparent outline-none"
              required
            />
          </div>
          <div className=" flex gap-10 items-center justify-between outline-none">
            <label className="block">Select genre</label>
            <select
              value={book.genre}
              onChange={(e) => setBook({...book, genre: e.target.value})}
              className="w-64 bg-navBarBGPrimary p-2 border border-gray-400 rounded-md outline-none "
              required
            >
              <option value="">Select</option>
              <option value="Peace">Peace</option>
              <option value="Survival">Survival</option>
            </select>
          </div>
          <div className=" flex gap-10 items-center justify-between outline-none">
            <label className="block">Date of creation</label>
            <input
              type="date"
              value={book.creationDate}
              onChange={(e) => setBook({...book, creationDate: e.target.value})}
              className="w-64 p-2 border border-gray-400 rounded-md bg-transparent outline-none"
              required
            />
          </div>
          <div className=" flex gap-10 items-center justify-between outline-none">
            <label className="block">Enter the price</label>
            <input
              type="number"
              value={book.price}
              onChange={(e) => setBook({...book, price: e.target.value})}
              className="w-64 p-2 border border-gray-400 rounded-md bg-transparent outline-none"
              required
            />
          </div>
          <div className=" flex flex-col gap-5 justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={book.copyright}
                onChange={() => setBook({...book, copyright: !book.copyright})}
                className="mr-2"
              />
              <label>All the copy rights are reserved to me</label>
            </div>

            <div className=" flex gap-10 items-center justify-between outline-none">
              <label className="block">Upload a new Book file (optional)</label>
              <input
                type="file"
                onChange={handleBookFileChange}
                className="w-64 p-2 border border-gray-400 rounded-md bg-transparent outline-none"
                accept=".doc, .docx"
              />
            </div>

            <div className=" flex items-center justify-between">
              <label>Current Book File:</label>
              <a
                href={bookURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Book
              </a>
            </div>

            <div className=" flex items-center justify-between">
              <div className=" flex flex-col gap-5 justify-between outline-none">
                <label className="block">
                  Upload a new cover image (optional)
                </label>
                <input
                  type="file"
                  onChange={handleCoverImageChange}
                  className="w-64 p-2 border border-gray-400 rounded-md bg-transparent outline-none"
                  accept="image/*"
                />
              </div>
              {coverImagePreview ? (
                <div className="flex justify-center mt-4">
                  <Image
                    src={coverImagePreview}
                    alt="Cover Preview"
                    width={120}
                    height={180}
                    className=" max-w-[120px] h-[180px]  object-cover rounded-lg"
                  />
                </div>
              ) : null}
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-4 bg-red-700 text-white rounded-md"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;

"use client";

import {doc, setDoc} from "@firebase/firestore";
import React, {useState} from "react";
import {db, storage} from "../../../../../../firebase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [irn, setirn] = useState("");
  const [genre, setGenre] = useState("");
  const [creationDate, setCreationDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [copyright, setCopyright] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [book, setBook] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (file, id) => {
    if (!file) return;

    try {
      // Create a reference to the storage location
      const storageRef = ref(storage, `books/${id}/${file.name}`);

      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, file);

      // Get the download URL
      const downloadURLL = await getDownloadURL(storageRef);

      setDownloadURL(downloadURLL);

      return downloadURLL;
    } catch (error) {
      console.error("Error uploading file or writing document: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log({
      title,
      description,
      irn,
      genre,
      creationDate,
      copyright,
      coverImage,
      book,
    });
    // Logic to handle form submission, e.g., sending data to the server
    if (
      !title ||
      !description ||
      !irn ||
      !genre ||
      !creationDate ||
      !coverImage
    ) {
      alert("Please fill all the fields");
      setIsLoading(false);
      return;
    } else if (!coverImage.type.includes("image")) {
      alert("Please upload a valid image file");
      setIsLoading(false);
      return;
    } else {
      const generateUniqueId = async () => {
        return "id-" + Math.random().toString(36).substr(2, 16);
      };

      const uniqueId = await generateUniqueId();
      await setDoc(doc(db, "books", uniqueId), {
        title,
        description,
        irn,
        genre,
        creationDate,
        coverImage: await handleFileUpload(coverImage, uniqueId),
        book: await handleFileUpload(book, uniqueId),
      })
        .then(() => {
          alert("Book added successfully");
        })
        .catch((error) => {
          alert("Error adding book: ", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className=" w-full flex justify-center p-6">
      <div className="flex flex-col p-5 space-y-4 bg-navBarBGPrimary  rounded-lg w-[80%] h-[90%]  text-white">
        <h1 className="text-xl font-bold px-5">E-Book Details</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-[80%] self-center flex flex-col"
        >
          <div className=" flex gap-10 items-center justify-between outline-none ">
            <label className="block">Enter the title of the book: </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" w-64 p-2 border border-gray-400 rounded-md bg-transparent outline-none"
              required
            />
          </div>
          <div className=" flex gap-10 items-center justify-between outline-none">
            <label className="block">Enter the description: </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className=" w-64 p-2 border border-gray-400 rounded-md bg-transparent outline-none"
              required
            />
          </div>
          <div className=" flex gap-10 items-center justify-between outline-none">
            <label className="block">Enter the IRN number</label>
            <input
              type="text"
              value={irn}
              onChange={(e) => setirn(e.target.value)}
              className=" w-64 p-2 border border-gray-400 rounded-md bg-transparent outline-none"
              required
            />
          </div>
          <div className=" flex gap-10 items-center justify-between outline-none">
            <label className="block">Select genre</label>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-64 bg-navBarBGPrimary p-2 border border-gray-400 rounded-md outline-none "
              required
            >
              <option value="">Select</option>
              <option value="Peace">Peace</option>
              <option value="Survival">Survival</option>
              {/* Add more genres as needed */}
            </select>
          </div>
          <div className=" flex gap-10 items-center justify-between outline-none">
            <label className="block">Date of creation</label>
            <input
              type="date"
              value={creationDate}
              onChange={(e) => setCreationDate(e.target.value)}
              className="w-64 p-2 border border-gray-400 rounded-md bg-transparent outline-none"
              required
            />
          </div>
          <div className=" flex flex-col gap-5 justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={copyright}
                onChange={() => setCopyright(!copyright)}
                className="mr-2"
              />
              <label>All the copy rights are reserved to me</label>
            </div>
            <div className=" flex gap-10 items-center justify-between outline-none">
              <label className="block">
                Upload the cover image of the book
              </label>
              <input
                type="file"
                onChange={(e) => setCoverImage(e.target.files[0])}
                className="w-64 p-2 border border-gray-400 rounded-md bg-transparent outline-none"
                accept="image/*"
                required
              />
            </div>
            <div className=" flex gap-10 items-center justify-between outline-none">
              <label className="block">Upload the the Book</label>
              <input
                type="file"
                onChange={(e) => setBook(e.target.files[0])}
                className="w-64 p-2 border border-gray-400 rounded-md bg-transparent outline-none"
                accept=".pdf, .doc, .docx"
                required
              />
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
};

export default BookForm;

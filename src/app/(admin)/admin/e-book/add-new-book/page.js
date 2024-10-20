"use client";

import {arrayUnion, doc, setDoc} from "@firebase/firestore";
import React, {useState} from "react";
import {db, storage} from "../../../../../../firebase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import Image from "next/image";
import BOOK from "../../../../../../public/assets/img/book-demo.svg";
import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";
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
  const [coverImagePreview, setCoverImagePreview] = useState(null); // For previewing the image
  const [book, setBook] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState("");

  const user = useSelector((state) => state.AdminRedux.user);
  const router = useRouter();

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

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);

    // Generate a URL for preview
    if (file) {
      const imagePreviewUrl = URL.createObjectURL(file);
      setCoverImagePreview(imagePreviewUrl);
    } else {
      setCoverImagePreview(null);
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
      price,
    });

    if (
      !title ||
      !description ||
      !irn ||
      !genre ||
      !creationDate ||
      !coverImage ||
      !book ||
      !price
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
        price,
        slug: uniqueId,
        totalSales: 0,
        total: 0,
        author: user.name,
        authorUID: user.uid,
      })
        .then(async () => {
          await setDoc(
            doc(db, "users", user.uid),
            {
              booksBought: arrayUnion(uniqueId),
            },
            {merge: true}
          );
          alert("Book added successfully");
          router.push("/admin/e-book");
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
              type="number"
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
              <option value="sci-fi">Sci-Fi</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
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
          <div className=" flex gap-10 items-center justify-between outline-none">
            <label className="block">Enter the price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
              <label className="block">Upload the Book</label>
              <input
                type="file"
                onChange={(e) => setBook(e.target.files[0])}
                className="w-64 p-2 border border-gray-400 rounded-md bg-transparent outline-none"
                accept=".doc, .docx"
                required
              />
            </div>
            <div className=" flex items-center justify-between">
              <div className=" flex flex-col gap-5 justify-between outline-none">
                <label className="block">
                  Upload the cover image of the book
                </label>
                <input
                  type="file"
                  onChange={handleCoverImageChange} // Updated to handle image preview
                  className="w-64 p-2 border border-gray-400 rounded-md bg-transparent outline-none"
                  accept="image/*"
                  required
                />
              </div>
              {coverImagePreview ? ( // Display the preview if there's an image
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
};

export default BookForm;

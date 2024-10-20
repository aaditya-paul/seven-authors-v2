import Image from "next/image";
import React, { useState } from "react";
import "../../styles/bookImage.css";
import Loader from "../LoaderComponent/Loader";

const BookImage = ({ book, size }) => {
  const [imageLoaded, setImageLoaded] = useState(false); // Track image load state

  return (
    <div
      className={`relative ${
        size == "sm"
          ? "w-[120px] h-[180px]"
          : "w-[80vw] h-[150px] md:w-[200px] md:h-[300px]"
      }  `}
    >
      {/* Conditionally render the loader if the image has not loaded yet */}
      {!imageLoaded && <Loader height={50} />}

      {/* Image element that triggers the loading completion handler */}
      <Image
        src={book.coverImage}
        alt={book.title}
        fill
        className={`rounded-md object-cover ${
          size == "sm"
            ? "w-[120px] h-[180px]"
            : "w-[80vw] h-[150px] md:w-[200px] md:h-[300px]"
        } `}
        loading="lazy"
        onLoadingComplete={() => setImageLoaded(true)} // Set imageLoaded to true when the image is loaded
      />
    </div>
  );
};

export default BookImage;

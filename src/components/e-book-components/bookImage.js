import Image from "next/image";
import React, {useState} from "react";

const BookImage = ({book}) => {
  const [imageLoaded, setImageLoaded] = useState(false); // Track image load state

  return (
    <div className="relative w-[80vw] h-[150px] md:w-[200px] md:h-[300px]">
      {/* Conditionally render the loader if the image has not loaded yet */}
      {!imageLoaded && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      {/* Image element that triggers the loading completion handler */}
      <Image
        src={book.coverImage}
        alt={book.title}
        fill
        className="rounded-md object-cover"
        loading="lazy"
        loader={({src}) => src}
        onLoadingComplete={() => setImageLoaded(true)} // Set imageLoaded to true when the image is loaded
      />
    </div>
  );
};

export default BookImage;

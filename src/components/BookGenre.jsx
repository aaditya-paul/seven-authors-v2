import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import React, {useState} from "react";

const BookGenre = ({genre}) => {
  const [bgcolor, setBgColor] = useState("");

  //   if () {
  //     setBgColor("bg-red-500");
  //   }
  //   if (genre === "Peace") {
  //     setBgColor("bg-blue-500");
  //   }
  //   if (genre === "Sci-fi") {
  //     setBgColor("bg-green-500");
  //   }
  //   if (genre === "Horror") {
  //     setBgColor("bg-orange-500");
  //   }
  //   if (genre === "Romance") {
  //     setBgColor("bg-red-500");
  //   }
  return (
    <>
      <p
        className={`${
          genre === "Survival"
            ? "bg-red-500"
            : genre === "Peace"
            ? "bg-blue-500"
            : genre === "Sci-fi"
            ? "bg-green-500"
            : genre === "horror"
            ? "bg-orange-500"
            : genre === "romance"
            ? "bg-red-500"
            : "bg-red-500"
        } py-1 px-2 text-white rounded-full text-xs`}
      >
        {/* TODO CHANGE GENRE COLOR */}

        {capitalizeFirstLetter(genre)}
      </p>
    </>
  );
};

export default BookGenre;

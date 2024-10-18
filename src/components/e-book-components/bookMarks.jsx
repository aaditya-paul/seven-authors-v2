import React from "react";

function BookMarks({title}) {
  return (
    <div className="  h-[7vh] bg-navBarBGPrimary flex justify-between items-center pr-12  ">
      <div className=" flex items-center text-sm md:text-lg h-full px-10 font-bold ">
        {title}
      </div>
    </div>
  );
}

export default BookMarks;

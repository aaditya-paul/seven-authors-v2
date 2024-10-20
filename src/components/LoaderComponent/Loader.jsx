import React from "react";
import "./Loader.css";

const Loader = ({ height }) => {
  return (
    <div
      className={`p-5 mt-5 min-h-[${
        height ? height : "80"
      }vh] w-full flex justify-center items-center overflow-hidden `}
    >
      <div class="loading">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  );
};

export default Loader;

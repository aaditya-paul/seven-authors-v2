import React from "react";
import "./Loader.css";

const Loader = ({ height, size }) => {
  if (size === "sm") {
    return (
      <div className={`flex flex-col justify-center items-center`}>
        <div class="loading">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div className="text-white font-bold text-xl">
          Fetching items, please wait or no items to display
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`p-5 mt-5 min-h-[${
          height ? height : "80"
        }vh] w-full flex flex-col gap-5 justify-center items-center overflow-hidden `}
      >
        <div class="loading">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div className="text-white font-bold text-xl">
          Fetching items, please wait or no items to display{" "}
        </div>
      </div>
    );
  }
};

export default Loader;

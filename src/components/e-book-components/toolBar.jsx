"use client";
import React, {useState, useEffect} from "react";
import Arrow from "../../../public/assets/arrow.svg";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {setFont, setFontSize, setMode} from "@/lib/redux/features/toolbar";

function ToolBar({currentPage, totalPages, goToPage}) {
  const dispatch = useDispatch();
  const fontState = useSelector((state) => state.toolBar.font);
  var fontSize = useSelector((state) => state.toolBar.fontSize);
  var mode = useSelector((state) => state.toolBar.mode);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToggle(window.innerWidth >= 768);
    }
  }, []);

  const fonts = [
    {name: "Roboto", font: "font-roboto"},
    {name: "Sometype", font: "font-sometype"},
    {name: "Irish Grover", font: "font-irish"},
    {name: "Inter", font: "font-inter"},
  ];

  return (
    <>
      {/* Toolbar Section */}
      <div
        className={`absolute overflow-x-visible  md:bottom-0 transition-all ease-linear ${
          toggle ? "right-0" : "md:-right-[15vw] -right-[90%]"
        } text-fontPrimary bg-navBarBGPrimary px-5 py-3 border-[3px] border-r-0 border-b-0 h-full md:h-[70vh] bor border-borderColor rounded-tl-3xl w-[90%] md:w-[15vw]`}
      >
        <div
          onClick={() => setToggle(!toggle)}
          className="cursor-pointer absolute left-0 bg-navBarBGPrimary -translate-x-[1.85rem] translate-y-16 border-[3px] border-r-0 border-borderColor top-0 px-2 py-3 rounded-l-xl"
        >
          <Image
            src={Arrow}
            alt="arrow"
            className={`${toggle && "rotate-180"} transition-all`}
          />
        </div>
        <div className="flex flex-col gap-3">
          {/* Font Selection */}
          <div>Font</div>
          <div>
            {fonts.map((font, index) => (
              <div
                onClick={() => dispatch(setFont(font.font))}
                key={index}
                className={`transition-all ease-linear ${font.font} ${
                  font.font === fontState
                    ? "text-fontColorActive bg-bgColor drop-shadow-sm"
                    : "bg-transparent"
                } cursor-pointer px-3 py-2 rounded-lg`}
              >
                {font.name}
              </div>
            ))}
          </div>

          {/* Font Size Selection */}
          <div>
            <div>Font Size</div>
            <div className="flex gap-5 items-center">
              <div
                onClick={() => dispatch(setFontSize((fontSize = fontSize + 4)))}
                className="cursor-pointer"
              >
                +
              </div>
              <div style={{fontSize: `${fontSize}px`}}>A</div>
              <div
                onClick={() => dispatch(setFontSize((fontSize = fontSize - 4)))}
                className="cursor-pointer"
              >
                -
              </div>
            </div>
          </div>

          {/* Mode Selection */}
          <div>
            <div>Mode</div>
            <div className="grid grid-rows-2 grid-cols-2 gap-4 my-2">
              {["night", "light", "dark"].map((theme, index) => (
                <div
                  key={index}
                  onClick={() => dispatch(setMode(theme))}
                  className={`${
                    mode === theme ? "border-4 border-red-500" : "border-none"
                  } px-3 cursor-pointer py-6
                  
                  ${
                    theme === "night"
                      ? " bg-[#E9EAD6]"
                      : theme === "light"
                      ? " bg-[#ffffff]"
                      : " bg-[#292929]"
                  }
                  
                  rounded-md`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Section */}
      <div
        className={`w-full md:w-[90%] absolute ${
          toggle
            ? "bottom-[0vh] md:bottom-10 opacity-100"
            : "bottom-[0vh] md:bottom-10 md:opacity-0"
        } bg-navBarBGPrimary md:bg-transparent pointer-events-none flex self-center items-center justify-center transition-all ease-linear duration-300 delay-75`}
      >
        <div className="pointer-events-auto md:bg-white/20 md:px-16 md:backdrop-blur-[2px] py-3 rounded-lg flex gap-4">
          <div
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 0}
            className="cursor-pointer px-4 py-2 bg-[#292929] border-2 border-[#757575] rounded-xl"
          >
            {"<"}
          </div>
          <div className="cursor-pointer px-4 py-2 bg-[#292929] border-2 border-[#757575] rounded-xl">
            Page {currentPage + 1} of {totalPages}
          </div>
          <div
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            className="cursor-pointer px-4 py-2 bg-[#292929] border-2 border-[#757575] rounded-xl"
          >
            {">"}
          </div>
        </div>
      </div>
    </>
  );
}

export default ToolBar;

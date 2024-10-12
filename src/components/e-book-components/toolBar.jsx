"use client";
import React, {useEffect, useState} from "react";
import Arrow from "../../../public/assets/arrow.svg";
import Image from "next/image";
function ToolBar() {
  const fonts = [
    {
      name: "Roboto",
    },
    {
      name: "Sometype",
    },
    {
      name: "Irish",
    },
    {
      name: "Gorver",
    },
    {
      name: "Inter",
    },
    {},
  ];

  const [fontState, setFont] = useState("Sometype");

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToggle(window.innerWidth >= 768);
    }
  }, []);
  return (
    <>
      <div
        className={`absolute overflow-x-visible  md:bottom-0  transition-all ease-linear ${
          toggle ? "right-0" : "md:-right-[15vw] -right-[90%] "
        } text-fontPrimary bg-navBarBGPrimary px-5 py-3 border-[3px] border-r-0 border-b-0  h-full md:h-[70vh] bor border-borderColor rounded-tl-3xl w-[90%] md:w-[15vw]  `}
      >
        <div
          onClick={() => setToggle(!toggle)}
          className={`cursor-pointer absolute left-0 bg-navBarBGPrimary -translate-x-[1.85rem] translate-y-16 border-[3px] border-r-0 border-borderColor top-0 px-2 py-3 rounded-l-xl`}
        >
          <Image src={Arrow} alt="arrow" />
        </div>
        <div className=" flex flex-col gap-3">
          <div>Font</div>
          <div>
            {fonts.map((font, index) => {
              return (
                <div
                  onClick={() => {
                    setFont(font.name);
                  }}
                  key={index}
                  className={` transition-all ease-linear ${
                    font.name === fontState
                      ? "text-fontColorActive bg-bgColor drop-shadow-sm "
                      : "bg-transparent"
                  } cursor-pointer px-3 py-2 rounded-lg`}
                >
                  {font.name}
                </div>
              );
            })}
          </div>
          <div>
            <div>Font Size</div>
            <div className=" flex gap-5">
              <div className=" ">+</div>
              <div>A</div>
              <div>-</div>
            </div>
          </div>
          <div>
            <div>Mode</div>
          </div>
        </div>
      </div>
      <div
        className={`   w-full md:w-[90%] absolute ${
          toggle
            ? "bottom-[0vh]  md:bottom-10 opacity-100"
            : " bottom-[0vh]  md:bottom-10 md:opacity-0"
        }  w-full bg-navBarBGPrimary md:bg-transparent pointer-events-none flex self-center items-center justify-center transition-all ease-linear duration-300 delay-75 scroll-smooth `}
      >
        <div className=" pointer-events-auto md:bg-white/20 md:px-16 md:backdrop-blur-[2px] py-3 rounded-lg flex gap-4 ">
          <div className=" cursor-pointer px-4 py-2 bg-[#292929] border-2 border-[#757575] rounded-xl">
            {"<"}
          </div>
          <div className=" cursor-pointer px-4 py-2 bg-[#292929] border-2 border-[#757575] rounded-xl">
            Page 1
          </div>
          <div className="cursor-pointer px-4 py-2 bg-[#292929] border-2 border-[#757575] rounded-xl">
            {">"}
          </div>
        </div>
      </div>
    </>
  );
}

export default ToolBar;

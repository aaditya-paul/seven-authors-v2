"use client";
import React, {useState} from "react";
import Arrow from "../../public/assets/arrow.svg";
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
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div
        className={`absolute bottom-0 transition-all ease-linear ${
          toggle ? "right-0" : "-right-[15vw]"
        } text-fontPrimary bg-navBarBGPrimary px-5 py-3 border-[3px] border-r-0 border-b-0 h-[70vh] bor border-borderColor rounded-tl-3xl w-[15vw] `}
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
    </>
  );
}

export default ToolBar;

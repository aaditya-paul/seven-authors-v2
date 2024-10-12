"use client";

import React, {useState} from "react";
import Image from "next/image";
import LOGO from "/public/assets/img/logo-white.svg";
import BOOK from "/public/assets/img/book-demo.svg";
import NavBar from "@/components/navBar";
function Page() {
  const BestSeller = [
    {
      name: "The Book Name",
      genre: "Sci-fi",
      image: BOOK,
    },
    {
      name: "The Book Name",
      genre: "Sci-fi",
      image: BOOK,
    },
    {
      name: "The Book Name",
      genre: "Sci-fi",
      image: BOOK,
    },
    {
      name: "The Book Name",
      genre: "Sci-fi",
      image: BOOK,
    },
  ];
  const NewlyReleased = [
    {
      name: "The Book Name",
      genre: "Sci-fi",
      image: BOOK,
    },
    {
      name: "The Book Name",
      genre: "Sci-fi",
      image: BOOK,
    },
    {
      name: "The Book Name",
      genre: "Sci-fi",
      image: BOOK,
    },
    {
      name: "The Book Name",
      genre: "Sci-fi",
      image: BOOK,
    },
  ];
  return (
    <NavBar>
      <div className=" pt-24 bg-[url('/assets/img/bg.png')] bg-no-repeat bg-cover">
        <div class="  flex justify-center py-[24px] flex-col items-center gap-[32px] px-[24px] md:px-[0]  ">
          {/* <div className=" mb-16">
        </div> */}
          {/* <!-- newely released  --> */}

          {/* <!-- top seller  --> */}
          <div class="flex bg-[#393737] md:w-[120ch] p-[16px] rounded-[16px] md:py-[32px] md:px-[64px] flex-col gap-[24px] py-[16px] px-[24px] w-full">
            <p class="text-white md:text-[32px] font-bold text-[24px]">
              Best Seller
            </p>

            <div class="grid grid-cols-2 md:grid-cols-6 gap-[32px] overflow-x-scroll scrollbar-hide">
              {BestSeller.map((book, index) => {
                return (
                  <div
                    key={index}
                    class="flex flex-col gap-[12px] sm:w-full md:w-fit my-5"
                  >
                    <div className=" ">
                      <div>
                        <Image
                          src={BOOK}
                          alt=""
                          class="max-w-[120px] h-[180px] rounded-lg shadow"
                        ></Image>
                      </div>
                    </div>
                    <p class="text-white text-xs font-normal">The Book Name</p>
                    <div class="flex">
                      <p class="bg-[#7F237F] py-[4px] px-[8px] text-white rounded-full text-xs">
                        Sci-fi
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a class="text-[#e12f3b] text-base font-medium hover:text-red-400 cursor-pointer">
              See more
            </a>
          </div>
          {/* <!-- newely released  --> */}

          <div class="flex bg-[#393737] md:w-[120ch] p-[16px] rounded-[16px] md:py-[32px] md:px-[64px] flex-col gap-[24px] py-[16px] px-[24px] w-full">
            <p class="text-white md:text-[32px] font-bold text-[24px]">
              Newly Released
            </p>
            <div class="grid grid-cols-2 md:grid-cols-6 gap-[32px] overflow-x-scroll scrollbar-hide">
              {NewlyReleased.map((book, index) => {
                return (
                  <div
                    key={index}
                    class="flex flex-col gap-[12px] sm:w-full md:w-fit my-5"
                  >
                    <div className="">
                      <div>
                        <Image
                          src={BOOK}
                          alt=""
                          class="max-w-[120px] h-[180px] rounded-lg shadow"
                        ></Image>
                      </div>
                    </div>
                    <p class="text-white text-xs font-normal">The Book Name</p>
                    <div class="flex">
                      <p class="bg-[#7F237F] py-[4px] px-[8px] text-white rounded-full text-xs">
                        Sci-fi
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a class="text-[#e12f3b] text-base font-medium hover:text-red-400 cursor-pointer">
              See more
            </a>
          </div>
        </div>
      </div>
    </NavBar>
  );
}

export default Page;

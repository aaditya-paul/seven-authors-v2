"use client";

import Image from "next/image";
import React from "react";
import BOOK from "/public/assets/img/book-demo.svg";
import {useRouter} from "next/navigation";

function Page() {
  const books = [
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

  const router = useRouter();

  return (
    <div>
      {/* search bar */}
      <div className=" mx-5 md:mx-12 my-5">
        <input
          type="text"
          placeholder=" Search Books"
          className=" bg-transparent outline-none text-white border-gray-400 border rounded-md md:w-[40%] w-fit p-2 md:p-4  mx:p-4"
        />
        <button className="ml-4 bg-transparent outline-none text-white px-3 p-2 md:px-8 md:p-4 border border-gray-400 rounded-md">
          Filter
        </button>
      </div>
      <div className=" flex flex-col md:gap-12 md:my-12 gap-5 my-12">
        {/* Recommended  */}
        <div>
          <h1 className="text-white text-2xl mx-5 md:mx-12 font-bold">
            Recommended For You
          </h1>
          <div class="flex md:w-fit p-[16px] rounded-[16px] md:py-[0px] md:px-[64px] flex-col gap-[12px] py-[16px] px-[24px] w-full">
            <div class="grid grid-cols-2 md:grid-cols-6 md:gap-[32px] overflow-x-scroll w-full no-scrollbar ">
              {books.map((book, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      router.push("/e-book/e-book/slug");
                    }}
                    class="flex cursor-pointer flex-col gap-[12px] sm:w-full md:w-full my-3 md:my-5"
                  >
                    <div className="">
                      <div>
                        <Image
                          src={BOOK}
                          alt=""
                          class="max-w-[120px] h-[180px] rounded-lg shadow "
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
        {/* Best Seller  */}
        <div>
          <h1 className="text-white text-2xl mx-5 md:mx-12 font-bold">
            Best Seller
          </h1>
          <div class="flex md:w-fit p-[16px] rounded-[16px] md:py-[0px] md:px-[64px] flex-col gap-[12px] py-[16px] px-[24px] w-full">
            <div class="grid grid-cols-2 md:grid-cols-6 md:gap-[32px] overflow-x-scroll w-full no-scrollbar ">
              {books.map((book, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      router.push("/e-book/e-book/slug");
                    }}
                    class="flex cursor-pointer flex-col gap-[12px] sm:w-full md:w-full my-3 md:my-5"
                  >
                    <div className="">
                      <div>
                        <Image
                          src={BOOK}
                          alt=""
                          class="max-w-[120px] h-[180px] rounded-lg shadow "
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
        {/* Newly Launched  */}
        <div>
          <h1 className="text-white text-2xl mx-5 md:mx-12 font-bold">
            Newly Launched
          </h1>
          <div class="flex md:w-fit p-[16px] rounded-[16px] md:py-[0px] md:px-[64px] flex-col gap-[12px] py-[16px] px-[24px] w-full">
            <div class="grid grid-cols-2 md:grid-cols-6 md:gap-[32px] overflow-x-scroll w-full no-scrollbar ">
              {books.map((book, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      router.push("/e-book/e-book/slug");
                    }}
                    class="flex cursor-pointer flex-col gap-[12px] sm:w-full md:w-full my-3 md:my-5"
                  >
                    <div className="">
                      <div>
                        <Image
                          src={BOOK}
                          alt=""
                          class="max-w-[120px] h-[180px] rounded-lg shadow "
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
    </div>
  );
}

export default Page;

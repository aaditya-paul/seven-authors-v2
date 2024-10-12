import Image from "next/image";
import React from "react";
import { useState } from "react";

// import book1 from "@/../public/assets/img/Leonardo_Phoenix_A_hauntingly_beautiful_futuristic_illustratio_0 1.svg";
import book1 from "../../public/assets/img/Leonardo_Phoenix_A_hauntingly_beautiful_futuristic_illustratio_0 1.svg";
import book2 from "../../public/assets/img/Leonardo_Phoenix_A_hauntingly_beautiful_highcontrast_cover_ima_2 1.svg";

const BookSLider = () => {
  const [slidePage, setSlidePage] = useState(0);

  // let intervalNum = setInterval(() => {
  //   if (slidePage === 4) {
  //     setSlidePage(1);
  //   } else {
  //     setSlidePage((slidePage) => slidePage + 1);
  //   }
  // }, 5000);

  const booksArray = [
    {
      b1: {
        heading: "E-Book",
        title: "The Last Librarian",
        img: book1,
        description: `In a post-apocalyptic world where books have been banned and burned, a young woman named Anya discovers a hidden library. As she delves deeper into the forbidden knowledge, she becomes a target for those who want to keep the past buried. Anya must fight to protect the library and the power of words, all while unraveling the mysteries of the world&apos;s destruction.`,
        tags: ["Sci-fi", "Dystopia"],
      },
      b2: {
        heading: "Audio-Book",
        title: "The Martian",
        img: book2,
        description: `In a post-apocalyptic world where books have been bannedand burned, a young woman named Anya discovers a hiddenlibrary. As she delves deeper into the forbiddenknowledge, she becomes a target for those who want tokeep the past buried. Anya must fight to protect thelibrary and the power of words, all while unraveling themysteries of the world&apos;s destruction.`,
        tags: ["Sci-fi", "Dystopia"],
      },
    },
    {
      b1: {
        heading: "Audio-Book",
        title: "The Martian",
        img: book2,
        description: `In a post-apocalyptic world where books have been bannedand burned, a young woman named Anya discovers a hiddenlibrary. As she delves deeper into the forbiddenknowledge, she becomes a target for those who want tokeep the past buried. Anya must fight to protect thelibrary and the power of words, all while unraveling themysteries of the world&apos;s destruction.`,
        tags: ["Sci-fi", "Dystopia"],
      },
      b2: {
        heading: "E-Book",
        title: "The Last Librarian",
        img: book1,
        description: `In a post-apocalyptic world where books have been banned and burned, a young woman named Anya discovers a hidden library. As she delves deeper into the forbidden knowledge, she becomes a target for those who want to keep the past buried. Anya must fight to protect the library and the power of words, all while unraveling the mysteries of the world&apos;s destruction.`,
        tags: ["Sci-fi", "Dystopia"],
      },
    },
    {
      b1: {
        heading: "E-Book",
        title: "The Last Librarian",
        img: book1,
        description: `In a post-apocalyptic world where books have been banned and burned, a young woman named Anya discovers a hidden library. As she delves deeper into the forbidden knowledge, she becomes a target for those who want to keep the past buried. Anya must fight to protect the library and the power of words, all while unraveling the mysteries of the world&apos;s destruction.`,
        tags: ["Sci-fi", "Dystopia"],
      },
      b2: {
        heading: "Audio-Book",
        title: "The Martian",
        img: book2,
        description: `In a post-apocalyptic world where books have been bannedand burned, a young woman named Anya discovers a hiddenlibrary. As she delves deeper into the forbiddenknowledge, she becomes a target for those who want tokeep the past buried. Anya must fight to protect thelibrary and the power of words, all while unraveling themysteries of the world&apos;s destruction.`,
        tags: ["Sci-fi", "Dystopia"],
      },
    },
    {
      b1: {
        heading: "E-Book",
        title: "The Last Librarian",
        img: book1,
        description: `In a post-apocalyptic world where books have been banned and burned, a young woman named Anya discovers a hidden library. As she delves deeper into the forbidden knowledge, she becomes a target for those who want to keep the past buried. Anya must fight to protect the library and the power of words, all while unraveling the mysteries of the world&apos;s destruction.`,
        tags: ["Sci-fi", "Dystopia"],
      },
      b2: {
        heading: "Audio-Book",
        title: "The Martian",
        img: book2,
        description: `In a post-apocalyptic world where books have been bannedand burned, a young woman named Anya discovers a hiddenlibrary. As she delves deeper into the forbiddenknowledge, she becomes a target for those who want tokeep the past buried. Anya must fight to protect thelibrary and the power of words, all while unraveling themysteries of the world&apos;s destruction.`,
        tags: ["Sci-fi", "Dystopia"],
      },
    },
  ];

  return (
    <>
      <button
        className="md:block hidden"
        onClick={() => {
          if (slidePage === 0) {
            setSlidePage(booksArray.length - 1);
          } else {
            setSlidePage((slidePage) => slidePage - 1);
          }
        }}
      >
        <span className="bg-[#4d4d4d] p-3 rounded-full px-4">&lt;</span>
      </button>
      <div className="flex flex-col items-center gap-10">
        <div className="">
          <h2 className="text-2xl my-2 pl-2">Newly relesead</h2>
          {booksArray.map((books, index) => {
            const b1 = books.b1;
            const b2 = books.b2;
            return (
              <>
                {index === slidePage && (
                  <>
                    <div className="Animation_fadeIn flex lg:flex-row flex-col flex-1 gap-5">
                      <div className="flex flex-col gap-2 justify-center items-start">
                        <h3 className="text-red-500 pl-2">{b1.heading}</h3>
                        <div className="flex flex-row items-center gap-3">
                          <div className="">
                            <Image
                              src={b1.img}
                              className=""
                              width="1100"
                              height=""
                              alt="book1-image"
                            />
                          </div>
                          <div className="text-xs">
                            <h1 className="text-lg">Title: {b1.title}</h1>
                            <p className="text-gray-300">{b1.description}</p>
                            <div className="flex flex-row gap-2 my-2">
                              <div className="p-1 px-2 rounded-xl bg-[#c521c5]">
                                {b1.tags[0]}
                              </div>
                              <div className="p-1 px-2 rounded-xl bg-green-600">
                                {b1.tags[1]}
                              </div>
                            </div>
                            <span className="text-xs text-red-500 hover:underline cursor-pointer">
                              Read more &gt;
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 justify-center items-start">
                        <h3 className="text-red-500 pl-2">{b2.heading}</h3>
                        <div className="flex flex-row items-center gap-3">
                          <div className="">
                            <Image
                              src={b2.img}
                              className=""
                              width="1100"
                              height=""
                              alt="book1-image"
                            />
                          </div>
                          <div className="text-xs">
                            <h1 className="text-lg">Title: {b2.title}</h1>
                            <p className="text-gray-300">{b2.description}</p>
                            <div className="flex flex-row gap-2 my-2">
                              <div className="p-1 px-2 rounded-xl bg-[#c521c5]">
                                {b2.tags[0]}
                              </div>
                              <div className="p-1 px-2 rounded-xl bg-green-600">
                                {b2.tags[1]}
                              </div>
                            </div>
                            <span className="text-xs text-red-500 hover:underline cursor-pointer">
                              Read more &gt;
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            );
          })}
        </div>
        <div className="flex flex-row gap-6 mb-3">
          <div
            className={`${
              slidePage == 0 ? "bg-red-500" : "bg-gray-700"
            } h-[3px] w-7 rounded-sm`}
            onClick={() => {
              setSlidePage(0);
            }}
          ></div>
          <div
            className={`${
              slidePage == 1 ? "bg-red-500" : "bg-gray-700"
            } h-[3px] w-7 rounded-sm`}
            onClick={() => {
              setSlidePage(1);
            }}
          ></div>
          <div
            className={`${
              slidePage == 2 ? "bg-red-500" : "bg-gray-700"
            } h-[3px] w-7 rounded-sm`}
            onClick={() => {
              setSlidePage(2);
            }}
          ></div>
          <div
            className={`${
              slidePage == 3 ? "bg-red-500" : "bg-gray-700"
            } h-[3px] w-7 rounded-sm`}
            onClick={() => {
              setSlidePage(3);
            }}
          ></div>
        </div>
      </div>
      <button
        className="md:block hidden"
        onClick={() => {
          if (slidePage === booksArray.length - 1) {
            setSlidePage(0);
          } else {
            setSlidePage((slidePage) => slidePage + 1);
          }
        }}
      >
        <span className="bg-[#4d4d4d] p-3 rounded-full px-4">&gt;</span>
      </button>
    </>
  );
};

export default BookSLider;

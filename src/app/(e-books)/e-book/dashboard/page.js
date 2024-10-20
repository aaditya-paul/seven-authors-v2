"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import BOOK from "/public/assets/img/book-demo.svg";
import { fetchBooks } from "@/utils/fetchBooks";
import BookImage from "@/components/e-book-components/bookImage";
import Link from "next/link";
import Loader from "@/components/LoaderComponent/Loader";

function Page() {
  const [bestSellers, setBestSellers] = useState([]);
  const [newlyReleased, setNewlyReleased] = useState([]);

  // Fetching books from the database
  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchBooks();
        // Sorting by totalSales for best sellers
        const sortedBySales = [...data].sort(
          (a, b) => b.totalSales - a.totalSales
        );
        // Sorting by creationDate for newly released (most recent first)
        const sortedByDate = [...data].sort(
          (a, b) => new Date(b.creationDate) - new Date(a.creationDate)
        );

        // Limiting the number of displayed books to 4 for both sections
        await setBestSellers(sortedBySales.slice(0, 4));
        await setNewlyReleased(sortedByDate.slice(0, 4));
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };

    getBooks();
  }, []);

  // useEffect(() => {
  //   console.log(bestSellers, newlyReleased);
  // }, [bestSellers, newlyReleased]);

  if (bestSellers.length > 0 && newlyReleased.length > 0) {
    console.log(bestSellers, newlyReleased);

    return (
      <div className="bg-[url('/assets/img/bg.png')] bg-no-repeat bg-cover flex justify-center">
        <div className="w-fit md:p-5 flex items-center justify-center self-center ">
          <div className="flex justify-center py-[24px] flex-col items-center md:gap-[32px] px-[10px] md:px-[0]">
            {/* Best Seller Section */}
            <div className="bg-[#393737] px-6 md:px-12 py-4 md:py-16 w-full rounded-[16px] text-white text-2xl mx-5 md:mx-12 font-bold md:mb-0 mb-5">
              <p className="text-white md:text-[32px] font-bold text-[24px]">
                Best Seller
              </p>

              <div className="flex md:w-full p-4 rounded-lg md:py-0  flex-col gap-3 py-4 px-6 w-full">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-5 overflow-x-scroll w-full no-scrollbar ">
                  {bestSellers.map((book, index) => (
                    <Link
                      href={`/e-book/book-details/${book.id}`}
                      key={index}
                      className="flex flex-col gap-[12px] sm:w-full md:w-fit my-5 justify-between"
                    >
                      <div>
                        <BookImage size="sm" book={book} />
                      </div>
                      <p className="text-white text-sm font-medium max-w-[120px] ">
                        {book.title}
                      </p>
                      <div className="flex">
                        <p className="bg-[#7F237F] py-[4px] px-[8px] text-white rounded-full text-xs">
                          {book.genre}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href={"/e-book/e-book"}
                className="text-[#e12f3b] text-base font-medium hover:text-red-400 cursor-pointer"
              >
                See more
              </Link>
              {/* </div> */}
            </div>

            {/* Newly Released Section */}
            <div className="bg-[#393737] px-6 md:px-12 py-4 md:py-16 w-full rounded-[16px] text-white text-2xl mx-5 md:mx-12 font-bold md:mb-5">
              <p className="text-white md:text-[32px] font-bold text-[24px]">
                Newly Released
              </p>

              <div className="flex md:w-full p-4 rounded-lg md:py-0  flex-col gap-3 py-4 px-6 w-full">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-5 overflow-x-scroll w-full no-scrollbar">
                  {newlyReleased.map((book, index) => (
                    <Link
                      href={`/e-book/book-details/${book.id}`}
                      key={index}
                      className="flex flex-col gap-[12px] sm:w-full md:w-fit my-5 justify-between"
                    >
                      <div>
                        <BookImage size="sm" book={book} />
                      </div>
                      <p className="text-white text-sm font-medium max-w-[120px] ">
                        {book.title}
                      </p>
                      <div className="flex">
                        <p className="bg-[#7F237F] py-[4px] px-[8px] text-white rounded-full text-xs">
                          {book.genre}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href={"/e-book/e-book"}
                className="text-[#e12f3b] text-base font-medium hover:text-red-400 cursor-pointer"
              >
                See more
              </Link>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
}

export default Page;

"use client";

import React, {useEffect, useState} from "react";
import Image from "next/image";
import BOOK from "/public/assets/img/book-demo.svg";
import {fetchBooks} from "@/utils/fetchBooks";
import BookImage from "@/components/e-book-components/bookImage";
import Link from "next/link";
import BookCards from "@/components/bookCards";

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
  if (bestSellers.length > 0 && newlyReleased.length > 0) {
    console.log(bestSellers, newlyReleased);

    return (
      <div className="bg-[url('/assets/img/bg.png')] bg-no-repeat bg-cover flex justify-center">
        <div className="w-fit md:p-5 flex items-center justify-center self-center ">
          <div className="flex justify-center py-[24px] flex-col items-center md:gap-[32px] px-[10px] md:px-[0]">
            {/* Carousel */}
            <div className="bg-[#393737] px-6 md:px-12 py-4 md:py-6 w-full rounded-[16px] text-white text-2xl mx-5 md:mx-12 font-bold md:mb-0 mb-5">
              <p className="text-white md:text-[32px] font-bold text-[24px]  md:py-2">
                Top Seller
              </p>

              <BookCards books={bestSellers} />

              {/* </div> */}
            </div>
            {/* Best Seller Section */}
            <div className="bg-[#393737] px-6 md:px-12 py-4 md:py-6 w-full rounded-[16px] text-white text-2xl mx-5 md:mx-12 font-bold md:mb-0 mb-5">
              <p className="text-white md:text-[32px] font-bold text-[24px]  md:py-2">
                Best Seller
              </p>

              <BookCards books={bestSellers} />
              <Link
                href={"/e-book/e-book"}
                className="text-[#e12f3b] text-base font-medium hover:text-red-400 cursor-pointer"
              >
                See more
              </Link>
              {/* </div> */}
            </div>

            {/* Newly Released Section */}
            <div className="bg-[#393737] px-6 md:px-12 py-4 md:py-6 w-full rounded-[16px] text-white text-2xl mx-5 md:mx-12 font-bold md:mb-5">
              <p className="text-white md:text-[32px] font-bold text-[24px] md:py-2">
                Newly Released
              </p>

              <BookCards books={newlyReleased} />
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
    return <div className="text-white text-xl font-bold">Loading...</div>;
  }
}

export default Page;

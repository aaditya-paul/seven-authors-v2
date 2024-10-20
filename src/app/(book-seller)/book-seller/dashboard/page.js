"use client";

import Image from "next/image";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {fetchBooks} from "@/utils/fetchBooks";
import SALES from "/public/assets/icon/sales.svg";
import MONEY from "/public/assets/icon/money.svg";
import EBOOKRED from "/public/assets/icon/e-book-red.svg";
import BOOK from "/public/assets/img/book-demo.svg";

function Page() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.AdminRedux.user);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const data = await fetchBooks(); // Fetch all books
          const userBooks = data.filter((book) => book.authorUID === user.uid); // Filter books created by the user
          setBooks(userBooks);
        } catch (error) {
          console.error(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData(); // Fetch books
    }
  }, [user]);

  if (loading) {
    return <div className="text-white text-xl font-bold">Loading...</div>;
  }

  // Calculate the total sales, total income, and total ebook sales
  const totalSales = books.reduce((acc, book) => acc + book.totalSales, 0);
  const totalIncome = books.reduce(
    (acc, book) => acc + book.totalSales * book.price,
    0
  );
  const totalEbooksSold = books.length; // Assuming each book represents 1 ebook sold

  return (
    <div className="flex bg-[#292929] text-white">
      <div className="flex flex-col w-full">
        <div className="flex p-[32px]">
          <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-[32px]">
            {/* Sales data */}
            <div className="flex flex-col gap-[24px]">
              <p className="text-[16px] font-medium">Insights</p>
              <div className="flex w-full flex-col gap-[16px]">
                <div className="flex bg-[#222222] py-[16px] rounded-[8px] w-full gap-[64px] items-end px-[32px]">
                  <Image width={32} height={32} src={SALES} alt="Total Sales" />
                  <p className="text-base font-normal w-[130px]">Total Sales</p>
                  <p className="text-2xl font-normal">{totalSales}</p>
                </div>

                <div className="flex bg-[#222222] py-[16px] rounded-[8px] w-full gap-[64px] items-end px-[32px]">
                  <Image
                    width={32}
                    height={32}
                    src={MONEY}
                    alt="Total Income"
                  />
                  <p className="text-base font-normal w-[130px]">
                    Total Income
                  </p>
                  <p className="text-2xl font-normal">${totalIncome}</p>
                </div>

                <div className="flex bg-[#222222] py-[16px] rounded-[8px] w-full gap-[64px] items-end px-[32px]">
                  <Image
                    width={32}
                    height={32}
                    src={EBOOKRED}
                    alt="E-book Sold"
                  />
                  <p className="text-base font-normal w-[130px]">
                    E-books Sold
                  </p>
                  <p className="text-2xl font-normal">{totalEbooksSold}</p>
                </div>
              </div>
            </div>

            {/* Top Sellers */}
            <div className="flex flex-col gap-[24px]">
              <p className="text-[16px] font-medium">Top Sellers</p>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-[24px] h-[200px]">
                {books.slice(0, 2).map((book) => (
                  <div
                    key={book.id}
                    className="flex bg-[#222222] rounded-[8px] p-[16px] h-[200px] overflow-y-hidden gap-[16px]"
                  >
                    <Image
                      width={120}
                      height={180}
                      className="max-w-[120px] h-[180px] object-cover rounded-lg"
                      src={BOOK}
                      alt="Book Cover"
                    />
                    <div className="flex flex-col justify-between text-[12px]">
                      <p className="text-[#e12f3b]">
                        Total Sold: {book.totalSales}
                      </p>
                      <p>Total Views: {book.views}</p>
                      <p>{book.title}</p>
                      <p>Price: ${book.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex bg-orange-700 w-full h-[150px] rounded-[8px] justify-center items-center">
                Ads
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

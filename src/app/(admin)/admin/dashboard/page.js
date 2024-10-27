"use client";

import Image from "next/image";
import React, {useEffect, useState} from "react";
import BOOK from "/public/assets/img/book-demo.svg";
import SALES from "/public/assets/icon/sales.svg";
import MONEY from "/public/assets/icon/money.svg";
import EBOOKRED from "/public/assets/icon/e-book-red.svg";
import {fetchBooks} from "@/utils/fetchBooks";

import Graph from "@/components/graph";

function Page() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalSales, setTotalSales] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [topSellers, setTopSellers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBooks();
        setBooks(data);

        // Calculate total sales and total income
        const totalSales = data.reduce((acc, book) => acc + book.totalSales, 0);
        const totalIncome = data.reduce(
          (acc, book) => acc + book.totalSales * book.price,
          0
        );

        setTotalSales(totalSales);
        setTotalIncome(totalIncome);

        // Sort books by sales to determine top sellers
        const sortedBooks = [...data].sort(
          (a, b) => b.totalSales - a.totalSales
        );
        setTopSellers(sortedBooks.slice(0, 2)); // Get top 2 sellers
      } catch (error) {
        console.error("Error fetching books:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-white text-xl font-bold">Loading...</div>;
  }

  return (
    <div className="flex bg-[#292929] text-white">
      <div className="flex flex-col w-full">
        {/* Main content */}
        <div className="flex p-[32px]">
          <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-[32px]">
            {/* Sales Data */}
            <div className="flex flex-col gap-[24px]">
              <p className="text-[16px] font-medium">Insights</p>
              <div className="flex w-full flex-col gap-[16px]">
                <div className="flex bg-[#222222] py-[16px] rounded-[8px] w-full gap-[64px] items-end px-[32px]">
                  <Image width={32} height={32} src={SALES} alt="Sales Icon" />
                  <p className="text-base font-normal w-[130px]">Total Sales</p>
                  <p className="text-2xl font-normal">{totalSales}</p>
                </div>

                <div className="flex bg-[#222222] py-[16px] rounded-[8px] w-full gap-[64px] items-end px-[32px]">
                  <Image width={32} height={32} src={MONEY} alt="Money Icon" />
                  <p className="text-base font-normal w-[130px]">
                    Total Income
                  </p>
                  <p className="text-2xl font-normal">{totalIncome}</p>
                </div>

                <div className="flex bg-[#222222] py-[16px] rounded-[8px] w-full gap-[64px] items-end px-[32px]">
                  <Image
                    width={32}
                    height={32}
                    src={EBOOKRED}
                    alt="E-Book Icon"
                  />
                  <p className="text-base font-normal w-[130px]">E-book Sold</p>
                  <p className="text-2xl font-normal">{totalSales}</p>
                </div>

                <div className="flex bg-[#222222] py-[16px] rounded-[8px] w-full gap-[64px] items-end px-[32px]">
                  <Image
                    width={32}
                    height={32}
                    src={SALES}
                    alt="Audio Book Icon"
                  />
                  <p className="text-base font-normal w-[130px]">Audio Book</p>
                  <p className="text-2xl font-normal">N/A</p>
                </div>
              </div>
            </div>

            {/* Top Sellers */}
            <div className="flex flex-col gap-[24px]">
              <p className="text-[16px] font-medium">Top Sellers</p>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-[24px] h-[200px]">
                {topSellers.map((book, index) => (
                  <div
                    key={index}
                    className="flex bg-[#222222] rounded-[8px] p-[16px] h-[200px] overflow-y-hidden gap-[16px]"
                  >
                    <Image
                      width={120}
                      height={180}
                      className="max-w-[120px] h-[180px] object-cover rounded-lg"
                      src={BOOK} // Placeholder image
                      alt={book.title}
                    />
                    <div className="flex flex-col justify-between text-[12px]">
                      <p className="text-[#e12f3b]">
                        Total Sold: {book.totalSales}
                      </p>
                      <p>Total Views: {book.totalSales || "N/A"}</p>
                      <p>{book.title}</p>
                      <p>Price: {book.price}</p>
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
        <Graph /> {/*  //added */}
        {/* <div className="flex flex-col gap-[24px]">
          <p className="text-[16px] font-medium">Bought Books</p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-600">
              <thead>
                <tr>
                  <th className="border border-gray-600 p-4">Book ID</th>
                  <th className="border border-gray-600 p-4">Book Title</th>
                  <th className="border border-gray-600 p-4">User ID</th>
                  <th className="border border-gray-600 p-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {boughtBooks.map((book, index) => (
                  <tr key={index} className="hover:bg-gray-700">
                    <td className="border border-gray-600 p-4">
                      {book.bookId}
                    </td>
                    <td className="border border-gray-600 p-4">{book.title}</td>
                    <td className="border border-gray-600 p-4">{book.uid}</td>
                    <td className="border border-gray-600 p-4">
                      {new Date(book.date).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Page;

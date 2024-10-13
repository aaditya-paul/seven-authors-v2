import Image from "next/image";
import React from "react";
import BOOK from "/public/assets/img/book-demo.svg";

function Page() {
  return (
    <div>
      <div className=" flex flex-col gap-4 md:flex-row justify-evenly m-5 md:m-12">
        <div className=" basis-1/3 flex-col gap-5">
          <div className=" text-xl text-white font-bold">Insights</div>
          <div className=" ">
            <div className=" px-4 py-6 bg-navBarBGPrimary my-2 rounded-lg text-white text-sm">
              Total Sales: 24
            </div>
            <div className=" px-4 py-6 bg-navBarBGPrimary my-2 rounded-lg text-white text-sm">
              Total Earning: 24,000
            </div>
            <div className=" px-4 py-6 bg-navBarBGPrimary my-2 rounded-lg text-white text-sm">
              E-Book Sales: 20
            </div>
            <div className=" px-4 py-6 bg-navBarBGPrimary my-2 rounded-lg text-white text-sm">
              Audio Sales: 4
            </div>
          </div>
        </div>

        <div className="">
          <div className=" text-xl text-white font-bold">Top Seller</div>
          <div className=" flex flex-col lg:flex-row gap-4 w-full overflow-x-scroll no-scrollbar">
            <div className=" bg-navBarBGPrimary p-4 flex gap-4 my-2 rounded-xl">
              <Image src={BOOK} />
              <div className="flex flex-col gap-1 text-white text-sm">
                <div className=" text-red-700 text-lg">10 Sold</div>
                <div>Total Views: 10</div>
                <div>The Martian, Mars</div>
                <div>Price: 1000</div>
              </div>
            </div>
            <div className=" bg-navBarBGPrimary p-4 flex gap-4 my-2 rounded-xl">
              <Image src={BOOK} />
              <div className="flex flex-col gap-1 text-white text-sm ">
                <div className=" text-red-700 text-lg">10 Sold</div>
                <div>Total Views: 10</div>
                <div>The Martian, Mars</div>
                <div>Price: 1000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

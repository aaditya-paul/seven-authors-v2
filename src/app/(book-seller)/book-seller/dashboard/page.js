import Image from "next/image";
import React from "react";
import BOOK from "/public/assets/img/book-demo.svg";
import SALES from "/public/assets/icon/sales.svg";
import MONEY from "/public/assets/icon/money.svg";
import EBOOKRED from "/public/assets/icon/e-book-red.svg";
import Graph from "@/components/graph";

function Page() {
  return (
    <div class="flex bg-[#292929] text-white">
      <div class="flex flex-col w-full">
        {/* <!-- main content  --> */}

        <div class="flex p-[32px]  ">
          <div class="grid lg:grid-cols-2 grid-cols-1 w-full gap-[32px]">
            {/* <!-- sales data  --> */}
            <div class="flex flex-col gap-[24px]">
              <p class="text-[16px] font-medium">Insights</p>
              <div class="flex w-full flex-col gap-[16px]">
                <div class="flex bg-[#222222] py-[16px] rounded-[8px] w-full gap-[64px] items-end px-[32px]">
                  <Image width={32} height={32} src={SALES} alt="" />
                  <p class="text-base font-normal w-[130px]">Total Sales</p>
                  <p class="text-2xl font-normal">24</p>
                </div>

                <div class="flex bg-[#222222] py-[16px] rounded-[8px] w-full gap-[64px] items-end px-[32px]">
                  <Image width={32} height={32} src={MONEY} alt="" />
                  <p class="text-base font-normal w-[130px]">Total income</p>
                  <p class="text-2xl font-normal">24</p>
                </div>
                <div class="flex bg-[#222222] py-[16px] rounded-[8px] w-full gap-[64px] items-end px-[32px]">
                  <Image width={32} height={32} src={EBOOKRED} alt="" />
                  <p class="text-base font-normal w-[130px]">E-book sold</p>
                  <p class="text-2xl font-normal">24</p>
                </div>
                <div class="flex bg-[#222222] py-[16px] rounded-[8px] w-full gap-[64px] items-end px-[32px]">
                  <Image width={32} height={32} src={SALES} alt="" />
                  <p class="text-base font-normal w-[130px]">Audio Book</p>
                  <p class="text-2xl font-normal">24</p>
                </div>
              </div>
            </div>

            {/* <!-- top seller  --> */}
            <div class="flex flex-col gap-[24px]  ">
              <p class="text-[16px] font-medium">Top sellers</p>
              <div class="grid md:grid-cols-2 grid-cols-1 gap-[24px] h-[200px] ">
                <div class="flex bg-[#222222] rounded-[8px] p-[16px] h-[200px]  overflow-y-hidden gap-[16px]">
                  <Image
                    width={32}
                    height={32}
                    src={SALES}
                    alt=""
                    class="w-[75px]"
                  />
                  <div class="flex flex-col justify-between text-[12px]">
                    <p class="text-[#e12f3b]">Total Sold: 12</p>
                    <p> Total views:13</p>
                    <p>rthe martin</p>
                    <p>Price: 2000</p>
                  </div>
                </div>
                <div class="flex bg-[#222222] rounded-[8px] p-[16px] h-[200px]  overflow-y-hidden gap-[16px]">
                  <Image
                    width={120}
                    height={180}
                    className=" max-w-[120px] h-[180px]  object-cover rounded-lg"
                    src={BOOK}
                    alt=""
                    // class="w-[75px]"
                  />
                  <div class="flex flex-col justify-between text-[12px]">
                    <p class="text-[#e12f3b]">Total Sold: 12</p>
                    <p> Total views:13</p>
                    <p>rthe martin</p>
                    <p>Price: 2000</p>
                  </div>
                </div>
              </div>
              <div class="flex bg-orange-700 w-full h-[150px] rounded-[8px] justify-center items-center">
                Ads
              </div>
            </div>
          </div>
        </div>
        <Graph />
      </div>
    </div>
  );
}

export default Page;

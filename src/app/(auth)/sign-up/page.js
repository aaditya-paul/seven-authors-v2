import Image from "next/image";
import React from "react";
import Logo from "/public/assets/img/logo.svg";

function Page() {
  return (
    <div>
      <div class="flex md:justify-end justify-center md:bg-[url('./img/bg-image.png')] w-full bg-contain bg-no-repeat overflow-hidden">
        {/* <!-- right side div: white div --> */}
        <div class="flex flex-col bg-white md:w-1/3 w-full h-screen rounded-l-xl">
          <div class="mt-8 pl-10">
            <Image src={Logo} alt="img" />
          </div>
          <div class="w-full px-10 md:mt-20 mt-12 md:px-10">
            <h1>Create an Account</h1>
            <div class="flex items-center md:gap-2">
              <div class="flex justify-center items-center mt-8 md:mt-3">
                <div class="border-[2px] border-red-500 w-12 h-12 rounded-full flex justify-center items-center bg-red-500 text-white">
                  1
                </div>
                <div class="border-b-[2px] border-gray-400 w-20 md:w-32 border-b-red-500"></div>
                <div class="border-[2px] border-red-500 w-12 h-12 rounded-full flex justify-center items-center bg-white-500 text-red">
                  2
                </div>
                <div class="border-b-[2px] border-gray-400 w-20 md:w-32 border-b-red-500"></div>
                <div class="border-[2px] border-red-500 w-12 h-12 rounded-full flex justify-center items-center bg-white-500 text-red">
                  3
                </div>
              </div>
            </div>
            <p class="text-lg text-gray-600 mt-3 md:mt-8">Enter your deatils</p>
            <div class="flex flex-col gap-3 md:gap-6 mt-8 md:mt-3">
              <input
                class="border-[2px] border-gray-300 px-4 py-2 rounded-md"
                placeholder="Enter full name"
              />
              <input
                class="border-[2px] border-gray-300 px-4 py-2 rounded-md"
                placeholder="Enter email"
              />
              <input
                class="border-[2px] border-gray-300 px-4 py-2 rounded-md"
                placeholder="Enter phone no"
              />
            </div>
            <div class="mt-8">
              <button class="bg-red-600 px-10 py-2 text-white font-semibold w-full rounded-md">
                continue
              </button>
            </div>

            <div class="flex items-center gap-4 mt-8">
              <div class="border-b-[2px] border-gray-400 w-1/2"></div>
              <p>or</p>
              <div class="border-b-[2px] border-gray-400 w-1/2"></div>
            </div>

            <div class="flex gap-3 mt-8">
              <p>Already have a account</p>
              <a class="text-red-500 hover:cursor-pointer">Log in ?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

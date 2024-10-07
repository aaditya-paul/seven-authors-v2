import React from "react";
import Logo from "/public/assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
function Page() {
  return (
    <div class="flex md:justify-end justify-center md:bg-[url('/assets/img/bg-image.png')] bg-contain bg-no-repeat">
      {/* <!-- right side div: white div --> */}
      <div class="flex md:max-w-[55ch] w-full h-[100vh] justify-center ">
        <div class="flex flex-col bg-white w-full  rounded-l-xl justify-center items-start">
          <div class="mt-20 pl-10">
            <Image src={Logo} alt="img" />
          </div>
          <div class="w-full flex-1 p-[32px]  flex flex-col justify-center h-full items-start gap-[24px] ">
            <p class="text-lg">Log in</p>
            <div class="flex flex-col gap-6 mt-8 w-full">
              <input
                class="border-[2px] border-gray-300 px-4 py-2 rounded-md w-full focus:outline-red-600"
                placeholder="Enter email or user name"
              />
              <input
                class="border-[2px] border-gray-300 px-4 py-2 rounded-md w-full focus:outline-red-600"
                placeholder="Enter password"
              />
            </div>
            <p class="tag mt-2">Forgot password ?</p>
            <div class="flex w-full">
              <button class="bg-red-600 px-10 py-2 text-white font-semibold w-full rounded-md hover:bg-red-800">
                Login
              </button>
            </div>

            <div class="flex items-center gap-[16px]  w-full ">
              <div class="border-b-[2px] border-gray-400 w-1/2"></div>
              <p>or</p>
              <div class="border-b-[2px] border-gray-400 w-1/2"></div>
            </div>

            <div class="flex gap-3 ">
              <p>Create a New account</p>
              <Link
                href={"/sign-up"}
                class="text-red-500 hover:cursor-pointer hover:text-red-800"
              >
                Sign in ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

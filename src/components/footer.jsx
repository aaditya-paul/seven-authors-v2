import Link from "next/link";
import React from "react";
import RedLogo from "@/../public/assets/img/logo-red.svg";
import Image from "next/image";

function Footer() {
  return (
    <div class=" text-white flex bg-[#222222] justify-center">
      <div class="grid grid-cols-1 md:grid-cols-4 md:w-[120ch] p-[24px] gap-[32px] ">
        <div class="flex flex-col gap-[16px]">
          <Link href="/">
            <Image src={RedLogo} alt="logo"></Image>
          </Link>
          <p class=" text-sm ">
            In a post-apocalyptic world where books have been banned and burned,
            a young woman named Anya discovers a hidden library.
          </p>
        </div>
        <div class="flex flex-col gap-[16px]">
          <p class="font-bold text-[16px]">Service</p>
          <div class="flex text-[12px]  flex-col gap-[12px]">
            <Link href={"/"} class="hover:text-[#E12F3B] hover:underline">
              Home
            </Link>
            <Link href={"/"} class="hover:text-[#E12F3B] hover:underline">
              E-book
            </Link>
            <Link href={"/"} class="hover:text-[#E12F3B] hover:underline">
              Audio book
            </Link>
            <Link href={"/"} class="hover:text-[#E12F3B] hover:underline">
              partner
            </Link>
          </div>
        </div>
        <div class="flex flex-col gap-[16px]">
          <p class="font-bold text-[16px]">.</p>
          <div class="flex text-[12px]  flex-col gap-[12px]">
            <Link href={"/"} class="hover:text-[#E12F3B] hover:underline">
              Terms & Service
            </Link>
            <Link href={"/"} class="hover:text-[#E12F3B] hover:underline">
              Privacy Policy
            </Link>
            <Link href={"/"} class="hover:text-[#E12F3B] hover:underline">
              Return Policy
            </Link>
          </div>
        </div>
        <div class="flex flex-col gap-[16px]">
          <p class="font-bold text-[16px]">Comapny</p>
          <div class="flex text-[12px]  flex-col gap-[12px]">
            <Link href={"/"} class="hover:text-[#E12F3B] hover:underline">
              About Us
            </Link>
            <Link href={"/"} class="hover:text-[#E12F3B] hover:underline">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

"use client";
import NavBar from "@/components/navBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RedLogo from "@/../public/assets/img/logo-red.svg";

import faqimg from "@/../public/assets/img/faqImg.png";

import wavyBg from "/public/assets/wavybg.svg";

import BookSLider from "@/components/BookSLider";
import Faq from "@/components/FaqQuestions";
import FaqQuestions from "@/components/FaqQuestions";
import { faQ } from "@fortawesome/free-solid-svg-icons";

function Page() {
  const faqArray = [
    {
      title: "Tailwind faq section with border layout?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat labore accusamus dolorum similique eveniet natus numquam vitae eos dignissimos?",
    },
    {
      title: "Tailwind faq section with border layout?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat labore accusamus dolorum similique eveniet natus numquam vitae eos dignissimos?",
    },
    {
      title: "Tailwind faq section with border layout?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat labore accusamus dolorum similique eveniet natus numquam vitae eos dignissimos?",
    },
    {
      title: "Tailwind faq section with border layout?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat labore accusamus dolorum similique eveniet natus numquam vitae eos dignissimos?",
    },
    {
      title: "Tailwind faq section with border layout?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat labore accusamus dolorum similique eveniet natus numquam vitae eos dignissimos?",
    },
  ];
  return (
    <div className=" overflow-hidden">
      <NavBar />
      <div className=" w-full h-[100vh] bg-red-300 bg-[url('../../public/assets/heroHome.png')] bg-no-repeat bg-cover">
        <div className=" flex  h-full ">
          <div className="w-fit h-fit  md:w-[30vw]  absolute bottom-10 m-4 md:top-[50vh] md:left-[30%] md:-translate-y-1/2  md:-translate-x-1/2  flex flex-col gap-4 p-8 md:p-16 bg-[#292929] rounded-lg text-white italic">
            <p className=" text-2xl">
              Immerse <span className=" text-red-500"> Yourself </span> in
              <span className=" text-red-500"> Endless </span>
              Stories
            </p>

            <p className=" text-xl">
              Discover a world of thrilling adventures, captivating characters,
              and thought-provoking narratives
            </p>

            <p className=" text-xl">Sign In to start your literary journey.</p>

            <button className=" px-8 bg-[#E12F3B] py-2 rounded-lg w-fit">
              <Link href="/login" className=" text-center align-text-bottom">
                Sign In
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#222222]">
        <div className="bg-wavyBG p-3 bg-repeat text-white flex flex-col justify-center items-center">
          <div className="bg-[#222222] lg:flex justify-between lg:mx-40 mt-10 lg:px-10 px-5  gap-10 lg:py-5 py-5  rounded-lg">
            <BookSLider />
          </div>
          <div className="bg-[#222222] mx-40 mt-10 px-10 py-5 rounded-lg">
            <h1 className="text-2xl my-4">Frequently asked questions</h1>
            <div className="flex justify-center items-center gap-10">
              <div className="flex flex-col gap-4">
                {faqArray.map((faq, index) => {
                  return (
                    <>
                      <FaqQuestions ques={faq} index={index} />
                    </>
                  );
                })}
              </div>
              <div className="image hidden md:flex">
                <Image src={faqimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" text-white flex bg-[#222222] justify-center">
        <div class="grid grid-cols-1 md:grid-cols-4 md:w-[120ch] p-[24px] gap-[32px] ">
          <div class="flex flex-col gap-[16px]">
            <Link href="/">
              <Image src={RedLogo} alt="logo"></Image>
            </Link>
            <p class=" text-sm ">
              In a post-apocalyptic world where books have been banned and
              burned, a young woman named Anya discovers a hidden library.
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
    </div>
  );
}

export default Page;

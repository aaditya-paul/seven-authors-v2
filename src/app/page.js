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
import Footer from "@/components/footer";

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
    <NavBar>
      <div className=" overflow-hidden bg-no-repeat">
        <div className=" w-full h-[100vh] bg-red-300 bg-[url('../../public/assets/heroHome.png')] bg-center bg-no-repeat bg-cover   flex  justify-center items-center">
          <div className=" flex  h-full md:w-[120ch] justify-start items-center px-[24px] md:px-[0px]">
            <div className="w-fit h-fit md:w-[30vw]    lg:flex justify-between  lg:px-10 px-5  lg:py-12 py-5   flex flex-col gap-4 p-8 md:p-16 bg-[#292929] rounded-lg text-white ">
              <p className=" text-2xl">
                Immerse <span className=" text-red-500"> Yourself </span> in
                <span className=" text-red-500"> Endless </span>
                Stories
              </p>

              <p className=" text-xl">
                Discover a world of thrilling adventures, captivating
                characters, and thought-provoking narratives
              </p>

              <p className=" text-xl">
                Sign In to start your literary journey.
              </p>

              <Link
                href={"/e-book"}
                className=" px-8 active:scale-95 transition-all ease-linear bg-[#E12F3B] py-2 rounded-lg w-fit"
              >
                <div className=" text-center align-text-bottom">
                  Get Started
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#222222]">
          <div className="bg-wavyBG  p-3  bg-repeat text-white flex flex-col justify-center items-center">
            <div className="bg-[#222222] md:w-[120ch] lg:flex justify-between lg:mx-40 mt-10 lg:px-10 px-5  justi lg:py-5 py-5  rounded-lg">
              <BookSLider />
            </div>
            <div className="bg-[#222222] mx-40 mt-10 px-10 py-5 rounded-lg w-[80%]">
              <h1 className="text-2xl my-4">Frequently asked questions</h1>
              <div className="flex justify-center items-center gap-10">
                <div className="flex flex-col gap-4 ">
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
      </div>
    </NavBar>
  );
}

export default Page;

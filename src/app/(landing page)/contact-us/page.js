import Image from "next/image";
import React from "react";
import Logo from "/public/assets/img/logo-white.svg";
import HeroImg from "/public/assets/img/Leonardo_Phoenix_Crea.png";
import Link from "next/link";
import RedLogo from "/public/assets/img/logo-red.svg";
import NavBar from "@/components/navBar";
function Page() {
  return (
    <div className="bg-[url('/assets/img/bg.png')]">
      <NavBar />
      <div
        class="flex justify-center text-white items-center md:h-screen bg-[url('/public/assets/img/contact-bg.png')]  bg-no-repeat bg-cover "
        // style="background-image: url(./img/contact-bg.png)"
      >
        <div class="flex md:w-[120ch] bg-[#292929] rounded-[16px] p-[24px] h-fit flex-col gap-[24px] pt-[128px] md:pt-[24px]">
          <h2 class="text-[24px] font-bold">Contact Us</h2>
          <div class="grid md:grid-cols-2 grid-cols-1 gap-[16px]">
            <div class="flex flex-col gap-[16px]">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter name"
                class="p-4 rounded-lg focus:outline-none bg-transparent ring-2 ring-[#393737]"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Email"
                class="p-4 rounded-lg focus:outline-none bg-transparent ring-2 ring-[#393737]"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Address"
                class="p-4 rounded-lg focus:outline-none bg-transparent ring-2 ring-[#393737]"
              />
              <textarea
                placeholder="Enter Message"
                rows="4"
                class="p-4 rounded-lg focus:outline-none bg-transparent ring-2 ring-[#393737]"
              ></textarea>
              <button
                type="submit"
                class="bg-[#E12F3B] text-white w-full py-2 rounded-lg hover:bg-red-700"
              >
                Send Message
              </button>
            </div>
            <div class="flex flex-col h-full gap-[12px]">
              <Image src={HeroImg} alt="" class="bg-cover" />
            </div>
          </div>
          <div class="grid md:grid-cols-2 grid-cols-1">
            <div class="flex flex-col gap-[8px]">
              <p>Address: 123 Main Street, City, State, Country</p>
              <p class="">Phone: +1 (123) 456-7890</p>
            </div>
            <div class="flex flex-col gap-[8px]">
              <Link href="mail-to" class="hover:text-[#E12F3B]">
                Email: info@yourwebsite.com
              </Link>
              <div class=" flex justify-between flex-col md:flex-row">
                <Link href={"/"} class="flex gap-[4px]">
                  <i class="fa-brands fa-facebook text-2xl text-[#E12F3B] "></i>
                  <p class="text-whitte text-xl hover:text-[#E12F3B]">
                    facebook
                  </p>
                </Link>
                <Link href={"/"} class="flex gap-[4px]">
                  <i class="fa-brands fa-instagram text-2xl text-[#E12F3B] "></i>
                  <p class="text-whitte text-xl hover:text-[#E12F3B]">
                    instagram
                  </p>
                </Link>
                <Link href={"/"} class="flex gap-[4px]">
                  <i class="fa-brands fa-linkedin text-2xl text-[#E12F3B] "></i>
                  <p class="text-whitte text-xl hover:text-[#E12F3B]">
                    Linkedin
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}

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

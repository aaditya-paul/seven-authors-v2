"use client";

import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/img/logo-white.svg";
import {usePathname} from "next/navigation";
import Link from "next/link";

function NavBar() {
  const pathName = usePathname();

  const routes = [
    {
      name: "Home",
      link: "#",
      path: "/",
    },
    {
      name: "Library",
      link: "#",
      path: "/library",
    },
    {
      name: "Partner",
      link: "#",
      path: "/partner",
    },
    {
      name: "Contact US",
      link: "#",
      path: "/contact-us",
    },
  ];

  // console.log(pathName);

  return (
    <div className=" flex justify-center w-full">
      <div class="flex items-center bg-[#393737]/80 md:w-[120ch] w-full p-[16px] rounded-[16px] justify-between fixed top-[24px] backdrop-blur-md">
        <div class="flex">
          <div className=" ">
            <Image src={Logo} alt="logo"></Image>
          </div>
        </div>
        <ul class="md:flex gap-[16px] text-white items-center hidden cursor-pointer font-regular">
          {routes.map((route) => {
            return (
              <Link
                href={route.path}
                key={route.name}
                class={`hover:text-[#e12f3b] hover:font-bold ${
                  pathName == route.path ? "text-red-500" : ""
                } `}
              >
                {route.name}
              </Link>
            );
          })}
        </ul>
        <button class="cursor-pointer text-white font-bold bg-[#e12f3b] py-[8px] px-[16px] rounded-[4px] hover:bg-red-800">
          <Link href="/login">Login</Link>
        </button>
      </div>
    </div>
  );
}

export default NavBar;

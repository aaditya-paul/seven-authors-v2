"use client";

import React from "react";
import Logo from "/public/assets/logo.svg";
import Home from "/public/assets/home.js";
import Book from "/public/assets/e-bbok.js";
import Person from "/public/assets/person.js";
import Audio from "/public/assets/audio.js";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
function NavBar({children}) {
  const routes = [
    {
      name: "Dashboard",
      path: "/e-book/dashboard",
      icon: Home,
      active: false,
    },
    {
      name: "E-book",
      path: "/e-book/e-book",
      icon: Book,
      active: false,
    },
    {
      name: "Audio Book",
      path: "/e-book/audio-book",
      icon: Audio,
      active: false,
    },
    {
      name: "Book Mark",
      path: "/e-book/book-mark",
      icon: Person,
      active: true,
    },
    {
      name: "Explore",
      path: "/e-book/explore",
      icon: Person,
      active: false,
    },
    {
      name: "Profile",
      path: "/e-book/profile",
      icon: Person,
      active: false,
    },
    {
      name: "Parenter Plan",
      path: "/e-book/parenter-plan",
      icon: Person,
      active: false,
    },
  ];

  const router = useRouter();
  const pathName = usePathname();
  return (
    <>
      {/* sideBar */}
      <div className=" fixed z-30 flex flex-col w-full md:w-[18vw] h-[100vh] bg-navBarBGPrimary border-r border-white ">
        <div className="flex items-center justify-center my-6">
          <Image src={Logo} alt="logo" />
        </div>
        <div className=" flex flex-col  gap-6 justify-center  self-center w-[70%] my-12 ">
          {routes.map((route, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  router.push(route.path);
                }}
                className="flex items-center cursor-pointer gap-5 "
              >
                <div
                  className={` ${
                    route.path === pathName ? "block" : "hidden"
                  } w-12 h-8 bg-fontColorActive   absolute -left-11 rounded-lg`}
                ></div>
                <div className=" text-red-300 ">
                  <route.icon
                    className={` ${
                      route.path === pathName
                        ? "  stroke-fontColorActive"
                        : " stroke-white"
                    }`}
                  />
                </div>
                <div
                  className={`${
                    route.path === pathName
                      ? " text-fontColorActive"
                      : "text-white"
                  }`}
                >
                  {route.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Header */}
      <div className=" w-full h-[9vh] bg-navBarBGPrimary border-b border-white hidden md:block "></div>
      <div className=" absolute left-[18vw] bg-bgColor w-[82vw] h-[91vh]">
        <div>{children}</div>
      </div>
    </>
  );
}

export default NavBar;

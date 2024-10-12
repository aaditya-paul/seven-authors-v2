"use client";

import React, {useEffect, useState} from "react";
import Logo from "/public/assets/logo.svg";
import Home from "/public/assets/home.js";
import Book from "/public/assets/e-bbok.js";
import Person from "/public/assets/person.js";
import Audio from "/public/assets/audio.js";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
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

  const [toggle, setToggle] = useState(false);

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    setToggle(false);
  }, [pathName]);
  return (
    <>
      <div className="">
        {/* sideBar */}
        <div
          className={`fixed flex flex-col w-[100vw] ${
            !toggle ? " -translate-x-full" : "translate-x-0"
          } md:translate-x-0 md:w-[18vw] h-[100vh] bg-navBarBGPrimary border-r border-white z-20 ease-linear transition-all  `}
        >
          <div className="flex items-center md:justify-center justify-between px-12 my-6">
            <Link href="/">
              <Image src={Logo} alt="logo" />
            </Link>
            <div
              onClick={() => {
                setToggle(!toggle);
              }}
              className=" text-white flex md:hidden"
            >
              X
            </div>
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
        <div className="  w-full h-[60px] md:h-[9vh] bg-navBarBGPrimary border-b border-white">
          <div className=" flex md:hidden justify-between items-center h-full px-5">
            <div className=" text-white">
              <Link href={"/"}>
                <Image width={84} height={84} src={Logo} alt="logo" />
              </Link>
            </div>
            <div
              onClick={() => {
                setToggle(!toggle);
              }}
              className=" text-white"
            >
              ---
            </div>
          </div>
        </div>
        <div className="  absolute left-0 md:left-[18vw] bg-bgColor w-[100vw] md:w-[82vw] md:h-[91vh] h-[100vh]">
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

"use client";

import React, {useEffect, useState} from "react";

import Logo from "/public/assets/logo.svg";
import Home from "/public/assets/home.js";
import Book from "/public/assets/e-bbok.js";
import Person from "/public/assets/person.js";
import Audio from "/public/assets/audio.js";
import Search from "/public/assets/Search.js";
import BookMarkLogo from "/public/assets/BookMark.js";
import logoutlogo from "/public/assets/icon/logout.png";

import RedHomeLogo from "/public/assets/RedHomeLogo.js";

import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import {doc, getDoc, getDocs} from "@firebase/firestore";
import {onAuthStateChanged, signOut} from "@firebase/auth";
import {auth, db} from "../../../firebase";
import {useDispatch} from "react-redux";
import {setUID, setUserRedux} from "@/lib/redux/features/admin";
function NavBar({children}) {
  const routes = [
    {
      name: "Dashboard",
      path: "/e-book/dashboard",
      icon: Home,
      redIcon: RedHomeLogo,
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
      icon: BookMarkLogo,
      active: true,
    },
    {
      name: "Profile",
      path: "/e-book/profile",
      icon: Person,
      active: false,
    },
    {
      name: "Explore",
      path: "/e-book/explore",
      icon: Search,
      active: false,
    },
    {
      name: "Parenter Plan",
      path: "/e-book/partner-plan",
      icon: Person,
      active: false,
    },
  ];

  const [toggle, setToggle] = useState(false);

  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    setToggle(false);
  }, [pathName]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      } else {
        // do something
        dispatch(setUID(user.uid));
        console.log(user.uid);

        getDoc(doc(db, "users", user.uid)).then((doc) => {
          if (doc.exists()) {
            console.log(doc.data());

            dispatch(setUserRedux(doc.data()));
          }
        });
      }
    });
  }, [router, dispatch]);

  return (
    <>
      <div className=" z-[100]">
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
          <div className=" flex flex-col  gap-6 justify-center  self-center bg-navBarBGPrimary w-[70%] my-12 ">
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
          <div className="flex flex-col gap-6 h-[30%] px-16 py-6 md:px-10 justify-end items-stretch text-white">
            <div
              onClick={() => {
                signOut(auth).then(() => {
                  router.replace("/");
                });
              }}
              className="flex items-center cursor-pointer gap-5 "
            >
              <div className=" text-red-300 ">
                <Image
                  src={logoutlogo}
                  alt=""
                  width={20}
                  height={20}
                  className="invert"
                />
              </div>
              <div className={`text-white`}>LogOut</div>
            </div>
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
              className="flex flex-col gap-1"
            >
              <div className="w-5 h-5 flex flex-col gap-1 justify-center items-center">
                <div className="w-5 h-[2px] bg-white"></div>
                <div className="w-5 h-[2px] bg-white"></div>
                <div className="w-5 h-[2px] bg-white"></div>
              </div>
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

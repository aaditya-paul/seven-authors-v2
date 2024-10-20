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
import {onAuthStateChanged, signOut} from "@firebase/auth";
import {auth, db} from "../../../firebase";
import {useDispatch, useSelector} from "react-redux";
import {setUID, setUserRedux} from "@/lib/redux/features/admin";
import {doc, getDoc} from "@firebase/firestore";
import Loader from "../LoaderComponent/Loader";

function NavBar({children}) {
  const routes = [
    {
      name: "Dashboard",
      path: "/book-seller/dashboard",
      icon: Home,
      active: false,
    },
    {
      name: "E-book",
      path: "/book-seller/e-book",
      icon: Book,
      active: false,
    },
    {
      name: "Audio Book",
      path: "/book-seller/audio-book",
      icon: Audio,
      active: false,
    },
    {
      name: "Profile",
      path: "/book-seller/profile",
      icon: Person,
      active: false,
    },
  ];

  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state to manage asynchronous operations

  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.AdminRedux.user.name);
  const [isBookSeller, setIsBookSeller] = useState(null); // Default to false if the field is not present

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login"); // Redirect to login if not authenticated
      } else {
        dispatch(setUID(user.uid));

        getDoc(doc(db, "users", user.uid)).then((doc) => {
          if (doc.exists()) {
            const userData = doc.data();
            dispatch(setUserRedux(userData));

            // If the admin field is missing, set it to false
            if (doc.data().bookSeller === undefined) {
              setIsBookSeller(false); // Default to false if the field is not present
            } else {
              setIsBookSeller(doc.data().bookSeller);
            }
          }
          setLoading(false); // Stop loading after fetching user data
        });
      }
    });
  }, [router, dispatch]);

  useEffect(() => {
    console.log(isBookSeller);

    if (!loading && isBookSeller === false) {
      router.push("/"); // Redirect non-admin users after loading completes
    }
  }, [isBookSeller, loading, router]);

  useEffect(() => {
    setToggle(false);
  }, [pathName]);

  if (loading) {
    return (
      <div className=" w-full h-[100vh] bg-navBarBGPrimary flex justify-center items-center">
        <Loader />
      </div>
    ); // Render a loading indicator while fetching user data
  }

  return (
    <>
      <div className="">
        {/* sideBar */}
        <div
          className={`fixed flex flex-col w-[100vw] ${
            !toggle ? "-translate-x-full" : "translate-x-0"
          } md:translate-x-0 md:w-[18vw] h-[100vh] bg-navBarBGPrimary border-r border-white z-20 ease-linear transition-all`}
        >
          <div className="flex items-center md:justify-center justify-between px-12 my-6">
            <Link href="/">
              <Image src={Logo} alt="logo" />
            </Link>
            <div
              onClick={() => {
                setToggle(!toggle);
              }}
              className="text-white flex md:hidden"
            >
              X
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-center self-center w-[70%] my-12">
            {routes.map((route, index) => (
              <div
                key={index}
                onClick={() => router.push(route.path)}
                className="flex items-center cursor-pointer gap-5"
              >
                <div
                  className={`${
                    route.path === pathName ? "block" : "hidden"
                  } w-12 h-8 bg-fontColorActive absolute -left-11 rounded-lg`}
                ></div>
                <div className="text-red-300">
                  <route.icon
                    className={`${
                      route.path === pathName
                        ? "stroke-fontColorActive"
                        : "stroke-white"
                    }`}
                  />
                </div>
                <div
                  className={`${
                    route.path === pathName
                      ? "text-fontColorActive"
                      : "text-white"
                  }`}
                >
                  {route.name}
                </div>
              </div>
            ))}
          </div>
          {/* settings */}
          <div className="flex flex-col gap-4 h-[50%] px-16 md:p-6 justify-end items-stretch text-white">
            <div
              onClick={() => {
                router.push("/e-book/settings");
              }}
              className="flex items-center cursor-pointer gap-5"
            >
              <div className="text-red-300">
                <Home className="stroke-white" />
              </div>
              <div className="text-white">Settings</div>
            </div>
            <div
              onClick={() => {
                signOut(auth).then(() => {
                  router.replace("/");
                });
              }}
              className="flex items-center cursor-pointer gap-5"
            >
              <div className="text-red-300">
                <Home className="stroke-white" />
              </div>
              <div className="text-white">LogOut</div>
            </div>
          </div>
        </div>
        {/* Header */}
        <div className="w-full h-[60px] md:h-[9vh] bg-navBarBGPrimary border-b border-white">
          <div className="flex md:hidden justify-between items-center h-full px-5">
            <div className="text-white">
              <Link href={"/"}>
                <Image width={84} height={84} src={Logo} alt="logo" />
              </Link>
            </div>
            <div
              onClick={() => {
                setToggle(!toggle);
              }}
              className="text-white"
            >
              ---
            </div>
          </div>
          <div className="text-white text-xl font-sometype flex justify-end items-center h-full px-12">
            {name ? "Hi, " + name : "..."}
          </div>
        </div>
        <div className="absolute left-0 md:left-[18vw] bg-bgColor w-[100vw] md:w-[82vw] md:h-[91vh] h-[100vh]">
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

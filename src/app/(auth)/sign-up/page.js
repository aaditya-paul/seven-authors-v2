"use client";
import Image from "next/image";
import React from "react";
import Logo from "/public/assets/img/logo.svg";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import {auth, db} from "../../../../firebase";
import {doc, setDoc} from "@firebase/firestore";
import {useRouter, useSearchParams} from "next/navigation";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const router = useRouter();

  const HandleClick = () => {
    if (email === "" || password === "" || name === "") {
      alert("Please enter email, password and name");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (user) => {
          await setDoc(
            doc(db, "users", user.user.uid),
            {
              name: name,
              email: email,
              uid: user.user.uid,
              name: name,
              // TODO feature
              admin: false,
              bookSeller: false,
            },
            {merge: true}
          )
            .then(() => {
              console.log("User created");
              router.push(`/auth-redirect?uid=${user.user.uid}`);
            })
            .catch((error) => {
              alert(error.message);
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((user) => {
        setDoc(
          doc(db, "users", user.user.uid),
          {
            name: user.user.displayName,
            email: user.user.email,
            uid: user.user.uid,
            name: user.user.displayName,
            admin: false,
            pfp: user.user.photoURL,
            bookSeller: false,
          },
          {merge: true}
        )
          .then(() => {
            console.log("User created");
            router.push(`/auth-redirect?uid=${user.user.uid}`);
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div class="flex md:justify-end justify-center md:bg-[url('/assets/img/bg-image.png')] w-full bg-contain bg-no-repeat overflow-hidden">
        {/* <!-- right side div: white div --> */}
        <div className=" overflow-y-scroll md:w-1/3 w-full no-scrollbar">
          <div class="flex flex-col bg-white  h-screen rounded-l-xl">
            <div class="mt-8 pl-10 ">
              <Image src={Logo} alt="img" />
            </div>
            <div class="w-full  px-10 md:mt-20 mt-12 md:px-10">
              <h1>
                Create an <strong>User </strong> Account
              </h1>
              {/* <div class="flex items-center md:gap-2">
                <div class="flex justify-center items-center mt-8 md:mt-3">
                  <div class="border-[2px] border-red-500 w-12 h-12 rounded-full flex justify-center items-center bg-red-500 text-white">
                    1
                  </div>
                  <div class="border-b-[2px] border-gray-400 w-20 md:w-32 border-b-red-500"></div>
                  <div class="border-[2px] border-red-500 w-12 h-12 rounded-full flex justify-center items-center bg-white-500 text-red">
                    2
                  </div>
                  <div class="border-b-[2px] border-gray-400 w-20 md:w-32 border-b-red-500"></div>
                  <div class="border-[2px] border-red-500 w-12 h-12 rounded-full flex justify-center items-center bg-white-500 text-red">
                    3
                  </div>
                </div>
              </div> */}
              <p class="text-lg text-gray-600 mt-3 md:mt-8">
                Enter your deatils
              </p>
              <div class="flex flex-col gap-3 md:gap-6 mt-8 md:mt-3">
                <input
                  type="text"
                  class="border-[2px] border-gray-300 px-4 py-2 rounded-md"
                  placeholder="Enter full name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  class="border-[2px] border-gray-300 px-4 py-2 rounded-md"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
                <input
                  class="border-[2px] border-gray-300 px-4 py-2 rounded-md"
                  placeholder="Enter Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class=" flex flex-col gap-5 mt-8">
                <button
                  onClick={HandleClick}
                  class="bg-red-600 px-10 py-2 text-white font-semibold w-full rounded-md"
                >
                  continue
                </button>
                <button
                  className="flex cursor-pointer items-center hover:bg-gray-100 transition-all justify-center w-full px-4 py-2   rounded-lg border border-slate-400  "
                  onClick={handleGoogleSignIn}
                >
                  Sign in with
                  <span className="m-1 font-bold text-lg">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                </button>
              </div>

              <div class="flex items-center gap-4 mt-8">
                <div class="border-b-[2px] border-gray-400 w-1/2"></div>
                <p>or</p>
                <div class="border-b-[2px] border-gray-400 w-1/2"></div>
              </div>

              <div class="flex gap-3 mt-8 mb-5 md:mb-0">
                <p>Already have a account</p>
                <Link href={"/login"} class="text-red-500 hover:cursor-pointer">
                  Log in ?
                </Link>
              </div>
              <div class="flex gap-3 mt-1 mb-5 md:mb-0">
                <p>Want a Seller account ?</p>
                <Link
                  href={"/sign-up/seller"}
                  class="text-red-500 hover:cursor-pointer"
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

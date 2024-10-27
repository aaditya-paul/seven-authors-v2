"use client";

import React, {useEffect} from "react";
import Logo from "/public/assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "@firebase/auth";
import {auth, db} from "../../../../firebase";
import {useRouter} from "next/navigation";
import {doc, setDoc} from "@firebase/firestore";
function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push(`/auth-redirect?uid=${user.uid}`);
      }
    });
  }, [router]);

  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const HandleClick = () => {
    if (email === "" || password === "") {
      alert("Please enter email and password");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("User Logged in");
          router.push(`/auth-redirect?uid=${auth.currentUser.uid}`);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then((user) => {
      setDoc(
        doc(db, "users", user.user.uid),
        {
          name: user.user.displayName,
          email: user.user.email,
          uid: user.user.uid,
          name: user.user.displayName,

          pfp: user.user.photoURL,
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
    });
  };

  return (
    <div class="flex md:justify-end justify-center md:bg-[url('/assets/img/bg-image.png')] bg-contain bg-no-repeat">
      {/* <!-- right side div: white div --> */}
      <div class="flex md:max-w-[55ch] w-full h-[100vh] justify-center ">
        <div class="flex flex-col bg-white w-full  rounded-l-xl justify-center items-start">
          <div class="mt-20 pl-10">
            <Image src={Logo} alt="img" />
          </div>
          <div class="w-full flex-1 p-[32px]  flex flex-col justify-center h-full items-start gap-[24px] ">
            <p class="text-lg">Log in</p>
            <div class="flex flex-col gap-6 mt-8 w-full">
              <input
                class="border-[2px] border-gray-300 px-4 py-2 rounded-md w-full focus:outline-red-600"
                placeholder="Enter email or user name"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                class="border-[2px] border-gray-300 px-4 py-2 rounded-md w-full focus:outline-red-600"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p
              onClick={() => {
                handleForgotPassword();
              }}
              class="tag mt-2 cursor-pointer hover:underline"
            >
              Forgot password ?
            </p>
            <div class="flex flex-col gap-5 w-full">
              <button
                onClick={HandleClick}
                class="bg-red-600 px-10 py-2 text-white font-semibold w-full rounded-md hover:bg-red-800"
              >
                Login
              </button>
              {/* google */}
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

            <div class="flex items-center gap-[16px]  w-full ">
              <div class="border-b-[2px] border-gray-400 w-1/2"></div>
              <p>or</p>
              <div class="border-b-[2px] border-gray-400 w-1/2"></div>
            </div>

            <div class="flex gap-3 ">
              <p>Create a New account</p>
              <Link
                href={"/sign-up"}
                class="text-red-500 hover:cursor-pointer hover:text-red-800"
              >
                Sign in ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

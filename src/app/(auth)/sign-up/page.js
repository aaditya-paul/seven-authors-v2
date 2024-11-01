"use client";
import Image from "next/image";
import React, {useEffect} from "react";
import Logo from "/public/assets/img/logo.svg";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "@firebase/auth";
import {auth, db} from "../../../../firebase";
import {doc, setDoc} from "@firebase/firestore";
import {useRouter} from "next/navigation";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push(`/auth-redirect?uid=${user.uid}`);
      }
    });
    return unsubscribe;
  }, [router]);

  const HandleClick = async () => {
    if (email === "" || password === "" || name === "") {
      alert("Please enter email, password, and name");
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          name,
          email,
          uid: user.uid,
          admin: false,
          bookSeller: false,
        });
        console.log("User created");
        router.push(`/auth-redirect?uid=${user.uid}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        admin: false,
        pfp: user.photoURL,
        bookSeller: false,
      });
      console.log("User created");
      router.push(`/auth-redirect?uid=${user.uid}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="flex md:justify-end justify-center md:bg-[url('/assets/img/bg-image.png')] w-full bg-contain bg-no-repeat overflow-hidden">
        <div className="overflow-y-scroll md:w-1/3 w-full no-scrollbar">
          <div className="flex flex-col bg-white h-screen rounded-l-xl">
            <div className="mt-8 pl-10 ">
              <Image src={Logo} alt="img" />
            </div>
            <div className="w-full px-10 md:mt-20 mt-12 md:px-10">
              <h1>
                Create a <strong>User</strong> Account
              </h1>
              <p className="text-lg text-gray-600 mt-3 md:mt-8">
                Enter your details
              </p>
              <div className="flex flex-col gap-3 md:gap-6 mt-8 md:mt-3">
                <input
                  type="text"
                  className="border-[2px] border-gray-300 px-4 py-2 rounded-md"
                  placeholder="Enter full name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="border-[2px] border-gray-300 px-4 py-2 rounded-md"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
                <input
                  className="border-[2px] border-gray-300 px-4 py-2 rounded-md"
                  placeholder="Enter Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-5 mt-8">
                <button
                  onClick={HandleClick}
                  className="bg-red-600 px-10 py-2 text-white font-semibold w-full rounded-md"
                >
                  Continue
                </button>
                <button
                  className="flex cursor-pointer items-center hover:bg-gray-100 transition-all justify-center w-full px-4 py-2 rounded-lg border border-slate-400"
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
              <div className="flex items-center gap-4 mt-8">
                <div className="border-b-[2px] border-gray-400 w-1/2"></div>
                <p>or</p>
                <div className="border-b-[2px] border-gray-400 w-1/2"></div>
              </div>
              <div className="flex gap-3 mt-8 mb-5 md:mb-0">
                <p>Already have an account?</p>
                <Link
                  href={"/login"}
                  className="text-red-500 hover:cursor-pointer"
                >
                  Log in?
                </Link>
              </div>
              <div className="flex gap-3 mt-1 mb-5 md:mb-0">
                <p>Want a Seller account?</p>
                <Link
                  href={"/sign-up/seller"}
                  className="text-red-500 hover:cursor-pointer"
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

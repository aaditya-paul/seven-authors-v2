import NavBar from "@/components/navBar";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className=" overflow-hidden">
      <NavBar />
      <div className=" w-full h-[100vh] bg-red-300 bg-[url('../../public/assets/heroHome.png')] bg-no-repeat bg-cover">
        <div className=" flex  h-full ">
          <div className="w-fit h-fit  md:w-[30vw]  absolute bottom-10 m-4 md:top-[50vh] md:left-[30%] md:-translate-y-1/2  md:-translate-x-1/2  flex flex-col gap-4 p-8 md:p-16 bg-[#292929] rounded-lg text-white italic">
            <p className=" text-2xl">
              Immerse <span className=" text-red-500"> Yourself </span> in
              <span className=" text-red-500"> Endless </span>
              Stories
            </p>

            <p className=" text-xl">
              Discover a world of thrilling adventures, captivating characters,
              and thought-provoking narratives
            </p>

            <p className=" text-xl">Sign In to start your literary journey.</p>

            <button className=" px-8 bg-[#E12F3B] py-2 rounded-lg w-fit">
              <Link href="/login" className=" text-center align-text-bottom">
                Sign In
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

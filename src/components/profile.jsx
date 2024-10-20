"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import Loader from "./LoaderComponent/Loader";

const ProfileComponent = () => {
  const user = useSelector((state) => state.AdminRedux.user);

  if (user.name && user.email) {
    return (
      <>
        <div className="lg:m-2 w-full p-5">
          <h1 className="text-2xl font-bold lg:mx-12 text-white">Profile</h1>
        </div>
        <div className="lg:w-[90%] w-full min-h-[70vh] flex flex-col lg:flex-row gap-7 lg:mx-20 px-4">
          <div className="flex lg:w-[50%] h-max rounded-3xl flex-col gap-2 bg-[#4e4e4e]">
            <div className="photos h-[190px] ">
              <div className="coverPhoto relative w-full h-36 bg-[url('../../public/assets/heroHome.png')] rounded-t-3xl"></div>
              <div className="absolute w-fit h-24 flex justify-center items-center lg:top-[180px] top-[160px] ml-7">
                <Image
                  src={
                    user.pfp ||
                    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1729063252~exp=1729063852~hmac=a58a8560173a8a625b737e98576052368125f9a2e77e46aaee444639e34efcdd"
                  }
                  width={70}
                  height={70}
                  className="rounded-3xl border-2 border-[#4e4e4e] "
                  alt="profile-photo"
                />
              </div>
            </div>
            <div className="name&Username ml-7 mb-5 text-2xl">
              <h2 className="font-bold text-white">{user.name}</h2>
            </div>
          </div>
          <div className="flex lg:w-[50%] h-[50%] flex-col gap-5">
            <div className="flex rounded-3xl flex-col gap-2 bg-[#4e4e4e] p-4">
              <h1 className="font-bold text-xl text-[#f2f2f2]">
                Personal information
              </h1>
              <div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold text-[#111010]">
                    Email address
                  </h3>
                  <p className="text-sm text-white">{user.email}</p>
                </div>
                <div className="w-full my-3">
                  <h3 className="text-lg font-semibold text-[#111010]">
                    User Type
                  </h3>
                  <h3 className="text-sm font-semibold text-white">
                    {user.admin
                      ? "Admin"
                      : user.bookSeller
                      ? "Book Seller"
                      : "Reader"}
                  </h3>
                </div>
              </div>
            </div>
            {/* <div className="flex rounded-3xl flex-col gap-2 bg-gray-100 dark:bg-gray-800 p-4">
                    <h1 className="font-bold">Social Media accounts</h1>
                    <div>
                      {socialAcounts.length === 0 ? (
                        <>
                          <p className="text-xs text-gray-400">
                            No social media accounts found
                          </p>
                          <p className="text-xs text-gray-400">
                            Click on edit to add social media accounts
                          </p>
                        </>
                      ) : (
                        socialAcounts.map((account) => {
                          <div className="text-xs text-gray-400 p-2 rounded-lg bg-white border-2 my-2 w-full">
                            <span>{account}</span>
                          </div>;
                        })
                      )}
                    </div>
                  </div> */}
            <div></div>
          </div>
        </div>
      </>
    );
  } else {
    return <Loader />;
  }
};

export default ProfileComponent;

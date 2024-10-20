// this is profile component used in both profileOnly.jsx and Profile_With_Sidenavbar.jsx

import Image from "next/image";
import React from "react";

const ProfileComponent = () => {
  return (
    <>
      <div className="lg:m-2 w-full p-5">
        <h1 className="text-2xl font-bold lg:mx-12 text-white">Profile</h1>
      </div>
      <div className="lg:w-[90%] w-full min-h-[70vh] flex flex-col lg:flex-row gap-7 lg:mx-20 m-5 p-5">
        <div className="flex lg:w-[50%] h-max rounded-3xl flex-col gap-2 bg-[#4e4e4e]">
          <div className="photos h-[190px] ">
            <div className="coverPhoto relative w-full h-36 bg-black rounded-t-3xl"></div>
            <div className="absolute w-fit h-24 flex justify-center items-center top-[220px] ml-7">
              <Image
                src={
                  ""
                  //   "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1729063252~exp=1729063852~hmac=a58a8560173a8a625b737e98576052368125f9a2e77e46aaee444639e34efcdd"
                }
                width={70}
                height={70}
                className="rounded-3xl border-2 border-[#4e4e4e] "
                alt="profile-photo"
              />
            </div>
          </div>
          <div className="name&Username ml-7 mb-5">
            <h2 className="font-bold">John</h2>
            {/* <span className="text-xs text-gray-500">{username}</span> */}
          </div>
        </div>
        <div className="flex lg:w-[50%] h-[50%] flex-col gap-5">
          <div className="flex rounded-3xl flex-col gap-2 bg-[#4e4e4e] p-4">
            <h1 className="font-bold">Personal information</h1>
            <div>
              <div className="w-full">
                <h3 className="text-xs font-semibold">Email address</h3>
                <p className="text-xs text-white">
                  {/* {email === "" || email === null
                        ? "No email found, please enter an email"
                        : email} */}{" "}
                  johnDoe@abc.com
                </p>
              </div>
              <div className="w-full my-3">
                <h3 className="text-xs font-semibold">Country</h3>
                <p className="text-xs text-white">
                  {/* {jobRole === "" || jobRole === null
                        ? "No job role added, Enter a job role"
                        : jobRole} */}
                  Country
                </p>
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
};

export default ProfileComponent;

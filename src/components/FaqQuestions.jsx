import React from "react";
import {useState} from "react";
const FaqQuestions = ({ques, index}) => {
  const [isquesOpen, setIsquesOpen] = useState(false);

  console.log(index, ques);

  return (
    <>
      <div
        key={index}
        className={` ${
          isquesOpen
            ? "bg-[#E12F3B]/10 border-red-700"
            : "bg-white/10 border-gray-500  "
        } lg:w-[600px] w-[350px] border-2 transition-all duration-300 ease-in-out cursor-pointer p-3 rounded-lg`}
        onClick={() => {
          setIsquesOpen(!isquesOpen);
        }}
      >
        <div className={`${isquesOpen ? "text-red-500" : "text-white"}`}>
          {ques.title}
        </div>
        {isquesOpen && <div className="text-white">{ques.answer}</div>}
      </div>
    </>
  );
};

export default FaqQuestions;

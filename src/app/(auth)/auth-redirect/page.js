"use client";
import {doc, getDoc} from "@firebase/firestore";
import React, {useEffect} from "react";
import {db} from "../../../../firebase";
import {useRouter, useSearchParams} from "next/navigation";

const LoadingScreen = () => {
  const q = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      console.log(q.get("uid"));

      await getDoc(doc(db, "users", q.get("uid"))).then((doc) => {
        if (doc.exists()) {
          console.log("Document data:", doc.data());
          if (doc.data().admin) {
            router.push("/admin");
          } else {
            router.push("/e-book");
          }
        }
      });
    };

    fetchData();
  }, [q, router]);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
      <div className="w-[10vh] h-[10vh] border-8 border-gray-200 border-t-8 border-t-blue-500 rounded-full animate-spin"></div>
      {/* <p>Loading...</p> */}
    </div>
  );
};

export default LoadingScreen;

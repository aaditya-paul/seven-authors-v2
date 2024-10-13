"use client";
import {doc, getDoc} from "@firebase/firestore";
import React, {useEffect, Suspense} from "react";
import {db} from "../../../../firebase";
import {useRouter, useSearchParams} from "next/navigation";

const LoadingScreen = () => {
  const q = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const uid = q.get("uid");
      if (!uid) {
        console.error("UID is missing");
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
          console.log("Document data:", userDoc.data());
          if (userDoc.data().admin) {
            router.push("/admin");
          } else {
            router.push("/e-book");
          }
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
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

const AuthRedirectPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LoadingScreen />
  </Suspense>
);

export default AuthRedirectPage;

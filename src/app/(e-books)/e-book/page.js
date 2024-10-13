"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

const Ebook = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/e-book/dashboard");
  }, [router]);

  return null;
};

export default Ebook;

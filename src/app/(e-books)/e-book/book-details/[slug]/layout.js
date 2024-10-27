import React from "react";
import {Roboto, Sometype_Mono, Irish_Grover, Inter} from "next/font/google";
import NavBar from "@/components/e-book-components/navBar";

const roboto = Roboto({
  weight: ["400", "700"], // Choose weights
  subsets: ["latin"], // Subsets to use
  variable: "--font-roboto", // Define a CSS variable
});

const inter = Inter({
  weight: ["400", "700"], // Choose weights
  subsets: ["latin"],
  variable: "--font-inter", // Define a CSS variable
});
const sometype = Sometype_Mono({
  weight: ["400", "700"], // Choose weights
  subsets: ["latin"],
  variable: "--font-sometype", // Define a CSS variable
});
const irish = Irish_Grover({
  weight: ["400"], // Choose weights
  subsets: ["latin"],
  variable: "--font-irish", // Define a CSS variable
});

export default function Layout({children}) {
  return (
    <section
      className={`${roboto.className} ${inter.variable} ${sometype.variable} ${irish.variable}`}
    >
      {children}
    </section>
  );
}
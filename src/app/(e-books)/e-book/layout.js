"use client";
import NavBar from "@/components/e-book-components/navBar";
import React from "react";
import {Roboto, Sometype_Mono, Irish_Grover, Inter} from "next/font/google";
import {useSelector} from "react-redux";

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

export default function RootLayout({children}) {
  return (
    <html
      className={`${roboto.className} ${inter.variable} ${sometype.variable} ${irish.variable}`}
      lang="en"
    >
      <body>
        <NavBar>
          <div className={``}>{children}</div>
        </NavBar>
      </body>
    </html>
  );
}

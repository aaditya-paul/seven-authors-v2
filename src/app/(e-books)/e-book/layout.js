import NavBar from "@/components/e-book-components/navBar";
import React from "react";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`  `}>
        <NavBar>{children}</NavBar>
      </body>
    </html>
  );
}

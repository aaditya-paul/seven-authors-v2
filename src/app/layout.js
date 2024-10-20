import localFont from "next/font/local";
import "./globals.css";
import {getDoc} from "@firebase/firestore";
import {onAuthStateChanged} from "@firebase/auth";
import {auth} from "../../firebase";
import Providers from "@/lib/redux/provider";
import BlockCopyPaste from "@/utils/blockCopyPaste";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Seven Authors",
  description: "seven authors",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BlockCopyPaste>
          <Providers>{children}</Providers>
        </BlockCopyPaste>
      </body>
    </html>
  );
}

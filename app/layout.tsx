"use client"
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

import { Provider } from "react-redux";
import {store} from "../store/store";

const dmSans = DM_Sans({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased")}>
        <Provider store = {store}>
         {children}
        </Provider>
      </body>
    </html>
  );
}
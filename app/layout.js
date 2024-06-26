"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./_components/Footer";
import navbar from "./_components/Navbar";
import { CartContext } from "./_contex/CartContext";
import { useState } from "react";
import GlobalApi from "./_utils/GlobalApi";

const inter = Inter({ subsets: ["latin"] });

//export const metadata = {
//  title: "Create Next App",
//  description: "Generated by create next app",
//};

export default function RootLayout({ children }) {
  const [cart, setCart]=useState([]);


  return (
    <ClerkProvider>
      <CartContext.Provider value={{cart, setCart}}>
    <html lang="en">
      <body className={inter.className}>
        <navbar/>
        {children}
        </body>
        
    </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import "./globals.css";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <h1 className="text-3xl text-center p-2 text-white typing">João Anderson da Cruz</h1>
    </div>
  );
}

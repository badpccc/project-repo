"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {useState, useEffect} from "react";
import React from "react";
import "./globals.css";

export default function Home() {
  const fullName = "João Anderson da Cruz"; // Nome Desejado.
  const [finished, setFinished] = useState(false); //Inicializa com False.
  useEffect(() => {
    const timer = setTimeout(() => {
      setFinished(true); // Alterna para True após 2 Segundos.
    }, 2000); // Duração = 2 Segundos.
    return () => clearTimeout(timer); // Limpa o Temporizador.
  }, []);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <h1 className={`text-3xl text-white font-mono typing ${finished ? "finished" : "blink"}`} // Enquanto "Finished == False" -> Aplica "Blink".
      >
        {fullName}
      </h1> 
    </div>
  );
}

// components/Hero.tsx (Simplified & Creative Version)
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    // Main container with full screen height and background gradient
    <main className="min-h-screen w-full bg-amber-200 flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full mt-24 text-center relative z-10">
        {" "}
        {/* z-10 if adding background elements */}
        {/* Name */}
        <h1 className="text-7xl max-w-4xl mx-auto font-medium mb-4">
          Design com intenção. Presença com estratégia.
        </h1>
        <div className="space-y-4 mb-10">
          <p className="text-2xl max-w-2xl mx-auto ">
            Crio identidades visuais e sites para marcas criativas que querem se
            destacar no digital — unindo design, dev e IA.
          </p>
        </div>
        {/* Buttons */}
        <div className="space-y-4 max-w-sm mx-auto">
          <a
            href="https://wa.me/64210735143?text=Oi%20Paola%2C%20vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20:)"
            target="_blank"
            rel="noopener noreferrer" // Boa prática para target="_blank"
            className="bg-pink-200 w-full py-3 px-6 shadow border-2 border-pink-300 rounded-full text-pink-800 font-semibold hover:bg-white transition duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            <FaWhatsapp className="mr-2" /> {/* Add icon with right margin */}
            Fale Comigo {/* The button text */}
          </a>
        </div>
      </div>
    </main>
  );
}

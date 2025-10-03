"use client";

import { useState } from "react";

export default function HeroLogo() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group w-[300px] md:w-[450px] h-[80px] md:h-[100px] [perspective:1000px] cursor-pointer select-none"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]
          ${flipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"}
        `}
      >
        {/* Front */}
        <div className="font-smythe absolute w-full h-full flex items-center justify-center text-white font-bold text-6xl md:text-8xl rounded-lg border-[10px] border-primary bg-primary [backface-visibility:hidden]">
          LesFlashcards
        </div>
        {/* Back */}
        <div className="font-smythe absolute w-full h-full flex items-center justify-center text-white font-bold text-5xl md:text-7xl rounded-lg border-[10px] border-secondary bg-secondary [backface-visibility:hidden] [transform:rotateY(180deg)]">
          LesFischesMémoire
        </div>
      </div>
    </div>
  );
}

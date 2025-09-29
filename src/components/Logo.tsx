"use client";

import { useState } from "react";

export default function Logo() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group w-[150px] h-[50px] [perspective:1000px] cursor-pointer select-none"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]
          ${flipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"}
        `}
      >
        {/* Front */}
        <div className="absolute w-full h-full flex items-center justify-center text-white font-bold text-sm rounded-lg border-[10px] border-[#6A2C70] bg-[#6A2C70] [backface-visibility:hidden]">
          LesFlashcards
        </div>
        {/* Back */}
        <div className="absolute w-full h-full flex items-center justify-center text-white font-bold text-sm rounded-lg border-[10px] border-[#F08A5D] bg-[#F08A5D] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          LesCartesMémoire
        </div>
      </div>
    </div>
  );
}

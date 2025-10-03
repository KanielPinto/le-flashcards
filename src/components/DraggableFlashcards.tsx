import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableFlashcards() {
  const items = [
  {
    text: "Bonjour",
    color: "bg-red-500 border-red-700",
    className: "absolute top-1 left-[13%] rotate-[-5deg]",
  },
  {
    text: "Amour",
    color: "bg-blue-500 border-blue-700",
    className: "absolute top-10 left-[30%] rotate-[-7deg]",
  },
  {
    text: "Liberté",
    color: "bg-green-500 border-green-700",
    className: "absolute top-6 left-[50%] rotate-[8deg]",
  },
  {
    text: "Voyage",
    color: "bg-purple-500 border-purple-700",
    className: "absolute top-40 left-[65%] rotate-[10deg]",
  },
  {
    text: "Chanson",
    color: "bg-orange-500 border-orange-700",
    className: "absolute top-20 right-[35%] rotate-[2deg]",
  },
  {
    text: "Étoile",
    color: "bg-pink-500 border-pink-700",
    className: "absolute top-36 left-[18%] rotate-[-7deg]",
  },
  {
    text: "Fromage",
    color: "bg-yellow-500 border-yellow-700",
    className: "absolute top-10 left-[42%] rotate-[4deg]",
  },
  // --- Extra cards spread wider and lower ---
  {
    text: "Soleil",
    color: "bg-teal-500 border-teal-700",
    className: "absolute top-52 left-[25%] rotate-[6deg]",
  },
  {
    text: "Rêve",
    color: "bg-indigo-500 border-indigo-700",
    className: "absolute top-16 right-[25%] rotate-[-4deg]",
  },
  {
    text: "Fleur",
    color: "bg-lime-500 border-lime-700",
    className: "absolute top-48 left-[55%] rotate-[3deg]",
  },
  {
    text: "Océan",
    color: "bg-cyan-500 border-cyan-700",
    className: "absolute top-32 right-[40%] rotate-[9deg]",
  },
  {
    text: "Forêt",
    color: "bg-emerald-500 border-emerald-700",
    className: "absolute top-60 left-[38%] rotate-[-8deg]",
  },
  {
    text: "Montagne",
    color: "bg-rose-500 border-rose-700",
    className: "absolute top-22 left-[70%] rotate-[5deg]",
  },
  {
    text: "Clé",
    color: "bg-sky-500 border-sky-700",
    className: "absolute top-6 left-[60%] rotate-[-6deg]",
  },
];



  return (
    <DraggableCardContainer className="relative flex h-full w-full items-center justify-center">
      <p className="absolute top-50 mx-auto max-w-sm text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-400">
        Bonjour
      </p>

      <div className="relative mt-5 w-full h-full">
        {items.map((item, idx) => (
          <DraggableCardBody
            key={idx}
            color={item.color}
            className={`${item.className} flex h-48 w-96 items-center justify-center rounded-lg shadow-xl border-[10px]`}
          >
            <div className="font-smythe flex items-center justify-center text-white font-bold text-6xl [backface-visibility:hidden]">
              {item.text}
            </div>
          </DraggableCardBody>
        ))}
      </div>
    </DraggableCardContainer>
  );
}

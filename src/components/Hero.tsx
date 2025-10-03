// Hero.tsx
import { DraggableFlashcards } from "./DraggableFlashcards";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <div className="relative h-80 w-full flex flex-col items-center justify-start pt-24 bg-primary">
      {/* Hero content */}
      <div className="relative z-10 text-center mb-12">
        <HeroLogo></HeroLogo>
        <p className="text-xl font-bold text-white dark:text-white mt-3">
          Learn French 1 Card At A Time :)
        </p>
      </div>

      {/* Flashcards container */}
      
    </div>
  );
}

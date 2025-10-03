import { DraggableFlashcards } from "@/components/DraggableFlashcards";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <div className="min-h-[55vh] overflow-clip shadow-[inset_0_8px_8px_-8px_rgba(0,0,0,0.4),_inset_0_-8px_8px_-8px_rgba(0,0,0,0.4)]">
        <DraggableFlashcards />

      </div>
    </div>
  );
}

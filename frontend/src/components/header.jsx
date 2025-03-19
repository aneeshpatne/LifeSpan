import { Leaf } from "lucide-react";
import { Book, Sparkles, Cloud } from "lucide-react";
import { Badge } from "./hero";
export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-2 absolute top-0 h-[8vh] left-0 w-full bg-teal-900">
      <div className="flex items-center justify-center my-2">
        <h1 className="text-4xl font-bold text-white">LifeSpan</h1>
        <Leaf className="ml-2 text-white font-bold" />
      </div>
    </header>
  );
}

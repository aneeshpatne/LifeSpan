import { Leaf } from "lucide-react";
export default function Header() {
  return (
    <header className="flex items-center justify-center border-b border-gray-300">
      <h1 className="text-3xl font-medium">LifeSpan</h1>
      <Leaf className="ml-2 text-green-500" />
    </header>
  );
}

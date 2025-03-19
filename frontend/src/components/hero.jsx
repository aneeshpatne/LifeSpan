import { Dot, Sparkles, Cloud, Book } from "lucide-react";
import Header from "./header";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-[80vh]">
      <div className="flex items-center justify-center gap-2">
        <Badge name={"Research"} Icon={Book} />
        <Badge name={"Data Driven"} Icon={Sparkles} />
        <Badge name={"Climate Impact"} Icon={Cloud} />
      </div>
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-5xl text-center">
          How Much Life Are You <br />
          <span className="text-green-800">Losing To Air Pollution?</span>
        </h1>
      </div>
    </div>
  );
}
export function Badge({ name, Icon }) {
  return (
    <div className="flex items-center justify-center border gap-2 bg-green-100 border-gray-300 rounded-full px-3">
      {Icon && <Icon className="w-4 h-4 text-teal-800" />}
      <h1 className="text-teal-800">{name}</h1>
    </div>
  );
}

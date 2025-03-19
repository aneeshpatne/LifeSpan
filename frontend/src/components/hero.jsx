import { Dot } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-[80vh]">
      <Badge name={"Research Paper"} />
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-5xl text-center">
          How Much Life Are You <br />
          <span className="text-green-800">Losing To Air Pollution?</span>
        </h1>
      </div>
    </div>
  );
}
export function Badge({ name }) {
  return (
    <div className="flex items-center justify-center border bg-green-100 border-gray-300 rounded-full pr-3">
      <Dot className="text-green-800" />
      <h1 className="text-green-800">{name}</h1>
    </div>
  );
}

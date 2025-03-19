import { Dot, Sparkles, Cloud, Book } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-[100vh]">
      <div className="flex items-center justify-center gap-2">
        <Badge name={"Research"} Icon={Book} />
        <Badge name={"Data Driven"} Icon={Sparkles} />
        <Badge name={"Climate Impact"} Icon={Cloud} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-5xl text-center">
          How Much Life Are You <br />
          <span className="text-green-800">Losing To Air Pollution?</span>
        </h1>
        <p className="w-[55vw] text-lg text-center text-gray-700 py-2">
          Air pollution is silently stealing years from our lives. Through data
          visualization and research, The true cost of the air we breathe can be
          revealed and how we can fight back.
        </p>
      </div>
      <img
        src="/wave-haikei(3).svg"
        alt="Decorative wave"
        className="absolute bottom-0 left- 0 w-full h-auto z-0"
      />
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

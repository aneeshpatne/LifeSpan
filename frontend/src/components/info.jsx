"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Info() {
  const [location, setLocation] = useState("");

  return (
    <div className="bg-teal-900 min-h-[92vh] relative text-white px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Analyse Impact on your Life expectancy!
      </h1>

      <div className="flex max-w-lg mx-auto">
        <Input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your location"
          className="rounded-r-none border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
        />
        <Button className="rounded-l-none bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
          Calculate Impact
        </Button>
      </div>

      <img
        src="/wave-haikei(6).svg"
        alt="Decorative Waves"
        className="absolute bottom-0 left-0 w-full h-auto"
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDown, ArrowUp, Wind, Info as InfoIcon } from "lucide-react";

export default function Info() {
  const [location, setLocation] = useState("");
  const [value, setValue] = useState(0); // Gauge value state
  const [pm25Value] = useState(42); // Demo PM2.5 value

  const handleCalculateImpact = () => {
    console.log("Calculating impact for:", location);
    setValue(-1.2);
    alert(`Impact calculated for: ${location}`);
  };

  const isPositive = value >= 0;
  const absValue = Math.abs(value);
  const percentOfMax = Math.min(absValue / 2, 1) * 100;

  // Simple PM2.5 gauge calculations
  const pm25Max = 150;
  const pm25Percent = Math.min(pm25Value / pm25Max, 1) * 100;

  const getPM2Level = (val) => {
    if (val <= 12) return { label: "Good", textColor: "text-emerald-600" };
    if (val <= 35.4) return { label: "Moderate", textColor: "text-yellow-600" };
    if (val <= 55.4)
      return {
        label: "Unhealthy for Sensitive Groups",
        textColor: "text-orange-600",
      };
    if (val <= 150.4) return { label: "Unhealthy", textColor: "text-red-600" };
    if (val <= 250.4)
      return { label: "Very Unhealthy", textColor: "text-purple-600" };
    return { label: "Hazardous", textColor: "text-rose-800" };
  };

  const pm25Status = getPM2Level(pm25Value);

  return (
    <div className="relative min-h-[92vh] bg-teal-900 px-4 py-6 text-white">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Analyse Impact on your Life expectancy!
      </h1>

      {/* Input + Button */}
      <div className="mx-auto flex max-w-xl">
        <Input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your location"
          className="rounded-r-none border-0 py-1.5 pl-4 text-white ring-1 ring-inset ring-gray-300
                     placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600
                     sm:text-sm sm:leading-6"
        />
        <Button
          className="rounded-l-none bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          onClick={handleCalculateImpact}
        >
          Calculate Impact
        </Button>
      </div>

      {/* Flex container centered on larger screens */}
      <div className="mt-15 flex flex-col gap-8 lg:flex-row lg:justify-center lg:items-start">
        {/* Life Expectancy Card */}
        <div className="max-w-md">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                Life Expectancy Impact
              </CardTitle>
              <CardDescription className="text-center">
                {isPositive
                  ? "Projected gain in life expectancy"
                  : "Projected loss in life expectancy"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mx-auto w-full max-w-sm">
                {/* Value Display */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${
                        isPositive ? "bg-emerald-100" : "bg-red-100"
                      }`}
                    >
                      {isPositive ? (
                        <ArrowUp className="h-6 w-6 text-emerald-600" />
                      ) : (
                        <ArrowDown className="h-6 w-6 text-red-600" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">
                        {isPositive
                          ? "Life Expectancy Gain"
                          : "Life Expectancy Loss"}
                      </div>
                      <div
                        className={`text-2xl font-bold ${
                          isPositive ? "text-emerald-600" : "text-red-600"
                        }`}
                      >
                        {absValue.toFixed(1)} years
                      </div>
                    </div>
                  </div>
                  {/* optional text */}
                  <div
                    className={`text-sm ${
                      isPositive ? "text-emerald-600" : "text-red-600"
                    }`}
                  ></div>
                </div>

                {/* Linear Gauge */}
                <div className="mt-6">
                  <div className="relative h-8 w-full overflow-hidden rounded-lg bg-gray-200">
                    {/* Filled Bar */}
                    <div
                      className={`absolute left-0 top-0 h-full ${
                        isPositive ? "bg-emerald-500" : "bg-red-500"
                      }`}
                      style={{ width: `${percentOfMax}%` }}
                    ></div>
                    {/* Tick Marks */}
                    <div className="absolute inset-0 flex justify-between px-2">
                      <div className="h-full w-px bg-gray-400"></div>
                      <div className="h-full w-px bg-gray-400"></div>
                      <div className="h-full w-px bg-gray-400"></div>
                      <div className="h-full w-px bg-gray-400"></div>
                      <div className="h-full w-px bg-gray-400"></div>
                    </div>
                    {/* Pointer */}
                    <div
                      className="absolute top-0 h-full w-1 bg-gray-800"
                      style={{ left: `calc(${percentOfMax}% - 2px)` }}
                    ></div>
                  </div>

                  {/* Scale Labels */}
                  <div className="mt-1 flex justify-between px-1 text-xs text-gray-500">
                    <div>0</div>
                    <div>0.5</div>
                    <div>1.0</div>
                    <div>1.5</div>
                    <div>2.0</div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="mt-6 rounded-lg bg-gray-50 p-3 text-sm text-gray-600">
                  <p>
                    {isPositive
                      ? "This gauge shows the potential years that could be added to average life expectancy if air quality meets WHO guidelines."
                      : "This gauge shows the years of life currently being lost due to air pollution levels exceeding WHO guidelines."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* PM2.5 Speedometer Card */}
        <div className="max-w-md">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                Current PM2.5 Levels
              </CardTitle>
              <CardDescription className="text-center">
                Fine particulate matter concentration in μg/m³
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mx-auto w-full max-w-sm">
                {/* PM2.5 Value Display */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                      <Wind className={`h-6 w-6 ${pm25Status.textColor}`} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Air Quality</div>
                      <div
                        className={`text-2xl font-bold ${pm25Status.textColor}`}
                      >
                        {pm25Status.label}
                      </div>
                    </div>
                  </div>
                  <div className={`text-xl font-bold ${pm25Status.textColor}`}>
                    {pm25Value} μg/m³
                  </div>
                </div>

                {/* Speedometer */}
                <div className="relative mx-auto mt-8 w-full max-w-xs overflow-visible">
                  <svg
                    viewBox="0 0 240 120"
                    className="w-full overflow-visible"
                  >
                    <defs>
                      <linearGradient
                        id="pm25Gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="20%" stopColor="#10b981" />
                        <stop offset="20%" stopColor="#eab308" />
                        <stop offset="40%" stopColor="#eab308" />
                        <stop offset="40%" stopColor="#f97316" />
                        <stop offset="60%" stopColor="#f97316" />
                        <stop offset="60%" stopColor="#ef4444" />
                        <stop offset="80%" stopColor="#ef4444" />
                        <stop offset="80%" stopColor="#1e2024" />
                        <stop offset="100%" stopColor="#1e2024" />
                      </linearGradient>
                    </defs>
                    {/* Arc */}
                    <path
                      d="M10,110 A100,100 0 0,1 230,110"
                      fill="none"
                      stroke="url(#pm25Gradient)"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    {/* Markers */}
                    <g className="text-xs">
                      <text x="10" y="130" textAnchor="middle" fill="#6b7280">
                        0
                      </text>
                      <text x="65" y="130" textAnchor="middle" fill="#6b7280">
                        30
                      </text>
                      <text x="120" y="130" textAnchor="middle" fill="#6b7280">
                        60
                      </text>
                      <text x="175" y="130" textAnchor="middle" fill="#6b7280">
                        90
                      </text>
                      <text x="230" y="130" textAnchor="middle" fill="#6b7280">
                        150
                      </text>
                    </g>
                    {/* Needle */}
                    <g transform={`rotate(${pm25Percent * 1.8}, 120, 110)`}>
                      <line
                        x1="120"
                        y1="110"
                        x2="120"
                        y2="40"
                        stroke="#1f2937"
                        strokeWidth="2"
                      />
                      <circle cx="120" cy="110" r="8" fill="#1f2937" />
                    </g>
                  </svg>
                </div>

                {/* Info */}
                <div className="mt-4 rounded-lg bg-gray-50 p-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <InfoIcon className="mt-0.5 h-4 w-4 text-gray-400" />
                    <p>
                      PM2.5 refers to fine particulate matter that is 2.5
                      micrometers or smaller in diameter. These particles can
                      penetrate deep into the lungs and bloodstream, causing
                      significant health impacts. WHO guidelines recommend
                      levels below 5 μg/m³ for annual mean.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>What LifeSpanAI Says:</CardTitle>
            <CardDescription>
              AI-powered analysis of your local air quality and health impact
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <svg
                    className="h-6 w-6 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="flex-1 space-y-2 text-gray-600">
                  <p>
                    {isPositive
                      ? pm25Value <= 35
                        ? "Based on current PM2.5 levels in your area, our model predicts a potential gain in life expectancy if these good air quality conditions are maintained. Continue to support clean air policies in your region."
                        : "Despite current elevated PM2.5 levels, our model predicts a potential gain in life expectancy if proposed clean air measures are implemented. Support local initiatives to reduce air pollution."
                      : pm25Value <= 35
                      ? "While current PM2.5 levels are relatively good, historical exposure patterns suggest a negative impact on life expectancy. Continued improvement in air quality could reverse this trend."
                      : "Current PM2.5 levels in your area are concerning and are projected to reduce life expectancy. Consider using air purifiers indoors and supporting stricter emission controls."}
                  </p>
                  <div className="pt-2 text-sm text-gray-500">
                    <em>
                      AI Generated Text using the Pollution levels, change in
                      life expectancy and dedicated knowledge base.
                    </em>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Decorative Wave at Bottom */}
      <img
        src="/wave-haikei(6).svg"
        alt="Decorative Waves"
        className="absolute top-full left-0 h-auto w-full"
      />
    </div>
  );
}

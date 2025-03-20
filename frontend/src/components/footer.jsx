"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-emerald-600">
              Research Conclusions
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Socio-Economic Factors and Life Expectancy
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Our study quantifies the relationship between air pollution,
              socio-economic conditions, and life expectancy using advanced
              machine learning models.
            </p>
          </div>

          <div className="mt-20">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-emerald-500 text-white">
                    <FileText className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Air Pollution & Life Expectancy
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  High PM2.5 levels reduce life expectancy, with severe
                  pollution causing a <strong>5.6-year reduction</strong>.
                  Controlling PM2.5 to <strong>25 μg/m³</strong> could increase
                  life expectancy by <strong>0.52 years</strong> in polluted
                  areas.
                </dd>
              </div>

              {/* Socio-Economic Factors */}
              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-emerald-500 text-white">
                    <FileText className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Socio-Economic Influence
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  A <strong>10% rise in income</strong> increases life
                  expectancy by <strong>0.35 years</strong>, with stronger
                  benefits for low-income populations. Improved{" "}
                  <strong>literacy rates </strong> and{" "}
                  <strong>healthcare access </strong> also enhance longevity,
                  though diminishing returns emerge at higher levels.
                </dd>
              </div>

              {/* Dose-Response Relationship */}
              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-emerald-500 text-white">
                    <FileText className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Statistical Findings
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  A <strong>10 μg/m³ increase in PM2.5</strong> results in a{" "}
                  <strong>0.98-year decrease</strong> in life expectancy,
                  confirming a <strong>non-linear relationship</strong> where
                  adverse health effects accelerate at higher pollution levels.
                </dd>
              </div>

              {/* Policy Implications */}
              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-emerald-500 text-white">
                    <FileText className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Policy & Future Projections
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Without action, air pollution could cut life expectancy by{" "}
                  <strong>2.6 years</strong> by 2026. Lowering PM2.5 below 25
                  μg/m³ may reverse this, especially in{" "}
                  <strong>polluted areas</strong>. Policymakers must enforce
                  stricter emissions rules, invest in clean energy, and expand
                  healthcare access.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <footer className="relative">
        <img
          src="wave-haikei(6).svg"
          alt="wave"
          className="absolute top-full w-full h-20 object-cover"
        />
      </footer>
    </>
  );
}

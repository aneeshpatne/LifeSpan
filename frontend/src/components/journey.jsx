"use client";

const data = [
  {
    number: 1,
    heading: "The Questions",
    details: `The research began with a simple yet profound question: How many years of life
          are people losing due to the air they breathe? Despite air pollution
          being the greatest environmental threat to human health, its impact
          on life expectancy had not been comprehensively quantified.`,
  },
  {
    number: 2,
    heading: "The Data",
    details: `We gathered Life Expectancy (LE) and income-per-capita data from the Annual Handbook 
      of Statistics by RBI. PM2.5 pollution data was obtained through satellite measurements
       and atmospheric models from NASA, compiled by Washington University. Literacy rates 
       and hospital-bed availability were sourced from World Bank indicators.`,
  },
  {
    number: 3,
    heading: "The Analysis",
    details: `Using collected data on PM2.5 exposure, income per capita, 
      literacy rates, hospital bed availability, and life expectancy, we applied advanced
       statistical techniques to identify relationships between air pollution and socio-economic
        factors, ultimately estimating the resulting loss in life expectancy.`,
  },
];

export default function Journey() {
  return (
    <div className="min-h-[92vh] relative py-16 my-20 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center py-5 mb-16 text-gray-800 relative">
          Research Background
          <span className="block h-1 w-32 bg-gradient-to-r from-teal-700 to-teal-900 mx-auto mt-6"></span>
        </h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-teal-700 to-teal-900 hidden md:block"></div>

          <div className="flex flex-col gap-16">
            {data.map((item, index) => (
              <Details
                key={item.number}
                number={item.number}
                heading={item.heading}
                details={item.details}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Details({ number, heading, details, index }) {
  return (
    <div className="relative hover:translate-y-[-4px] transition-transform duration-300">
      <div className="flex flex-col md:flex-row items-start gap-8 group">
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 flex items-center justify-center text-white font-bold text-xl shrink-0 z-10 shadow-lg shadow-teal-100">
          {number}
        </div>

        <div className="flex-1 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-50">
          <h2 className="text-2xl md:text-3xl font-medium mb-4 text-teal-900">
            {heading}
          </h2>
          <p className="text-gray-600 leading-relaxed">{details}</p>

          <div className="w-full h-1 mt-6 bg-gradient-to-r from-transparent via-teal-50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

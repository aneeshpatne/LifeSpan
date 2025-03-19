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
export default function Info() {
  return (
    <div className="bg-teal-900 h-[92vh] relative">
      <h1 className="text-4xl font-bold text-white text-center py-5 underline decoration-4 decoration-white pb-10">
        Research Background
      </h1>
      <div className="flex flex-col gap-4">
        {data.map((item) => (
          <Details
            key={item.number}
            number={item.number}
            heading={item.heading}
            details={item.details}
          />
        ))}
      </div>
      <img
        src="/wave-haikei(6).svg"
        alt="Decorative Waves"
        className="absolute top-full w-full h-auto"
      />
    </div>
  );
}
export function Details({ number, heading, details }) {
  return (
    <div className="p-4 text-white">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-teal-900 font-bold shrink-0">
          {number}
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-light mb-2">{heading}</h2>
          <p className="text-white/90 text-xl">{details}</p>
        </div>
      </div>
    </div>
  );
}

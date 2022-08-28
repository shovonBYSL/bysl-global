import CountUp from "react-countup";

import { summaryData } from "../../public/data/summaryData";

const CompanySummary = () => {
  return (
    <div className="my-10 xl:my-16 bg-gradient-to-r from-blue-900 to-blue-700 min-h-max 2xl:h-80 px-5 md:px-16 lg:px-20 2xl:px-32 py-10 text-center text-white rounded-xl lg:rounded-3xl 2xl:rounded-[40px]">
      <p className="break-words text-2xl md:text-3xl  xl:text-4xl 2xl:text-5xl 3xl:text-[64px] font-bold">
        EXPLORE. INNOVATE. INVEST.
      </p>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-4 mt-2.5 md:mt-8 lg:mt-12 2xl:mt-16 py-5">
        {summaryData.map(({ id, number, title }) => {
          return (
            <div key={id} className="text-center">
              <p className="text-xl sm:text-2xl lg:text-3xl 2xl:text-[40px] font-bold">
                <CountUp enableScrollSpy end={number} />
                {(id === 1 && "k") || (id === 3 && "k")}+
              </p>
              <p className="text-base sm:text-lg lg:text-xl 2xltext-2xl mt-2.5">
                {title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanySummary;

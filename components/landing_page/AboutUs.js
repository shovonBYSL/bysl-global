import Link from "next/link";
import CountUp from "react-countup";

import { aboutUsData } from "../../public/data/aboutUsData";
// import { summaryData } from "../../public/data/summaryData";
import {
  SectionTitleGradient,
  SectionTitleType,
  TextGradient,
} from "../shared/SharedTextgroups";

const AboutUs = ({ summaryData, aboutUsData }) => {
  return (
    <div className="text-center py-10 xl:py-16">
      <SectionTitleType title="About Us" />
      <div className="mx-4 lg:mx-12 2xl:mx-20 mb-6 lg:mb-12 2xl:mb-20">
        <SectionTitleGradient>
          Serve the world with exceptional
          <br className="hidden xs:block" />
          <TextGradient text=" products and services" />
        </SectionTitleGradient>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-2 md:gap-4 xl:gap-6">
        <div className="col-span-2 row-span-2 px-2 py-4 sm:pt-6 md:pt-12 xl:pt-8 bg-gradient-to-r from-blue-900 to-blue-700 max-h-max text-center text-white rounded-[10px] xl:rounded-[20px]">
          <p className="break-words leading-10 text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
            EXPLORE. INNOVATE. INVEST.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-between xl:mt-4 2xl:mt-6 pt-0 xl:p-3 2xl:pt-5">
            {summaryData.map(({ id, number, title }) => {
              return (
                <div key={id} className="w-1/2 my-3 lg:my-5">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px] font-bold">
                    <CountUp enableScrollSpy end={number} />
                    {(id === 1 && "k") || (id === 3 && "k")}+
                  </p>
                  <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-1 xl:mt-2 2xl:mt-4">
                    {title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {aboutUsData?.map(({ id, path, title, description }) => {
          return (
            <Link passHref key={id} href={path}>
              <div
                key={id}
                className="bg-white h-full rounded-[10px] xl:rounded-[20px] border border-gray-200/75 hover:cursor-pointer"
              >
                <p
                  className={`pb-0 md:pb-2 xl:pb-4 2xl:pb-6 pt-3 xl:pt-6 2xl:pt-8 text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${
                    (id === 0 && "from-[#4363D6] to-[#0C58A6]") ||
                    (id === 1 && "from-[#4361EE] to-[#60EFFF]") ||
                    (id === 2 && "from-[#3A12A9] to-[#425CE9]") ||
                    (id === 3 && "from-[#72B5E8] to-[#214997]")
                  }`}
                >
                  {title}
                </p>
                <p className="pb-3 xl:pb-5 px-3 xl:px-4 text-xs md:text-sm xl:text-base 2xl:text-lg text-gray-300 xl:!leading-5 ">
                  {description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";
import Point from "../../svg/Point";

const RetailProblemsAndSolution = ({ data }) => {
  const [tabData, setTabData] = useState(data[0]);
  const [tabOpen, setTabOpen] = useState(0);

  useEffect(() => {
    setTabData(data[tabOpen]);
  }, [tabOpen]);

  const { id, problem, problemInfo, solutionInfo, benefits, benefitPoints } =
    tabData;

  return (
    <div id="problems&solutions" className="py-6 xl:py-10">
      <TechnologiesSectionTitle>Problem & Solution</TechnologiesSectionTitle>
      <div className="mt-6 xl:mt-10">
        <div className="grid grid-cols-4 max-w-[1106px] mx-auto ">
          {data.map(({ id, problem }) => {
            return (
              <div
                key={id}
                onClick={() => setTabOpen(id)}
                className={`text-center hover:cursor-pointer connector ${
                  tabOpen === id && "border-active"
                }`}
              >
                <div
                  className={`h-10 w-10 xl:h-12 xl:w-12 mx-auto rounded-xl flex justify-center items-center z-[2] relative ${
                    tabOpen === id
                      ? "bg-gradient-to-r from-blue-900 to-blue-700"
                      : "bg-[#f8f8fa]"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded ${
                      tabOpen === id ? "bg-white" : "bg-gray-400"
                    } bg-gray-600`}
                  ></div>
                </div>
                {/* <p
                  className={`hidden lg:block font-semibold text-sm xl:text-base mt-4 ${
                    tabOpen === id
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
                      : "text-gray-600"
                  }`}
                >
                  Problem 0{id + 1}
                </p> */}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 xl:mt-10">
          <div className="lg:col-span-5">
            <h2 className="text-[32px] xl:text-4xl 2xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
              <TextGradient text={`0${id + 1}.`} />
            </h2>
            <p className="my-4 text-2xl xl:text-[28px] 2xl:text-[32px] font-semibold">
              <TextGradient text={problem} />
            </p>
            <p className="text-gray-600 text-sm xl:text-base leading-[22px]">
              {problemInfo}
            </p>
          </div>
          <div className="lg:col-span-7 xl:col-span- bg-white p-5 rounded-[20px] shadow-[-4px_-4px_25px_0px_#E5EBF3]">
            <p className="text-xl xl:text-[22px] font-semibold">
              <TextGradient text="Solutions:" />
            </p>
            <p className="pl-4 pt-1.5 pb-4 text-gray-600 text-sm xl:text-base">
              {solutionInfo}
            </p>
            {/* <p className="text-lg text-gray-800 font-medium mb-4">{benefits}</p> */}
            <div className="flex flex-col gap-3">
              {benefitPoints.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Point />
                  <div className="text-gray-600 text-sm xl:text-base break-words w-full">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailProblemsAndSolution;

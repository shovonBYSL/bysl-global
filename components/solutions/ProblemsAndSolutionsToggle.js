import Image from "next/image";
import { useState } from "react";

import SectionHeader from "../shared/SectionHeader";
import { TextGradient } from "../shared/SharedTextgroups";

const ProblemsAndSolutionsToggle = ({ data, children }) => {
  const [problems, setProblems] = useState(true);
  const [solutions, setSolutions] = useState(false);

  const toggleHandler = () => {
    setProblems(!problems);
    setSolutions(!solutions);
  };

  const handleProblems = () => {
    setProblems(true);
    setSolutions(false);
  };

  const handleSolutions = () => {
    setSolutions(true);
    setProblems(false);
  };

  return (
    <div id="problems&solutions" className="py-10 xl:py-16">
      <SectionHeader>{children}</SectionHeader>
      <div className="mt-10 2xl:mt-16">
        <div className="mb-10 2xl:mb-16 w-max mx-auto flex items-center gap-10 ">
          <p
            onClick={handleProblems}
            className={`text-xl 2xl:text-2xl font-medium hover:cursor-pointer ${
              !problems && "opacity-40"
            }`}
          >
            <TextGradient text="Problems" />
          </p>
          <div
            onClick={toggleHandler}
            className={`h-5 w-10 2xl:h-6 2xl:w-12 bg-[#E1EAF4] rounded-[20px] flex hover:cursor-pointer transition-all duration-1000 ${
              !problems && "justify-end"
            }`}
          >
            <div className="h-6 2xl:h-8 w-6 2xl:w-8 -mt-[2px] 2xl:-mt-1 rounded-full bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
              <span className="h-4 2xl:h-5 w-4 2xl:w-5 bg-white rounded-full" />
            </div>
          </div>
          <p
            onClick={handleSolutions}
            className={`text-xl 2xl:text-2xl font-medium hover:cursor-pointer ${
              !solutions && "opacity-40"
            }`}
          >
            <TextGradient text="Solutions" />
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {data.map(
            ({
              id,
              problem,
              solution,
              problemInfo,
              problemImg,
              solutionImg,
            }) => {
              return (
                <div
                  key={id}
                  className="rounded-[20px] lg:h-[300px] 2xl:h-[340px] p-5 lg:pb-16 2xl:pb-28 bg-white text-center lg:text-start"
                >
                  <div className="h-10 w-10 lg:h-16 lg:w-16 2xl:h-20 2xl:w-20 mx-auto lg:mx-0 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
                    <div className="relative h-3 w-5 lg:h-5 2xl:h-6 lg:w-8 2xl:w-10">
                      <Image
                        src={problems ? problemImg : solutionImg}
                        alt=""
                        layout="fill"
                      />
                    </div>
                  </div>
                  <p className="text-gray-800 font-semibold sm:text-lg 2xl:text-2xl mt-5 mb-2">
                    {problem}
                  </p>
                  <p className="text-gray-600 text-sm 2xl:text-base">
                    {problems ? problemInfo : solution}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemsAndSolutionsToggle;

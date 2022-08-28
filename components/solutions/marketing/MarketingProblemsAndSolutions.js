import Image from "next/image";
import { useEffect, useState } from "react";

import SectionHeader from "../../shared/SectionHeader";
import { Heading, Info, Title } from "../SolutionsSharedTextStyle";
import { BulletPoints } from "../../shared/BulletPoints";
import { marketingScroll } from "../../../utils/scroller";

const MarketingProblemsAndSolutions = ({ data }) => {
  const [tabOpen, setTabOpen] = useState(0);
  const [tabData, setTabData] = useState(data[0]);

  useEffect(() => {
    setTabData(data[tabOpen]);
  }, [tabOpen]);

  const handleClick = (id) => {
    setTabOpen(id);
    screen.width <= 768 && marketingScroll(id);
  };

  const {
    problem,
    problemInfo,
    solution,
    solutionInfo,
    solutionPoints,
    solutionImg,
    benefits,
  } = tabData;

  return (
    <div id="problems&solutions" className="py-10 xl:py-16">
      <SectionHeader>Problem & Solution</SectionHeader>
      <div
        className={`w-full overflow-x-auto mt-6 xl:mt-10 flex lg:grid grid-cols-5 gap-4 lg:gap-0 bg-white ${
          (tabOpen === 0 && "rounded-l-lg lg:rounded-l-[20px]") ||
          (tabOpen === 4 && "rounded-r-lg lg:rounded-r-[20px]")
        }`}
      >
        {data.map(({ id, problemImg, problemImgWhite, problem }) => {
          return (
            <div
              id={id}
              key={id}
              onClick={() => handleClick(id)}
              className={`w-max lg:w-full px-2 xl:px-5 2xl:px-10 rounded-lg lg:rounded-[20px] flex lg:flex-col items-center hover:cursor-pointer gap-2 lg:gap-4 transition-all duration-700 ${
                tabOpen === id
                  ? "bg-gradient-to-r from-blue-900 to-blue-700  text-white"
                  : " text-gray-800"
              } py-3 xl:py-5`}
            >
              <div className="relative h-8 w-8 lg:h-14 lg:w-14 2xl:h-20 2xl:w-20 lg:mx-auto">
                <Image
                  src={id === tabOpen ? problemImgWhite : problemImg}
                  placeholder="blur"
                  blurDataURL={id === tabOpen ? problemImgWhite : problemImg}
                  alt=""
                  layout="fill"
                />
              </div>
              <p className="w-40 lg:w-fit text-sm xl:text-base text-center font-medium">
                {problem}
              </p>
            </div>
          );
        })}
      </div>
      <div className="pt-6 text-center lg:text-start lg:p-10 lg:pb-0">
        <Title label="Problem" />
        <Heading label={problem} />
        <Info text={problemInfo} />
        <div className="grid grid-cols-12 gap-6 lg:mt-16 mb-6">
          <div className="col-span-12 lg:col-span-8">
            <Title label="Solutions" />
            <Heading label={solution} />
            <Info text={solutionInfo} />
            <BulletPoints data={solutionPoints} />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Image
              src={solutionImg}
              placeholder="blur"
              blurDataURL={solutionImg}
              height={400}
              width={444}
              alt=""
            />
          </div>
        </div>
        <Title label="Benefits" />
        <Info noMargin={true} text={benefits} />
      </div>
    </div>
  );
};

export default MarketingProblemsAndSolutions;

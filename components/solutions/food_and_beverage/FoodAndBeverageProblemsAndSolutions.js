import Image from "next/image";
import { useEffect, useState } from "react";

import { scrollYFocus } from "../../../utils/scroller";
import { BulletPointsDouble } from "../../shared/BulletPoints";
import { TechnologiesSectionTitle } from "../../shared/SharedTextgroups";
import { Info } from "../SolutionsSharedTextStyle";

const FoodAndBeverageProblemsAndSolutions = ({ data }) => {
  const [margin, setMargin] = useState(false);
  const [tabOpen, setTabOpen] = useState(0);
  const [tabData, setTabData] = useState(data[0]);

  useEffect(() => {
    setTabData(data[tabOpen === "" ? 0 : tabOpen]);
  }, [tabOpen]);

  const handleClick = (id) => {
    setTabOpen("");
    setMargin(true);

    setTimeout(() => {
      scrollYFocus(id);
      setTabOpen(tabOpen === id ? "" : id);
      setMargin(false);
    }, 1);
  };

  const Tab = ({ data }) => {
    const { id, problem, problemInfo } = data;

    return (
      <div
        className={`rounded lg:p-0 hover:cursor-pointer ${
          tabOpen === id ? "p-3 light-border-gradient" : "pl-3 border"
        }`}
      >
        <div className={`${tabOpen !== id && "py-2.5"} lg:p-2.5`}>
          <p
            className={`${
              tabOpen === id
                ? "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 "
                : "text-gray-500"
            }`}
          >
            {problem}
          </p>
          <p className="pt-2 text-sm text-gray-600">{problemInfo}</p>
        </div>
        {tabOpen === id && (
          <div className="lg:hidden p-3">
            {tabOpen !== "" && <TabContent animation={true} />}
          </div>
        )}
      </div>
    );
  };

  const TabContent = (props) => {
    const { problem, solutionInfo, solutionImg, solutionPoints } = tabData;

    return (
      <div className={`${props.animation && "scroll-animation-less"}`}>
        <Image
          src={solutionImg}
          placeholder="blur"
          blurDataURL={solutionImg}
          height={310}
          width={872}
          className="!rounded-lg xl:!rounded-2xl zooming-less-animation"
          objectFit="cover"
          alt=""
        />
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 font-semibold mt-2 xl:mt-4 mb-2">
          {problem}
        </p>
        <Info text={solutionInfo} />
        <BulletPointsDouble data={solutionPoints} />
        <div className="mt-5 flex justify-end">
          <div className="h-max text-center rounded-md text-sm font-medium py-2 xl:py-3 w-28 md:w-36 xl:w-52 hover:cursor-pointer text-white bg-gradient-to-r hover:from-blue-700 hover:to-blue-700  from-blue-900 to-blue-700">
            Let&apos;s Talk
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      id="problems&solutions"
      className={`py-6 xl:py-10  ${margin && "mb-[1000px]"}`}
    >
      <TechnologiesSectionTitle>Problem & Solution</TechnologiesSectionTitle>
      <div className="mt-6 xl:mt-10 grid grid-cols-12 lg:items-center gap-6">
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
          {data.map((item, i) => {
            return (
              <div key={i}>
                <div onClick={() => setTabOpen(i)} className="hidden lg:block">
                  <Tab data={item} />
                </div>
                <div
                  id={i}
                  onClick={() =>
                    tabOpen === i ? setTabOpen("") : handleClick(i)
                  }
                  className="lg:hidden"
                >
                  <Tab data={item} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:block lg:col-span-7 xl:col-span-8 bg-white p-5 rounded-[20px] shadow-[-4px_-4px_25px_0px_#E5EBF3]">
          <TabContent />
        </div>
      </div>
    </div>
  );
};

export default FoodAndBeverageProblemsAndSolutions;

import { useEffect, useState } from "react";

import { BulletPoints } from "../../shared/BulletPoints";
import { Heading, Info, Title } from "../SolutionsSharedTextStyle";
import { TechnologiesSectionTitle } from "../../shared/SharedTextgroups";
import { scrollYFocus } from "../../../utils/scroller";

const FinanceProblemsAndSolutions = ({ data }) => {
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
        className={`rounded-lg lg:p-0 ${
          tabOpen === id
            ? "bg-white p-3 pt-0"
            : "bg-[#EBEFF5] lg:bg-transparent px-3"
        }`}
      >
        <div
          className={`flex gap-3 py-3 lg:p-3 hover:cursor-pointer ${
            tabOpen === id && "bg-white"
          }`}
        >
          <div
            className={`w-2 lg:w-3 rounded-lg ${
              tabOpen === id
                ? "bg-gradient-to-b from-blue-900 to-blue-700"
                : "bg-transparent"
            }`}
          ></div>
          <div>
            <p
              className={`2xl:text-lg font-semibold ${
                tabOpen === id
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
                  : "text-gray-500"
              }`}
            >
              {problem}
            </p>
            <p className="pt-1 text-sm 2xl:text-base text-gray-500">
              {problemInfo}
            </p>
          </div>
        </div>
        {tabOpen === id && (
          <div className={`lg:hidden p-3`}>
            {tabOpen !== "" && <TabContent animation={true} />}
          </div>
        )}
      </div>
    );
  };

  const TabContent = (props) => {
    const { solution, solutionInfo, solutionPoints, benefits } = tabData;

    return (
      <div className={`${props.animation && "scroll-animation-less"}`}>
        <Title label="Solution" />
        <Heading label={solution} />
        <Info text={solutionInfo} />
        <Info text={benefits} />
        <Title label="Benefits" />
        <BulletPoints data={solutionPoints} />
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
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col gap-6 lg:block">
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

export default FinanceProblemsAndSolutions;

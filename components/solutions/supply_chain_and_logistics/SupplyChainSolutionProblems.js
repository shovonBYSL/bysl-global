import Image from "next/image";
import { useState } from "react";

import SectionHeader from "../../shared/SectionHeader";
import { supplyScroll } from "../../../utils/scroller";

const SupplyChainSolutionProblems = ({ type, children, data }) => {
  const [open, setOpen] = useState(0);

  const handleClick = (id) => {
    setOpen(id);
    screen.width < 1024 && supplyScroll(id);
  };

  return (
    <div id="problems" className="py-10 xl:py-16">
      <SectionHeader type={type}>{children}</SectionHeader>
      <div className="mt-6 lg:mt-10 grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 lg:col-span-3 overflow-x-auto">
          <div className="flex lg:flex-col gap-y-6 gap-x-8">
            {data.map(({ id, problem }) => (
              <div
                key={id}
                className="flex flex-col lg:flex-row items-center gap-x-5 gap-y-2 hover:cursor-pointer min-w-max"
              >
                <hr
                  className={`hidden lg:block h-6 w-[3px] rounded-xl ${
                    open === id
                      ? "bg-gradient-to-b from-blue-900 to-blue-700"
                      : "bg-transparent"
                  }`}
                />
                <p
                  id={id}
                  key={id}
                  onClick={() => handleClick(id)}
                  className={`font-medium xl:text-xl ${
                    open === id
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
                      : "text-gray-800"
                  }`}
                >
                  {problem}
                </p>
                <span
                  className={`lg:hidden h-[3px] w-full rounded-xl ${
                    open === id
                      ? "bg-gradient-to-b from-blue-900 to-blue-700"
                      : "bg-transparent"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-9">
          {data.map(({ id, problem, problemInfo, problemImg }) => {
            return (
              id === open && (
                <div
                  key={id}
                  className="grid grid-cols-9 gap-6 items-center zooming-animation"
                >
                  <div className="col-span-9 md:col-span-5">
                    <p className="text-center font-medium md:text-start text-xl xl:text-2xl lg:mt-5 2xl:mt-10 mb-6 text-gray-800">
                      {problem}
                    </p>
                    <p className="text-center md:text-start text-sm xl:text-base text-gray-600">
                      {problemInfo}
                    </p>
                  </div>
                  <div className="col-span-9 md:col-span-4 text-center">
                    <Image
                      src={problemImg}
                      placeholder="blur"
                      blurDataURL={problemImg}
                      height={232}
                      width={404}
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SupplyChainSolutionProblems;

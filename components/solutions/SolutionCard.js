import Image from "next/image";

import { getPath } from "../../utils/paths";
import Point from "../svg/Point";
import SolutionsImageSvg from "../svg/solutions/SolutionsImageSvg";

const SolutionCard = ({ data }) => {
  const { solution, solutionInfo, solutionImg, solutionPoints } = data;
  const educationPath = getPath("/solutions/education");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative pb-10 lg:pb-14">
      <div>
        <p className="text-gray-800 font-semibold text-lg xl:text-xl 2xl:text-2xl mb-4">
          {solution}
        </p>
        <p className="text-gray-600 mb-6">{solutionInfo}</p>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 my-5 xl:mt-6 lg:mb-0 gap-y-2.5 lg:gap-x-2 xl:gap-x-0">
          {solutionPoints.map((item, i) => (
            <div key={i} className="flex items-start">
              <Point />
              <p className="text-gray-600 text-sm xl:text-base ml-3 w-full">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full sm:w-2/3 lg:w-full mx-auto">
        {educationPath ? (
          <div className="xl:w-11/12 mx-auto">
            <SolutionsImageSvg />
          </div>
        ) : (
          <Image
            src="/images/solutions/supply_chain/solution.png"
            placeholder="blur"
            blurDataURL="/images/solutions/supply_chain/solution.png"
            height={313}
            width={537}
            className="!rounded-[20px]"
            objectFit="contain"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default SolutionCard;

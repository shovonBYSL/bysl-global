import Image from "next/image";

import { getPath } from "../../utils/paths";

const SolutionCard = ({ data }) => {
  const { problem, solution, solutionImg, solutionPoints } = data;
  const educationPath = getPath("/solutions/education");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative pb-10 lg:pb-14">
      <div className="xl:mt-10">
        <p className="text-gray-800 font-semibold text-lg xl:text-xl 2xl:text-2xl mb-4">
          {problem}
        </p>
        <p className="text-gray-500 xl:text-lg mb-6">{solution}</p>
        <div className="grid grid-cols-1 xs:grid-cols-2 my-5 xl:mt-6 lg:mb-0 gap-y-2.5 lg:gap-x-2 xl:gap-x-0">
          {solutionPoints.map((item, i) => (
            <div key={i} className="flex items-start">
              <Image
                src="/images/items_icon.svg"
                alt=""
                height={24}
                width={24}
              />
              <p className="text-gray-600 text-sm xl:text-base ml-3 w-full">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:w-2/3 lg:w-full mx-auto">
        {educationPath ? (
          <Image
            src={solutionImg}
            placeholder="blur"
            blurDataURL={solutionImg}
            height={339}
            width={640}
            objectFit="contain"
            alt=""
          />
        ) : (
          <Image
            src={solutionImg}
            placeholder="blur"
            blurDataURL={solutionImg}
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

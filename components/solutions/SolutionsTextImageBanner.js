import Image from "next/image";
import { Link as Scroll } from "react-scroll";
import { getPath } from "../../utils/paths";

import { SectionTitleGradient, TextGradient } from "../shared/SharedTextgroups";

const SolutionsTextImageBanner = ({ data, children }) => {
  const { img, type, heading, subHeading } = data;

  const retailPath = getPath("/solutions/retail");

  return (
    <div
      className={`${
        retailPath ? "py-10 xl:py-16" : "pt-6 md:pt-0"
      } grid grid-cols-12 gap-6`}
    >
      <div
        className={`col-span-12 md:col-span-7 ${
          !retailPath && "mb-6 md:mt-10"
        }`}
      >
        <div className="text-center md:text-start">
          <p className="text-sm sm:text-base lg:text-lg font-bold mb-2">
            <TextGradient text={type} />
          </p>
          <SectionTitleGradient>
            {heading ? heading : children}
          </SectionTitleGradient>
          <p className="mt-4 text-gray-600 text-sm lg:text-base xl:text-lg 2xl:text-xl mx-4 md:mx-0">
            {subHeading}
          </p>
        </div>
        <div className="w-full mt-6 lg:mt-8 xl:mt-10 flex flex-col md:flex-row gap-6 justify-center md:justify-start items-center">
          <Scroll smooth={true} offset={-60} duration={500} to="overview">
            <div className="h-max text-center text-sm font-medium py-2 xl:py-3 w-52 md:w-[137px] cursor-pointer border hover:text-white text-blue-700 solutionsBtn transition-all duration-500">
              Overview
            </div>
          </Scroll>
          <Scroll
            smooth={true}
            offset={-60}
            duration={500}
            to="problems&solutions"
          >
            <div className="h-max text-center text-sm font-medium py-2 xl:py-3 w-52 cursor-pointer border hover:text-white text-blue-700 solutionsBtn transition-all duration-500">
              Problems & Solutions
            </div>
          </Scroll>
        </div>
      </div>
      <div className="col-span-12 md:col-span-5">
        <Image
          src={img}
          placeholder="blur"
          blurDataURL={img}
          objectFit="contain"
          height={430}
          width={536}
          priority
          alt=""
        />
      </div>
    </div>
  );
};

export default SolutionsTextImageBanner;

import Image from "next/image";

import { getPath } from "../../../utils/paths";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../SharedTextgroups";

const SectionBanner = ({ data }) => {
  const { title, subTitle } = data;

  const missionPath = getPath("/about-us/mission");
  const culturePath = getPath("/about-us/culture");

  return (
    <div
      className={`flex flex-col md:flex-row-reverse justify-between md:items-center gap-4 2xl:gap-6 ${
        !missionPath && "py-10 xl:py-16"
      }`}
    >
      <div
        className={`w-4/5 md:w-1/2 mx-auto flex justify-end ${
          culturePath && "px-4 2xl:px-12"
        }`}
      >
        <Image
          src={`/images/banners/${title}_banner.svg`}
          placeholder="blur"
          blurDataURL={`/images/banners/${title}_banner.svg`}
          height={(missionPath && 480) || 283}
          width={452}
          objectFit="contain"
          alt=""
        />
      </div>
      <div className="md:w-3/5 lg:w-1/2">
        <p className="text-gray-800 text-lg md:text-2xl lg:text-4xl xl:text-5xl 3xl:text-[64px] font-bold uppercase mb-1 md:mb-2 lg:mb-3 3xl:mb-5">
          {title}
        </p>
        <p className="text-gray-600 leading-5 text-xs sm:text-sm 2xl:text-base text-justify">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

const TextBanner = (props) => {
  const { children, data, reversed } = props;
  const { type, subTitle, img } = data;

  return (
    <div
      className={`py-10 xl:py-16 lg:flex justify-between gap-6 w-full ${
        reversed && "flex-row-reverse"
      }`}
    >
      <div className="lg:w-1/2 xl:pt-10 pb-10 lg:pb-0">
        {type && <SectionTitleType title={type} start={true} />}
        {children && (
          <TechnologiesSectionTitle start={true}>
            {children}
          </TechnologiesSectionTitle>
        )}
        <p className="mt-6 text-gray-300 leading-5 text-sm md:text-base text-center lg:text-start lg:w-5/6">
          {subTitle}
        </p>
      </div>
      <div className="flex justify-center lg:w-1/2 mx-auto">
        <Image
          src={img}
          placeholder="blur"
          blurDataURL={img}
          height={380}
          width={648}
          objectFit="contain"
          alt=""
        />
      </div>
    </div>
  );
};

const GradientBanner = ({ title, details, details2 }) => {
  const investmentPath = getPath("/investments");

  return (
    <div className="py-10 lg:py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="box flex flex-col lg:flex-row items-center gap-6 !max-w-[1050px]">
        <div className="w-full lg:w-1/2">
          <div className="h-[2px] w-[86px] bg-white rounded-full"></div>
          <p className="mt-6 text-[40px] lg:text-[64px] font-semibold lg:!leading-[76px] break-words">
            {title}
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <p className={`text-sm ${investmentPath && "md:text-base xl:text-xl"}`}>{details}</p>
          {details2 && <p className="text-sm mt-4">{details2}</p>}
        </div>
      </div>
    </div>
  );
};

export { SectionBanner, TextBanner, GradientBanner };

import Image from "next/image";

import { getPath } from "../../../utils/paths";
import { bigDataTechBannerSvg } from "../../svg/technologies/bigDataTechBannerSvg";
import { SectionTitleGradient, TextGradient } from "../SharedTextgroups";

const SecondaryLargeBanner = ({ data, children }) => {
  const { heading, subTitle, img } = data;
  const bigDataPath = getPath("/technologies/bigdata");
  const adminPath = getPath("/divisions/administration");

  return (
    <div className={`py-10 xl:py-16 ${bigDataPath && "!pb-10"}`}>
      <p className="text-sm md:text-base xl:text-lg font-bold text-center mb-2">
        <TextGradient text={heading} />
      </p>
      <SectionTitleGradient centered={true}>{children}</SectionTitleGradient>
      <p className="xs:px-4 sm:w-4/5 lg:w-[62%] mx-auto mt-6 text-gray-600 leading-5 text-sm md:text-base xl:text-lg 2xl:text-xl text-center">
        {subTitle}
      </p>

      <div
        className={`mt-5 lg:mt-10 flex justify-center ${
          adminPath ? "max-w-[1080px]" : "max-w-[1240px]"
        } mx-auto`}
      >
        {bigDataPath ? (
          <div
            className="h-full w-full"
            dangerouslySetInnerHTML={{ __html: bigDataTechBannerSvg }}
          />
        ) : (
          <Image
            src={img}
            alt=""
            placeholder="blur"
            blurDataURL={img}
            height={700}
            width={1080}
            objectFit="contain"
          />
        )}
      </div>
    </div>
  );
};

export default SecondaryLargeBanner;

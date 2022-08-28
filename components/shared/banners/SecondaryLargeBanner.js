import Image from "next/image";

import { getPath } from "../../../utils/paths";
import { SectionTitleGradient, TextGradient } from "../SharedTextgroups";

const SecondaryLargeBanner = ({ data, children }) => {
  const { heading, subTitle, img } = data;
  const bigDataPath = getPath("/technologies/bigdata");

  return (
    <div className={`py-10 xl:py-16 ${bigDataPath && "!pb-10"}`}>
      <p className="text-sm md:text-base xl:text-lg font-bold text-center mb-2">
        <TextGradient text={heading} />
      </p>
      <SectionTitleGradient centered={true}>{children}</SectionTitleGradient>
      <p className="xs:px-4 sm:w-4/5 lg:w-[62%] mx-auto mt-6 text-gray-300 leading-5 text-sm md:text-base text-center">
        {subTitle}
      </p>
      <div className="mt-5 lg:mt-10 flex justify-center max-w-[1240px] mx-auto">
        <Image
          src={img}
          alt=""
          placeholder="blur"
          blurDataURL={img}
          height={bigDataPath ? 633 : 700}
          width={bigDataPath ? 1240 : 1080}
        />
      </div>
    </div>
  );
};

export default SecondaryLargeBanner;
// ${
//   adminPath &&
//   "shadow-2xl shadow-blue-500/25 rounded-[20px] overflow-hidden"
// }

import Image from "next/image";

import SolutionCommonBannerText from "../SolutionCommonBanner";

const MarketingBanner = ({ data }) => {
  return (
    <div className="marketing-box lg:items-center pt-6 md:pt-0 md:flex justify-between gap-6">
      <div className="md:w-4/5 2xl:w-3/5 mb-6 md:mt-10">
        <SolutionCommonBannerText data={data} />
      </div>
      <div className="hidden md:block">
        <Image
          src={data.img}
          placeholder="blur"
          blurDataURL={data.img}
          objectFit="contain"
          height={616}
          width={748}
          priority
          alt=""
        />
      </div>
      <div className="md:hidden text-center">
        <Image
          src={data.imgSmall}
          placeholder="blur"
          blurDataURL={data.imgSmall}
          objectFit="contain"
          height={275}
          width={328}
          priority
          alt=""
        />
      </div>
    </div>
  );
};

export default MarketingBanner;

import Image from "next/image";

import SolutionCommonBannerText from "../SolutionCommonBanner";

const FinanceBanner = ({ data }) => {
  return (
    <div className="pt-6 md:pt-0 grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-7 mb-6 md:mt-10">
        <SolutionCommonBannerText data={data} />
      </div>
      <div className="col-span-12 md:col-span-5">
        <Image
          src={data.img}
          placeholder="blur"
          blurDataURL={data.img}
          objectFit="contain"
          height={444}
          width={536}
          priority
          alt=""
        />
      </div>
    </div>
  );
};

export default FinanceBanner;

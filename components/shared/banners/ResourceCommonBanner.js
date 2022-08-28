import Image from "next/image";

import { TextGradient } from "../SharedTextgroups";

const ResourceCommonBanner = (props) => {
  const { data, reversed, full } = props;
  const { icon, img, type, title, subTitle1, subTitle2 } = data;

  return (
    <div
      className={`resource-banner-box py-10 xl:py-16 px-4 md:px-0 md:flex items-center gap-12 xl:gap-20 3xl:gap-28 overflow-hidden 
      ${reversed && "md:flex-row-reverse"}`}
    >
      <div className="md:w-1/2">
        <div
          className={`md:w-4/5 xl:w-[73%] 5xl:w-full 
          ${!reversed && "ml-auto 5xl:ml-0"}`}
        >
          <div className="relative h-10 w-10 2xl:h-16 2xl:w-16 mx-auto md:mx-0">
            <Image
              src={icon}
              placeholder="blur"
              blurDataURL={icon}
              layout="fill"
              alt=""
            />
          </div>
          <p className="mt-1 mb-5 md:my-6 text-xs lg:text-sm uppercase font-medium text-center md:text-start">
            <TextGradient text={type} />
          </p>
          <p
            className={`break-words text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] font-semibold text-gray-800 md:text-start text-center mb-4 md:mb-6 xl:mb-8 3xl:mb-10 
            ${!full && "md:w-[70%] 3xl:w-[55%]"}`}
          >
            {title}
          </p>
          <p className="text-gray-500 text-sm 2xl:text-base mb-10 xl:mb-16 text-center sm:text-start">
            {subTitle1}
            <br />
            <br />
            {subTitle2}
          </p>
        </div>
      </div>
      <div
        className={`md:w-1/2 ${
          reversed
            ? "md:-ml-16 xl:-ml-24 3xl:-ml-32 5xl:ml-0 5xl:flex justify-end"
            : "md:-mr-16 xl:-mr-24 3xl:-mr-32 5xl:mr-0"
        }`}
      >
        <Image
          src={img}
          placeholder="blur"
          blurDataURL={img}
          height={736}
          width={996}
          alt=""
        />
      </div>
    </div>
  );
};

export default ResourceCommonBanner;

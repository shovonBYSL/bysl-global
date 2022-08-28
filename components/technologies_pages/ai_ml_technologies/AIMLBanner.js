import Image from "next/image";

import {
  SectionTitleGradient,
  TextGradient,
} from "../../shared/SharedTextgroups";

const AIMLBanner = ({ title, sub, img, children }) => {
  return (
    <div className="aiml-box items-center pt-10 md:pt-0 md:flex justify-between gap-6 max-h-max">
      <div className="md:w-[55%] mb-10 md:my-0 md:pt-10">
        <div className="text-center md:text-start">
          <p className="text-sm sm:text-base lg:text-lg font-bold mb-2">
            <TextGradient text={title} />
          </p>
          <SectionTitleGradient>{children}</SectionTitleGradient>
          <p className="mt-4 text-gray-600 text-sm sm:text-base xl:text-xl 2xl:w-4/5">
            {sub}
          </p>
        </div>
      </div>
      <div className="md:w-[45%]">
        <div className="h-56 xs:h-[40vh] xl:h-[50vh] max-h-[600px] w-full relative">
          <Image
            src={img}
            layout="fill"
            placeholder="blur"
            blurDataURL={img}
            objectFit="contain"
            priority
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AIMLBanner;

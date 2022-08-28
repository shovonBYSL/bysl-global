import Image from "next/image";

import {
  SectionTitleGradient,
  TextGradient,
} from "../../shared/SharedTextgroups";

const EducationSolutionsBanner = ({ banner }) => {
  return (
    <div className="py-10 xl:py-16">
      <div className="flex items-center justify-center h-full w-full text-center mb-6 xl:mb-10">
        <div className="text-center">
          <p className="text-sm sm:text-base lg:text-lg font-bold mb-2">
            <TextGradient text="Education" />
          </p>
          <SectionTitleGradient>
            eLearning The Future of <br /> <TextGradient text=" Education" />
          </SectionTitleGradient>
          <p className="text-gray-600 text-sm xl:text-base w-5/6 max-w-[690px] mx-auto mt-5">
            Harness the potential of mega data pools across various platforms to
            introduce revolutionary transformations to individual, scientific
            and business journeys.
          </p>
        </div>
      </div>
      <div className="relative h-[320px] xl:h-[554px] ">
        <Image
          src={banner}
          placeholder="blur"
          blurDataURL={banner}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default EducationSolutionsBanner;

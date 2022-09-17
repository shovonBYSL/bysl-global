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
            Shaping the future with better
            <br />
            technology for education
          </SectionTitleGradient>
          <p className="text-gray-600 text-sm lg:text-base xl:text-lg 2xl:text-xl w-5/6 max-w-[730px] mx-auto mt-5">
            We work to streamline information to classroom from the real world
            as much as moving the classroom outside the four walls. We endeavor
            to connect learning with tech utilizing next-gen applications to
            create the classrooms of the future; a future where learners are
            presented with simulated projections of miniatured worlds, topics of
            studies and access knowledge from anywhere.
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

import { SectionTitleGradient, TextGradient } from "../shared/SharedTextgroups";

const CareersBanner = () => {
  return (
    <div className="py-10 lg:py-16">
      <SectionTitleGradient centered={true}>
        <span className="2xl:leading-[80px] font-extrabold">
          Get The <TextGradient text=" Right Job" /> <br /> You Deserve
        </span>
      </SectionTitleGradient>
      <p className="max-w-2xl text-sm md:text-base mx-auto text-center text-gray-600 mt-6">
        BYSL Global Technology Group stands on four core values regarded as the
        fundamental ideological constants to govern the organization. The
        chronology of these values is arranged on a priority basis.
      </p>
    </div>
  );
};

export default CareersBanner;

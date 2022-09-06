import { SectionTitleGradient, TextGradient } from "../shared/SharedTextgroups";

const CareersBanner = () => {
  return (
    <div className="py-10 lg:py-16">
      <SectionTitleGradient centered={true}>
        <span className="2xl:leading-[80px] font-extrabold">
          Be a <TextGradient text=" part " /> of
          <br />
          BYSL Global Family
        </span>
      </SectionTitleGradient>
      <p className="max-w-2xl text-sm md:text-base mx-auto text-center text-gray-600 mt-6">
        Own your journey and steer your career right to the Himalayan peak of
        excellence. BYSL Global stands firm as a lighthouse accumulating waves
        of talents from every direction of the current. Go for the tangible,
        high-potential transformation in your career towards the direction of
        light utilizing the state-of-the-art facility with limitless potentials.
      </p>
    </div>
  );
};

export default CareersBanner;

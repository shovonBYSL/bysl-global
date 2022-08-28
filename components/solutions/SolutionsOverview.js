import { TechnologiesSectionTitle } from "../shared/SharedTextgroups";

const SolutionsOverview = ({ data }) => {
  return (
    <div id="overview" className="py-10 xl:py-16">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 min-h-max px-5 md:px-16 lg:px-20 2xl:px-32 py-10 text-center text-white rounded-xl lg:rounded-3xl 2xl:rounded-[40px]">
        <p className="text-white/80 font-medium">Overview</p>
        <div className="mt-2 mb-6 max-w-[644px] mx-auto">
          <TechnologiesSectionTitle white={true}>
            {data.title}
          </TechnologiesSectionTitle>
        </div>

        <p className="text-white/60 leading-5 text-sm xl:text-base">
          {data.subTitle}
        </p>
      </div>
    </div>
  );
};

export default SolutionsOverview;

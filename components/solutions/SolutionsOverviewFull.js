const SolutionsOverviewFull = ({ data }) => {
  return (
    <div className="py-10 xl:py-16 ">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-2.5 py-10 xl:py-24 text-center lg:text-start text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 max-w-[800px] xl:max-w-[1080px] mx-auto">
          <div>
            <p className="text-white/80 font-medium">Overview</p>
            <p className="break-words text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-[40px] 2xl:leading-[48px] font-bold text-center text-white lg:text-start">
              {data.title}
            </p>
          </div>
          <div className="text-white/60 leading-5 text-sm xl:text-base">
            <p>
              {data.subTitle1}
              <br />
            </p>
            <p className="mt-4">{data.subTitle2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsOverviewFull;

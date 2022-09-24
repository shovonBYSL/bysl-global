const ITPlatforms = ({ data }) => {
  return (
    <div className="py-10 xl:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 2xl:gap-10">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="group cursor-pointer bg-white py-6 lg:py-10 2xl:py-14 w-full rounded-[10px] shadow-[0px_0px_20px_0px_#EAECF3] flex items-center justify-center"
            >
              <div
                dangerouslySetInnerHTML={{ __html: item }}
                className="relative h-[100px] w-[100px] xxxs:h-[130px] xxxs:w-[130px] xl:h-[170px] xl:w-[170px] 2xl:h-[205px] 2xl:w-[205px] group-hover:scale-110 transition duration-1000"
              />
            </div>
          );
        })}
      </div>
      <div id="marketplace-platform" />
    </div>
  );
};

export default ITPlatforms;

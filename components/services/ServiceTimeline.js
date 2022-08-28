import Image from "next/image";

const ServiceTimeline = ({ data }) => {
  const TimelineItems = (props) => {
    const { timelineData, right } = props;

    return (
      <div className={`lg:w-11/12 ${right && "lg:ml-auto"}`}>
        <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-4 2xl:gap-6">
          {timelineData.map(({ id, img, title, subTitle }) => {
            return (
              <div
                key={id}
                className="flex flex-col justify-center text-center"
              >
                <Image src={img} height={85} width={80} alt="" />
                <p className="py-2.5 text-xs sm:text-sm 2xl:text-base 3xl:text-xl font-bold  text-gray-800">
                  {title}
                </p>
                <p className="text-[10px] sm:text-sm text-gray-300">
                  {subTitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="py-10 xl:py-16 flex flex-col gap-6 lg:gap-24">
      <TimelineItems timelineData={data.slice(0, 4)} />
      <TimelineItems timelineData={data.slice(4, 8)} right={true} />
    </div>
  );
};

export default ServiceTimeline;

import Image from "next/image";

const SolutionsBanner = ({ data, children }) => {
  const { img, heading, title, subTitle } = data;

  return (
    <div className="relative h-[500px] lg:h-screen">
      <Image
        src={img}
        placeholder="blur"
        blurDataURL={img}
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <div className="absolute flex items-center justify-center h-full w-full text-center">
        <div className="text-white">
          <p className="text-sm md:text-base xl:text-lg font-semibold">
            {heading}
          </p>
          <p className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl 3xl:text-[64px] 3xl:leading-[76px] font-semibold max-w-[1286px] mx-auto">
            {title}
          </p>
          <p className="text-sm xl:text-base mx-2 max-w-[690px] sm:mx-auto mt-5">
            {subTitle}
          </p>
          <div className="mt-10 xl:mt-16">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsBanner;

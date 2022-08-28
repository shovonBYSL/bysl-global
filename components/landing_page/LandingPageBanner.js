import Image from "next/image";

const LandingPageBanner = ({ data }) => {
  return (
    <div className="pt-10 overflow-x-hidden">
      <div className="h-52 sm:h-72 md:h-[50vh] lg:h-[78vh] xl:h-[75vh] 2xl:h-[80vh] w-full relative">
        <Image
          src={data}
          layout="fill"
          placeholder="blur"
          blurDataURL={data}
          priority
          alt=""
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default LandingPageBanner;

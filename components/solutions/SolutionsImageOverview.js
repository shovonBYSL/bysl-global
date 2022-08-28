import Image from "next/image";

const SolutionsImageOverview = ({ data }) => {
  const { img, details1, details2, details3 } = data;

  return (
    <div id="overview" className="py-6 xl:py-10 grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-7 mt-6 lg:mt-10 text-center lg:text-start">
        <p className="text-2xl xl:text-[40px] text-gray-800 font-semibold">
          Overview
        </p>
        <p className="mt-2 mb-6 xl:text-xl text-gray-800/80 font-medium">
          {details1}
        </p>
        <p className=" text-sm xl:text-base text-gray-500">{details2}</p>
        <p className="mt-4 text-sm xl:text-base text-gray-500">{details3}</p>
      </div>
      <div className="col-span-12 lg:col-span-5 text-center lg:pt-10">
        <Image
          src={img}
          placeholder="blur"
          blurDataURL={img}
          height={327}
          width={358}
          alt=""
        />
      </div>
    </div>
  );
};

export default SolutionsImageOverview;

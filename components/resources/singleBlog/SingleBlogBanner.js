import Image from "next/image";

const SingleBlogBanner = ({ data }) => {
  const { title, banner, date, timeToRead } = data;

  return (
    <div className="py-6 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="md:mt-6 lg:mt-10 2xl:mt-20">
        <p className="mb-4 break-words text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] font-bold text-gray-800 text-center lg:text-start">
          {title}
        </p>
        <div className="w-full flex justify-between md:max-w-xs">
          <p className="text-[#888B96] text-sm">{date}</p>
          <p id="time" className="text-[#888B96] text-sm"> to read</p>
        </div>
      </div>
      <Image
        src={banner}
        placeholder="blur"
        blurDataURL={banner}
        className="!rounded-[20px]"
        height={376}
        width={636}
        objectFit="cover"
        alt=""
      />
    </div>
  );
};

export default SingleBlogBanner;

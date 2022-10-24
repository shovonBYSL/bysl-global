import Image from "next/image";
import { TextGradient } from "../../shared/SharedTextgroups";

const SingleBlogBanner = ({ data }) => {
  const { type, title, subTitle, banner, date, hits } = data;

  return (
    <div className="py-6 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="md:mt-6 lg:mt-10 2xl:mt-20 flex flex-col justify-between">
        <div>
          <p className="text-xs md:text-sm lg:text-base font-medium text-center lg:text-start">
            <TextGradient text={type} />
          </p>
          <h3 className="mt-2 mb-4 break-words text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] font-bold text-gray-800 text-center lg:text-start">
            {title}
          </h3>
        </div>
        <div>
          <p className="text-gray-800 text-center lg:text-start mb-6">
            {subTitle}
          </p>
          <div className="w-full flex items-center justify-between md:justify-start gap-3">
            <p className="text-[#888B96] text-xs xxs:text-sm">{date}</p>
            <span className="h-2.5 w-px bg-gray-900/20" />
            <p id="time" className="text-[#888B96] text-xs xxs:text-sm">
              to read
            </p>
            <span className="h-2.5 w-px bg-gray-900/20" />
            <p className="text-[#888B96] text-xs xxs:text-sm">{hits} views</p>
          </div>
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

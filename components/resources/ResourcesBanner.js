import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { SwiperSlide } from "swiper/react";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

import SliderLayout from "../shared/slider/SliderLayout";
import ResourcesBannerSlider1 from "./ResourcesBannerSlider1";
import ResourcesBannerSlider2 from "./ResourcesBannerSlider2";
import { TextGradient } from "../shared/SharedTextgroups";
import Loader from "../shared/Loader";

const ResourcesBanner = ({ data }) => {
  const newArray = [data[0], data[4], data[3], data[2], data[1]];

  const BannerImage = ({ data }) => {
    return (
      <>
        <div className="relative h-[372px] lg:min-h-[450px] xl:min-h-[550px] 2xl:h-[700px] w-full">
          <Image
            src={data.featured_image}
            placeholder="blur"
            blurDataURL={data.featured_image}
            layout="fill"
            objectFit="cover"
            alt=""
          />
          {/* <div className="bg-[#B2C7E2]/30 absolute h-full w-full z-40"/> */}
        </div>
      </>
    );
  };

  const BannerContent = ({ data }) => {
    const { view_count, slug, post_title, category, created_at, read_time } =
      data;

    return (
      <div className="px-4 pt-6 mb-14 md:px-0 md:pt-0 md:mb-0">
        <p className="text-xs md:text-sm lg:text-base font-medium">
          <TextGradient text={category.category_name} />
        </p>
        <h3 className="mt-2 mb-2.5 lg:mb-5 xl:mb-10 break-words text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] font-bold text-gray-800 text-start">
          {post_title}
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-6 lg:gap-6">
          <div className="w-full flex items-center justify-between md:justify-start gap-3">
            <p className="text-gray-600 text-xs lg:text-sm">
              {format(new Date(created_at), "MMM d, y")}
            </p>
            <span className="h-2.5 w-px bg-gray-900/20" />
            <p id="time" className="text-gray-600 text-xs lg:text-sm">
              {read_time} mins to read
            </p>
            <span className="h-2.5 w-px bg-gray-900/20" />
            <p className="text-gray-600 text-xs lg:text-sm">
              {view_count} views
            </p>
          </div>
          <Link passHref href={`/resource/${slug}`}>
            <a className="w-40 text-sm text-center light-border-gradient text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 py-2">
              Read More
            </a>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      {data ? (
        <>
          <div className="hidden md:block relative mb-16 resource-slider">
            <ResourcesBannerSlider1>
              {newArray.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <BannerImage data={item} />
                  </SwiperSlide>
                );
              })}
            </ResourcesBannerSlider1>
            <div className={`md:box flex justify-between`}>
              <div className="hidden md:flex gap-5 mt-5">
                <p className="absolute top-[37%] left-[40px] xl:left-[70px] z-40 h-9 w-9 xl:h-11 xl:w-11 rounded-full text-blue-900 bg-white transition duration-500 flex justify-center items-center hover:cursor-pointer resourceSlidePrev-btn ">
                  <VscArrowLeft className="text-2xl" />
                </p>
                <p className="absolute top-[37%] right-[40px] xl:right-[70px] z-40 h-9 w-9 xl:h-11 xl:w-11 rounded-full text-blue-900 bg-white transition duration-500 flex justify-center items-center hover:cursor-pointer resourceSlideNext-btn ">
                  <VscArrowRight className="text-2xl" />
                </p>
              </div>
              <div className="max-h-[320px] flex justify-center items-center md:bg-white md:shadow-[-4px_4px_18px_rgba(34,82,155,0.1)] md:rounded-xl xl:rounded-[20px] p-5 lg:p-7 xl:p-10 max-w-full md:max-w-md lg:max-w-xl xl:max-w-[760px] md:-mt-32 lg:-mt-40 xl:-mt-48 z-40">
                <ResourcesBannerSlider2>
                  {data.map((item, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <BannerContent data={item} />
                      </SwiperSlide>
                    );
                  })}
                </ResourcesBannerSlider2>
              </div>
            </div>
          </div>
          <div className="md:hidden pb-2 relative service-blog-slider">
            <SliderLayout>
              {data.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <BannerImage data={item} />
                    <BannerContent data={item} />
                  </SwiperSlide>
                );
              })}
            </SliderLayout>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ResourcesBanner;

import Image from "next/image";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { TextGradient } from "../shared/SharedTextgroups";
import { SwiperSlide } from "swiper/react";

import ResourcesBannerSlider1 from "./ResourcesBannerSlider1";
import ResourcesBannerSlider2 from "./ResourcesBannerSlider2";
import SliderLayout from "../shared/slider/SliderLayout";
// import { useEffect, useState } from "react";

const ResourcesBanner = ({ banner }) => {
  const BannerImage = () => {
    return (
      <div className="relative h-96 lg:h-[600px] 2xl:h-[650px] 3xl:h-[725px] w-full">
        <Image
          src="/images/banners/resources_banner_0.png"
          placeholder="blur"
          blurDataURL="/images/banners/resources_banner_0.png"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    );
  };
  const BannerContent = () => {
    return (
      <div>
        <p className="text-xs md:text-sm lg:text-base font-medium">
          <TextGradient text="Supply Chain" />
        </p>
        <p className="mt-2 mb-2.5 lg:mb-5 xl:mb-10 break-words text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] font-bold text-gray-800 text-start">
          Changing logistics operations solutions with computerized innovation
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="w-full flex justify-between md:justify-start gap-3">
            <p className="text-[#888B96] text-sm">May 22, 2022</p>
            <div className="flex items-center gap-3">
              <span className="h-4 w-4 border rounded-full"></span>
              <p className="text-[#888B96] text-sm">5 mins to read</p>
            </div>
          </div>
          <button className="w-40 text-sm light-border-gradient text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 py-2">
            Read More
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="hidden md:block relative mb-16 md:h-[65vh] lg:h-[95vh] xl:h-screen resource-slider">
        <ResourcesBannerSlider1>
          {[...Array(3)].map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <BannerImage />
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
          <div className="max-h-[320px] flex justify-center items-center md:bg-white md:shadow-[-4px_4px_18px_rgba(34,82,155,0.1)] md:rounded-xl xl:rounded-[20px] p-5 lg:p-7 xl:p-10 max-w-full md:max-w-md lg:max-w-xl xl:max-w-[760px] md:-mt-24 lg:-mt-40 xl:-mt-48 z-40">
            <ResourcesBannerSlider2>
              {[...Array(3)].map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <BannerContent />
                  </SwiperSlide>
                );
              })}
            </ResourcesBannerSlider2>
          </div>
        </div>
      </div>
      <div className="md:hidden pb-6 card-slider">
        <SliderLayout>
          <SwiperSlide>
            <BannerImage />
            <div className="px-4 py-6">
              <BannerContent />
            </div>
          </SwiperSlide>
        </SliderLayout>
      </div>
    </>
  );
};

export default ResourcesBanner;

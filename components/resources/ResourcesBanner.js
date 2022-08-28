import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { TextGradient } from "../shared/SharedTextgroups";
import { SwiperSlide } from "swiper/react";

import ResourcesBannerSlider1 from "./ResourcesBannerSlider1";
import ResourcesBannerSlider2 from "./ResourcesBannerSlider2";

const ResourcesBanner = ({ banner }) => {
  return (
    <div className="pt-14 lg:pt-0 mb-12 lg:mb-0 relative h-[480px] lg:h-screen">
      <ResourcesBannerSlider1>
        {[...Array(3)].map((item) => {
          return (
            <SwiperSlide>
              <img src="/images/banners/resources_banner.png" alt="" />
            </SwiperSlide>
          );
        })}
      </ResourcesBannerSlider1>
      <div className="box flex justify-between">
        <div className="flex gap-5 mt-5">
          <p className="h-[32px] w-[32px] xl:h-11 xl:w-11 rounded-full text-gray-800 bg-gray-200 hover:bg-gray-300/50 transition duration-500 flex justify-center items-center hover:cursor-pointer resourceSlidePrev-btn ">
            <VscArrowLeft className="text-2xl" />
          </p>
          <p className="h-[32px] w-[32px] xl:h-11 xl:w-11 rounded-full text-gray-800 bg-gray-200 hover:bg-gray-300/50 transition duration-500 flex justify-center items-center hover:cursor-pointer resourceSlideNext-btn ">
            <VscArrowRight className="text-2xl" />
          </p>
        </div>
        <div className="h-[320px] flex justify-center items-center bg-white shadow-[-4px_4px_18px_rgba(34,82,155,0.1)] rounded-[20px] p-10 w-[760px] -mt-36 z-40">
          <ResourcesBannerSlider2>
            {[...Array(3)].map((item) => {
              return (
                <SwiperSlide>
                  <div>
                    <p className="font-medium">
                      <TextGradient text="Supply Chain" />
                    </p>
                    <p className="mt-2 mb-10 break-words text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-[40px] font-bold text-gray-800 text-start">
                      Changing logistics operations solutions with computerized
                      innovation
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-3">
                        <p className="text-[#888B96]">May 22, 2022</p>
                        <div className="flex items-center gap-3">
                          <span className="h-4 w-4 border rounded-full"></span>
                          <p className="text-[#888B96]">5 mins to read</p>
                        </div>
                      </div>
                      <button className="light-border-gradient text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 py-2 px-9">
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </ResourcesBannerSlider2>
        </div>
      </div>
    </div>
  );
};

export default ResourcesBanner;

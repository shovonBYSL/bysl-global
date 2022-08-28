import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import HoverImage from "../shared/HoverImage";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../shared/SharedTextgroups";
import SliderLayout from "../shared/slider/SliderLayout";
// import { servicesFeaturesData } from "../../public/data/servicesData";

const ServiceFeatures = ({data}) => {
  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Features" />
      <TechnologiesSectionTitle>
        Why BYSL Global Technology Group?
      </TechnologiesSectionTitle>
      <div
        className={`hidden md:grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 xl:mt-20 gap-5`}
      >
        {data.map(({ id, img, hoverImg, title, subTitle }) => {
          return (
            <div key={id} className={`group gradient-bg p-5`}>
              <div className="p-3 flex items-center justify-between ">
                <div className="h-12 w-11 mx-0 relative">
                  <HoverImage img1={img} img2={hoverImg} />
                </div>
                <p className="text-[#90B2D9] group-hover:text-[#1890E5] text-5xl group-hover:scale-125 font-semibold transition-all duration-500">
                  {"0" + (id + 1)}
                </p>
              </div>
              <p className="text-sm lg:text-base 3xl:text-xl text-gray-800 group-hover:text-white transition-all duration-500 font-bold my-3 2xl:my-5">
                {title}
              </p>
              {subTitle && (
                <div className="text-sm text-gray-500 group-hover:text-white/75 hidden sm:block transition-all duration-500">
                  {subTitle}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="md:hidden mt-10 xl:mt-20 card-slider pb-10">
        <SliderLayout size={1}>
          {data.map(
            ({ id, img, title, subTitle }) => {
              return (
                <SwiperSlide
                  key={id}
                  className="bg-gradient-to-r from-blue-700 to-blue-900 p-5 rounded-[20px]"
                >
                  <div className="p-3 flex items-center justify-between">
                    <div className="h-12 w-11 mx-0 relative">
                      <Image src={img} layout="fill" alt="" />
                    </div>
                    <p className="text-[#1890E5] text-5xl font-semibold">
                      {"0" + (id + 1)}
                    </p>
                  </div>
                  <p className="text-xl text-white font-bold my-3">{title}</p>
                  {subTitle && (
                    <div className="text-sm text-white/75">{subTitle}</div>
                  )}
                </SwiperSlide>
              );
            }
          )}
        </SliderLayout>
      </div>
    </div>
  );
};

export default ServiceFeatures;

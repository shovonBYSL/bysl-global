import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../SharedTextgroups";

const TechSlider = ({ data }) => {
  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Technology" />
      <TechnologiesSectionTitle>
        Tools we use to shape the future
      </TechnologiesSectionTitle>

      <div className="mt-6 lg:mt-10 text-center techSlides">
        <Swiper
          slidesPerView="auto"
          breakpoints={{
            1736: {
              width: 1736,
              slidesPerView: 8,
            },
            1536: {
              width: 1536,
              slidesPerView: 7,
            },
            1280: {
              width: 1280,
              slidesPerView: 6,
            },
            1024: {
              width: 1024,
              slidesPerView: 5,
            },
            768: {
              width: 768,
              slidesPerView: 4,
            },
            425: {
              width: 425,
              slidesPerView: 3,
            },
            320: {
              width: 320,
              slidesPerView: 2,
            },
          }}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          speed={5000}
          freeMode={true}
          autoplay={{
            delay: -1000,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          loopFillGroupWithBlank={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {data.sliders.map(({ id, label, img, icon }) => {
            return (
              <SwiperSlide key={id}>
                <div className="h-[100px] w-full lg:h-[140px] 2xl:h-[200px] 2xl:w-[200px] rounded-lg border border-[#EBEBED] relative mb-5">
                  <div className="w-full h-full flex justify-center items-center">
                    <div
                      dangerouslySetInnerHTML={{ __html: icon }}
                      className="relative h-[50px] w-[50px] lg:h-[65px] lg:w-[65px] 2xl:h-[100px] 2xl:w-[100px]"
                    />
                  </div>
                  <p className="bg-[#F8F8FA] rounded-[50px] px-4 py-1.5 md:px-6 2xl:py-2.5 2xl:px-[30px] text-xs xl:text-sm font-medium text-gray-800 border border-[#EBEBED] absolute -bottom-4 2xl:-bottom-5 inset-x-0 w-max mx-auto">
                    {label}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TechSlider;

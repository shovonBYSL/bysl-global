import Image from "next/image";
import Slider from "react-slick";

import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../SharedTextgroups";

const TechSlider = ({ data }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    draggable: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1736,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Technology" />
      <TechnologiesSectionTitle>
        Tools we use to shape the future
      </TechnologiesSectionTitle>
      <Slider {...settings} className="mt-6 lg:mt-10 text-center techSlides">
        {data.sliders.map(({ id, label, img }) => {
          return (
            <div
              key={id}
              className="h-[100px] w-[100px] lg:h-[140px] lg:w-[140px] 2xl:h-[200px] 2xl:w-[200px] rounded-lg border border-[#EBEBED] relative"
            >
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative h-[50px] w-[50px] lg:h-[65px] lg:w-[65px] 2xl:h-[100px] 2xl:w-[100px]">
                  <Image
                    src={img}
                    placeholder="blur"
                    blurDataURL={img}
                    layout="fill"
                    objectFit="contain"
                    alt=""
                  />
                </div>
              </div>
              <p className="bg-[#F8F8FA] rounded-[50px] px-4 py-1.5 md:px-6 2xl:py-2.5 2xl:px-[30px] text-xs xl:text-sm font-medium text-gray-800 border border-[#EBEBED] absolute -bottom-4 2xl:-bottom-5 inset-x-0 w-max mx-auto">
                {label}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TechSlider;

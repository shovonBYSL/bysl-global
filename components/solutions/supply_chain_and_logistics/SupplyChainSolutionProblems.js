import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import SectionHeader from "../../shared/SectionHeader";
import SolutionsImageSvg from "../../svg/solutions/SolutionsImageSvg";

const SupplyChainSolutionProblems = ({ type, children, data }) => {
  const menu = [
    "Supply chain disruptions",
    "Difficulty in forecasting",
    "Lack of transparency",
    "Manual fulfillment facilities",
  ];

  return (
    <div id="problems" className="pt-10 xl:pt-16">
      <SectionHeader type={type}>{children}</SectionHeader>
      <div className="relative supplySlide pt-6 lg:pt-10 xl:pt-16">
        <Swiper
          loop={true}
          speed={1200}
          direction={"vertical"}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span  class="' + className + '">' + menu[index] + "</span>"
              );
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map(({ id, problemInfo }) => {
            return (
              <SwiperSlide key={id}>
                <div
                  key={id}
                  className="grid grid-cols-9 gap-6 lg:pl-[25%] mt-14 lg:mt-1.5"
                >
                  <div className="col-span-9 md:col-span-5">
                    <p className="text-center md:text-start text-sm xl:text-base text-gray-600">
                      {problemInfo}
                    </p>
                  </div>
                  <div className="col-span-9 md:col-span-4">
                    <SolutionsImageSvg />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SupplyChainSolutionProblems;

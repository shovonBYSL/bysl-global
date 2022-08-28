import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import FeatureCard from "./FeatureCard";

const FeatureSlider = ({ size, data }) => {
  return (
    <Swiper
      slidesPerView={size}
      spaceBetween={20}
      slidesPerGroup={1}
      loop={true}
      grabCursor={true}
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loopFillGroupWithBlank={true}
      navigation={{ prevEl: ".slidePrev-btn", nextEl: ".slideNext-btn" }}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {data.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <FeatureCard key={item.id} data={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default FeatureSlider;

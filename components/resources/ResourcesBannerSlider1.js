import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

const ResourcesBannerSlider1 = ({ size, children }) => {
  return (
    <Swiper
      slidesPerView={size ? size : 1}
      spaceBetween={20}
      slidesPerGroup={1}
      centeredSlides={true}
      loop={true}
      speed={1000}
      allowTouchMove={false}
      autoplay={{
        delay: 3500,
        reverseDirection: true,
        disableOnInteraction: false,
      }}
      loopFillGroupWithBlank={true}
      navigation={{
        prevEl: ".resourceSlideNext-btn",
        nextEl: ".resourceSlidePrev-btn",
      }}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};
export default ResourcesBannerSlider1;

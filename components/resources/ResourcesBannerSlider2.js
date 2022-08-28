import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

const ResourcesBannerSlider2 = ({ size, children }) => {
  return (
    <Swiper
      slidesPerView={size ? size : 1}
      spaceBetween={20}
      slidesPerGroup={1}
      centeredSlides={true}
      allowTouchMove={false}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loopFillGroupWithBlank={true}
      navigation={{
        prevEl: ".resourceSlidePrev-btn",
        nextEl: ".resourceSlideNext-btn",
      }}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};
export default ResourcesBannerSlider2;

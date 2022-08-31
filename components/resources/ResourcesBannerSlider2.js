import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

const ResourcesBannerSlider2 = ({ children }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      slidesPerGroup={1}
      centeredSlides={true}
      allowTouchMove={false}
      speed={1000}
      loop={true}
      loopFillGroupWithBlank={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
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

import { Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const ResourcesBannerSlider1 = ({ children }) => {
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
        reverseDirection: true,
        disableOnInteraction: false,
      }}
      pagination
      navigation={{
        prevEl: ".resourceSlideNext-btn",
        nextEl: ".resourceSlidePrev-btn",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};
export default ResourcesBannerSlider1;

import { Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const SliderLayout = ({ size, children }) => {
  return (
    <Swiper
      slidesPerView={size ? size : 1}
      spaceBetween={20}
      slidesPerGroup={1}
      centeredSlides={true}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};
export default SliderLayout;

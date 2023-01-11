import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import BlogCard from "../BlogCard";

const ResourceBlogLayout = ({ size, data }) => {
  return (
    <Swiper
      slidesPerView={size}
      spaceBetween={20}
      slidesPerGroup={1}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 2500,
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
      {data.map((item,i) => {
        return (
          <SwiperSlide key={i}>
            <BlogCard data={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default ResourceBlogLayout;

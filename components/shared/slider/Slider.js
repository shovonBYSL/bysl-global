import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = ({ size, data }) => {
  return (
    <Swiper
      slidesPerView={size}
      spaceBetween={50}
      slidesPerGroup={1}
      centeredSlides={true}
      loop={true}
      speed={800}
      grabCursor={true}
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
      className="mySwiper mobileTech"
    >
      {data.map(({ id, img }) => {
        return (
          <SwiperSlide key={id}>
            <div className=" h-[260px] xl:h-80 w-[140px] xxs:w-[150px] md:w-[120px] xl:w-[150px] overflow-hidden mx-auto drop-shadow-3xl relative mobileTechImg">
              <Image
                src={img}
                layout="fill"
                placeholder="blur"
                blurDataURL={img}
                alt=""
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Slider;

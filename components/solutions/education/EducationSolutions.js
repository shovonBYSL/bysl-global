import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import SectionHeader from "../../shared/SectionHeader";
import SolutionCard from "../SolutionCard";

const EducationSolutions = ({ data }) => {
  return (
    <div id="solutions" className="py-10 xl:py-16 relative">
      <SectionHeader type="Solutions">
        Tech-based solutions for
        <br className="hidden xs:block" />
        &nbsp;modern-day education
      </SectionHeader>

      <div className="mt-6 xl:mt-10 ">
        <Swiper
          loop={true}
          speed={1500}
          pagination={{
            clickable: true,
            renderBullet: function (i, className) {
              return (
                '<span class="' +
                className +
                '">' +
                "Solutions " +
                (i + 1) +
                "</span>"
              );
            },
          }}
          modules={[Pagination]}
          className="mySwiper educationSlider"
        >
          {data.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="pt-20">
                  <SolutionCard data={item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default EducationSolutions;

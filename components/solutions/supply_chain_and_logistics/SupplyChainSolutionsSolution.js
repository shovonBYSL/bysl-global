import { SwiperSlide } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import SupplyChainSliderLayout from "./SupplyChainSliderLayout";
import SectionHeader from "../../shared/SectionHeader";
import SolutionCard from "../SolutionCard";

const SupplyChainSolutionsSolution = ({ type, children, data }) => {
  return (
    <div id="solutions" className="py-10 xl:py-16 relative">
      <SectionHeader type={type}>{children}</SectionHeader>
      <div className="mt-10 max-w-[1093px] mx-auto supplySliderBtn">
        <SupplyChainSliderLayout size={1}>
          {data.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <SolutionCard data={item} />
              </SwiperSlide>
            );
          })}
        </SupplyChainSliderLayout>
        <div className="flex justify-between lg:justify-start gap-5 absolute bottom-[4%] lg:bottom-[7%] w-full lg:w-max z-30">
          <p className="h-8 xl:h-10 w-8 xl:w-10 rounded-full text-blue-900 hover:bg-blue-500/10 transition duration-500 flex justify-center items-center border border-blue-900 hover:cursor-pointer solutionSlidePrev-btn ">
            <MdKeyboardArrowLeft className="text-2xl" />
          </p>
          <p className="h-8 xl:h-10 w-8 xl:w-10 rounded-full text-blue-900 hover:bg-blue-500/10 transition duration-500 flex justify-center items-center border border-blue-900 hover:cursor-pointer solutionSlideNext-btn ">
            <MdKeyboardArrowRight className="text-2xl" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainSolutionsSolution;

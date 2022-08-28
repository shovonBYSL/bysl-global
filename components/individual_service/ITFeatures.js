import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import FeatureSlider from "./FeatureSlider";

const ITFeatures = ({ data }) => {
  const { title, subTitle, type, sliderData } = data;

  const SliderButtons = () => {
    return (
      <div className="flex gap-5 mt-5 md:mt-8 lg:mt-10 xl:mt-14">
        <p className="h-8 w-8 rounded-full text-gray-800 hover:bg-gray-200 transition duration-500 flex justify-center items-center border border-gray-800 hover:cursor-pointer slidePrev-btn ">
          <MdKeyboardArrowLeft className="text-2xl" />
        </p>
        <p className="h-8 w-8 rounded-full text-gray-800 hover:bg-gray-200 transition duration-500 flex justify-center items-center border border-gray-800 hover:cursor-pointer slideNext-btn ">
          <MdKeyboardArrowRight className="text-2xl" />
        </p>
      </div>
    );
  };

  return (
    <div className="py-10 xl:py-16">
      <div className="grid grid-cols-12 gap-x-6 service-features">
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3 lg:pt-4 lg:pl-5">
          <p className="lg:text-lg xl:text-xl text-center lg:text-start text-gray-300">
            {type}
          </p>
          <p className="text-gray-800 text-2xl xl:text-3xl font-bold text-center lg:text-start leading-[38px] mb-5 xl:mb-6">
            {title}
          </p>
          <p className="text-sm text-gray-300 text-center lg:text-start">
            {subTitle}
          </p>
          <div className="hidden lg:block">
            <SliderButtons />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8 2xl:col-span-9 px-4 pt-5 lg:py-5 feature-slider">
          <div className="sm:hidden">
            <FeatureSlider size={1} data={sliderData} />
          </div>
          <div className="hidden sm:block xl:hidden">
            <FeatureSlider size={2} data={sliderData} />
          </div>
          <div className="hidden xl:block 2xl:hidden">
            <FeatureSlider size={3} data={sliderData} />
          </div>
          <div className="hidden 2xl:block">
            <FeatureSlider size={4} data={sliderData} />
          </div>
          <div className="lg:hidden w-max mx-auto">
            <SliderButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITFeatures;

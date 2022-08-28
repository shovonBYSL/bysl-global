import Image from "next/image";

import Slider from "../../shared/slider/Slider";
import { TechnologiesSectionTitle } from "../../shared/SharedTextgroups";

const MobileTechSlider = ({ mobileTechData }) => {
  const { mobileSliderData, frame } = mobileTechData;

  return (
    <div className="py-10 xl:py-16 ">
      <div className="mb-10">
        <TechnologiesSectionTitle>
          Intuitive applications that attract
          <br className="hidden xxs:block" />
          &nbsp;& retain users
        </TechnologiesSectionTitle>
      </div>
      <div className="relative">
        <div className="xxs:hidden">
          <Slider data={mobileSliderData} size={1.7} />
        </div>
        <div className="hidden xxs:block md:hidden">
          <Slider data={mobileSliderData} size={1.9} />
        </div>
        <div className="hidden md:block xl:hidden">
          <Slider data={mobileSliderData} size={3} />
        </div>
        <div className="hidden xl:block">
          <Slider data={mobileSliderData} size={5} />
        </div>
        <div className="centered z-40">
          <div className="h-[277px] xxxs:h-[270px] xxs:h-[330px] xl:h-[420px] w-[135px] xxs:w-[165px] xl:w-[210px] relative drop-shadow-3xl">
            <Image
              src={frame}
              placeholder="blur"
              blurDataURL={frame}
              layout="fill"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileTechSlider;

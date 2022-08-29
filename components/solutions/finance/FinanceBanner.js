import { Link as Scroll } from "react-scroll";

import { TextGradient } from "../../shared/SharedTextgroups";
import SolutionsTextImageBanner from "../SolutionsTextImageBanner";

const FinanceBanner = ({ data }) => {
  return (
    <SolutionsTextImageBanner data={data}>
      <div className="w-full mt-6 lg:mt-8 xl:mt-10 flex flex-col md:flex-row gap-6 justify-center md:justify-start items-center">
        <Scroll smooth={true} offset={-60} duration={500} to="overview">
          <div className="h-max text-center rounded-md text-sm font-medium py-2 xl:py-3 w-52 md:w-[137px] hover:cursor-pointer text-white bg-gradient-to-r hover:from-blue-700 hover:to-blue-700  from-blue-900 to-blue-700">
            Overview
          </div>
        </Scroll>
        <Scroll
          smooth={true}
          offset={-60}
          duration={500}
          to="problems&solutions"
        >
          <div className="h-max text-center rounded-md text-sm font-medium py-2 xl:py-3 w-52 hover:cursor-pointer bg-white scrollBtn">
            <TextGradient text="Problems & Solutions" />
          </div>
        </Scroll>
      </div>
    </SolutionsTextImageBanner>
  );
};

export default FinanceBanner;

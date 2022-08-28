import { Link as Scroll } from "react-scroll";

import SolutionsBanner from "../../shared/banners/SolutionsBanner";
import { TextGradient } from "../../shared/SharedTextgroups";

const FoodAndBeverageBanner = ({ data }) => {
  return (
    <SolutionsBanner data={data}>
      <div className="w-full flex gap-6 flex-wrap justify-center items-center">
        <Scroll smooth={true} offset={-80} duration={500} to="overview">
          <div className="h-max text-center rounded-md text-sm font-medium py-2 xl:py-3 w-36 hover:cursor-pointer text-white bg-gradient-to-r hover:from-blue-700 hover:to-blue-700  from-blue-900 to-blue-700">
            Overview
          </div>
        </Scroll>
        <Scroll smooth={true} offset={-80} duration={500} to="problems">
          <div className="h-max text-center rounded-md text-sm font-medium py-2 xl:py-3 w-36 hover:cursor-pointer bg-white scrollBtn">
            <TextGradient text="Problems" />
          </div>
        </Scroll>
      </div>
    </SolutionsBanner>
  );
};

export default FoodAndBeverageBanner;

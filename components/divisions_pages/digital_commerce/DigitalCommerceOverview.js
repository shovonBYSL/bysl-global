import { foodTechOverviewData } from "../../../public/data/foodTechData";
import OverviewCard from "../../shared/OverviewCard";
import {
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";

const DigitalCommerceOverview = () => {
  return (
    <div className="py-10 xl:py-16">
      <div className="mt-10 md:mt-16 xl:mt-20 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <OverviewCard data={foodTechOverviewData} />
      </div>
    </div>
  );
};

export default DigitalCommerceOverview;

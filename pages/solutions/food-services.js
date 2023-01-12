import SolutionsLayout from "../../layouts/SolutionsLayout";
import SolutionsImageOverview from "../../components/solutions/SolutionsImageOverview";
import FoodAndBeverageProblemsAndSolutions from "../../components/solutions/food_and_beverage/FoodAndBeverageProblemsAndSolutions";
import SolutionsBanner from "../../components/shared/banners/SolutionsBanner";

import {
  foodAndBeverageBannerData,
  foodAndBeverageOverviewData,
  foodAndBeverageProblemsAndSolutionsData,
} from "../../public/data/solutions/foodAndBeverageData";

import { API } from "../../api";

const FoodAndBeverage = ({
  banner,
  overviewData,
  resourcesData,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout
      title="Food & Beverage"
      data={resourcesData}
      noMargin={true}
    >
      {/* banner section  */}
      <SolutionsBanner data={banner} />

      <div className="box">
        {/* overview section  */}
        <SolutionsImageOverview data={overviewData} />

        {/* problems and solutions section  */}
        <FoodAndBeverageProblemsAndSolutions data={problemsAndSolutionsData} />
      </div>
    </SolutionsLayout>
  );
};

export async function getStaticProps() {
  const blogs = await fetch(`${API}/posts/`);
  const resourcesData = await blogs.json();

  return {
    props: {
      banner: foodAndBeverageBannerData,
      resourcesData,
      overviewData: foodAndBeverageOverviewData,
      problemsAndSolutionsData: foodAndBeverageProblemsAndSolutionsData,
    },
  };
}

export default FoodAndBeverage;

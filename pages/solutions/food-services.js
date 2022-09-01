import SolutionsLayout from "../../layouts/SolutionsLayout";
// import SolutionButtonBanner from "../../components/solutions/SolutionButtonBanner";
import SolutionsImageOverview from "../../components/solutions/SolutionsImageOverview";
import FoodAndBeverageProblemsAndSolutions from "../../components/solutions/food_and_beverage/FoodAndBeverageProblemsAndSolutions";
import { solutionsResourcesData } from "../../public/data/solutions/blogData";
import {
  foodAndBeverageBannerData,
  foodAndBeverageOverviewData,
  foodAndBeverageProblemsAndSolutionsData,
} from "../../public/data/solutions/foodAndBeverageData";
import SolutionsBanner from "../../components/shared/banners/SolutionsBanner";

const FoodAndBeverage = ({
  banner,
  overviewData,
  solutionsResources,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout
      title="Food & Beverage"
      data={solutionsResources}
      noMargin={true}
    >
      {/* banner section  */}
      <SolutionsBanner data={banner} />
      {/* <SolutionButtonBanner data={banner} /> */}
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
  return {
    props: {
      banner: foodAndBeverageBannerData,
      solutionsResources: solutionsResourcesData,
      overviewData: foodAndBeverageOverviewData,
      problemsAndSolutionsData: foodAndBeverageProblemsAndSolutionsData,
    },
  };
}

export default FoodAndBeverage;

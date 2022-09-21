import SolutionsLayout from "../../layouts/SolutionsLayout";
import FinanceOverview from "../../components/solutions/finance/FinanceOverview";
import FinanceProblemsAndSolutions from "../../components/solutions/finance/FinanceProblemsAndSolutions";
import { solutionsResourcesData } from "../../public/data/solutions/blogData";
import {
  financeBannerData,
  financeOverviewData,
  financeProblemsAndSolutionsData,
} from "../../public/data/solutions/financeSolutionsData";
import SolutionsTextImageBanner from "../../components/solutions/SolutionsTextImageBanner";

const Finance = ({
  banner,
  solutionsResources,
  overview,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout title="Finance" data={solutionsResources}>
      {/* banner section  */}
      <SolutionsTextImageBanner data={banner} />

      {/* overview section  */}
      <FinanceOverview data={overview} />

      {/* problems and solutions section  */}
      <FinanceProblemsAndSolutions data={problemsAndSolutionsData} />
    </SolutionsLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: financeBannerData,
      solutionsResources: solutionsResourcesData,
      overview: financeOverviewData,
      problemsAndSolutionsData: financeProblemsAndSolutionsData,
    },
  };
}

export default Finance;

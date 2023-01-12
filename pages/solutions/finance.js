import SolutionsLayout from "../../layouts/SolutionsLayout";
import FinanceOverview from "../../components/solutions/finance/FinanceOverview";
import FinanceProblemsAndSolutions from "../../components/solutions/finance/FinanceProblemsAndSolutions";
import SolutionsTextImageBanner from "../../components/solutions/SolutionsTextImageBanner";

import {
  financeBannerData,
  financeOverviewData,
  financeProblemsAndSolutionsData,
} from "../../public/data/solutions/financeSolutionsData";

import { API } from "../../api";

const Finance = ({
  banner,
  resourcesData,
  overview,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout title="Finance" data={resourcesData}>
      {/* banner section  */}
      <SolutionsTextImageBanner data={banner} />

      {/* overview section  */}
      <FinanceOverview data={overview} />

      {/* problems and solutions section  */}
      <FinanceProblemsAndSolutions data={problemsAndSolutionsData} />
    </SolutionsLayout>
  );
};

export async function getServerSideProps() {
  const blogs = await fetch(`${API}/posts/`);
  const resourcesData = await blogs.json();

  return {
    props: {
      banner: financeBannerData,
      resourcesData,
      overview: financeOverviewData,
      problemsAndSolutionsData: financeProblemsAndSolutionsData,
    },
  };
}

export default Finance;

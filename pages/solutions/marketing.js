import SolutionsLayout from "../../layouts/SolutionsLayout";
import MarketingBanner from "../../components/solutions/marketing/MarketingBanner";
import MarketingProblemsAndSolutions from "../../components/solutions/marketing/MarketingProblemsAndSolutions";
import SolutionsImageOverview from "../../components/solutions/SolutionsImageOverview";

import {
  marketingBannerData,
  marketingOverviewData,
  marketingProblemsAndSolutionsData,
} from "../../public/data/solutions/marketingSolutionsData";

import { API } from "../../api";

const Marketing = ({
  banner,
  resourcesData,
  marketingOverview,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout title="Marketing" data={resourcesData} noMargin={true}>
      {/* banner section  */}
      <MarketingBanner data={banner} />

      <div className="box">
        {/* overview section  */}
        <SolutionsImageOverview data={marketingOverview} />

        {/* problems and solutions section  */}
        <MarketingProblemsAndSolutions data={problemsAndSolutionsData} />
      </div>
    </SolutionsLayout>
  );
};

export async function getServerSideProps() {
  const blogs = await fetch(`${API}/posts/`);
  const resourcesData = await blogs.json();

  return {
    props: {
      banner: marketingBannerData,
      resourcesData,
      marketingOverview: marketingOverviewData,
      problemsAndSolutionsData: marketingProblemsAndSolutionsData,
    },
  };
}

export default Marketing;

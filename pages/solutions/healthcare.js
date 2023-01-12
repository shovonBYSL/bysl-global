import SolutionsLayout from "../../layouts/SolutionsLayout";
import SolutionsOverview from "../../components/solutions/SolutionsOverview";
import ProblemsAndSolutionsToggle from "../../components/solutions/ProblemsAndSolutionsToggle";
import SolutionsBanner from "../../components/shared/banners/SolutionsBanner";
import {
  healthcareOverviewData,
  healthcareProblemsAndSolutionsData,
  healthcareSolutionsBannerData,
} from "../../public/data/solutions/healthcareSolutionsData";

import { API } from "../../api";

const HealthCare = ({
  banner,
  resourcesData,
  overviewData,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout title="Health Care" data={resourcesData} noMargin={true}>
      {/* banner section  */}
      <SolutionsBanner data={banner} />

      <div className="box">
        {/* overview section  */}
        <SolutionsOverview data={overviewData} />
        {/* problems & solutions section  */}
        <ProblemsAndSolutionsToggle data={problemsAndSolutionsData}>
          Major set-backs of the existing
          <br className="hidden xxs:block" />
          healthcare system
        </ProblemsAndSolutionsToggle>
      </div>
    </SolutionsLayout>
  );
};

export async function getServerSideProps() {
  const blogs = await fetch(`${API}/posts/`);
  const resourcesData = await blogs.json();

  return {
    props: {
      banner: healthcareSolutionsBannerData,
      overviewData: healthcareOverviewData,
      resourcesData,
      problemsAndSolutionsData: healthcareProblemsAndSolutionsData,
    },
  };
}

export default HealthCare;

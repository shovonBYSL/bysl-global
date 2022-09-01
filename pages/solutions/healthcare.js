import SolutionsLayout from "../../layouts/SolutionsLayout";
import SolutionsOverview from "../../components/solutions/SolutionsOverview";
// import SolutionButtonBanner from "../../components/solutions/SolutionButtonBanner";
import { solutionsResourcesData } from "../../public/data/solutions/blogData";
import {
  healthcareOverviewData,
  healthcareProblemsAndSolutionsData,
  healthcareSolutionsBannerData,
} from "../../public/data/solutions/healthcareSolutionsData";
import ProblemsAndSolutionsToggle from "../../components/solutions/ProblemsAndSolutionsToggle";
import SolutionsBanner from "../../components/shared/banners/SolutionsBanner";

const HealthCare = ({
  banner,
  solutionsResources,
  overviewData,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout
      title="Health Care"
      data={solutionsResources}
      noMargin={true}
    >
      {/* banner section  */}
      <SolutionsBanner data={banner} />
      {/* <SolutionButtonBanner data={banner} /> */}

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

export async function getStaticProps() {
  return {
    props: {
      banner: healthcareSolutionsBannerData,
      overviewData: healthcareOverviewData,
      solutionsResources: solutionsResourcesData,
      problemsAndSolutionsData: healthcareProblemsAndSolutionsData,
    },
  };
}

export default HealthCare;

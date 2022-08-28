import SolutionsLayout from "../../layouts/SolutionsLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import SolutionsOverviewFull from "../../components/solutions/SolutionsOverviewFull";
import ProblemsAndSolutionsToggle from "../../components/solutions/ProblemsAndSolutionsToggle";
import { solutionsResourcesData } from "../../public/data/solutions/blogData";
import {
  manufacturingOverviewData,
  manufacturingProblemsAndSolutionsData,
} from "../../public/data/solutions/manufacturingSolutionsData";

const Manufacturing = ({
  banner,
  solutionsResources,
  overviewData,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout
      title="Manufacturing"
      data={solutionsResources}
      noMargin={true}
    >
      <div className="box">
        {/* banner section  */}
        <PrimaryBanner
          title="Manufacturing"
          sub="Harness the potential of mega data pools across various platforms to introduce revolutionary transformations to individual, scientific and business journeys."
          img={banner}
        >
          A WORLD LEADER IN Manufacturing
        </PrimaryBanner>
      </div>

      {/* overview section  */}
      <SolutionsOverviewFull data={overviewData} />

      <div className="box">
        {/* problems & solutions section  */}
        <ProblemsAndSolutionsToggle data={problemsAndSolutionsData}>
          The problems we found in <br className="hidden xxs:block" /> education
          industries
        </ProblemsAndSolutionsToggle>
      </div>
    </SolutionsLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/manufacturing_solutions_banner.png",
      overviewData: manufacturingOverviewData,
      solutionsResources: solutionsResourcesData,
      problemsAndSolutionsData: manufacturingProblemsAndSolutionsData,
    },
  };
}

export default Manufacturing;

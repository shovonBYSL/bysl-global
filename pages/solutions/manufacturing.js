import SolutionsLayout from "../../layouts/SolutionsLayout";
import SolutionsOverviewFull from "../../components/solutions/SolutionsOverviewFull";
import ProblemsAndSolutionsToggle from "../../components/solutions/ProblemsAndSolutionsToggle";
import { solutionsResourcesData } from "../../public/data/solutions/blogData";
import {
  manufacturingBannerData,
  manufacturingOverviewData,
  manufacturingProblemsAndSolutionsData,
} from "../../public/data/solutions/manufacturingSolutionsData";
import SolutionsTextImageBanner from "../../components/solutions/SolutionsTextImageBanner";

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
        <SolutionsTextImageBanner data={banner}>
          Secure, agile and scalable cloud solutions for manufacturing
        </SolutionsTextImageBanner>
      </div>

      {/* overview section  */}
      <SolutionsOverviewFull data={overviewData} center />

      <div className="box">
        {/* problems & solutions section  */}
        <ProblemsAndSolutionsToggle data={problemsAndSolutionsData}>
          The problems we found in <br className="hidden xxs:block" /> manufacturing
          industries
        </ProblemsAndSolutionsToggle>
      </div>
    </SolutionsLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: manufacturingBannerData,
      overviewData: manufacturingOverviewData,
      solutionsResources: solutionsResourcesData,
      problemsAndSolutionsData: manufacturingProblemsAndSolutionsData,
    },
  };
}

export default Manufacturing;

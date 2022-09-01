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
          title="Manufacturing Industry"
          sub="Powering the manufacturing leaders to maximize digitization of processes and operations utilizing comprehensive cloud-based solutions powered by ML, data analytics and IoT. "
          img={banner}
        >
          Secure, agile and scalable cloud solutions for manufacturing
        </PrimaryBanner>
      </div>

      {/* overview section  */}
      <SolutionsOverviewFull data={overviewData} center />

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

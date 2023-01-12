import SolutionsLayout from "../../layouts/SolutionsLayout";
import SolutionsOverviewFull from "../../components/solutions/SolutionsOverviewFull";
import ProblemsAndSolutionsToggle from "../../components/solutions/ProblemsAndSolutionsToggle";
import SolutionsTextImageBanner from "../../components/solutions/SolutionsTextImageBanner";

import {
  manufacturingBannerData,
  manufacturingOverviewData,
  manufacturingProblemsAndSolutionsData,
} from "../../public/data/solutions/manufacturingSolutionsData";

import { API } from "../../api";

const Manufacturing = ({
  banner,
  resourcesData,
  overviewData,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout title="Manufacturing" data={resourcesData} noMargin={true}>
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
          The problems we found in <br className="hidden xxs:block" />{" "}
          manufacturing industries
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
      banner: manufacturingBannerData,
      overviewData: manufacturingOverviewData,
      resourcesData,
      problemsAndSolutionsData: manufacturingProblemsAndSolutionsData,
    },
  };
}

export default Manufacturing;

import SolutionsLayout from "../../layouts/SolutionsLayout";
import RetailOverview from "../../components/solutions/retail/RetailOverview";
import SolutionsTextImageBanner from "../../components/solutions/SolutionsTextImageBanner";
import RetailProblemsAndSolution from "../../components/solutions/retail/RetailProblemsAndSolution";
import { TextGradient } from "../../components/shared/SharedTextgroups";

import {
  retailBannerData,
  retailOverviewData,
  retailProblemsAndSolutionData,
} from "../../public/data/solutions/retailSolutionData";

import { API } from "../../api";

const Retail = ({
  banner,
  resourcesData,
  overview,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout title="Retail" data={resourcesData}>
      {/* banner section  */}
      <SolutionsTextImageBanner data={banner}>
        Building the
        <TextGradient text=" future blocks " />
        of retail industry
      </SolutionsTextImageBanner>

      {/* overview section  */}
      <RetailOverview data={overview} />

      {/* problems and solutions section  */}
      <RetailProblemsAndSolution data={problemsAndSolutionsData} />
    </SolutionsLayout>
  );
};

export async function getServerSideProps() {
  const blogs = await fetch(`${API}/posts/`);
  const resourcesData = await blogs.json();

  return {
    props: {
      banner: retailBannerData,
      resourcesData,
      overview: retailOverviewData,
      problemsAndSolutionsData: retailProblemsAndSolutionData,
    },
  };
}

export default Retail;

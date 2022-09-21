import SolutionsLayout from "../../layouts/SolutionsLayout";
import RetailOverview from "../../components/solutions/retail/RetailOverview";
import SolutionsTextImageBanner from "../../components/solutions/SolutionsTextImageBanner";
import RetailProblemsAndSolution from "../../components/solutions/retail/RetailProblemsAndSolution";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import { solutionsResourcesData } from "../../public/data/solutions/blogData";
import {
  retailBannerData,
  retailOverviewData,
  retailProblemsAndSolutionData,
} from "../../public/data/solutions/retailSolutionData";

const Retail = ({
  banner,
  solutionsResources,
  overview,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout title="Retail" data={solutionsResources}>
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
  return {
    props: {
      banner: retailBannerData,
      solutionsResources: solutionsResourcesData,
      overview: retailOverviewData,
      problemsAndSolutionsData: retailProblemsAndSolutionData,
    },
  };
}

export default Retail;

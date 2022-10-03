import SolutionsLayout from "../../layouts/SolutionsLayout";
import SolutionsOverview from "../../components/solutions/SolutionsOverview";
import SupplyChainSolutionProblems from "../../components/solutions/supply_chain_and_logistics/SupplyChainSolutionProblems";
import SupplyChainSolutionsSolution from "../../components/solutions/supply_chain_and_logistics/SupplyChainSolutionsSolution";
import { solutionsResourcesData } from "../../public/data/solutions/blogData";
import {
  supplyChainAndLogisticsBannerData,
  supplyChainSolutionsOverviewData,
  supplyChainAndLogisticsProblemsAndSolutionsData,
} from "../../public/data/solutions/supplyChainAndLogisticsData";
import SolutionsBanner from "../../components/shared/banners/SolutionsBanner";

const SupplyChainAndLogistics = ({
  banner,
  overviewData,
  solutionsResources,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout
      title="Supply Chain and Logistics"
      data={solutionsResources}
      noMargin={true}
    >
      {/* banner section  */}
      <SolutionsBanner data={banner} />
      <div className="box">
        {/* overview section  */}
        <SolutionsOverview data={overviewData} />

        {/* problems section  */}
        <SupplyChainSolutionProblems
          type="Problems"
          data={problemsAndSolutionsData}
        >
          Problems of the existing
          <br />
          supply chain
        </SupplyChainSolutionProblems>

        {/* solutions section  */}
        <SupplyChainSolutionsSolution
          type="Solutions"
          data={problemsAndSolutionsData}
        >
          Tackling supply chain challenges with the&nbsp;
          <br className="hidden sm:block" />
          next-gen technologies
        </SupplyChainSolutionsSolution>
      </div>
    </SolutionsLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: supplyChainAndLogisticsBannerData,
      solutionsResources: solutionsResourcesData,
      overviewData: supplyChainSolutionsOverviewData,
      problemsAndSolutionsData: supplyChainAndLogisticsProblemsAndSolutionsData,
    },
  };
}

export default SupplyChainAndLogistics;

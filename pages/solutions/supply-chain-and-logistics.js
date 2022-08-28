import SolutionsLayout from "../../layouts/SolutionsLayout";
import SolutionsOverview from "../../components/solutions/SolutionsOverview";
import SupplyChainSolutionBanner from "../../components/solutions/supply_chain_and_logistics/SupplyChainSolutionBanner";
import SupplyChainSolutionProblems from "../../components/solutions/supply_chain_and_logistics/SupplyChainSolutionProblems";
import SupplyChainSolutionsSolution from "../../components/solutions/supply_chain_and_logistics/SupplyChainSolutionsSolution";
import { solutionsResourcesData } from "../../public/data/solutions/blogData";
import {
  supplyChainAndLogisticsBannerData,
  supplyChainSolutionsOverviewData,
  supplyChainAndLogisticsProblemsAndSolutionsData,
} from "../../public/data/solutions/supplyChainAndLogisticsData";

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
      <SupplyChainSolutionBanner data={banner} />
      <div className="box">
        {/* overview section  */}
        <SolutionsOverview data={overviewData} />

        {/* problems section  */}
        <SupplyChainSolutionProblems
          type="Problems"
          data={problemsAndSolutionsData}
        >
          The problems we found in education&nbsp;
          <br className="hidden xs:block" />
          industries
        </SupplyChainSolutionProblems>

        {/* solutions section  */}
        <SupplyChainSolutionsSolution
          type="Solutions"
          data={problemsAndSolutionsData}
        >
          Progressing advanced Education Solutions&nbsp;
          <br className="hidden sm:block" /> for the digital era
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

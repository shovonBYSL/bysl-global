import SolutionsLayout from "../../layouts/SolutionsLayout";
import SolutionsOverview from "../../components/solutions/SolutionsOverview";
import SupplyChainSolutionProblems from "../../components/solutions/supply_chain_and_logistics/SupplyChainSolutionProblems";
import SupplyChainSolutionsSolution from "../../components/solutions/supply_chain_and_logistics/SupplyChainSolutionsSolution";
import SolutionsBanner from "../../components/shared/banners/SolutionsBanner";

import {
  supplyChainAndLogisticsBannerData,
  supplyChainSolutionsOverviewData,
  supplyChainAndLogisticsProblemsAndSolutionsData,
} from "../../public/data/solutions/supplyChainAndLogisticsData";

import { API } from "../../api";

const SupplyChainAndLogistics = ({
  banner,
  overviewData,
  resourcesData,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout
      title="Supply Chain and Logistics"
      data={resourcesData}
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
  const blogs = await fetch(`${API}/posts/`);
  const resourcesData = await blogs.json();

  return {
    props: {
      banner: supplyChainAndLogisticsBannerData,
      resourcesData,
      overviewData: supplyChainSolutionsOverviewData,
      problemsAndSolutionsData: supplyChainAndLogisticsProblemsAndSolutionsData,
    },
  };
}

export default SupplyChainAndLogistics;

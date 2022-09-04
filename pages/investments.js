import CommonLayout from "../layouts/CommonLayout";
import InvestmentsBanner from "../components/investments/InvestmentsBanner";
import ITPlatforms from "../components/investments/ITPlatforms";
import Overview4Items from "../components/shared/Overview4Items";
import MarketPlacePlatforms from "../components/investments/MarketPlacePlatforms";
import { GradientBanner } from "../components/shared/banners/SharedBanner";
import {
  investmentOverviewData,
  ITPlatformsData,
  marketplacePlatformsData,
} from "../public/data/investmentsData";

const Investments = ({
  investmentOverview,
  ItPlatforms,
  marketplacePlatforms,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <CommonLayout title="Investments" noMargin={true}>
      {/* banner section  */}
      <div id="business-verticals">
        <InvestmentsBanner />
      </div>

      {/* overview items section  */}
      <div className="box !max-w-[1250px]">
        <Overview4Items data={investmentOverview}>
          Emerging with disruptive innovation for a better tommorrow
        </Overview4Items>
      </div>

      {/* IT Platform section  */}
      <div id="it-platform">
        <GradientBanner
          title="IT Platforms"
          details="Equipped with the right resources, right skill sets, right guidance and a mission to reinvent and lead the next-generation IT environment."
        />
      </div>

      <div className="box">
        <ITPlatforms data={ItPlatforms} />
      </div>

      {/* Marketplace Platform section  */}
      <div id="marketplace-platform">
        <GradientBanner
          title="Marketplace Platforms"
          details="Like an ocean surrounding an island, we are meeting the needs and demands of modern days from every direction with high-end products and services through a cluster of next-generation marketplace platforms."
        />
      </div>
      <div className="box">
        <MarketPlacePlatforms data={marketplacePlatforms} />
      </div>
    </CommonLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      investmentOverview: investmentOverviewData,
      ItPlatforms: ITPlatformsData,
      marketplacePlatforms: marketplacePlatformsData,
    },
  };
}

export default Investments;

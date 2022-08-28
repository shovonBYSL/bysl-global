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
          In creating another upliftment of technical business
        </Overview4Items>
      </div>

      {/* IT Platform section  */}
      <div id="it-platform">
        <GradientBanner
          title="IT Platforms"
          details="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there."
        />
      </div>

      <div className="box">
        <ITPlatforms data={ItPlatforms} />
      </div>

      {/* Marketplace Platform section  */}
      <div id="marketplace-platform">
        <GradientBanner
          title="Marketplace Platforms"
          details="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there."
          details2="Thing embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
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

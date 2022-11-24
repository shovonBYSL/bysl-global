import BasicLayout from "../../layouts/BasicLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import Overview4Items from "../../components/shared/Overview4Items";
import BannerWithBulletSingle from "../../components/shared/banners/BannerWithBulletSingle";
import TriangleCardBanner from "../../components/shared/banners/TriangleCardBanner";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import {
  supplyChainConnectivityData,
  supplyChainOverviewData,
  supplyChainPerceivabilityData,
} from "../../public/data/divisions/supplyChainData";

const SupplyChain = ({
  banner,
  supplyChainConnectivity,
  connectivityImg,
  supplyChainOverview,
  supplyChainPerceivability,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Supply Chain">
      {/* banner section  */}
      <PrimaryBanner
        title="Supply Chain - Division"
        sub="Rethinking the supply chain infrastructure by reshaping and restructuring it with IoT, AI/ML, robotics and big data analytics to make it faster, more accurate, more flexible, more granular and extra efficient."
        img={banner}
      >
        <TextGradient text="Innovating " /> with
        <br />
        <TextGradient text="supply chain 4.0" />
      </PrimaryBanner>

      {/* connectivity section  */}
      <TriangleCardBanner
        data={supplyChainConnectivity}
        img={connectivityImg}
        black={true}
        padding={true}
      >
        IT-enabled, automated logistics&nbsp;
        <br className="hidden xs:block" /> & fulfillment services
      </TriangleCardBanner>

      {/* overview section  */}
      <Overview4Items data={supplyChainOverview} />

      {/* PERCEIVABILITY section  */}
      <BannerWithBulletSingle data={supplyChainPerceivability}>
        Incorporating automation to maximize operational efficiency
      </BannerWithBulletSingle>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/supply_chain_division_banner.webp",
      supplyChainConnectivity: supplyChainConnectivityData,
      connectivityImg:
        "/images/divisions/supply_chain/connectivity_banner.webp",
      supplyChainOverview: supplyChainOverviewData,
      supplyChainPerceivability: supplyChainPerceivabilityData,
    },
  };
}

export default SupplyChain;

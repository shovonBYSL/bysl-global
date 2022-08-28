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
        sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs. Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
        img={banner}
      >
        Operations through
        <br />
        <TextGradient text="Evolution" />,<TextGradient text=" Innovation" />.
      </PrimaryBanner>

      {/* connectivity section  */}
      <TriangleCardBanner
        data={supplyChainConnectivity}
        img={connectivityImg}
        black={true}
        padding={true}
      >
        Worldwide Connectivity &
        <br />
        <TextGradient text="Compliance" />
      </TriangleCardBanner>

      {/* overview section  */}
      <Overview4Items data={supplyChainOverview} />

      {/* PERCEIVABILITY section  */}
      <BannerWithBulletSingle data={supplyChainPerceivability}>
        PERCEIVABILITY. <TextGradient text="INSIGHT." />
        <br />
        FORESIGHT
      </BannerWithBulletSingle>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/supply_chain_division_banner.svg",
      supplyChainConnectivity: supplyChainConnectivityData,
      connectivityImg:
        "/images/divisions/supply_chain/connectivity/connectivity_banner.svg",
      supplyChainOverview: supplyChainOverviewData,
      supplyChainPerceivability: supplyChainPerceivabilityData,
    },
  };
}

export default SupplyChain;

import TechnologiesLayout from "../../layouts/TechnologiesLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import IconCardGroup3 from "../../components/shared/IconCardGroup3";
import ImageShowcase from "../../components/shared/ImageShowcase";
import RowSpanGrid from "../../components/shared/RowSpanGrid";
import { TextBanner } from "../../components/shared/banners/SharedBanner";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import { techSlidersData } from "../../public/data/technologies/techSlidersData";
import {
  blockchainFeaturesData,
  blockchainHealthBannerData,
  blockchainServicesData,
} from "../../public/data/technologies/blockchainTechnologiesData";

const BlockchainTechnologies = ({
  banner,
  blockchainFeatures,
  blockchainHealthBanner,
  blockchainServices,
  supplyChainImg,
  sliderData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <TechnologiesLayout title="Blockchain Technologies" slider={sliderData}>
      {/* banner section  */}
      <PrimaryBanner
        title="Blockchain Technologies"
        sub="Exploring the unique potential of blockchain technology for wider accessibility and control of data and greater security.   "
        img={banner}
      >
        Blockchain for greater
        <TextGradient text=" accessibility " />&
        <br className="hidden sm:block" />
        <TextGradient text=" security" /> of data
      </PrimaryBanner>

      {/* features section  */}
      <RowSpanGrid data={blockchainFeatures}>
        One version of truth
        <br />
        always in-sync
      </RowSpanGrid>

      {/* health records section  */}
      <TextBanner data={blockchainHealthBanner}>
        Towards building the
        <br />
        next-gen fintech
      </TextBanner>

      {/* services section  */}
      <IconCardGroup3 data={blockchainServices} type="Services">
        Scaleable & protected
        <br />
        features
      </IconCardGroup3>

      {/* Supply Chain section  */}
      <ImageShowcase
        sub="Our blockchain solutions focus on reducing the cost involved with point-to-point communication and transportation by eliminating the maximum number of middlemen from shipping events, transactions and record keeping by building a comprehensive, decentralized and shared ledger."
        img={supplyChainImg}
      >
        Ensuring transparency in
        <br />
        supply chain & logistics
      </ImageShowcase>
    </TechnologiesLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/blockchain_technologies_banner.svg",
      blockchainFeatures: blockchainFeaturesData,
      blockchainHealthBanner: blockchainHealthBannerData,
      blockchainServices: blockchainServicesData,
      supplyChainImg: "/images/technologies/blockchain/blockchain_supply.svg",
      sliderData: techSlidersData[6],
    },
  };
}

export default BlockchainTechnologies;

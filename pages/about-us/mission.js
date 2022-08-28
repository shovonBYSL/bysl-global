import CompanyInfoLayout from "../../layouts/CompanyInfoLayout";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import { missionButtonData } from "../../public/data/buttonGroupData";
import { missionBannerData } from "../../public/data/companyInfoBannerData";
import { missionCardData } from "../../public/data/companyInfoCardData";

const CompanyMission = ({ missionBanner, missionCard, missionButton }) => {
  return (
    <CompanyInfoLayout
      title="Mission"
      bannerData={missionBanner}
      cardData={missionCard}
      buttonData={missionButton}
    >
      Our mission is to serve the world with exceptional
      <TextGradient text=" Products & Services" />
    </CompanyInfoLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      missionBanner: missionBannerData,
      missionCard: missionCardData,
      missionButton: missionButtonData,
    },
  };
}

export default CompanyMission;

import CompanyInfoLayout from "../../layouts/CompanyInfoLayout";
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
      Our mission is to serve the world
      <br className="hidden xs:block" />
      with exceptional products and services
    </CompanyInfoLayout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      missionBanner: missionBannerData,
      missionCard: missionCardData,
      missionButton: missionButtonData,
    },
  };
}

export default CompanyMission;

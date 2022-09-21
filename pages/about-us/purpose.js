import CompanyInfoLayout from "../../layouts/CompanyInfoLayout";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import { purposeButtonData } from "../../public/data/buttonGroupData";
import { purposeBannerData } from "../../public/data/companyInfoBannerData";
import { purposeCardData } from "../../public/data/companyInfoCardData";

const CompanyPurpose = ({ purposeBanner, purposeCard, purposeButton }) => {
  return (
    <CompanyInfoLayout
      title="Purpose"
      bannerData={purposeBanner}
      cardData={purposeCard}
      buttonData={purposeButton}
    >
      Our purpose is to explore, innovate and invest
      <br className="hidden xs:block" />
      for a better tomorrow.
    </CompanyInfoLayout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      purposeBanner: purposeBannerData,
      purposeCard: purposeCardData,
      purposeButton: purposeButtonData,
    },
  };
}

export default CompanyPurpose;

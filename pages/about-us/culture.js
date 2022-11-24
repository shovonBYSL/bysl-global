import CompanyInfoLayout from "../../layouts/CompanyInfoLayout";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import { cultureButtonData } from "../../public/data/buttonGroupData";
import { cultureBannerData } from "../../public/data/companyInfoBannerData";
import { cultureCardData } from "../../public/data/companyInfoCardData";

const CompanyCulture = ({ cultureBanner, cultureCard, cultureButton }) => {
  return (
    <CompanyInfoLayout
      title="Culture"
      bannerData={cultureBanner}
      cardData={cultureCard}
      buttonData={cultureButton}
    >
      A forward-thinking culture of&nbsp;
      <br className="hidden xs:block" />
      learning, teamwork, and integrity,&nbsp;
      <br className="hidden xs:block" />
      embracing change, fueling innovation, and continuing development.
    </CompanyInfoLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      cultureBanner: cultureBannerData,
      cultureCard: cultureCardData,
      cultureButton: cultureButtonData,
    },
  };
}

export default CompanyCulture;

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
      A <TextGradient text=" forward-thinking " />
      culture of
      <br className="hidden xs:block" />
      <TextGradient text=" learning" />, <TextGradient text=" teamwork" />, and
      <TextGradient text=" integrity" />,
      <br className="hidden xs:block" />
      embracing <TextGradient text=" change" />, fueling{" "}
      <TextGradient text=" innovation" />, and{" "}
      <TextGradient text=" continuing development" />.
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

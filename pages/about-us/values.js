import CompanyInfoLayout from "../../layouts/CompanyInfoLayout";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import { valuesButtonData } from "../../public/data/buttonGroupData";
import { valuesBannerData } from "../../public/data/companyInfoBannerData";
import { valuesCardData } from "../../public/data/companyInfoCardData";

const CompanyValues = ({ valuesBanner, valuesCard, valuesButton }) => {
  return (
    <CompanyInfoLayout
      title="Values"
      bannerData={valuesBanner}
      cardData={valuesCard}
      buttonData={valuesButton}
    >
      Our core values are our
      <TextGradient text=" Constants " />
      our
      <TextGradient text=" Guidelines " />
      for everything we do.
    </CompanyInfoLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      valuesBanner: valuesBannerData,
      valuesCard: valuesCardData,
      valuesButton: valuesButtonData,
    },
  };
}

export default CompanyValues;

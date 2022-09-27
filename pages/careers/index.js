import BasicLayout from "../../layouts/BasicLayout";
import CareersBanner from "../../components/careers/CareersBanner";
import CareersCompanyInfo from "../../components/careers/CareersCompanyInfo";
import CareerWhyBYSL from "../../components/careers/CareerWhyBYSL";
import CareerJobCirculars from "../../components/careers/CareerJobCirculars";
import { careersAboutUsData } from "../../public/data/careersData";

const Careers = ({ companyInfo }) => {
  return (
    <BasicLayout title="Careers" noMargin={true}>
      <div className="box">
        {/* banner section  */}
        <CareersBanner />

        {/* job circulars section  */}
        <CareerJobCirculars />

        {/* company info section  */}
        <CareersCompanyInfo data={companyInfo} />
      </div>

      {/* why BYSL section  */}
      <CareerWhyBYSL />
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      companyInfo: careersAboutUsData,
    },
  };
}

export default Careers;

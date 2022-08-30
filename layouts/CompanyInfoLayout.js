import Footer from "../components/navigation/Footer";
import ResponsiveNavbar from "../components/navigation/ResponsiveNavbar";
import CareerFooter from "../components/shared/CareerFooter";
import CompanyInfoCardGroup from "../components/shared/CompanyInfoCardGroup";
import ButtonGroup from "../components/shared/buttons/ButtonGroup";
import PageTitle from "../components/shared/PageTitle";
import { SectionBanner } from "../components/shared/banners/SharedBanner";
import { CompanyInfoTitle } from "../components/shared/SharedTextgroups";
import { getPath } from "../utils/paths";

const CompanyInfoLayout = ({
  children,
  title,
  bannerData,
  cardData,
  buttonData,
}) => {
  const culturePath = getPath("/about-us/culture");

  return (
    <>
      <PageTitle title={title} />
      <ResponsiveNavbar />
      <div className="box">
        <SectionBanner data={bannerData} />
        <div
          className={`${
            !culturePath && "lg:px-8 2xl:px-16 3xl:px-28 "
          } py-10 2xl:py-16`}
        >
          <CompanyInfoTitle>{children}</CompanyInfoTitle>
          <CompanyInfoCardGroup data={cardData} />
          <ButtonGroup data={buttonData} />
        </div>
        <CareerFooter />
      </div>
      <Footer />
    </>
  );
};

export default CompanyInfoLayout;

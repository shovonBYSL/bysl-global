import Footer from "../components/navigation/Footer";
import ResponsiveNavbar from "../components/navigation/ResponsiveNavbar";
import PageTitle from "../components/shared/PageTitle";
import TechSlider from "../components/shared/slider/TechSlider";

const TechnologiesLayout = (props) => {
  const { title, children, noMargin, slider } = props;

  return (
    <>
      <PageTitle title={title} />
      <ResponsiveNavbar />
      <div className={`${!noMargin && "box"}`}>{children}</div>
      <TechSlider data={slider} />
      <Footer />
    </>
  );
};

export default TechnologiesLayout;

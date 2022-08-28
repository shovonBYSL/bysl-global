import Footer from "../components/navigation/Footer";
import ResponsiveNavbar from "../components/navigation/ResponsiveNavbar";
import PageTitle from "../components/shared/PageTitle";

const CommonLayout = (props) => {
  const { title, children, noMargin } = props;

  return (
    <>
      <PageTitle title={title} />
      <ResponsiveNavbar />
      <div className={`${!noMargin && "box"}`}>{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;

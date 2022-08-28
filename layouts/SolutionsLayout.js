import Footer from "../components/navigation/Footer";
import ResponsiveNavbar from "../components/navigation/ResponsiveNavbar";
import PageTitle from "../components/shared/PageTitle";
import BlogSlider from "../components/shared/slider/BlogSlider";

const SolutionsLayout = (props) => {
  const { title, data, children, noMargin } = props;

  return (
    <>
      <PageTitle title={title} />
      <ResponsiveNavbar />
      <div className={`${!noMargin && "box"}`}>{children}</div>
      <div className="box">
        <BlogSlider type="Resources" data={data}>
          Read Our Latest Tips & Tricks
        </BlogSlider>
      </div>
      <Footer />
    </>
  );
};

export default SolutionsLayout;

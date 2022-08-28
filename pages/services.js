import BasicLayout from "../layouts/BasicLayout";
import ITServices from "../components/individual_service/ITServices";
import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import BlogSlider from "../components/shared/slider/BlogSlider";
import ITFeatures from "../components/individual_service/ITFeatures";
import {
  individualServiceITServicesData,
  ITFeaturesData,
  serviceResourceBlogData,
  serviceWhyChooseUsData,
} from "../public/data/individualServiceData";

const Service = ({
  banner,
  individualServiceITServices,
  ITFeaturesData,
  serviceResourceBlog,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="IT Services">
      {/* banner section  */}
      <PrimaryBanner
        title="Services"
        sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs. Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
        img={banner}
      >
        DISCOVER BETTER VALUE. FASTER.
      </PrimaryBanner>

      {/* IT services section  */}
      <ITServices data={individualServiceITServices} />

      {/* features section  */}
      <ITFeatures data={ITFeaturesData} />

      {/* resources section  */}
      <BlogSlider data={serviceResourceBlog} type="Resources">
        Read Our Latest Tips & Tricks
      </BlogSlider>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/service_banner.svg",
      individualServiceITServices: individualServiceITServicesData,
      serviceWhyChooseUs: serviceWhyChooseUsData,
      serviceResourceBlog: serviceResourceBlogData,
      ITFeaturesData,
    },
  };
}

export default Service;

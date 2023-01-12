import BasicLayout from "../layouts/BasicLayout";
import ITServices from "../components/individual_service/ITServices";
import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import BlogSlider from "../components/shared/slider/BlogSlider";
import ITFeatures from "../components/individual_service/ITFeatures";

import {
  individualServiceITServicesData,
  ITFeaturesData,
  serviceWhyChooseUsData,
} from "../public/data/individualServiceData";

import { API } from "../api";

const Service = ({
  banner,
  individualServiceITServices,
  ITFeaturesData,
  resourcesData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="IT Services">
      {/* banner section  */}
      <PrimaryBanner
        title="Services"
        sub="Research-backed, strategy-driven, tailored to business needs, and technologically cutting-edge  IT services to help businesses transform for an ever evolving technological landscape of the 
        world of tomorrow. We craft services that open new frontiers with limitless possibilities."
        img={banner}
      >
        Triumph in business with purpose-driven tech services
      </PrimaryBanner>

      {/* IT services section  */}
      <ITServices data={individualServiceITServices} />

      {/* features section  */}
      <ITFeatures data={ITFeaturesData} />

      {/* resources section  */}
      <BlogSlider data={resourcesData} />
    </BasicLayout>
  );
};

export async function getStaticProps() {
  const blogs = await fetch(`${API}/posts/`);
  const resourcesData = await blogs.json();

  return {
    props: {
      banner: "/images/banners/service_banner.webp",
      individualServiceITServices: individualServiceITServicesData,
      serviceWhyChooseUs: serviceWhyChooseUsData,
      resourcesData,
      ITFeaturesData,
    },
  };
}

export default Service;

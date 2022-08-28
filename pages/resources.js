import CommonLayout from "../layouts/CommonLayout";
import BusinessBanner from "../components/shared/banners/BusinessBanner";
import BlogLayout from "../components/shared/BlogLayout";
import ServiceWhyUs from "../components/individual_service/ServiceWhyUs";
import { TextGradient } from "../components/shared/SharedTextgroups";
import { resourcesData } from "../public/data/resourcesData";
import { serviceWhyChooseUsData } from "../public/data/individualServiceData";
import ResourcesBanner from "../components/resources/ResourcesBanner";

const Resources = ({ serviceWhyChooseUs, resources }) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <CommonLayout title="Resources" noMargin={true}>
      {/* banner section  */}
      <ResourcesBanner />

      <div className="box">
        {/* why us section  */}

        {/* resources section  */}
        <BlogLayout data={resources} />
      </div>
    </CommonLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      serviceWhyChooseUs: serviceWhyChooseUsData,
      resources: resourcesData,
    },
  };
}

export default Resources;

import BasicLayout from "../../layouts/BasicLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import BannerWithBullets from "../../components/shared/banners/BannerWithBullets";
import IconCardGroup3 from "../../components/shared/IconCardGroup3";
import TriangleCardBanner from "../../components/shared/banners/TriangleCardBanner";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import {
  cloudFeaturesData,
  cloudServicesData,
  cloudSupportData,
} from "../../public/data/technologies/cloudTechnologiesData";

const CloudTechnologies = ({
  banner,
  cloudServices,
  cloudServiceImg,
  cloudFeatures,
  cloudSupport,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Cloud Technologies">
      {/* banner section  */}
      <PrimaryBanner
        title="Cloud Technologies"
        sub="Write a success story by harnessing the infinite potential of the next-generation cloud technology utilizing the power of the internet.             "
        // img={banner}
        video={banner}
      >
        Start Your&nbsp;
        <TextGradient text="cloud" />
        <br className="hidden md:block" />
        <TextGradient text=" journey" />
      </PrimaryBanner>

      {/* services section  */}
      <TriangleCardBanner
        type="Platforms"
        data={cloudServices}
        img={cloudServiceImg}
      >
        Create new opportunities <br className="hidden xs:block" /> to make
        innovation more accessible
      </TriangleCardBanner>

      {/* features section  */}
      <IconCardGroup3 data={cloudFeatures} type="Features">
        Powerful control panel & APIs
      </IconCardGroup3>

      {/* support section  */}
      <BannerWithBullets data={cloudSupport} reversed={true}>
        We lead & support
        <br className="" /> customers
      </BannerWithBullets>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/cloud_technologies_banner.webm",
      cloudServices: cloudServicesData,
      cloudServiceImg: "/images/technologies/cloud/services/services.svg",
      cloudFeatures: cloudFeaturesData,
      cloudSupport: cloudSupportData,
    },
  };
}

export default CloudTechnologies;

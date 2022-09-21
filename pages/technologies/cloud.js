import TechnologiesLayout from "../../layouts/TechnologiesLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import BannerWithBullets from "../../components/shared/banners/BannerWithBullets";
import IconCardGroup3 from "../../components/shared/IconCardGroup3";
import TriangleCardBanner from "../../components/shared/banners/TriangleCardBanner";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import { techSlidersData } from "../../public/data/technologies/techSlidersData";
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
  sliderData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <TechnologiesLayout title="Cloud Technologies" slider={sliderData}>
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
    </TechnologiesLayout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      banner: "/images/banners/cloud_technologies_banner.webm",
      cloudServices: cloudServicesData,
      cloudServiceImg: "/images/technologies/cloud/services/services.png",
      cloudFeatures: cloudFeaturesData,
      cloudSupport: cloudSupportData,
      sliderData: techSlidersData[9],
    },
  };
}

export default CloudTechnologies;

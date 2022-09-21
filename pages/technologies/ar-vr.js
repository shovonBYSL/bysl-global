import TechnologiesLayout from "../../layouts/TechnologiesLayout";
import FeaturedBanner from "../../components/shared/banners/FeaturedBanner";
import TriangleCardBanner from "../../components/shared/banners/TriangleCardBanner";
import IconCardGroup3 from "../../components/shared/IconCardGroup3";
import ImageShowcase from "../../components/shared/ImageShowcase";
import ARVRBanner from "../../components/technologies_pages/ar_vr_technologies/ARVRBanner";
import { techSlidersData } from "../../public/data/technologies/techSlidersData";
import {
  arVrFeaturesData,
  arVrServicesData,
  arVrWorldData,
} from "../../public/data/technologies/arVrTechnologiesData";

const ARVRTechnologies = ({
  banner,
  arVrServices,
  arVrWorld,
  arVrFeatures,
  demoVideo,
  researchVideo,
  sliderData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <TechnologiesLayout
      title="AR/VR Technologies"
      noMargin={true}
      slider={sliderData}
    >
      {/* banner section  */}
      <ARVRBanner banner={banner} />

      <div className="box">
        {/* services section  */}
        <IconCardGroup3 data={arVrServices} type="Applications">
          Create immersive worlds
        </IconCardGroup3>

        {/* Own World section  */}
        <TriangleCardBanner
          type="Research & Development"
          data={arVrWorld}
          video={researchVideo}
          black={true}
          padding={true}
        >
          Building your own world with us
        </TriangleCardBanner>

        {/* features section  */}
        <FeaturedBanner data={arVrFeatures}>
          Interactive VR Studio
        </FeaturedBanner>

        {/* How does it works */}
        <ImageShowcase video={demoVideo}>How does it work?</ImageShowcase>
      </div>
    </TechnologiesLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/technologies/ar_vr/ar_vr_banner.webm",
      arVrServices: arVrServicesData,
      arVrWorld: arVrWorldData,
      arVrFeatures: arVrFeaturesData,
      demoVideo: "/images/technologies/ar_vr/demo.webm",
      researchVideo: "/images/technologies/ar_vr/research.webm",
      sliderData: techSlidersData[5],
    },
  };
}

export default ARVRTechnologies;

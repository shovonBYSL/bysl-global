import BasicLayout from "../../layouts/BasicLayout";
import FeaturedBanner from "../../components/shared/banners/FeaturedBanner";
import TriangleCardBanner from "../../components/shared/banners/TriangleCardBanner";
import IconCardGroup3 from "../../components/shared/IconCardGroup3";
import ImageShowcase from "../../components/shared/ImageShowcase";
import ARVRBanner from "../../components/technologies_pages/ar_vr_technologies/ARVRBanner";
import { TextGradient } from "../../components/shared/SharedTextgroups";
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
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="AR/VR Technologies" noMargin={true}>
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
        <ImageShowcase video={demoVideo}>How does it works?</ImageShowcase>
      </div>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/technologies/ar_vr/ar_vr_banner.mp4",
      arVrServices: arVrServicesData,
      arVrWorld: arVrWorldData,
      arVrFeatures: arVrFeaturesData,
      demoVideo: "/images/technologies/ar_vr/demo.mp4",
      researchVideo: "/images/technologies/ar_vr/research.mp4",
    },
  };
}

export default ARVRTechnologies;

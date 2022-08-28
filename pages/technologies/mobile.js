import BasicLayout from "../../layouts/BasicLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import BannerWithBulletSingle from "../../components/shared/banners/BannerWithBulletSingle";
import MobileFeatures from "../../components/technologies_pages/mobile_technologies/MobileFeatures";
import MobileTechSlider from "../../components/technologies_pages/mobile_technologies/MobileTechSlider";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import {
  mobileFeaturesData1,
  mobileFeaturesData2,
  mobileSliderData,
  userExperienceData,
} from "../../public/data/technologies/mobileTechnologiesData";

const MobileTechnologies = ({
  mobileFeatures,
  mobileTech,
  banner,
  userExperience,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Mobile Technologies">
      {/* banner section  */}
      <PrimaryBanner
        title="Mobile Technologies"
        sub="In a world of oversaturated mobile apps, we pioneer disruptive ideas to break trends and introduce the next big thing.  "
        img={banner}
      >
        <TextGradient text="Empowering" />,
        <br />
        <TextGradient text="accessible " /> &
        <TextGradient text=" futuristic" />
      </PrimaryBanner>

      {/* features section  */}
      <MobileFeatures featuresData={mobileFeatures} />

      {/* user experience section  */}
      <BannerWithBulletSingle data={userExperience} />

      {/* slider section  */}
      <MobileTechSlider mobileTechData={mobileTech} />
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      mobileFeatures: {
        data1: mobileFeaturesData1,
        data2: mobileFeaturesData2,
        img: "/images/technologies/mobile/features/mobile_features.png",
      },
      mobileTech: {
        frame:
          "/images/technologies/mobile/slider/mobileTechnologies_slider_frame.png",
        mobileSliderData,
      },
      banner: "/images/banners/mobile_technologies_banner.png",
      userExperience: userExperienceData,
    },
  };
}

export default MobileTechnologies;

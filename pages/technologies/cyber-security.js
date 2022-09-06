import TechnologiesLayout from "../../layouts/TechnologiesLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import BannerWithBullets from "../../components/shared/banners/BannerWithBullets";
import TriangleCardBanner from "../../components/shared/banners/TriangleCardBanner";
import IconCardGroup3 from "../../components/shared/IconCardGroup3";
import Overview4Items from "../../components/shared/Overview4Items";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import { techSlidersData } from "../../public/data/technologies/techSlidersData";
import {
  cyberBenefitsData,
  cyberFeaturesData,
  cyberProtectionData,
  cyberSolutionsData,
} from "../../public/data/technologies/cyberSecurityTechnologiesData";

const CyberSecurityTechnologies = ({
  banner,
  cyberBenefits,
  cyberFeatures,
  featuresBanner,
  cyberSolutions,
  cyberProtection,
  sliderData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <TechnologiesLayout title="Cyber Security Technologies" slider={sliderData}>
      {/* banner section  */}
      <PrimaryBanner
        title="Cyber Security Technologies"
        sub="Designing next-generation security landscapes with end-to-end encryption, integraged AI-based threat analysis, persistent vulnerablity check, rigorus stress-testings, real time responses and timely security updates"
        img={banner}
      >
        <TextGradient text="Full-scale" /> cyber protection through
        <TextGradient text=" holistic security " />
        <TextGradient text="architecture" />
      </PrimaryBanner>

      {/* overview section  */}
      <Overview4Items data={cyberBenefits} />

      {/* features section  */}
      <TriangleCardBanner
        type="Features"
        data={cyberFeatures}
        img={featuresBanner}
        black={true}
        padding={true}
      >
        World-class protection
      </TriangleCardBanner>

      {/* Solutions section  */}
      <IconCardGroup3 data={cyberSolutions} type="Applications">
        Smart shields against ever growing cyber threats
      </IconCardGroup3>

      {/* protection data  */}
      <BannerWithBullets data={cyberProtection}>
        360° Protection from APTs, DDoS & SQL injections
      </BannerWithBullets>
    </TechnologiesLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/cyber-security_technologies_banner.svg",
      cyberBenefits: cyberBenefitsData,
      cyberFeatures: cyberFeaturesData,
      featuresBanner:
        "/images/technologies/cyber_security/features/cyber_security_features_banner.svg",
      cyberSolutions: cyberSolutionsData,
      cyberProtection: cyberProtectionData,
      sliderData: techSlidersData[8],
    },
  };
}

export default CyberSecurityTechnologies;

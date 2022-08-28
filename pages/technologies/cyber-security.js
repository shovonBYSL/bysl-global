import BasicLayout from "../../layouts/BasicLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import BannerWithBullets from "../../components/shared/banners/BannerWithBullets";
import TriangleCardBanner from "../../components/shared/banners/TriangleCardBanner";
import IconCardGroup3 from "../../components/shared/IconCardGroup3";
import Overview4Items from "../../components/shared/Overview4Items";
import { TextGradient } from "../../components/shared/SharedTextgroups";
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
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Cyber Security Technologies">
      {/* banner section  */}
      <PrimaryBanner
        title="Cyber Security Technologies"
        sub="Designing next-generation security landscapes with end-to-end encryption, integraged AI-based threat analysis, persistent vulnerablity check, rigorus stress-testings, real time responses and timely security updates"
        img={banner}
      >
        <TextGradient text="Full-scale" /> cyber protection through
        <TextGradient text=" holistic security architecture" />
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
        World Class Protection
      </TriangleCardBanner>

      {/* Solutions section  */}
      <IconCardGroup3 data={cyberSolutions} type="Solutions">
        Cyber Security Services
      </IconCardGroup3>

      {/* protection data  */}
      <BannerWithBullets data={cyberProtection}>
        360° Protection from APTs, DDoS & SQL injections
      </BannerWithBullets>
    </BasicLayout>
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
    },
  };
}

export default CyberSecurityTechnologies;

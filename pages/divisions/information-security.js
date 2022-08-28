import BasicLayout from "../../layouts/BasicLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import BannerWithBulletSingle from "../../components/shared/banners/BannerWithBulletSingle";
import BannerWithBullets from "../../components/shared/banners/BannerWithBullets";
import Overview4Items from "../../components/shared/Overview4Items";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import {
  informationSecurityOverviewData,
  informationSecurityServicesData,
  informationSecurityShortcomingsData,
} from "../../public/data/divisions/informationSecurityData";

const InformationSecurity = ({
  banner,
  informationSecurityOverview,
  informationSecurityServices,
  informationSecurityShortcomings,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Information Security" noMargin={true}>
      <div className="box">
        {/* banner section  */}
        <PrimaryBanner
          title="Information Security - Division"
          sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs. Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
          img={banner}
        >
          Managing information with
          <TextGradient text=" confidentiality, integrity " /> &
          <TextGradient text=" availability" />
        </PrimaryBanner>

        {/* overview section  */}
        <Overview4Items data={informationSecurityOverview} />
      </div>

      {/* services section  */}
      <div className="pt-10 xl:pt-16 bg-blue-300">
        <div className="box">
          <BannerWithBullets data={informationSecurityServices} reversed={true}>
            Masterful engineering for higher control, improved security and
            against devaluation of information
          </BannerWithBullets>
        </div>
      </div>

      {/* shortcomings section  */}
      <div className="box">
        <BannerWithBulletSingle data={informationSecurityShortcomings}>
          Offering improved systemic efficacy through a holistic infosec
          framework
        </BannerWithBulletSingle>
      </div>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/information_security_division_banner.svg",
      informationSecurityOverview: informationSecurityOverviewData,
      informationSecurityServices: informationSecurityServicesData,
      informationSecurityShortcomings: informationSecurityShortcomingsData,
    },
  };
}

export default InformationSecurity;

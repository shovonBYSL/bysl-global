import BasicLayout from "../../layouts/BasicLayout";
import SecondaryLargeBanner from "../../components/shared/banners/SecondaryLargeBanner";
import BannerWithBullets from "../../components/shared/banners/BannerWithBullets";
import IconCardGroup3 from "../../components/shared/IconCardGroup3";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import {
  administrationBannerData,
  administrationControlPanelData,
  administrationMangementData,
  workplaceBannerData,
} from "../../public/data/divisions/administrationData";

const Administration = ({
  banner,
  administrationControlPanel,
  administrationMangement,
  workplaceBanner,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Administration">
      {/* banner section  */}
      <SecondaryLargeBanner data={banner}>
        Centralized and integrated ERP for
        <br />
        <TextGradient text="finance " /> and <TextGradient text=" business " />
        administration
      </SecondaryLargeBanner>

      {/* Control Panel section  */}
      <IconCardGroup3 data={administrationControlPanel}>
        Playing the <TextGradient text=" heart " /> of the
        <br />
        organization
      </IconCardGroup3>

      {/* Financial Management section  */}
      <BannerWithBullets data={administrationMangement}>
        Financial <TextGradient text="Management" />
      </BannerWithBullets>

      {/* Workpalce section  */}
      <BannerWithBullets data={workplaceBanner} reversed={true} />
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: administrationBannerData,
      administrationControlPanel: administrationControlPanelData,
      administrationMangement: administrationMangementData,
      workplaceBanner: workplaceBannerData,
    },
  };
}

export default Administration;

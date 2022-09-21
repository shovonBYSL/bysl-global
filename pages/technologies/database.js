import TechnologiesLayout from "../../layouts/TechnologiesLayout";
import SecondaryLargeBanner from "../../components/shared/banners/SecondaryLargeBanner";
import DatabaseFeatures from "../../components/technologies_pages/database_technologies/DatabaseFeatures";
import IconCardGroup3 from "../../components/shared/IconCardGroup3";
import BannerWithBullets from "../../components/shared/banners/BannerWithBullets";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import { techSlidersData } from "../../public/data/technologies/techSlidersData";
import {
  databaseBannerData,
  databaseSolutionsData,
  managingDatabaseData,
  databaseFeaturesData,
} from "../../public/data/technologies/databaseTechnologiesData";

const BigdataTechnologies = ({
  databaseBanner,
  databaseFeatures,
  databaseSolutions,
  managingDatabase,
  sliderData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <TechnologiesLayout title="Database Technologies" slider={sliderData}>
      {/* banner section  */}
      <SecondaryLargeBanner data={databaseBanner}>
        <TextGradient text="Database" />: Build, Connect, Deploy
      </SecondaryLargeBanner>

      {/* features section  */}
      <DatabaseFeatures data={databaseFeatures} />

      {/* Solutions section  */}
      <IconCardGroup3 data={databaseSolutions} type="Applications">
        Increased productivity
        <br />
        for developers & data
      </IconCardGroup3>

      {/* Managing databases section  */}
      <BannerWithBullets data={managingDatabase}>
        Managing databases with
        <br /> top-tier solutions
      </BannerWithBullets>
    </TechnologiesLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      databaseBanner: databaseBannerData,
      databaseFeatures: databaseFeaturesData,
      databaseSolutions: databaseSolutionsData,
      managingDatabase: managingDatabaseData,
      sliderData: techSlidersData[4],
    },
  };
}

export default BigdataTechnologies;

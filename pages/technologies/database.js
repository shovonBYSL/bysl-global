import SecondaryLargeBanner from "../../components/shared/banners/SecondaryLargeBanner";
import DatabaseFeatures from "../../components/technologies_pages/database_technologies/DatabaseFeatures";
import BasicLayout from "../../layouts/BasicLayout";
import IconCardGroup3 from "../../components/shared/IconCardGroup3";
import BannerWithBullets from "../../components/shared/banners/BannerWithBullets";
import { TextGradient } from "../../components/shared/SharedTextgroups";
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
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Database Technologies">
      {/* banner section  */}
      <SecondaryLargeBanner data={databaseBanner}>
        <TextGradient text="Database" />: Build, Connect, Deploy
      </SecondaryLargeBanner>

      {/* features section  */}
      <DatabaseFeatures data={databaseFeatures} />

      {/* Solutions section  */}
      <IconCardGroup3 data={databaseSolutions} type="Solutions">
        Increased productivity for
        <br />
        developers & data
      </IconCardGroup3>

      {/* Managing databases section  */}
      <BannerWithBullets data={managingDatabase}>
        Managing databases with
        <br /> top-tier solutions
      </BannerWithBullets>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      databaseBanner: databaseBannerData,
      databaseFeatures: databaseFeaturesData,
      databaseSolutions: databaseSolutionsData,
      managingDatabase: managingDatabaseData,
    },
  };
}

export default BigdataTechnologies;

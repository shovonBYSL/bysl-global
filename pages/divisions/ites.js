import BasicLayout from "../../layouts/BasicLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import ImageShowcase from "../../components/shared/ImageShowcase";
import Overview4Items from "../../components/shared/Overview4Items";
import BannerWithBullets from "../../components/shared/banners/BannerWithBullets";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import { itesOverviewData, itesUpdateData } from "../../public/data/divisions/itesData";

const ITeS = ({ banner, itesOverview, itesUpdate, itesAppImg }) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="ITeS">
      {/* banner section  */}
      <PrimaryBanner
        title="ITeS Division"
        sub="Navigate your journey of digital transformation through unparalleled ITeS products and services"
        img={banner}
      >
        Digitize business with
        <br />
        <TextGradient text="Integrated technology" />
      </PrimaryBanner>

      {/* overview section  */}
      <Overview4Items data={itesOverview} />

      {/* updates section  */}
      <BannerWithBullets data={itesUpdate} reversed={true}>
        Creating comprehensive solutions combining data, insights & technology
      </BannerWithBullets>

      {/* Team Management section */}
      <ImageShowcase
        img={itesAppImg}
        sub="Applying the right strategy, structure, and necessary to build lasting relationships with clients. "
      >
        Next-gen CRM applications
      </ImageShowcase>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/ites_division_banner.svg",
      itesOverview: itesOverviewData,
      itesUpdate: itesUpdateData,
      itesAppImg: "/images/divisions/ites/ites_team_management.svg",
    },
  };
}

export default ITeS;

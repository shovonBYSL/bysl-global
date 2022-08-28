import BasicLayout from "../../layouts/BasicLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import ImageShowcase from "../../components/shared/ImageShowcase";
import Overview4Items from "../../components/shared/Overview4Items";
import BannerWithBulletSingle from "../../components/shared/banners/BannerWithBulletSingle";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import {
  digitalCommerceOverviewData,
  digitalCommerceSolutionsData,
} from "../../public/data/divisions/digitalCommerceData";

const FoodTech = ({
  banner,
  digitalCommerceOverview,
  digitalCommerceImg,
  digitalCommerceSolutions,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Digital Commerce">
      {/* banner section  */}
      <PrimaryBanner
        title="Digital Commerce - Division"
        sub="Transforming the way businesses engage, interact, transact and serve in the multi-channel landscape with integrated applications on top of existing complex frameworks that adjust and scale to the dynamic business needs. "
        img={banner}
      >
        Manage your <TextGradient text=" sales " /> &
        <br />
        <TextGradient text="marketing " /> together
      </PrimaryBanner>

      {/* overview section  */}
      <Overview4Items data={digitalCommerceOverview} />

      {/* e-commerce app section  */}
      <ImageShowcase
        sub="Ever-evolving smart applications to securely engage, interact, converse, transact & operate across platforms to deliver value."
        img={digitalCommerceImg}
      >
        Cutting edge e-commerece applications
        <br />
        ready to serve
      </ImageShowcase>

      {/* solutions section  */}
      <BannerWithBulletSingle data={digitalCommerceSolutions} reversed={true}>
        Conferring a continuum of possibilities for businesses with AI-driven
        automation
      </BannerWithBulletSingle>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/digital_commerce_division_banner.svg",
      digitalCommerceImg:
        "/images/divisions/digital_commerce/digital_commerce_app.svg",
      digitalCommerceOverview: digitalCommerceOverviewData,
      digitalCommerceSolutions: digitalCommerceSolutionsData,
    },
  };
}

export default FoodTech;

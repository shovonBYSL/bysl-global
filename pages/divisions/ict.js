import BasicLayout from "../../layouts/BasicLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import PowerfulProducts from "../../components/divisions_pages/ict/PowerfulProducts";
import Overview4Items from "../../components/shared/Overview4Items";
import BannerWithBulletSingle from "../../components/shared/banners/BannerWithBulletSingle";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import { TextBanner } from "../../components/shared/banners/SharedBanner";
import {
  erpBannerData,
  ictSectorsData,
  ictSolutionsData,
  productsData,
} from "../../public/data/divisions/ictData";
// import { ictBannerSvg } from "../../components/svg/divisions/ictSvg";

const ICT = ({ banner, ictSectors, erpBanner, ictSolutions, products }) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="ICT">
      {/* banner section  */}
      <PrimaryBanner
        title="ICT Division"
        sub="Looking to build a future that makes a difference in the world of buisiness and create opportunities with next-gen ICT products and services.  "
        img={banner}
      >
        Lead breakthroughs with a complete
        <TextGradient text=" ICT ecosystem" />
      </PrimaryBanner>

      {/* sectors section  */}
      <Overview4Items data={ictSectors}>
        Development that
        <br />
        creates an impact
      </Overview4Items>

      {/* erp section  */}
      <TextBanner data={erpBanner} reversed={true}>
        Rising as a global leader in
        <br />
        web applications
      </TextBanner>

      {/* Powerful product section  */}
      <PowerfulProducts data={products} />

      {/* Solutions section  */}
      <BannerWithBulletSingle data={ictSolutions} reversed={true}>
        World-class ICT Solutions connecting intelligence & creativity
      </BannerWithBulletSingle>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      // banner: ictBannerSvg,
      banner: "/images/banners/ict_division_banner.png",
      ictSectors: ictSectorsData,
      erpBanner: erpBannerData,
      ictSolutions: ictSolutionsData,
      products: productsData,
    },
  };
}

export default ICT;

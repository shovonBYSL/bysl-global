import BasicLayout from "../../layouts/BasicLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import Overview4Items from "../../components/shared/Overview4Items";
import IconCardGroup4 from "../../components/shared/IconCardGroup4";
import ImageShowcase from "../../components/shared/ImageShowcase";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import {
  foodTechAreasData,
  foodTechOverviewData,
} from "../../public/data/divisions/foodTechData";

const FoodTech = ({ banner, foodTechOverview, foodTechAreas, foodBanner }) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Food Tech">
      {/* banner section  */}
      <PrimaryBanner
        title="Food Tech - Division"
        sub="Multi-platform tech integration to digitize operations and supply chain of food service industry"
        img={banner}
      >
        Revolutionizing the <TextGradient text=" food service industry " /> with
        advanced
        <TextGradient text=" tech" />
      </PrimaryBanner>

      {/* overview section  */}
      <Overview4Items data={foodTechOverview}>
        Tech-based catering
        <br />
        to maximize efficiency
      </Overview4Items>

      {/* app section  */}
      <ImageShowcase
        sub="Intuitively designed applications aimed to simplify your food journey."
        img={foodBanner}
      >
        Outstanding experience
        <br />
        of food surfing
      </ImageShowcase>

      {/* areas section  */}
      <IconCardGroup4 data={foodTechAreas}>
        We provide advanced
        <br />
        systems
      </IconCardGroup4>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/food_tech_division_banner.png",
      foodBanner: "/images/divisions/food_tech/food_tech_delivery_app.png",
      foodTechOverview: foodTechOverviewData,
      foodTechAreas: foodTechAreasData,
    },
  };
}

export default FoodTech;

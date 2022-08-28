import BasicLayout from "../../layouts/BasicLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import Overview3Items from "../../components/shared/Overview3Items";
import BannerWithBullets from "../../components/shared/banners/BannerWithBullets";
import TriangleCardBanner from "../../components/shared/banners/TriangleCardBanner";
import { TextBanner } from "../../components/shared/banners/SharedBanner";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import {
  iotAppDevelopmentBannerData,
  iotServicesData,
  iotSolutionsData,
  iotSupportData,
} from "../../public/data/technologies/iotTechnologiesData";

const IotTechnologies = ({
  banner,
  iotServices,
  iotAppDevelopmentBanner,
  iotSolutions,
  iotSupport,
  iotsolutionsVideo,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="IOT Technologies" noMargin={true}>
      <div className="box">
        {/* banner section  */}
        <PrimaryBanner
          title="IOT Technologies"
          sub="Next-generation IOT technologies using data, sensors and connectivity  "
          img={banner}
        >
          <TextGradient text="Interconnectivity " /> <br />
          of smart devices
        </PrimaryBanner>

        {/* services section  */}
        <Overview3Items data={iotServices} type="Platforms">
          Joining the IoT revolution with
          <br className="hidden xxs:block" />
          <TextGradient text=" smart connectivity" />
        </Overview3Items>
      </div>

      {/* App Development section  */}
      <div className="bg-blue-300">
        <div className="box">
          <TextBanner data={iotAppDevelopmentBanner}>
            Catering to the most demanding IoT software needs
          </TextBanner>
        </div>
      </div>

      <div className="box">
        {/* solutions section  */}
        <TriangleCardBanner
          type="Applications"
          data={iotSolutions}
          video={iotsolutionsVideo}
          reversed={true}
          black={true}
          padding={true}
        >
          Full system design and development
        </TriangleCardBanner>

        {/* innovative solution section  */}
        <BannerWithBullets data={iotSupport} reversed={true}>
          Introducing innovative & pragmatic solutions to old problems
        </BannerWithBullets>
      </div>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/iot_technologies_banner.webp",
      iotServices: iotServicesData,
      iotAppDevelopmentBanner: iotAppDevelopmentBannerData,
      iotSolutions: iotSolutionsData,
      iotsolutionsVideo:
        "/images/technologies/iot/solutions/iot_solutions_banner.mp4",
      iotSupport: iotSupportData,
    },
  };
}

export default IotTechnologies;

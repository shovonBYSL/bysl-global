import TechnologiesLayout from "../../layouts/TechnologiesLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import Overview3Items from "../../components/shared/Overview3Items";
import BannerWithBullets from "../../components/shared/banners/BannerWithBullets";
import TriangleCardBanner from "../../components/shared/banners/TriangleCardBanner";
import { TextBanner } from "../../components/shared/banners/SharedBanner";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import { techSlidersData } from "../../public/data/technologies/techSlidersData";
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
  sliderData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <TechnologiesLayout
      title="IOT Technologies"
      noMargin={true}
      slider={sliderData}
    >
      <div className="box">
        {/* banner section  */}
        <PrimaryBanner
          title="IOT Technologies"
          sub="Next-generation IOT technologies using data, sensors and connectivity "
          img={banner}
        >
          <TextGradient text="Interconnectivity " /> <br />
          of smart devices
        </PrimaryBanner>

        {/* services section  */}
        <Overview3Items data={iotServices} type="Platform">
          Joining the IoT revolution&nbsp;
          <br className="hidden xxs:block" />
          with smart connectivity
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
          Full system design & development
        </TriangleCardBanner>

        {/* innovative solution section  */}
        <BannerWithBullets data={iotSupport} reversed={true}>
          Introducing innovative & pragmatic solutions to old problems
        </BannerWithBullets>
      </div>
    </TechnologiesLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/iot_technologies_banner.png",
      iotServices: iotServicesData,
      iotAppDevelopmentBanner: iotAppDevelopmentBannerData,
      iotSolutions: iotSolutionsData,
      iotsolutionsVideo:
        "/images/technologies/iot/iot_solutions_banner.webm",
      iotSupport: iotSupportData,
      sliderData: techSlidersData[7],
    },
  };
}

export default IotTechnologies;

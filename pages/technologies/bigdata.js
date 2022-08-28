import BasicLayout from "../../layouts/BasicLayout";
import SecondaryLargeBanner from "../../components/shared/banners/SecondaryLargeBanner";
import IconCardGroup3 from "../../components/shared/IconCardGroup3";
import Overview4Items from "../../components/shared/Overview4Items";
import BigdataServices from "../../components/technologies_pages/bigdata_technologies/BigdataServices";
import WhyBigdata from "../../components/technologies_pages/bigdata_technologies/WhyBigdata";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import {
  bigdataBannerData,
  bigdataFeaturesData,
  bigdataOverviewData,
  whyBigdataData,
  bigdataServicesData,
} from "../../public/data/technologies/bigdataTechnologiesData";

const BigdataTechnologies = ({
  bigdataBanner,
  bigdataOverview,
  whyBigdata,
  bigdataServices,
  bigdataFeatures,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Big Data Technologies" noMargin={true}>
      <div className="box">
        {/* banner section  */}
        <SecondaryLargeBanner data={bigdataBanner}>
          <TextGradient text="Big Data " /> & <TextGradient text=" Analytics" />
        </SecondaryLargeBanner>
      </div>

      {/* overview section  */}
      <div className="bg-[#ECF1F8] mb-10 xl:mb-16">
        <div className="box">
          <Overview4Items data={bigdataOverview} />
        </div>
      </div>

      {/* WhyBigdata section  */}
      <div className="box">
        <WhyBigdata data={whyBigdata} />
        {/* services section  */}
        <BigdataServices data={bigdataServices} />

        {/* features section  */}
        <IconCardGroup3 data={bigdataFeatures} type="Features">
          Multi-faceted use of Big Data
        </IconCardGroup3>
      </div>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      bigdataBanner: bigdataBannerData,
      bigdataOverview: bigdataOverviewData,
      whyBigdata: whyBigdataData,
      bigdataServices: bigdataServicesData,
      bigdataFeatures: bigdataFeaturesData,
    },
  };
}

export default BigdataTechnologies;

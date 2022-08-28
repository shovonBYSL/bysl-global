import BasicLayout from "../../layouts/BasicLayout";
import PrimaryBanner from "../../components/shared/banners/PrimaryBanner";
import IconCardGroup3 from "../../components/shared/IconCardGroup3";
import ImageShowcase from "../../components/shared/ImageShowcase";
import FeaturedBanner from "../../components/shared/banners/FeaturedBanner";
import {
  dataScienceAnalysisData,
  dataScienceControlPanelData,
} from "../../public/data/divisions/dataScienceData";

const DataScience = ({
  banner,
  dataScienceControlPanel,
  dataScienceAnalysis,
  dataAnalysisImg,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Data Science" noMargin={true}>
      <div className="box">
        {/* banner section  */}
        <PrimaryBanner
          title="Data Science - Division"
          sub="We understand, analyze and harness the power of data using the best of data science and drive growth for enterprizes."
          img={banner}
        >
          Translating data into key growth factors
        </PrimaryBanner>

        {/* control panel section  */}
        <IconCardGroup3 data={dataScienceControlPanel}>
          AI/ML-based
          <br />
          application development
        </IconCardGroup3>
      </div>

      {/* data analysis section  */}
      <div className="bg-[#ECF1F8]">
        <div className="box">
          <ImageShowcase img={dataAnalysisImg}>
            Sales forecasting with
            <br />
            big data analytics
          </ImageShowcase>
        </div>
      </div>

      {/* real time data analysis section  */}
      <div className="box">
        <FeaturedBanner data={dataScienceAnalysis}>
          Real-time data analytics
        </FeaturedBanner>
      </div>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/data_science_division_banner.svg",
      dataAnalysisImg:
        "/images/divisions/data_science/data_analysis_banner.svg",
      dataScienceControlPanel: dataScienceControlPanelData,
      dataScienceAnalysis: dataScienceAnalysisData,
    },
  };
}

export default DataScience;

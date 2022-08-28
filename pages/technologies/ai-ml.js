import BasicLayout from "../../layouts/BasicLayout";
import AIMLBanner from "../../components/technologies_pages/ai_ml_technologies/AIMLBanner";
import Overview4Items from "../../components/shared/Overview4Items";
import BannerWithBulletSingle from "../../components/shared/banners/BannerWithBulletSingle";
import AIMLServices from "../../components/technologies_pages/ai_ml_technologies/AIMLServices";
import ImageShowcase from "../../components/shared/ImageShowcase";
import { TextGradient } from "../../components/shared/SharedTextgroups";
import {
  aimlFeaturesData,
  aimlUserExperienceData,
  aimlServicesData,
} from "../../public/data/technologies/aimlTechnologiesData";

const AIMLTechnologies = ({
  banner,
  aimlFeatures,
  aimlServices,
  applicationsVideo,
  servicesVideo,
  aimlUserExperience,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="AI/ML Technologies" noMargin={true}>
      {/* banner section  */}
      <AIMLBanner
        title="AI/ML Technologies"
        sub="Innovating in next-generation AI systems development adapting data-driven supervised, unsupervised, reinforced learnings using self-replicating artificial neural networks & ML artifacts to handle & simplify the massive complexity of data patterns & open new horizons for businesses. "
        img={banner}
      >
        Intelligent <TextGradient text=" Systems " />
        <br />
        to make <TextGradient text=" Life " /> Better
      </AIMLBanner>

      <div className="box">
        {/* overview items section  */}
        <Overview4Items data={aimlFeatures} />

        {/* services section  */}
        <AIMLServices data={aimlServices} video={servicesVideo} />

        {/* Solutions section  */}
        <ImageShowcase type="Applications" video={applicationsVideo}>
          AI-driven technology to unlock
          <br />
          the potential of health data
        </ImageShowcase>

        {/* Big Data Analysis section  */}
        <BannerWithBulletSingle data={aimlUserExperience} type="Features" />
      </div>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/ai-ml_technologies_banner.svg",
      aimlFeatures: aimlFeaturesData,
      aimlServices: aimlServicesData,
      servicesVideo:
        "/images/technologies/ai_ml/services/aiml_services_banner.mp4",
      applicationsVideo: "/images/technologies/ai_ml/aiml_solutions.mp4",
      aimlUserExperience: aimlUserExperienceData,
    },
  };
}

export default AIMLTechnologies;

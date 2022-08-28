import CommonLayout from "../layouts/CommonLayout";
import LandingPageBanner from "../components/landing_page/LandingPageBanner";
import AboutUs from "../components/landing_page/AboutUs";
import ProjectsShowcase from "../components/landing_page/ProjectsShowcase";
import SolutionsBanner from "../components/landing_page/SolutionsBanner";
import Investments from "../components/landing_page/Investments";
import Technologies from "../components/landing_page/Technologies";
import { summaryData } from "../public/data/summaryData";
import { aboutUsData } from "../public/data/aboutUsData";
import {
  projectsShowcaseData,
  investmentData,
  techData,
} from "../public/data/landingPageData";

const Home = ({
  techData,
  summaryData,
  aboutUsData,
  investmentData,
  solutionsBanner,
  landingBanner,
  projectsShowcase,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <CommonLayout noMargin={true}>
      {/* banner section  */}
      <LandingPageBanner data={landingBanner} />
      <div className="box">
        {/* about us section  */}
        <AboutUs summaryData={summaryData} aboutUsData={aboutUsData} />

        {/* projects section  */}
        <ProjectsShowcase data={projectsShowcase} />

        {/* solutions section  */}
        <SolutionsBanner data={solutionsBanner} />

        {/* technologies section  */}
        <Technologies data={techData} />

        {/* investments section  */}
        <Investments data={investmentData} />
      </div>
    </CommonLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      techData,
      summaryData,
      aboutUsData,
      projectsShowcase: projectsShowcaseData,
      investmentData,
      solutionsBanner: "/images/banners/landing_solution_banner.webm",
      landingBanner: "/images/banners/landing_banner.svg",
    },
  };
}

export default Home;

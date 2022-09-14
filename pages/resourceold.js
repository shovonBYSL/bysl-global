import BasicLayout from "../layouts/BasicLayout";
import SingleResourceBanner from "../components/resources/singleResources/SingleResourceBanner";
import ResourceCommonBanner from "../components/shared/banners/ResourceCommonBanner";
import BlogLayout from "../components/shared/BlogLayout";
import SingleResourceGoal from "../components/resources/singleResources/SingleResourceGoal";
import SingleResourceProblemFraming from "../components/resources/singleResources/SingleResourceProblemFraming";
import SingleResourceOverview from "../components/resources/singleResources/SingleResourceOverview";
import {
  resourceAppData,
  resourceServiceData,
  resourceSolutionData,
  resourceWorkData,
  singleResourceBannerData,
  singleResourceProblemData,
} from "../public/data/resourcesData";

const Resource = ({
  singleResourceBanner,
  singleResourceProblem,
  resourceApp,
  goalImg,
  resourceService,
  resourceSolution,
  resourceWork,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Resource" noMargin={true}>
      {/* banner section  */}
      <SingleResourceBanner data={singleResourceBanner} />

      {/* problem framing section  */}
      <SingleResourceOverview />

      {/* problem framing section  */}
      <SingleResourceProblemFraming data={singleResourceProblem} />

      {/* single app section  */}
      <ResourceCommonBanner data={resourceApp} reversed={true} />

      {/* goal section  */}
      <SingleResourceGoal img={goalImg} />

      {/* what we do section  */}
      <ResourceCommonBanner data={resourceService} full={true} />

      {/* solution section  */}
      <ResourceCommonBanner data={resourceSolution} reversed={true} />

      {/* more work section  */}
      <div className="box">
        <BlogLayout data={resourceWork}>More Work</BlogLayout>
      </div>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      singleResourceBanner: singleResourceBannerData,
      singleResourceProblem: singleResourceProblemData,
      resourceApp: resourceAppData,
      goalImg: "/images/resources/single/single_resource_goal.svg",
      resourceService: resourceServiceData,
      resourceSolution: resourceSolutionData,
      resourceWork: resourceWorkData,
    },
  };
}

export default Resource;

import SolutionsLayout from "../layouts/SolutionsLayout";
import ResourcesBanner from "../components/resources/ResourcesBanner";
import ResourcesBlogs from "../components/resources/ResourcesBlogs";
import ResourcesFindings from "../components/resources/ResourcesFindings";
import ResourceFeaturedVideos from "../components/resources/ResourceFeaturedVideos";
import { solutionsResourcesData } from "../public/data/solutions/blogData";
import { popular } from "../utils/isPopular";
import {
  resourcesBlogsData,
  resourcesFindingsData,
  resourcesVideoData,
} from "../public/data/resourcesDataNew";

const Resources = ({
  banner,
  solutionsResources,
  // blogData,
  // findingsData,
  videoData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout
      title="Resources"
      data={solutionsResources}
      noMargin={true}
    >
      {/* banner section  */}
      <ResourcesBanner data={banner} />
      {/* blogs section  */}
      <div className="box">
        <ResourcesBlogs data={solutionsResources} />
      </div>
      {/* featured videos section  */}
      <ResourceFeaturedVideos data={videoData} />
      {/* findings section  */}
      <div className="box">
        <ResourcesFindings data={solutionsResources} />
      </div>
    </SolutionsLayout>
  );
};

export async function getStaticProps() {
  const filteredBanner = popular(solutionsResourcesData, 5);

  return {
    props: {
      banner: filteredBanner,
      solutionsResources: solutionsResourcesData,
      // blogData: resourcesBlogsData,
      // findingsData: solutionsResourcesData,
      videoData: resourcesVideoData,
    },
  };
}

export default Resources;

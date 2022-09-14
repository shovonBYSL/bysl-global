import SolutionsLayout from "../layouts/SolutionsLayout";
import ResourcesBanner from "../components/resources/ResourcesBanner";
import ResourcesBlogs from "../components/resources/ResourcesBlogs";
import ResourcesFindings from "../components/resources/ResourcesFindings";
import ResourceFeaturedVideos from "../components/resources/ResourceFeaturedVideos";
import { popular } from "../utils/isPopular";
import {
  resourcesVideoData,
  solutionsResourcesData,
} from "../public/data/solutions/blogData";

const Resources = ({ banner, solutionsResources, videoData }) => {
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
      <div className="px-4">
        <ResourcesBlogs data={solutionsResources} />
      </div>
      {/* featured videos section  */}
      <ResourceFeaturedVideos data={videoData} />
      {/* findings section  */}
      <div className="px-4">
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
      videoData: resourcesVideoData,
    },
  };
}

export default Resources;

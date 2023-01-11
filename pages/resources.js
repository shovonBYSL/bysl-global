import SolutionsLayout from "../layouts/SolutionsLayout";
import ResourcesBanner from "../components/resources/ResourcesBanner";
import ResourcesBlogs from "../components/resources/ResourcesBlogs";
import ResourcesFindings from "../components/resources/ResourcesFindings";
import ResourceFeaturedVideos from "../components/resources/ResourceFeaturedVideos";

import { popular } from "../utils/isPopular";

// API endpoint
import { API } from "../api";

const Resources = ({ banner, resourcesData, tutorialsData }) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout title="Resources" data={resourcesData} noMargin={true}>
      {/* banner section  */}
      <ResourcesBanner data={banner} />
      {/* blogs section  */}
      <div className="box">
        <ResourcesBlogs data={resourcesData.slice(0, 5)} />
      </div>
      {/* featured videos section  */}
      <ResourceFeaturedVideos data={tutorialsData} />
      {/* findings section  */}
      <div className="box">
        <ResourcesFindings data={resourcesData} />
      </div>
    </SolutionsLayout>
  );
};

export async function getStaticProps() {
  const blogs = await fetch(`${API}/posts/`);
  const tutorials = await fetch(`${API}/posts/tutorials/`);

  const resourcesData = await blogs.json();
  const tutorialsData = await tutorials.json();

  return {
    props: {
      banner: popular(resourcesData, 5),
      resourcesData,
      tutorialsData: tutorialsData.slice(0, 3),
    },
  };
}

export default Resources;

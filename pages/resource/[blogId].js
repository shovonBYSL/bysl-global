import CommonLayout from "../../layouts/CommonLayout";
import PageTitle from "../../components/shared/PageTitle";
import BlogContent from "../../components/resources/singleBlog/BlogContent";
import SingleBlogBanner from "../../components/resources/singleBlog/SingleBlogBanner";
import Loader from "../../components/shared/Loader";

import { popular } from "../../utils/isPopular";

// API endpoint
import { API } from "../../api";

const SingleResource = ({ data, allBlogs }) => {
  return (
    <>
      {data ? (
        <CommonLayout title="Resource">
          <PageTitle title={`${data.post_title}`} />
          <SingleBlogBanner data={data} />
          <BlogContent
            data={data}
            popularBlogs={popular(allBlogs, 3)}
            latestBlogs={allBlogs.slice(-3)}
          />
        </CommonLayout>
      ) : (
        <Loader />
      )}
    </>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`${API}/posts/`);
  const allResourcesData = await res.json();

  const singleRes = await fetch(`${API}/posts/${params.blogId}/`);
  const singleResourcesData = await singleRes.json();

  return {
    props: {
      allBlogs: allResourcesData,
      data: singleResourcesData,
    },
  };
}

export default SingleResource;

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import CommonLayout from "../../layouts/CommonLayout";
import BlogContent from "../../components/resources/singleBlog/BlogContent";
import SingleBlogBanner from "../../components/resources/singleBlog/SingleBlogBanner";
import Loader from "../../components/shared/Loader";
import { solutionsResourcesData } from "../../public/data/solutions/blogData";
import { popular } from "../../utils/isPopular";

const SingleResource = () => {
    const router = useRouter();
    const { blogId } = router.query;
    const [data, setData] = useState(solutionsResourcesData[blogId]);

  useEffect(() => {
    if (blogId !== "undefined") {
      setData(solutionsResourcesData[blogId]);
    }
  }, [blogId, data]);

  return (
    <>
      {data ? (
        <CommonLayout title="Resource">
          <SingleBlogBanner data={data} />
          <BlogContent
            data={data}
            popularBlogs={popular(solutionsResourcesData, 3)}
            latestBlogs={solutionsResourcesData.slice(-4)}
          />
        </CommonLayout>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleResource;

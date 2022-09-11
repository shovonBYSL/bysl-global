import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import CommonLayout from "../../layouts/CommonLayout";
import PageTitle from "../../components/shared/PageTitle";
import BlogContent from "../../components/resources/singleBlog/BlogContent";
import SingleBlogBanner from "../../components/resources/singleBlog/SingleBlogBanner";
import Loader from "../../components/shared/Loader";
import { solutionsResourcesData } from "../../public/data/solutions/blogData";
import { popular } from "../../utils/isPopular";
import { readingTime } from "../../utils/readingTime";

const SingleResource = () => {
  const router = useRouter();
  const { blogId } = router.query;
  const [data, setData] = useState(null);
  // const [data, setData] = useState(solutionsResourcesData[blogId]);
  readingTime();

  useEffect(() => {
    if (blogId !== "undefined") {
      solutionsResourcesData.find((item) => item.url == blogId);
      setData(solutionsResourcesData.find((item) => item.url == blogId));
      // setData(solutionsResourcesData[blogId]);
    }
  }, [blogId, data]);

  return (
    <>
      {data ? (
        <CommonLayout title="Resource">
          <PageTitle title={`${data?.title}`} />
          <SingleBlogBanner data={data} />
          <BlogContent
            data={data}
            popularBlogs={popular(solutionsResourcesData, 3)}
            latestBlogs={solutionsResourcesData.slice(-3)}
          />
        </CommonLayout>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleResource;

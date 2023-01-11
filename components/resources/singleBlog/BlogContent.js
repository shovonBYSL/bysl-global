import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import StickyBox from "react-sticky-box";
// import { useState } from "react";
import { format } from "date-fns";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
// import { BsFillPlayFill } from "react-icons/bs";
import { ImFacebook, ImLinkedin2, ImTwitter } from "react-icons/im";

// import ResourceVideoModal from "../ResourceVideoModal";

const BlogContent = ({ data, popularBlogs, latestBlogs }) => {
  const router = useRouter();
  const pageLink = `https://byslglobal.com${router.asPath}`;

  // const [isOpen, setIsOpen] = useState(false);
  // const [videoFile, setVideoFile] = useState();

  // const handleClick = (video) => {
  //   setIsOpen(true);
  //   setVideoFile(video);
  // };

  const BlogSideBar = ({ label, data }) => {
    return (
      <>
        <p className="text-lg xl:text-2xl text-gray-800 font-extrabold mb-4 md:mb-6 xl:mb-10">
          {label}
        </p>
        <div className="flex flex-col gap-4">
          {data.map(({ id, slug, thumbnail_image, post_title, created_at }) => {
            return (
              <Link key={id} passHref href={`/resource/${slug}`}>
                <div className="cursor-pointer flex items-center gap-6">
                  <Image
                    src={thumbnail_image}
                    placeholder="blur"
                    blurDataURL={thumbnail_image}
                    className="!rounded-full"
                    height={86}
                    width={86}
                    objectFit="cover"
                    alt=""
                  />
                  <div className="w-full">
                    <p className=" text-sm text-gray-800">{post_title}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      Posted {format(new Date(created_at), "MMM d, y")}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-16">
      {/* {isOpen && <ResourceVideoModal video={videoFile} setIsOpen={setIsOpen} />} */}
      <div className="lg:px-5 lg:col-span-8">
        <div
          dangerouslySetInnerHTML={{ __html: data.content }}
          className="text-gray-600 blogContent"
        />
        <div className="flex gap-x-2 items-center mt-10">
          <p className="text-sm text-gray-600">Share</p>
          <div className="flex gap-x-4">
            <FacebookShareButton url={pageLink}>
              <ImFacebook className="text-gray-600 mt-0 cursor-pointer hover:text-blue-700 transition-all duration-150" />
            </FacebookShareButton>
            <LinkedinShareButton url={pageLink}>
              <ImLinkedin2 className="text-gray-600 mt-0 cursor-pointer hover:text-blue-900 transition-all duration-150" />
            </LinkedinShareButton>
            <TwitterShareButton url={pageLink}>
              <ImTwitter className="text-gray-600 mt-0 cursor-pointer hover:text-blue-700 transition-all duration-150" />
            </TwitterShareButton>
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 ">
        <StickyBox offsetTop={100}>
          <BlogSideBar label="Popular" data={popularBlogs} />
          <div className="mt-10 xl:mt-16">
            <BlogSideBar label="Latest" data={latestBlogs} />
          </div>
        </StickyBox>
      </div>
    </div>
  );
};

export default BlogContent;

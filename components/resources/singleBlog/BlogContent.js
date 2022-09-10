import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { ImFacebook, ImLinkedin2, ImTwitter } from "react-icons/im";
import ResourceVideoModal from "../ResourceVideoModal";

const BlogContent = ({ data, popularBlogs, latestBlogs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoFile, setVideoFile] = useState();

  const handleClick = (video) => {
    setIsOpen(true);
    setVideoFile(video);
  };

  const BlogSideBar = ({ label, data }) => {
    return (
      <>
        <p className="text-lg xl:text-2xl text-gray-800 font-extrabold mb-4 md:mb-6 xl:mb-10">
          {label}
        </p>
        <div className="flex flex-col gap-4">
          {data.map(({ id, banner, title, date }) => {
            return (
              <Link key={id} passHref href={`/resource/${id}`}>
                <a className="cursor-pointer flex items-center gap-6">
                  <Image
                    src={banner}
                    placeholder="blur"
                    blurDataURL={banner}
                    className="!rounded-full"
                    height={86}
                    width={86}
                    objectFit="cover"
                    alt=""
                  />
                  <div className="w-full">
                    <p className=" text-sm text-gray-800">{title}</p>
                    <p className="mt-2 text-sm text-gray-300">Posted {date}</p>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-16">
      {isOpen && <ResourceVideoModal video={videoFile} setIsOpen={setIsOpen} />}
      <div className="lg:px-5 lg:col-span-8">
        {data.details.map((item, i) => {
          const { title, text, img, thumb, points, bullet, highlight, video } =
            item;

          return (
            <div key={i}>
              {title && <p className="text-gray-500 font-extrabold">{title}</p>}
              {text && (
                <p
                  className={`mt-4 ${points ? "mb-4" : "mb-10"} text-gray-500`}
                >
                  {text}
                </p>
              )}
              {bullet && (
                <div className="text-gray-500 mb-10 ml-6 lg:ml-10">
                  {bullet.map((item, i) => (
                    <p key={i} className="my-2 bullets">
                      <span className="font-bold">{item.title}: </span>
                      {item.info}
                    </p>
                  ))}
                </div>
              )}
              {points && (
                <div className="text-gray-500 mb-10 ml-6">
                  {points.map((item, i) => (
                    <p key={i} className="my-2">
                      <span className="font-bold">{item.title}: </span>
                      {item.info}
                    </p>
                  ))}
                </div>
              )}
              {highlight && (
                <p className="bg-gray-300/30 p-6 2xl:p-8 text-center text-gray-800/80 font-bold text-xl lg:text-2xl 2xl:text-3xl border border-black/30 mb-10">
                  {highlight}
                </p>
              )}
              {img && (
                <div className="mb-11">
                  <Image
                    src={img}
                    placeholder="blur"
                    blurDataURL={img}
                    className="!rounded-[20px]"
                    height={376}
                    width={816}
                    objectFit="cover"
                    alt=""
                  />
                </div>
              )}
              {thumb && (
                <div
                  onClick={() => handleClick(video)}
                  className="mb-11 relative"
                >
                  <Image
                    src={thumb}
                    placeholder="blur"
                    blurDataURL={thumb}
                    className="!rounded-[20px]"
                    height={376}
                    width={816}
                    objectFit="cover"
                    alt=""
                  />
                  <div
                    className={`bg-white h-[46px] w-[46px] relative inline-flex xl:h-[74px] xl:w-[74px] rounded-full justify-center items-center centered`}
                  >
                    <BsFillPlayFill className="text-gray-800 text-xl z-10 ml-[3px] xl:text-4xl xl:!ml-1" />
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className="flex gap-x-2 items-center">
          <p className="text-sm text-gray-300">Share</p>
          <div className="flex gap-x-4">
            <ImFacebook className="text-gray-500 mt-0 cursor-pointer" />
            <ImLinkedin2 className="text-gray-500 mt-0 cursor-pointer" />
            <ImTwitter className="text-gray-500 mt-0 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="lg:col-span-4">
        <BlogSideBar label="Popular" data={popularBlogs} />
        <div className="mt-10 xl:mt-16">
          <BlogSideBar label="Latest" data={latestBlogs} />
        </div>
      </div>
    </div>
  );
};

export default BlogContent;

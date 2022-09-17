import Image from "next/image";
import Link from "next/link";

import { TextGradient } from "./SharedTextgroups";

const BlogCard = ({ data }) => {
  const { url, banner, type, hits, title, subTitle, date, timeToRead } = data;

  return (
    <Link passHref href={`/resource/${url}`}>
      <div className="group cursor-pointer flex flex-col justify-between blog-card bg-white rounded-md shadow-sm shadow-gray-200/50 mx-auto overflow-hidden h-full">
        <div>
          <div className="h-52 overflow-hidden">
            <div className="relative rounded-t-md w-full h-52 group-hover:scale-125 transition duration-700">
              <Image
                src={banner}
                placeholder="blur"
                blurDataURL={banner}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
          <div className="px-5 pt-6">
            <p className="text-xs font-medium">
              <TextGradient text={type} />
            </p>
            <p className="text-xl font-bold text-gray-800 pt-1">{title}</p>
            <p className="text-sm text-gray-600 py-4">
              {subTitle.slice(0, 100)}...
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-600 px-5 pb-2">
            <p>{date}</p>
            <p>{timeToRead} to read</p>
            <p>{hits} views</p>
          </div>
          <a className="service-card-bg h-[50px] border-t hover:cursor-pointer flex justify-center items-center">
            <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r group-hover:from-white from-blue-900 group-hover:to-white to-blue-700">
              Read More
            </p>
          </a>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

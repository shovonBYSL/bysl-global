import Image from "next/image";
import Link from "next/link";

import { TextGradient } from "./SharedTextgroups";

const BlogCard = ({ data }) => {
  const { id, banner, type, title, subTitle, date, timeToRead } = data;

  return (
    <div className="group blog-card bg-white rounded-md shadow-sm  shadow-gray-200/50 mx-auto overflow-hidden">
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
      <div className="px-5 pt-6 pb-6">
        <p className="text-xs font-medium">
          <TextGradient text={type} />
        </p>
        <p className="text-xl font-bold text-gray-800 pt-1 pb-4">{title}</p>
        <p className="text-sm text-gray-400 pb-4">{subTitle}</p>
        {date && (
          <div className="flex justify-between text-xs text-gray-300">
            <p>{date}</p>
            <p>{timeToRead} to read</p>
          </div>
        )}
      </div>
      <Link passHref href={`/resource/${id}`}>
        <a className="service-card-bg h-[50px] border-t hover:cursor-pointer flex justify-center items-center">
          <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r group-hover:from-white from-blue-900 group-hover:to-white to-blue-700">
            Read More
          </p>
        </a>
      </Link>
    </div>
  );
};

export default BlogCard;

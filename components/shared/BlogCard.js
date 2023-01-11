import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

import { TextGradient } from "./SharedTextgroups";

const BlogCard = ({ data }) => {
  const {
    slug,
    featured_image,
    category,
    view_count,
    post_title,
    sub_content,
    created_at,
    read_time,
  } = data;

  return (
    <Link passHref href={`/resource/${slug}`}>
      <a className="group cursor-pointer flex flex-col justify-between blog-card bg-white rounded-md shadow-sm shadow-gray-200/50 mx-auto overflow-hidden h-full">
        <div>
          <div className="h-52 overflow-hidden">
            <div className="relative rounded-t-md w-full h-52 group-hover:scale-125 transition duration-700">
              <Image
                src={featured_image}
                placeholder="blur"
                blurDataURL={featured_image}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
          <div className="px-5 pt-6">
            <p className="text-xs font-medium">
              <TextGradient text={category.category_name} />
            </p>
            <p className="text-xl font-bold text-gray-800 pt-1">{post_title}</p>
            <p className="text-sm text-gray-600 py-4">
              {sub_content.slice(0, 100)}...
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-600 px-5 pb-2">
            <p>{format(new Date(created_at), "MMM d, y")}</p>
            <p>{read_time} mins to read</p>
            <p>
              {view_count} {view_count > 1 ? "views" : "view"}
            </p>
          </div>
          <div className="service-card-bg h-[50px] border-t hover:cursor-pointer flex justify-center items-center">
            <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r group-hover:from-white from-blue-900 group-hover:to-white to-blue-700">
              Read More
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

import { TechnologiesSectionTitle } from "../shared/SharedTextgroups";

const ResourcesBlogs = ({ data }) => {
  return (
    <div className="py-6 xl:py-10">
      <TechnologiesSectionTitle>
        See what we’ve written lately
      </TechnologiesSectionTitle>
      <div className="mt-6 xl:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {data.map((item, i) => {
          const {
            id,
            slug,
            read_time,
            featured_image,
            category,
            view_count,
            post_title,
            created_at,
          } = item;

          return (
            <Link key={id} passHref href={`/resource/${slug}`}>
              <a
                className={`group cursor-pointer shadow-[0px_0px_20px_0px_#E5EBF3] rounded-2xl lg:rounded-[20px] bg-white overflow-hidden h-full flex flex-col justify-between ${
                  i === 0 || i === 1 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <div>
                  <div className="overflow-hidden">
                    <div className="relative h-[162px] lg:h-[200px] 2xl:h-[276px] group-hover:scale-125 transition duration-1000">
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
                  <div className="pt-4 px-3 xxs:px-6 sm:px-3 md:px-6 lg:px-3 xl:px-6">
                    <p className="text-sm lg:text-base text-gray-800">
                      {category.category_name}
                    </p>
                    <p className="text-gray-800 font-semibold lg:font-bold lg:text-xl xl:text-2xl my-3 xl:mt-5 xl:mb-4">
                      {post_title}
                    </p>
                  </div>
                </div>
                <div className="pb-4 px-3 xxs:px-6 sm:px-3 md:px-6 lg:px-3 xl:px-6 w-full flex items-center justify-between md:justify-start gap-3">
                  <p className="text-gray-600 text-xs xl:text-sm">
                    {format(new Date(created_at), "MMM d, y")}
                  </p>
                  <span className="h-2.5 w-px bg-gray-900/20" />
                  <p id="time" className="text-gray-600 text-xs xl:text-sm">
                    {read_time} mins to read
                  </p>
                  <span className="h-2.5 w-px bg-gray-900/20" />
                  <p className="text-gray-600 text-xs xl:text-sm">
                    {view_count} views
                  </p>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ResourcesBlogs;

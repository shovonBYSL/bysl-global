import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

import { TechnologiesSectionTitle } from "../shared/SharedTextgroups";

const ResourcesFindings = ({ data }) => {
  return (
    <div className="py-6 xl:py-10">
      <TechnologiesSectionTitle>Latest Findings</TechnologiesSectionTitle>
      <div className="mt-6 xl:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data
          .slice(0, 4)
          .map(
            ({
              id,
              slug,
              read_time,
              featured_image,
              category,
              view_count,
              post_title,
              created_at,
            }) => {
              return (
                <Link key={id} passHref href={`/resource/${slug}`}>
                  <a className="lg:flex items-center gap-4 lg:gap-6 group cursor-pointer">
                    <div className="overflow-hidden rounded-xl h-[150px] min-w-[130px]">
                      <div className="relative h-[180px] lg:h-[150px] lg:w-[130px] group-hover:scale-125 transition duration-700">
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
                    <div className="w-full">
                      <p className="text-sm lg:text-base font-bold text-gray-600 mt-4 lg:mt-0">
                        {category.category_name}
                      </p>
                      <p className="text-gray-800 font-medium xl:text-xl mt-2 mb-4">
                        {post_title}
                      </p>
                      <div className="w-full flex items-center justify-between md:justify-start gap-3">
                        <p className="text-gray-600 text-xs lg:text-sm">
                          {format(new Date(created_at), "MMM d, y")}
                        </p>
                        <span className="h-2.5 w-px bg-gray-900/20" />
                        <p
                          id="time"
                          className="text-gray-600 text-xs lg:text-sm"
                        >
                          {read_time} mins to read
                        </p>
                        <span className="h-2.5 w-px bg-gray-900/20" />
                        <p className="text-gray-600 text-xs lg:text-sm">
                          {view_count} views
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              );
            }
          )}
      </div>
    </div>
  );
};

export default ResourcesFindings;

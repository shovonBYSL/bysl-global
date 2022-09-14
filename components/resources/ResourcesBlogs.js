import Image from "next/image";
import Link from "next/link";

import { TechnologiesSectionTitle } from "../shared/SharedTextgroups";

const ResourcesBlogs = ({ data }) => {
  return (
    <div className="py-6 xl:py-10">
      <TechnologiesSectionTitle>
        See what we’ve written lately
      </TechnologiesSectionTitle>
      <div className="mt-6 xl:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {data.map(
          ({ id, url, timeToRead, banner, type, hits, title, date }) => {
            return (
              <Link key={id} passHref href={`/resource/${url}`}>
                <a
                  className={`group cursor-pointer shadow-[0px_0px_20px_0px_#E5EBF3] rounded-2xl lg:rounded-[20px] bg-white overflow-hidden h-full flex flex-col justify-between ${
                    id === 0 || id === 1 ? "lg:col-span-3" : "lg:col-span-2"
                  }`}
                >
                  <div>
                    <div className="overflow-hidden">
                      <div className="relative h-[162px] lg:h-[200px] 2xl:h-[276px] group-hover:scale-125 transition duration-1000">
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
                    <div className="pt-4 px-3 xxs:px-6 sm:px-3 md:px-6">
                      <p className="text-sm lg:text-base text-gray-800">
                        {type}
                      </p>
                      <p className="text-gray-800 font-semibold lg:font-bold lg:text-xl xl:text-2xl my-3 xl:mt-5 xl:mb-4">
                        {title}
                      </p>
                    </div>
                  </div>
                  <div className="pb-4 px-3 xxs:px-6 sm:px-3 md:px-6 w-full flex items-center justify-between md:justify-start gap-3">
                    <p className="text-[#888B96] text-xs xl:text-sm">{date}</p>
                    <span className="h-2.5 w-px bg-gray-900/20" />
                    <p id="time" className="text-[#888B96] text-xs xl:text-sm">
                      {timeToRead} to read
                    </p>
                    <span className="h-2.5 w-px bg-gray-900/20" />
                    <p className="text-[#888B96] text-xs xl:text-sm">
                      {hits} views
                    </p>
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

export default ResourcesBlogs;

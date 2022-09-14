import Image from "next/image";
import Link from "next/link";

import { TechnologiesSectionTitle } from "../shared/SharedTextgroups";

const ResourcesFindings = ({ data }) => {
  return (
    <div className="py-6 xl:py-10">
      <TechnologiesSectionTitle>Latest Findings</TechnologiesSectionTitle>
      <div className="mt-6 xl:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data
          .slice(0, 4)
          .map(({ id, url, timeToRead, banner, type, hits, title, date }) => {
            return (
              <Link key={id} passHref href={`/resource/${url}`}>
                <a
                  key={id}
                  className="lg:flex items-center gap-4 lg:gap-6 group cursor-pointer"
                >
                  <div className="overflow-hidden rounded-xl h-[150px] min-w-[130px]">
                    <div className="relative h-[180px] lg:h-[150px] lg:w-[130px] group-hover:scale-125 transition duration-700">
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
                  <div className="w-full">
                    <p className="text-sm lg:text-base font-bold text-gray-500 mt-4 lg:mt-0">
                      {type}
                    </p>
                    <p className="text-gray-800 font-medium xl:text-xl mt-2 mb-4">
                      {title}
                    </p>
                    <div className="w-full flex items-center justify-between md:justify-start gap-3">
                      <p className="text-[#888B96] text-xs lg:text-sm">
                        {date}
                      </p>
                      <span className="h-2.5 w-px bg-gray-900/20" />
                      <p
                        id="time"
                        className="text-[#888B96] text-xs lg:text-sm"
                      >
                        {timeToRead} to read
                      </p>
                      <span className="h-2.5 w-px bg-gray-900/20" />
                      <p className="text-[#888B96] text-xs lg:text-sm">
                        {hits} views
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ResourcesFindings;

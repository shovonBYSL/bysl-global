import Image from "next/image";
import Link from "next/link";

import { TechnologiesSectionTitle } from "../shared/SharedTextgroups";

const ResourcesFindings = ({ data }) => {
  return (
    <div className="py-6 xl:py-10">
      <TechnologiesSectionTitle>Latest Findings</TechnologiesSectionTitle>
      <div className="mt-6 xl:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {data
          .slice(0, 4)
          .map(({ id, url, timeToRead, cardImg, type, title, date }) => {
            return (
              <Link key={id} passHref href={`/resource/${url}`}>
                <a
                  key={id}
                  className="flex items-center gap-4 lg:gap-6 group cursor-pointer"
                >
                  <div className="overflow-hidden rounded-xl h-[150px] min-w-[130px]">
                    <div className="relative group-hover:scale-125 transition duration-700">
                      <Image
                        src={cardImg}
                        placeholder="blur"
                        blurDataURL={cardImg}
                        height={150}
                        width={130}
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm lg:text-base font-bold text-gray-500">
                      {type}
                    </p>
                    <p className="text-gray-800 font-medium lg:text-xl mt-2 mb-4">
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
                        125 views
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

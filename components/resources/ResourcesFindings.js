import Image from "next/image";
import Link from "next/link";

import { TechnologiesSectionTitle } from "../shared/SharedTextgroups";

const ResourcesFindings = ({ data }) => {
  return (
    <div className="py-6 xl:py-10">
      <TechnologiesSectionTitle>Latest Findings</TechnologiesSectionTitle>
      <div className="mt-6 xl:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.slice(0, 4).map(({ id, banner, type, title, date }) => {
          return (
            <Link key={id} passHref href={`/resource/${id}`}>
              <a
                key={id}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="overflow-hidden rounded-xl">
                  <div className="relative h-[150px] w-[130px] group-hover:scale-125 transition duration-700">
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
                  <p className="text-sm lg:text-base font-bold text-gray-500">
                    {type}
                  </p>
                  <p className="text-gray-800 font-medium lg:text-xl mt-2 mb-4">
                    {title}
                  </p>
                  <p className="text-gray-500 text-sm">{date}</p>
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

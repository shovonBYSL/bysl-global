import Image from "next/image";

import { TechnologiesSectionTitle } from "../shared/SharedTextgroups";

const ResourcesBlogs = ({ data }) => {
  return (
    <div className="py-6 xl:py-10">
      <TechnologiesSectionTitle>
        See what we’ve written lately
      </TechnologiesSectionTitle>
      <div className="mt-6 xl:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {data.map(({ id, img, subject, title, publishDate }) => {
          return (
            <div
              key={id}
              className={`group cursor-pointer shadow-[0px_0px_20px_0px_#E5EBF3] rounded-2xl lg:rounded-[20px] bg-white overflow-hidden ${
                id === 0 || id === 1 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <div className="overflow-hidden">
                <div className="relative h-[162px] lg:h-[200px] 2xl:h-[276px] group-hover:scale-125 transition duration-1000">
                  <Image
                    src={img}
                    placeholder="blur"
                    blurDataURL={img}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </div>
              <div className="py-4 px-6">
                <p className="text-sm lg:text-base text-gray-800">{subject}</p>
                <p className="text-gray-800 font-semibold lg:font-bold lg:text-xl xl:text-2xl my-3 xl:mt-5 xl:mb-4">
                  {title}
                </p>
                <p className="text-gray-500 text-sm">{publishDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResourcesBlogs;

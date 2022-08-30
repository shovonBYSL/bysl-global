import Image from "next/image";

import { TechnologiesSectionTitle } from "../shared/SharedTextgroups";

const ResourcesFindings = ({ data }) => {
  return (
    <div className="py-6 xl:py-10">
      <TechnologiesSectionTitle>Latest Findings</TechnologiesSectionTitle>
      <div className="mt-6 xl:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map(({ id, img, subject, title, publishDate }) => {
          return (
            <div key={id} className="flex items-center gap-6">
              <Image
                src={img}
                alt=""
                height={150}
                width={130}
                className="!rounded-xl"
              />
              <div className="w-full">
                <p className="text-sm lg:text-base font-bold text-gray-500">{subject}</p>
                <p className="text-gray-800 font-medium lg:text-xl mt-2 mb-4">
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

export default ResourcesFindings;

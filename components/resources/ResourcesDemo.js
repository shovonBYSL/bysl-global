import Image from "next/image";

import { serviceResourcesData } from "../../public/data/servicesData";
import Button from "../shared/buttons/Button";
import { TechnologiesSectionTitle } from "../shared/SharedTextgroups";

const ResourcesDemo = () => {
  return (
    <div className="py-10 xl:py-16">
      <TechnologiesSectionTitle>Stunning Demos</TechnologiesSectionTitle>
      <p className="mt-6 text-gray-500 text-center w-11/12 sm:w-4/5 lg:w-2/3 mx-auto">
        All home pages, inner pages and elements are included with the purchase.
        Easily import the demos and pages with the one click demo import. If you
        want to create new pages the elements and blocks have got your back. Mix
        and blend elements from different demos as per your preference and
        create awesome websites with BYSL Technologies!
      </p>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 mt-10 xl:mt-16 gap-6">
        {serviceResourcesData.map(({ id, img }) => {
          return (
            <div
              key={id}
              className="relative group rounded-md w-full h-44 sm:h-52 3xl:h-64 overflow-hidden"
            >
              <Image
                src={img}
                layout="fill"
                placeholder="blur"
                blurDataURL={img}
                objectFit="cover"
                alt=""
              />
              <div className="centered opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                <Button title="View Project" px={48} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResourcesDemo;

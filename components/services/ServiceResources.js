import Image from "next/image";

import { serviceResourcesData } from "../../public/data/servicesData";
import Button from "../shared/buttons/Button";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
  TextGradient,
} from "../shared/SharedTextgroups";

const ServiceResources = () => {
  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Resources" />
      <TechnologiesSectionTitle>
        Proud projects that <TextGradient text="make us stand out" />
      </TechnologiesSectionTitle>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 mt-10 xl:mt-16 gap-6">
        {serviceResourcesData.map(({ id, img }) => {
          return (
            <div
              key={id}
              className="relative group rounded-md w-full h-44 sm:h-52 3xl:h-64 overflow-hidden"
            >
              <Image src={img} layout="fill" objectFit="cover" alt="" />
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

export default ServiceResources;

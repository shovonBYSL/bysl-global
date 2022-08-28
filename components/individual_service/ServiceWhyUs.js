import Image from "next/image";

import { serviceWhyChooseUsData } from "../../public/data/individualServiceData";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
  TextGradient,
} from "../shared/SharedTextgroups";

const ServiceWhyUs = ({data}) => {
  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Why Choose us?" />
      <TechnologiesSectionTitle>
        A complete website building&nbsp;
        <br className="hidden xs:block" />
        toolkit save your time by using BYSL Technologies
      </TechnologiesSectionTitle>
      <div className="mt-10 lg:mt-16 grid gris-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(({ id, title, subTitle, img }) => {
          return (
            <div key={id} className="p-2 2xl:px-10 2xl:pb-9 text-center">
              <Image src={img} height={180} width={260} alt="" />
              <p className="font-bold lg:font-extrabold text-xl mt-10 mb-2.5">
                <TextGradient text={title} />
              </p>
              <p className="text-sm text-gray-300">{subTitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceWhyUs;

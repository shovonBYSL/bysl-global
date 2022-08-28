import Image from "next/image";

import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../../shared/SharedTextgroups";

const BigdataServices = ({ data }) => {
  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Features" />
      <TechnologiesSectionTitle>
        Discover the true potential
        <br />
        of Big Data
      </TechnologiesSectionTitle>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 w-full mt-10">
        {data.map(({ id, img, title }) => {
          return (
            <div
              key={id}
              className="bg-white rounded-[20px] flex flex-col justify-center items-center text-center px-2 py-3 lg:px-5 xs:py-5 sm:py-8 xl:py-12 3xl:py-[60px] w-full self-center"
            >
              <div className="h-14 xl:h-20 w-14 xl:w-20 mb-5 rounded-full flex items-center justify-center shadow-[0px_0px_20px_0px_#D0E2F4]">
                <div className="relative h-6 w-6 xl:h-12 xl:w-12">
                  <Image src={img} layout="fill" alt="" />
                </div>
              </div>
              <p className="text-sm xl:text-base 3xl:text-2xl font-bold text-gray-800">
                {title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BigdataServices;

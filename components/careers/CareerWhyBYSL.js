import Image from "next/image";

import { careerWhyJoinData } from "../../public/data/careersData";
import { TechnologiesSectionTitle } from "../shared/SharedTextgroups";

const CareerWhyBYSL = () => {
  return (
    <div className="py-10 lg:py-16 bg-[#EDF1F8]">
      <div className="box">
        <TechnologiesSectionTitle>
          Why join BYSL Global Technology Group
        </TechnologiesSectionTitle>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerWhyJoinData.map(({ id, title, subTitle }) => (
              <div key={id} className="flex items-start">
                <Image
                  src="/images/items_icon.svg"
                  alt=""
                  height={24}
                  width={24}
                />
                <div className="w-full ml-2.5">
                  <p className="text-gray-800 font-semibold xl:text-xl mb-4">
                    {title}
                  </p>
                  <p className="text-gray-300 text-sm xl:text-base w-11/12">
                    {subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerWhyBYSL;

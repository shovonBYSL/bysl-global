import Image from "next/image";

import { TechnologiesSectionTitle } from "../../shared/SharedTextgroups";

const FinanceOverview = ({ data }) => {
  const { img, details1, details2 } = data;

  return (
    <div id="overview" className="py-6 xl:py-10">
      <TechnologiesSectionTitle>Overview</TechnologiesSectionTitle>
      <div className="grid grid-cols-3 gap-6 mt-6 lg:mt-10">
        <div className="col-span-3 lg:col-span-2 text-center lg:text-start text-sm xl:text-base text-gray-800">
          <p className="mb-6">{details1}</p>
          <p>{details2}</p>
        </div>
        <div className="col-span-3 lg:col-span-1 text-center">
          <Image
            src={img}
            placeholder="blur"
            blurDataURL={img}
            height={397}
            width={427}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FinanceOverview;

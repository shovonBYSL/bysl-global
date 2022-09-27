import Image from "next/image";

import {
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";
import Point from "../../svg/Point";

const RetailOverview = ({ data }) => {
  const { details, img, points } = data;

  return (
    <div id="overview" className="py-10 xl:py-16">
      <TechnologiesSectionTitle>Retail Industries</TechnologiesSectionTitle>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-16 lg:items-center">
        <div className="md:col-span-7">
          <p className="text-gray-600 text-sm xl:text-base text-center md:text-start">
            {details}
          </p>
          <p className="text-lg font-semibold text-gray-800 my-4 xl:mt-10 xl:mb-6">
            Coverage
          </p>
          <div className="grid grid-cols-2 gap-3 max-w-[360px]">
            {points.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Point />
                {/* <div className="text-xs xl:text-sm font-semibold break-words w-full">
                  <TextGradient text={item} /> 
                </div> */}
                <p className="text-xs lg:text-sm xl:text-base text-gray-600 break-words w-full">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-5 xs:w-3/5 sm:w-1/2 md:w-full mx-auto">
        <div dangerouslySetInnerHTML={{ __html: img }} />
          {/* <Image
            src={img}
            placeholder="blur"
            blurDataURL={img}
            height={469}
            width={567}
            objectFit="contain"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default RetailOverview;

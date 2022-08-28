import Image from "next/image";

import FeaturesCard from "../FeaturesCard";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../SharedTextgroups";

const FeaturedBanner = (props) => {
  const { children, data } = props;
  const { img, type, features, subTitle } = data;

  return (
    <div className="py-10 xl:py-16 lg:flex gap-6">
      <div className="lg:w-1/2 xl:mt-10">
        {type && <SectionTitleType title={type} start={true} />}
        <TechnologiesSectionTitle start={true}>
          {children}
        </TechnologiesSectionTitle>
        {subTitle && (
          <p className="my-4 lg:mt-4 lg:mb-16 text-gray-300 text-center lg:text-start lg:w-11/12 text-sm lg:text-base">
            {subTitle}
          </p>
        )}
        <FeaturesCard data={features} />
      </div>

      <div className="flex justify-center lg:w-1/2 mx-auto">
        <Image
          src={img}
          placeholder="blur"
          blurDataURL={img}
          height={419}
          width={687}
          alt=""
        />
      </div>
    </div>
  );
};

export default FeaturedBanner;

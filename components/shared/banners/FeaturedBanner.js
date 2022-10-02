import Image from "next/image";

import FeaturesCard from "../FeaturesCard";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../SharedTextgroups";
import { getPath } from "../../../utils/paths";

const FeaturedBanner = (props) => {
  const { children, data } = props;
  const { img, type, features, subTitle } = data;

  const arVrPath = getPath("/technologies/ar-vr");

  return (
    <div className="py-10 xl:py-16 lg:flex gap-6">
      <div className="lg:w-1/2 xl:mt-10">
        {type && <SectionTitleType title={type} start={true} />}
        <TechnologiesSectionTitle start={true}>
          {children}
        </TechnologiesSectionTitle>
        {subTitle && (
          <p className="my-4 lg:mt-4 lg:mb-16 text-gray-600 text-center lg:text-start lg:w-11/12 text-sm lg:text-base">
            {subTitle}
          </p>
        )}
        <FeaturesCard data={features} />
      </div>

      <div
        className={`flex justify-center ${
          arVrPath ? "w-4/5 sm:w-3/5" : "lg:w-1/2"
        } mx-auto`}
      >
        <Image
          src={img}
          placeholder="blur"
          blurDataURL={img}
          height={468}
          width={685}
          objectFit="contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeaturedBanner;

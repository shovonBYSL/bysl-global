import Image from "next/image";

import { getPath } from "../../../utils/paths";
import { TechnologiesSectionTitle } from "../SharedTextgroups";

const BannerWithBullets = (props) => {
  const { data, reversed, group, children } = props;
  const { subTitle, img, video, features, title } = data;

  const cloudPath = getPath("/technologies/cloud");
  const bigDataPath = getPath("/technologies/bigdata");
  const databasePath = getPath("/technologies/database");

  return (
    <div
      className={`lg:flex gap-6 
      ${reversed && "lg:flex-row-reverse"}
      ${group ? "pb-20 xl:pb-16" : "py-10 xl:py-16"}`}
    >
      <div className="lg:w-[52%] lg:mt-10">
        <TechnologiesSectionTitle start={true}>
          {children ? children : title}
        </TechnologiesSectionTitle>
        {subTitle && <p className="mt-4 text-gray-300">{subTitle}</p>}
        <div className="grid grid-cols-1 xxs:grid-cols-2 my-5 xl:mt-6 lg:mb-0 gap-y-2.5 lg:gap-x-2 xl:gap-x-0">
          {features.map((item, i) => (
            <div key={i} className="flex items-start">
              <Image
                src="/images/items_icon.svg"
                alt=""
                height={24}
                width={24}
              />
              <p className="text-gray-300 text-sm xl:text-base ml-3 w-full">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-[48%] mx-auto clip-video">
        {cloudPath ? (
          <video className="w-full h-full" src={video} autoPlay muted loop />
        ) : (
          <div
            className={`relative h-48 xs:h-64 sm:h-80 lg:h-[350px] mt-5 lg:mt-0 
            ${!cloudPath && "xl:h-[500px]"}
            ${bigDataPath && "xl:h-[400px]"}
            ${databasePath && "xl:h-[350px]"}`}
          >
            <Image
              src={img}
              placeholder="blur"
              blurDataURL={img}
              layout="fill"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerWithBullets;

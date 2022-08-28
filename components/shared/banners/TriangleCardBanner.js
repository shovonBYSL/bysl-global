import Image from "next/image";

import ServicesCard from "../../shared/ServicesCard";
import { getPath } from "../../../utils/paths";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../../shared/SharedTextgroups";

const TriangleCardBanner = (props) => {
  const { children, data, img, video, black, padding, type, reversed } = props;
  const iotPath = getPath("/technologies/iot");
  const arVrPath = getPath("/technologies/ar-vr");

  return (
    <div className="py-10 xl:py-16">
      {type && <SectionTitleType title={type} />}
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      <div
        className={`md:flex items-center mt-10 gap-4 xl:gap-6 ${
          !reversed && "md:flex-row-reverse"
        }`}
      >
        <div className="w-full md:w-[53%] mb-10 md:mb-0">
          <ServicesCard data={data} black={black} padding={padding} />
        </div>
        <div className="rounded-xl xl:rounded-[20px] overflow-hidden w-full md:w-[47%] mx-auto">
          {arVrPath || iotPath ? (
            <video
              className={`rounded-lg aspect-[3/2] h-40 xs:h-56 sm:h-80 md:h-52 lg:h-64 xl:h-80 w-full ${
                iotPath
                  ? "h-60 sm:h-80 2xl:h-[600px]"
                  : "2xl:h-[440px] object-cover"
              }`}
              src={video}
              autoPlay
              muted
              loop
            />
          ) : (
            <div
              className={`${
                iotPath
                  ? "md:h-80 lg:h-[440px] xl:h-[530px]"
                  : "h-40 xs:h-56 sm:h-80 md:h-52 lg:h-64 xl:h-80 3xl:h-[440px]"
              } relative`}
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
    </div>
  );
};

export default TriangleCardBanner;

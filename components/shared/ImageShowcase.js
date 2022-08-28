import Image from "next/image";

import { getPath } from "../../utils/paths";
import { SectionTitleType, TechnologiesSectionTitle } from "./SharedTextgroups";

const ImageShowcase = (props) => {
  const { children, sub, img, type, video } = props;
  const arVrPath = getPath("/technologies/ar-vr");
  const aiMlPath = getPath("/technologies/ai-ml");
  const itesPath = getPath("/divisions/ites");
  const dataSciencePath = getPath("/divisions/data-science");
  const foodTechPath = getPath("/divisions/food-tech");
  const digitalCommercePath = getPath("/divisions/digital-commerce");

  return (
    <div className="py-10 xl:py-16">
      {type && <SectionTitleType title={type} />}
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      {sub && (
        <p className="xs:px-4 sm:w-4/5 lg:w-3/5 3xl:w-3/5 mx-auto text-center mt-4 text-gray-300 text-sm md:text-base">
          {sub}
        </p>
      )}
      <div className="mt-10 w-full rounded-[20px] overflow-hidden max-w-[1080px] mx-auto clip-video">
        {arVrPath || aiMlPath ? (
          <video
            className={`w-full 
            ${
              arVrPath &&
              "h-48 sm:h-64 md:h-80 lg:h-[400px] 2xl:h-[500px] rounded-[20px] object-cover"
            } 
            ${aiMlPath && "sm:h-[400px] lg:h-[540px]"}`}
            src={video}
            autoPlay
            muted
            loop
          />
        ) : (
          <div
            className={
              (digitalCommercePath && "shadow-[0px_0px_25px_0px_#D0E2F4]") ||
              (itesPath && "shadow-[0px_0px_25px_0px_#D0E2F4]")
            }
          >
            <div
              className={`relative mx-auto h-48 sm:h-64 md:h-80 lg:h-[400px] 2xl:h-[500px] 3xl:h-[600px] rounded-[20px] overflow-hidden 
              ${dataSciencePath && "3xl:h-[528px]"} 
              ${itesPath && "3xl:h-[735px]"} 
              ${foodTechPath && "xl:!h-[430px]"} 
              ${digitalCommercePath && "3xl:h-[712px]"} `}
            >
              <Image
                src={img}
                placeholder="blur"
                blurDataURL={img}
                objectFit="contain"
                layout="fill"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageShowcase;

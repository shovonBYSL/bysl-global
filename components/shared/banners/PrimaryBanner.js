import Image from "next/image";

import WebBanner from "../../technologies_pages/web_technologies/WebBanner";
import { SectionTitleGradient, TextGradient } from "../SharedTextgroups";
import { getPath } from "../../../utils/paths";

const PrimaryBanner = ({ title, sub, img, video, children }) => {
  const webPath = getPath("/technologies/web");
  const aiMlPath = getPath("/technologies/ai-ml");
  const cloudPath = getPath("/technologies/cloud");
  const iotPath = getPath("/technologies/iot");
  const mobilePath = getPath("/technologies/mobile");
  const blockchainPath = getPath("/technologies/blockchain");
  const cyberPath = getPath("/technologies/cyber-security");
  const ictPath = getPath("/divisions/ict");
  const itesPath = getPath("/divisions/ites");
  const foodTechPath = getPath("/divisions/food-tech");
  const dataSciencePath = getPath("/divisions/data-science");
  const informationPath = getPath("/divisions/information-security");
  const manufacturingPath = getPath("/solutions/manufacturing");
  const servicePath = getPath("/service");

  return (
    <div
      className={`md:flex justify-between gap-6 max-h-max 
      ${
        aiMlPath
          ? "items-center pt-10 md:pt-0"
          : cyberPath || cloudPath || itesPath
          ? "pt-10 xl:pt-16"
          : "py-10 xl:py-16"
      }`}
    >
      <div
        className={`mb-10 md:my-0 md:pt-10 
        ${
          (iotPath && "xl:!pt-20") ||
          (cloudPath && "xl:!pt-20") ||
          (blockchainPath && "!pt-20") ||
          (aiMlPath && "mt-0") ||
          (webPath && "md:pt-5 lg:pt-10 xl:pt-12 2xl:pt-16") ||
          (ictPath ? "md:w-[50%]" : "md:w-[55%]")
        }`}
      >
        <div className="text-center md:text-start">
          <p className="text-sm sm:text-base lg:text-lg font-bold mb-2">
            <TextGradient text={title} />
          </p>
          <SectionTitleGradient>{children}</SectionTitleGradient>
          <p
            className={`mt-4 md:max-w-[350px] lg:max-w-[450px] xl:max-w-[600px] 2xl:max-w-[700px] text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl 
            ${servicePath && "xl:w-full mt-10"}`}
          >
            {sub}
          </p>
        </div>
      </div>
      <div
        className={`${
          ictPath || foodTechPath || webPath ? "md:w-[55%]" : "md:w-[45%]"
        }`}
      >
        {webPath ? (
          <WebBanner img={img} />
        ) : cloudPath ? (
          <video className="w-full h-full" src={video} autoPlay muted loop />
        ) : (
          <div
            className={`h-56 xs:h-[40vh] xl:h-[50vh] max-h-[600px] w-full relative 
            ${
              (ictPath && "xl:h-[40vh]") ||
              (dataSciencePath && "xl:h-[40vh]") ||
              (mobilePath && "xl:h-[42vh]") ||
              (servicePath && "xl:h-[40vh]") ||
              (manufacturingPath && "xl:h-[450px]") ||
              (informationPath && "xl:h-[280px]") ||
              (foodTechPath && "!h-48 xs:!h-[40vh] xl:!h-[360px]")
            }`}
          >
            <Image
              src={img}
              layout="fill"
              placeholder="blur"
              blurDataURL={img}
              objectFit="contain"
              priority
              alt=""
            />
          </div>
        )}
        <div id="it-services" />
      </div>
    </div>
  );
};

export default PrimaryBanner;

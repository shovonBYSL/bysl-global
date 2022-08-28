import Image from "next/image";

import { getPath } from "../../utils/paths";
import HoverImage from "./HoverImage";

const OverviewCard = (props) => {
  const { data, large, handleOpen } = props;

  const ictPath = getPath("/divisions/ict");
  const itesPath = getPath("/divisions/ites");
  const digitalCommercePath = getPath("/divisions/digital-commerce");
  const bigDataPath = getPath("/technologies/bigdata");
  const investmentsPath = getPath("/investments");

  return (
    <>
      {data.map(({ id, title, subTitle, img, hoverImg }) => {
        return (
          <div
            key={id}
            onClick={() => handleOpen(id)}
            className={`p-3 xl:p-4 text-center group ${
              (digitalCommercePath && "xl:py-10") ||
              (investmentsPath && "xl:py-10")
            }`}
          >
            <div
              className={`mx-auto relative ${
                large
                  ? "h-16 2xl:h-[88px] w-16 2xl:w-[88px]"
                  : ictPath
                  ? `h-10 xl:h-14 w-10 xl:w-14`
                  : "h-10 xl:h-[50px] w-10 xl:w-[50px]"
              } ${itesPath && "h-10 xl:!h-12 w-10 xl:!w-12"} ${
                bigDataPath && "h-10 xl:!h-16 w-10 xl:!w-16"
              } ${investmentsPath && "h-10 xl:!h-[70px] w-10 xl:!w-[70px]"}`}
            >
              {hoverImg ? (
                <HoverImage img1={img} img2={hoverImg} />
              ) : (
                <Image
                  src={img}
                  placeholder="blur"
                  blurDataURL={img}
                  layout="fill"
                  alt=""
                />
              )}
            </div>
            <p
              className={`2xl:text-xl font-medium ${
                bigDataPath && "!font-semibold mt-5"
              } text-gray-800 mt-4 ${digitalCommercePath && "mt-10"}`}
            >
              {title}
            </p>
            {subTitle && (
              <p className="hidden md:block text-gray-600 2xl:text-lg font-medium mt-3 !leading-6 ">
                {subTitle}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
};

export default OverviewCard;

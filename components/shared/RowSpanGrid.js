import Image from "next/image";

import { getPath } from "../../utils/paths";
import { TechnologiesSectionTitle } from "./SharedTextgroups";

const RowSpanGrid = (props) => {
  const { children, data } = props;
  const blockchainPath = getPath("/technologies/blockchain");

  return (
    <div className="py-10 xl:py-16">
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      <div className="mt-6 xl:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 2xl:gap-6">
        {data.map(
          ({ id, title, title2, subTitle, subTitle2, img, benefits }) => {
            return (
              <div
                key={id}
                className={`text-center bg-white rounded-[10px] md:rounded-2xl xl:rounded-[20px] p-5 xl:px-8 border-[1px] border-[#393E50]/10 ${
                  id === 0
                    ? "lg:row-span-2 xl:p-8 2xl:p-10"
                    : "flex flex-col items-center justify-center xl:py-0"
                }`}
              >
                <div
                  className={`h-12 xl:h-16 w-12 xl:w-16 rounded-full flex items-center justify-center mx-auto ${
                    blockchainPath ? "bg-[#F2F2F3]" : "bg-blue-200"
                  }`}
                >
                  <div className="h-6 w-6 xl:h-10 xl:w-10 relative">
                    <Image src={img} layout="fill" alt="" />
                  </div>
                </div>
                <p
                  className={`text-lg xl:text-2xl 2xl:text-[32px] font-semibold text-gray-800 leading-7 xl:leading-[48px] ${
                    subTitle
                      ? id === 0
                        ? "2xl:mt-8 2xl:mb-4"
                        : "my-2.5 xl:mt-6 xl:mb-3"
                      : "mt-2.5 xl:mt-6"
                  }`}
                >
                  {title}
                </p>
                <p className="text-gray-300 text-sm xl:text-base ">
                  {subTitle}
                </p>
                {subTitle2 && (
                  <p className="text-gray-300 text-sm xl:text-base mt-4 hidden lg:block">
                    {subTitle2}
                  </p>
                )}
                {benefits && (
                  <div className="mt-4 3xl:mt-8 hidden lg:block">
                    {title2 && (
                      <p className="text-start text-lg xl:text-xl font-bold text-gray-800 pb-1">
                        {title2}
                      </p>
                    )}
                    {benefits.map((item, i) => (
                      <div key={i} className="flex items-center mt-1 3xl:mt-3">
                        <Image
                          src="/images/items_icon.svg"
                          alt=""
                          height={24}
                          width={24}
                        />
                        <p className="text-gray-300 ml-3 text-sm xl:text-base">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default RowSpanGrid;

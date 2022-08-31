import Image from "next/image";

import { getPath } from "../../utils/paths";

const CompanyInfoCard = ({ data }) => {
  const { id, title, description, description1, description2, img } = data;

  const culturePath = getPath("/about-us/culture");
  const valuesPath = getPath("/about-us/values");
  const purposePath = getPath("/about-us/purpose");

  return (
    <div
      className={`w-full ${
        culturePath
          ? ((id === 0 || id === 1) && "lg:col-span-6") ||
            (id === 2 && "lg:col-span-12") ||
            (id === 3 && "lg:col-span-7") ||
            (id === 4 && "lg:col-span-5") ||
            (id === 5 && "lg:col-span-8") ||
            (id === 6 && "lg:col-span-4")
          : (id === 1 && "lg:mt-[180px]") ||
            (id === 2 &&
              (valuesPath
                ? "lg:-mt-[10px] xl:-mt-[50px] 2xl:-mt-[30px] values-margin"
                : "lg:-mt-[180px]")) ||
            (id === 4 && "lg:-mt-[180px]")
      }`}
    >
      <div
        className={`${culturePath && "h-full"} ${
          purposePath && id === 0 && "purpose-padding"
        } bg-blue-50 rounded-[20px] p-5 xl:p-6`}
      >
        <div
          className={`relative h-10 2xl:h-16 ${
            valuesPath ? "w-16 2xl:w-20" : "w-10 2xl:w-14"
          }`}
        >
          <Image
            src={`/images/info_card/${img}.svg`}
            placeholder="blur"
            blurDataURL={`/images/info_card/${img}.svg`}
            layout="fill"
            alt=""
          />
        </div>
        <p className="text-lg 2xl:text-xl my-3 2xl:my-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
          {title}
        </p>
        <p className="text-gray-600 leading-5 text-sm 2xl:text-base">
          {description}
        </p>
        {description1 && (
          <p className="text-gray-600 leading-5 text-sm 2xl:text-base mt-4">
            {description1}
          </p>
        )}
        {description2 && (
          <p className="text-gray-600 leading-5 text-sm 2xl:text-base mt-4">
            {description2}
          </p>
        )}
      </div>
    </div>
  );
};

export default CompanyInfoCard;

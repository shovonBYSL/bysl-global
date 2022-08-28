import Image from "next/image";
import Link from "next/link";

const CareersCompanyInfo = () => {
  return (
    <div className="py-10 lg:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {["mission", "purpose", "values", "culture"].map((item, i) => {
          return (
            <Link key={i} passHref href={`/about-us/${item}`}>
              <div className="p-5 hover:bg-[#EDF1F8] rounded-[20px] transition duration-500 hover:cursor-pointer ">
                <div
                  className={`mx-auto relative mb-7 ${
                    i == 2
                      ? "h-[20px] xl:h-[40px] my-5"
                      : "h-[40px] xl:h-[61px]"
                  } `}
                >
                  <Image
                    src={`/images/careers/company_info/icon_${i}.png`}
                    layout="fill"
                    objectFit="contain"
                    alt=""
                  />
                </div>
                <p className="text-center lg:text-lg xl:text-2xl font-semibold uppercase text-gray-800">
                  {item}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CareersCompanyInfo;

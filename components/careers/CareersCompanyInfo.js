import Image from "next/image";
import Link from "next/link";

const CareersCompanyInfo = () => {
  return (
    <div className="py-10 lg:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {["mission", "purpose", "values", "culture"].map((item, i) => {
          return (
            <Link key={i} passHref href={`/about-us/${item}`}>
              <a className="p-5 hover:bg-[#EDF1F8] rounded-[20px] transition duration-500 hover:cursor-pointer ">
                <div
                  className={`mx-auto relative mb-7 h-10 md:h-16 xl:h-[81px]`}
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
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CareersCompanyInfo;

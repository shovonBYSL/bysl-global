import Link from "next/link";
import { careersAboutUsData } from "../../public/data/careersData";

const CareersCompanyInfo = () => {
  return (
    <div className="py-10 lg:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {careersAboutUsData.map(({ id, title, path, icon }) => {
          return (
            <Link key={id} passHref href={path}>
              <a className="p-5 hover:bg-[#EDF1F8] rounded-[20px] transition duration-500 hover:cursor-pointer ">
                <div
                  dangerouslySetInnerHTML={{ __html: icon }}
                  className="mx-auto relative h-14 w-14 md:h-16 md:w-16 xl:h-20 xl:w-20"
                />
                <p className="text-center lg:text-lg xl:text-2xl font-semibold uppercase text-gray-800 mt-4 md:mt-7">
                  {title}
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

import Image from "next/image";
import Link from "next/link";

// import { servicesServiceData } from "../../public/data/servicesData";
import { setItem } from "../../utils/sessionStorage";
import HoverImage from "../shared/HoverImage";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../shared/SharedTextgroups";

const ServiceITServices = ({data}) => {
  return (
    <div className="py-10 sm:pb-16 xl:py-16 xl:pb-24">
      <SectionTitleType title="What We Do" />
      <TechnologiesSectionTitle>
        We Provide Various IT services
      </TechnologiesSectionTitle>
      <div
        className={`grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-10 xl:mt-20 gap-4 xl:gap-x-6 sm:gap-y-14`}
      >
        {data.map(({ id, img, title, subTitle }) => {
          return (
            <Link key={id} href="/service" passHref>
              <div
                onClick={() => setItem(id)}
                className={`group bg-white rounded-[20px] shadow-lg shadow-gray-200 p-5 sm:p-6 sm:pb-10 relative hover:cursor-pointer`}
              >
                <div className="relative h-9 sm:h-16 w-full">
                  <Image src={img} layout="fill" alt="" />
                </div>
                <p className="text-sm lg:text-base 3xl:text-xl font-medium sm:font-bold text-center text-gray-800 transition-all duration-500 mt-4 sm:my-3 2xl:my-5">
                  {title}
                </p>
                {subTitle && (
                  <div className="text-sm text-center text-gray-500 hidden sm:block transition-all duration-500">
                    {subTitle}
                  </div>
                )}
                <div className="hidden sm:block h-14 w-14 absolute m-auto left-0 right-0 -bottom-7">
                  <HoverImage
                    img1="/images/services/home/services/arrow.svg"
                    img2="/images/services/home/services/arrow-gr.svg"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceITServices;

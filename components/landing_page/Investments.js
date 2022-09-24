import Image from "next/image";
import Link from "next/link";

import {
  SectionTitleGradient,
  SectionTitleType,
} from "../shared/SharedTextgroups";
import ITPlatformsSvg from "../svg/ITPlatformsSvg";

const Investments = ({ data }) => {
  return (
    <div className="text-center py-10 xl:py-16">
      <SectionTitleType title="Investments " />
      <div className="mx-4 lg:mx-12 2xl:mx-20 mb-6 lg:mb-12 2xl:mb-20">
        <SectionTitleGradient>
          Investing for a better tomorrow
        </SectionTitleGradient>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 xl:gap-6 3xl:gap-10">
        <Link passHref href="/investments#it-platform">
          <a className="3xl:h-[610px] rounded-[10px] xl:rounded-[20px] bg-white pb-8 xl:pb-16 flex flex-col justify-between">
            <div className="w-full max-h-[640px] relative">
              <Image
                src={data.ITPlatform}
                placeholder="blur"
                blurDataURL={data.ITPlatform}
                alt=""
                objectFit="contain"
                height={458}
                width={640}
              />
              {/* <ITPlatformsSvg /> */}
              <div className="animate_logo absolute top-[30%] lg:top-[28%] left-1/2 translate-x-[-50%] max-w-[94px] max-h-[94px]">
                <div className="w-[40px] md:w-[50px] lg:w-[60px] xl:w-[70px] h-[40px] md:h-[50px] lg:h-[60px] xl:h-[70px] 2xl:h-[94px] 2xl:w-[94px]  bg-white rounded-xl shadow-[0px_4px_8px_rgba(8,76,148,0.08)] flex items-center justify-center">
                  {/* <div className="relative h-8 lg:h-12 w-8 lg:w-12 2xl:h-14 2xl:w-14"> */}
                    {/* <Image
                      src={data.live}
                      placeholder="blur"
                      blurDataURL={data.live}
                      alt=""
                      layout="fill"
                    /> */}
                     <video className="h-8 lg:h-12 w-8 lg:w-12 2xl:h-14 2xl:w-14 z-10" src={data.live} autoPlay muted loop />
                  {/* </div> */}
                </div>
              </div>
            </div>

            <div className="text-xl xl:text-3xl font-bold text-blue-900/75">
              IT Platforms
            </div>
          </a>
        </Link>
        <Link passHref href="/investments#marketplace-platform">
          <a className="p-5 min-h-[240px] 3xl:h-[610px] rounded-[10px] xl:rounded-[20px] bg-gradient-to-tr from-[#D4ACFB] to-[#327EC4] text-white text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-[64px] font-semibold flex justify-center items-center ">
            Marketplace
            <br /> Platforms
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Investments;

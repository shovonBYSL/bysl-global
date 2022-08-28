import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "../shared/SharedTextgroups";

const Technologies = ({ data }) => {
  return (
    <div className=" py-10 xl:py-16">
      <div className="mb-6 lg:mb-12 2xl:mb-20">
        <SectionTitle title="Our Technologies" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-10 text-center gap-2 lg:gap-3 xl:gap-4 2xl:gap-5 3xl:gap-6">
        {data.map(({ id, img, video, title, link }) => {
          return (
            <Link key={id} passHref href={link}>
              <div
                key={id}
                className={`group rounded-xl xl:rounded-3xl 3xl:rounded-[20px] overflow-hidden text-white text-start hover:cursor-pointer
              ${
                (id === 0 && "sm:col-span-6") ||
                (id === 1 && "sm:col-span-4") ||
                (id === 2 && "sm:col-span-3") ||
                (id === 3 && "sm:col-span-4") ||
                (id === 4 && "sm:col-span-3") ||
                (id === 5 && "sm:col-span-3") ||
                (id === 6 && "sm:col-span-4") ||
                (id === 7 && "sm:col-span-3") ||
                (id === 8 && "sm:col-span-4") ||
                (id === 9 && "sm:col-span-6")
              } relative`}
              >
                <div
                  className={`w-full h-32 lg:h-44 ${
                    id === 2 || id === 3 || id === 4
                      ? "xl:h-48 2xl:h-64"
                      : "xl:h-64 2xl:h-72 3xl:h-96"
                  } object-cover relative group-hover:scale-125 transition-all duration-[2000ms]`}
                >
                  {id === 6 ? (
                    <video
                      className="w-full h-full object-cover"
                      src={video}
                      autoPlay
                      muted
                      loop
                    />
                  ) : (
                    <Image
                      src={img}
                      placeholder="blur"
                      blurDataURL={img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  )}
                </div>
                <p
                  className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-[40px] font-semibold text-center leading-4 md:leading-5 lg:leading-8 2xl:leading-[48px] absolute py-6 md:py-8 xl:py-14 px-2 sm:px-5 xl:px-8 ${
                    id !== 0 && id !== 9 && "text-position-middle"
                  } ${
                    (id === 0 && "top-0") ||
                    (id === 9 && "cyber-text-middle sm:top-0")
                  } ${
                    id === 0 &&
                    "whitespace-pre text-start text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 "
                  }`}
                >
                  {title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;

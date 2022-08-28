import Image from "next/image";

import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../../shared/SharedTextgroups";

const AIMLServices = ({ data, video }) => {
  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Platforms" />
      <TechnologiesSectionTitle>
        Building your Own World
        <br />
        With us
      </TechnologiesSectionTitle>
      <div className="md:flex items-center mt-6 gap-4 xl:gap-6">
        <div className="w-full md:w-1/2 clip-video">
          <video
            className="w-full h-full object-cover"
            src={video}
            autoPlay
            muted
            loop
          />
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <div className="grid grid-cols-2 gap-3 2xl:gap-5 w-full">
            {data.map(({ id, img, title }) => {
              const titleArray = title.split("& ");
              return (
                <div
                  key={id}
                  className={`bg-white rounded-[10px] xl:rounded-[20px] flex flex-col justify-center items-center text-center px-2 lg:px-3 2xl:px-8 3xl:px-10 py-4 lg:py-10 w-full h-full md:h-auto self-center ${
                    (id === 0 && "md:mt-40") ||
                    (id === 3 && "md:-mt-[140px] xl:-mt-40 custom-gap")
                  }`}
                >
                  <div className="h-14 xl:h-20 w-14 xl:w-20 mb-5 rounded-full flex items-center justify-center shadow-[0px_0px_20px_0px_#D0E2F4]">
                    <div className="h-6 w-6 xl:h-10 xl:w-10 relative">
                      <Image
                        src={img}
                        placeholder="blur"
                        blurDataURL={img}
                        layout="fill"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text-sm lg:text-base 3xl:text-2xl font-bold text-gray-800">
                    {titleArray[0]}&
                    <br />
                    {titleArray[1]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMLServices;

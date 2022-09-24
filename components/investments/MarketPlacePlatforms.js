import Image from "next/image";

const MarketPlacePlatforms = ({ data }) => {
  return (
    <div className="py-10 xl:py-16">
      <div className="grid lg:grid-flow-col grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {data.map(({ id, title, img, icon, motto }) => {
          return (
            <div
              key={id}
              className={`group relative rounded-[16px] overflow-hidden cursor-pointer ${
                (id === 0 || id === 3) && "lg:row-span-2"
              }`}
            >
              <div
                className={`relative h-[377px]  w-full scale-[101%] group-hover:scale-110 transition duration-1000 ${
                  (id === 0 && "h-[377px] lg:h-[635px]") ||
                  (id === 1 && "h-[377px] lg:h-[306px]") ||
                  (id === 2 && "h-[377px] lg:h-[306px]") ||
                  (id === 3 && "h-[377px] lg:h-[635px]")
                }`}
              >
                <Image
                  src={img}
                  placeholder="blur"
                  blurDataURL={img}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className="absolute top-0 text-white text-center w-full h-full flex items-center justify-center z-10">
                <div
                  className={`h-4/5 ${
                    (id === 1 || id === 2) && "lg:h-4/6"
                  } flex flex-col justify-between`}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: icon }}
                    className={`mx-auto ${
                      (id === 0 && "w-[140px] xl:w-[190px]") ||
                      (id === 1 && "w-[100px] xl:w-[120px]") ||
                      (id === 2 && "w-[180px] xl:w-[230px]") ||
                      (id === 3 && "w-[100px] xl:w-[140px]")
                    }`}
                  />
                  <div>
                    <p className="text-lg xl:text-xl font-semibold mb-2.5">
                      {motto}
                    </p>
                    <p>&#8211; {title} </p>
                  </div>
                </div>
              </div>
              {/* <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#231F20] via-transparent to-[#231F20]/0"/>
              <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#231F20]/0 via-transparent to-[#231F20]"/> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketPlacePlatforms;

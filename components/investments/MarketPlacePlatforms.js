import Image from "next/image";

const MarketPlacePlatforms = ({ data }) => {
  return (
    <div className="py-10 xl:py-16">
      <div className="grid lg:grid-flow-col grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {data.map(({ id, title, img, logo, motto }) => {
          return (
            <div
              key={id}
              className={`group relative rounded-[16px] overflow-hidden cursor-pointer ${
                (id === 0 && "lg:row-span-2 h-[377px] lg:h-[635px]") ||
                (id === 1 && "h-[377px] lg:h-[306px]") ||
                (id === 2 && "h-[377px] lg:h-[306px]") ||
                (id === 3 && "lg:row-span-2 h-[377px] lg:h-[635px]")
              }`}
            >
              <div className="relative h-full w-full group-hover:scale-110 transition duration-1000">
                <Image
                  src={img}
                  placeholder="blur"
                  blurDataURL={img}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className="absolute top-0 text-white text-center w-full h-full flex items-center justify-center">
                <div className="h-4/5 w-11/12 lg:w-4/5 flex flex-col justify-between">
                  <div
                    className={`relative h-20 mx-auto ${
                      (id === 0 && "w-[110px] xl:w-[150px]") ||
                      (id === 1 && "w-[200px] xl:w-[270px]") ||
                      (id === 2 && "w-[150px] xl:w-[226px]") ||
                      (id === 3 && "w-[80px] xl:w-[100px]")
                    }`}
                  >
                    <Image
                      src={logo}
                      placeholder="blur"
                      blurDataURL={logo}
                      objectFit="contain"
                      layout="fill"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-xl font-semibold mb-2.5">{motto} </p>
                    <p>&#8211; {title} </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketPlacePlatforms;

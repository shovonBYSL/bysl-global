import Image from "next/image";

// import Button from "../../shared/buttons/Button";
import {
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";

const PowerfulProducts = ({ data }) => {
  return (
    <div className="py-10 xl:py-16">
      <TechnologiesSectionTitle>
        <TextGradient text="Out-of-the-box " />
        Motion
        <br /> Graphics
      </TechnologiesSectionTitle>
      <div className="my-10 grid grid-cols-12 auto-rows-max gap-6 lg:gap-10 2xl:gap-16">
        {data.map(({ id, title, img, video }) => {
          return (
            <div
              key={id}
              className={`${
                (id === 0 && "col-span-12 xs:col-span-6") ||
                (id === 1 && "col-span-12 xs:col-span-6") ||
                (id === 2 && "col-span-12 xs:col-span-6 sm:col-span-4") ||
                (id === 3 && "col-span-12 xs:col-span-6 sm:col-span-4") ||
                (id === 4 && "col-span-12 xs:col-span-6 sm:col-span-4")
              }`}
            >
              <div className="rounded-xl lg:rounded-[20px] overflow-hidden">
                <div
                  className={`w-full relative ${
                    id === 0 || id === 1
                      ? "h-32 xxs:h-52 xs:h-32 sm:h-52 lg:h-64 2xl:h-[300px]"
                      : "h-32 xxs:h-52 xs:h-32 lg:h-40 xl:h-44 2xl:h-52"
                  }`}
                >
                  {id === 0 || id === 1 ? (
                    <video
                      className="object-cover h-full w-full"
                      src={video}
                      autoPlay
                      muted
                      loop
                    />
                  ) : (
                    <Image src={img} layout="fill" objectFit="cover" alt="" />
                  )}
                </div>
              </div>
              <p className="mt-2.5 text-gray-800 text-sm lg:text-base 2xl:text-lg">
                {title}
              </p>
            </div>
          );
        })}
      </div>
      {/* <div className="flex justify-center">
        <Button title="Explore all" px={64} />
      </div> */}
    </div>
  );
};

export default PowerfulProducts;

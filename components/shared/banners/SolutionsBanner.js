import Image from "next/image";
import { Link as Scroll } from "react-scroll";

const SolutionsBanner = ({ data, children }) => {
  const { img, heading, title, subTitle, buttons } = data;

  return (
    <div className="relative h-[500px] lg:h-screen">
      <Image
        src={img}
        placeholder="blur"
        blurDataURL={img}
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <div className="absolute flex items-center justify-center h-full w-full text-center">
        <div className="text-white">
          <p className="text-sm md:text-base xl:text-lg font-semibold">
            {heading}
          </p>
          <p className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl 3xl:text-[64px] 3xl:leading-[76px] font-semibold max-w-[1286px] mx-auto">
            {title}
          </p>
          <p className="text-sm xl:text-base mx-2 max-w-[690px] sm:mx-auto mt-5">
            {subTitle}
          </p>
          <div className="mt-10 xl:mt-16 w-full flex gap-6 flex-wrap justify-center items-center">
            {buttons.map(({ id, label, link }) => {
              return (
                <Scroll
                  key={id}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  to={link}
                >
                  <div
                    className={`h-max text-center text-sm font-medium py-2 xl:py-3 ${
                      buttons.length > 2 ? "w-36" : "w-52"
                    } cursor-pointer hover:text-white text-blue-900 solutionsBtn transition-all duration-500`}
                  >
                    {label}
                  </div>
                </Scroll>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsBanner;

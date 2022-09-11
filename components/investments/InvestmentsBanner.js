import { Link as Scroll } from "react-scroll";

const InvestmentsBanner = () => {
  return (
    <div className="h-[620px] lg:h-screen w-full bg-gradient-to-br from-[#222] to-[#222] relative overflow-hidden">
      <img
        src="/images/bg-top.png"
        className="z-10 absolute -top-[10%] md:-top-[30%] xl:-top-[30%] -left-[50%] xl:-left-[40%] 2xl:-left-[30%] lg:h-[1080px] bg-1"
        alt=""
      />
      <img
        src="/images/bg-bottom.png"
        className="z-10 absolute bottom-0 xs:-bottom-[30%] 3xl:-bottom-[40%] -right-[50%] xl:-right-[40%] 2xl:-right-[30%] lg:h-[1080px] bg-2"
        alt=""
      />

      <div className="z-30 flex items-center justify-center text-center text-white pt-14 lg:pt-0 h-full w-full">
        <div>
          <p className="text-2xl sm:text-3xl lg:text-5xl xl:text-7xl 3xl:text-[90px] 3xl:leading-[80px] font-semibold">
            Investment portfolio of
            <br />
            BYSL Global Technology Group
          </p>
          <p className="text-sm md:text-base lg:text-lg 2xl:text-2xl w-5/6 md:w-2/3 xl:w-3/5 mx-auto mt-6 xl:mt-10">
            Innovating in the IT and marketing platforms with an indomitable
            passion to deliver excellence.
          </p>
          <div className="z-40 w-full flex gap-6 flex-col lg:flex-row justify-center items-center mt-10 lg:mt-28">
            <Scroll
              smooth={true}
              offset={-56}
              duration={500}
              to="it-platform"
              className="z-20"
            >
              <div className="h-max text-center text-sm font-semibold py-2 xl:py-3 !w-[235px] cursor-pointer hover:text-white text-blue-700 solutionsBtn transition-all duration-500">
                IT Platforms
              </div>
            </Scroll>
            <Scroll
              smooth={true}
              offset={-56}
              duration={500}
              to="marketplace-platform"
              className="z-20"
            >
              <div className="h-max text-center text-sm font-semibold py-2 xl:py-3 !w-[235px] cursor-pointer hover:text-white text-blue-700 solutionsBtn transition-all duration-500">
                Marketplace Platforms
              </div>
            </Scroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsBanner;

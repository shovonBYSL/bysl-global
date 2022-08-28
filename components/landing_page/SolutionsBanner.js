// import Image from "next/image";

const SolutionsBanner = ({ data }) => {
  return (
    <div className="relative my-10 xl:my-16 bg-gradient-to-r from-blue-900 to-blue-700 min-h-max 2xl:h-96 3xl:h-[531px] p-5 md:p-7 xl:p-10 3xl:p-16 lg:pl-16 xl:pl-32 text-center text-white rounded-xl lg:rounded-3xl 2xl:rounded-[40px]">
      <div className="flex flex-col sm:flex-row justify-between sm:gap-4 sm:items-center xl:items-start">
        <div className="sm:w-1/2 text-center sm:text-start xl:mt-8 3xl:mt-16 mb-11 sm:mb-0">
          <p className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-[64px] font-bold mb-5 3xl:mb-6">
            ​​Solutions
          </p>
          <p className="text-white/75 leading-4 text-sm lg:text-base 2xl:text-lg 3xl:text-xl">
            Whether it&apos;s subtle interactions that improve the UX, or
            complex &quot;WOW&quot; animations. I can build them all.
          </p>
        </div>
        <div className="sm:w-1/2 xs:px-12 sm:px-0 2xl:pl-10 flex justify-center sm:justify-end clip-video">
          {/* <Image
            src="/images/banners/landing_solution_banner.svg"
            alt=""
            height={403}
            width={536}
          /> */}
          <video className="w-full h-full" src={data} autoPlay muted loop />
        </div>
      </div>
    </div>
  );
};

export default SolutionsBanner;

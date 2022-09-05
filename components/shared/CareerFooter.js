import Link from "next/link";

const CareerFooter = () => {
  return (
    <Link passHref href="/careers">
      <div className="cursor-pointer relative my-8 xl:my-16 bg-gradient-to-r from-blue-900 to-blue-700 min-h-max sm:h-40 md:h-52 lg:h-80 xl:h-96 2xl:h-[408px] px-5 md:px-16 lg:px-20 xl:px-32 py-10 text-center text-white rounded-xl lg:rounded-3xl xl:rounded-[40px]">
        <p className="absolute top-3 lg:top-14 left-3 lg:left-6 text-3xl md:text-5xl lg:text-6xl 2xl:text-[94px] font-bold opacity-10">
          CAREERS
        </p>
        <p className="mx-auto h-full break-words text-2xl md:text-4xl lg:text-5xl 2xl:text-[64px] xl:leading-[76px] flex items-center justify-center font-light">
          <span>
            Create a <span className="font-bold">Better Future</span> with&nbsp;
            <span className="font-bold block">
              BYSL Global Technology Group
            </span>
          </span>
        </p>
      </div>
    </Link>
  );
};

export default CareerFooter;

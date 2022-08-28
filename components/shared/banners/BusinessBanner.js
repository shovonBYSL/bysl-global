import Button from "../buttons/Button";

const BusinessBanner = () => {
  return (
    <div className="h-[500px] xs:h-96 sm:h-80 lg:h-96 xl:h-[540px] w-full bg-[url('/images/services/individual_service/service_bg_small.svg')] sm:bg-[url('/images/services/individual_service/service_bg.svg')] bg-cover bg-center bg-no-repeat">
      <div className="box flex items-center h-full">
        <div className="mt w-full lg:w-2/5 2xl:w-[38%]">
          <p className="break-words text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] font-semibold text-white text-center lg:text-start">
            True Multi-Purpose Theme for&nbsp;
            <span className="text-blue-800 underline">Business</span> and more.
          </p>
          <div className="mt-10 flex justify-center lg:justify-start">
            <Button title="Explore BYSL Tecnologies" px={48} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBanner;

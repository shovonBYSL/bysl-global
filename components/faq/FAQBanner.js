const FAQBanner = () => {
  return (
    <div className="h-[360px] w-full bg-[url('/images/FAQ/FAQ_banner_small.svg')] sm:bg-[url('/images/FAQ/FAQ_banner.svg')] bg-cover bg-center bg-no-repeat">
      <div className="box flex items-center h-full">
        <div className="mt w-full">
          <p
            className={`break-words text-[32px] xl:text-4xl 2xl:text-[40px] font-semibold text-white text-center`}
          >
            FAQ
          </p>
          <p className="lg:text-xl 2xl:text-2xl text-white/40 text-center w-11/12 xs:w-4/5 md:w-2/3 mx-auto mt-6">
            Here you can find frequently asked question about our sectors and
            working process. You can find thoses question based on category.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQBanner;

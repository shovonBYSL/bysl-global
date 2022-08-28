const LegalPageTitle = ({ title, version, date }) => {
  return (
    <div className="mb-10 xl:mb-16">
      <p className="text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] 2xl:leading-[90px] text-[#404040] font-extrabold">
        {title}
      </p>
      <div className="flex mt-1.5 items-center">
        <p className="text-sm md:text-lg font-semibold text-[#408CD9]">
          {version}
        </p>
        <div className="w-[22px] bg-gradient-to-r from-[#182A44] to-[#3C5271] h-px rounded-xl ml-1.5 mr-4"></div>
        <p className="text-sm md:text-lg text-[#808D9E]">{date}</p>
      </div>
    </div>
  );
};

export default LegalPageTitle;

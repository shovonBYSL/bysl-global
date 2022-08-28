const LegalText = ({ data }) => {
  const {
    title,
    subTitleHeading,
    subTitle,
    listTitle,
    listItems,
    linkTitle,
    links,
  } = data;
  return (
    <>
      {title && (
        <p className="text-base md:text-lg text-[#758190] mb-3 font-bold">
          {title}
        </p>
      )}
      {subTitle && (
        <p className="text-[#758190] text-sm md:text-base">
          {subTitleHeading && (
            <span className="font-bold mr-1.5">{subTitleHeading}</span>
          )}
          {subTitle}
        </p>
      )}
      {listItems && (
        <>
          <p className="text-[#758190] text-sm md:text-base mt-3 mb-1">
            {listTitle}
          </p>
          {listItems.map((item, i) => (
            <div key={i} className="flex ml-4 items-start mb-1">
              <div className="h-1.5 w-1.5 mt-2 mr-2 bg-[#758190] rounded-full"></div>
              <p className="text-[#758190] text-sm md:text-base w-full ">
                {item}
              </p>
            </div>
          ))}
        </>
      )}
      {linkTitle && (
        <>
          <p className="text-[#758190] text-sm md:text-base  mb-3">
            {linkTitle}
          </p>
          {links.map(({ id, title, link }) => {
            return (
              <div key={id} className="text-[#758190] text-sm md:text-base ">
                <span className="font-medium mr-1.5">{title}</span>
                <a
                  href={link}
                  target="_blank"
                  className="hover:text-blue-700 transition-all duration-300 break-all"
                >
                  {link}
                </a>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default LegalText;

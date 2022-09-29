const HoverSvg = ({ icon1, icon2 }) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: icon1 }}
        className="relative w-full h-full group-hover:opacity-0 transition-all duration-1000"
      />
      <div
        dangerouslySetInnerHTML={{ __html: icon2 }}
        className="absolute top-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-1000"
      />
    </>
  );
};

export default HoverSvg;

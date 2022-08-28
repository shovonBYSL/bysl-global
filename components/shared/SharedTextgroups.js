const BannerTitle = ({ title }) => {
  return (
    <p className="text-gray-800 2xl:leading-[76px] text-lg md:text-2xl lg:text-4xl xl:text-5xl 3xl:text-[64px] font-bold uppercase mb-1 md:mb-2 lg:mb-3 3xl:mb-5">
      {title}
    </p>
  );
};
const BannerSubTitle = (props) => {
  const { text1, text2 } = props;

  return (
    <p className="text-gray-600 leading-5 text-sm md:text-base 3xl:text-lg">
      <span className="">{text1}</span>
      {text2 && <span className="mt-2 2xl:mt-3 block">{text2}</span>}
    </p>
  );
};

const CompanyInfoTitle = ({ children }) => {
  return (
    <p className="w-11/12 mx-auto text-center break-words leading-5 3xl:leading-[47px] font-semibold text-lg md:text-xl lg:text-3xl 3xl:text-[40px] text-gray-800 ">
      {children}
    </p>
  );
};

const SectionTitle = ({ title }) => {
  return (
    <div className="mx-8 lg:mx-12 2xl:mx-20">
      <p className="break-words text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-800 text-center">
        {title}
      </p>
    </div>
  );
};

const TechnologiesSectionTitle = (props) => {
  const { children, start, white } = props;

  return (
    <p
      className={`break-words text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-[40px] font-bold text-center 
      ${white ? "text-white" : "text-gray-800"} 
      ${start && "lg:text-start"}`}
    >
      {children}
    </p>
  );
};

const SectionTitleGradient = (props) => {
  const { children, centered } = props;
  return (
    <p
      className={`break-words text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px] font-bold text-gray-800 ${
        centered && "text-center"
      }`}
    >
      {children}
    </p>
  );
};

const SectionTitleType = (props) => {
  const { title, start, bold } = props;

  return (
    <p
      className={`lg:text-lg xl:text-xl text-center text-gray-300 ${
        start && "lg:text-start"
      } ${bold && "font-semibold"}`}
    >
      {title}
    </p>
  );
};

const TextGradient = (props) => {
  const { text, bold } = props;

  return (
    <span
      className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 ${
        bold && "font-bold"
      }`}
    >
      {text}
    </span>
  );
};

export {
  BannerTitle,
  BannerSubTitle,
  SectionTitle,
  SectionTitleType,
  SectionTitleGradient,
  TextGradient,
  CompanyInfoTitle,
  TechnologiesSectionTitle,
};

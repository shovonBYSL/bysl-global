import IconCard from "./IconCard";
import { SectionTitleType, TechnologiesSectionTitle } from "./SharedTextgroups";

const IconCardGroup4 = (props) => {
  const { children, data, type, padding, title } = props;
  return (
    <div className="py-10 xl:py-16">
      {type && <SectionTitleType title={type} />}
      {title && (
        <p className="xl:text-2xl text-center text-gray-800">{title}</p>
      )}
      {children && (
        <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      )}
      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-5 ${
          title ? "mt-6 xl:mt-16" : "mt-10 xl:mt-20"
        }`}
      >
        <IconCard data={data} padding={padding} />
      </div>
    </div>
  );
};

export default IconCardGroup4;

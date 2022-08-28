import { SectionTitleType, TechnologiesSectionTitle } from "./SharedTextgroups";

const SectionHeader = (props) => {
  const { type, children } = props;

  return (
    <div>
      {type && <SectionTitleType title={type} />}
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
    </div>
  );
};

export default SectionHeader;

import CompanyInfoCard from "./CompanyInfoCard";
import { getPath } from "../../utils/paths";

const CompanyInfoCardGroup = ({ data }) => {
  const culturePath = getPath("/culture");

  return (
    <div
      className={`grid gap-2 md:gap-4 2xl:gap-6 py-8 xl:py-10 3xl:py-20 ${
        culturePath
          ? "grid-cols-1 lg:grid-cols-12"
          : "grid-cols-1 lg:grid-cols-2"
      }`}
    >
      {data.map(({ id, title, description, img }) => (
        <CompanyInfoCard
          key={id}
          id={id}
          title={title}
          description={description}
          img={img}
        />
      ))}
    </div>
  );
};

export default CompanyInfoCardGroup;

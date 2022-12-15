import CompanyInfoCard from "./CompanyInfoCard";
import { getPath } from "../../utils/paths";

const CompanyInfoCardGroup = ({ data }) => {
  const culturePath = getPath("/about/culture");

  return (
    <div
      className={`grid gap-4 xl:gap-6 py-8 xl:py-10 ${
        culturePath
          ? "grid-cols-1 lg:grid-cols-12"
          : "grid-cols-1 lg:grid-cols-2"
      }`}
    >
      {data.map((item) => (
        <CompanyInfoCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CompanyInfoCardGroup;

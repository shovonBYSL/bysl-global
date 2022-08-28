import BannerWithBullets from "../../shared/banners/BannerWithBullets";
import { TechnologiesSectionTitle } from "../../shared/SharedTextgroups";

const WhyBigdata = ({ data }) => {
  return (
    <div className="pt-10 xl:pt-16">
      <div className="mb-10 xl:mb-16">
        <TechnologiesSectionTitle>Why Big Data?</TechnologiesSectionTitle>
      </div>
      {data.map((item) => (
        <BannerWithBullets
          key={item.id}
          data={item}
          reversed={item.reversed}
          group={true}
        />
      ))}
    </div>
  );
};

export default WhyBigdata;

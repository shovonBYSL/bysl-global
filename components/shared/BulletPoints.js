import Image from "next/image";

const BulletPoints = ({ data }) => {
  return (
    <div className="flex flex-col gap-3">
      {data.map((item, i) => {
        return (
          <div key={i} className="flex items-start text-start gap-3">
            <Image src="/images/items_icon.svg" alt="" height={24} width={24} />
            <p className="text-gray-500 text-sm break-words w-full">{item}</p>
          </div>
        );
      })}
    </div>
  );
};

const BulletPointsDouble = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2.5">
      {data.map((item, i) => {
        return (
          <div key={i} className="flex items-start text-start gap-3">
            <Image src="/images/items_icon.svg" alt="" height={24} width={24} />
            <p className="text-gray-500 text-sm break-words w-full">{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export { BulletPoints, BulletPointsDouble };

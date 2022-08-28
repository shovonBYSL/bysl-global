import Image from "next/image";

const FeatureCard = ({ data }) => {
  const { title, subTitle, img } = data;

  return (
    <div className="p-5 h-full bg-white rounded-[20px] shadow-[0px_0px_10px_0px_#E5EBF3]">
      <Image src={img} height={40} width={40} alt="" />
      <p className="mt-6 mb-4 font-extrabold text-gray-800">{title}</p>
      <p className="text-gray-400 text-sm">{subTitle}</p>
    </div>
  );
};

export default FeatureCard;

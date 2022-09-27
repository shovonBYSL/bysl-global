const FeatureCard = ({ data }) => {
  const { title, subTitle, icon } = data;

  return (
    <div className="p-5 h-full bg-white rounded-[20px] shadow-[0px_0px_10px_0px_#E5EBF3]">
      <iframe className="h-12" srcdoc={icon} scrolling="no" />
      <p className="mt-6 mb-4 font-extrabold text-gray-800">{title}</p>
      <p className="text-gray-600 text-sm">{subTitle}</p>
    </div>
  );
};

export default FeatureCard;

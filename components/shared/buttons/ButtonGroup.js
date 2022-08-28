import ButtonOutlined from "./ButtonOutlined";

const ButtonGroup = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 md:gap-10 2xl:gap-20">
      {data.map(({ id, link, title }) => (
        <ButtonOutlined key={id} link={link} title={title} />
      ))}
    </div>
  );
};

export default ButtonGroup;

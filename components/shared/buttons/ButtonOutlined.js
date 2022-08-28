import Link from "next/link";

const ButtonOutlined = (props) => {
  const { title, link } = props;

  return (
    <Link passHref href={link}>
      <div
        className={`border-gradient w-44 h-max text-center text-sm lg:text-base font-semibold py-2 2xl:py-[12.5px]  hover:bg-blue-400 hover:cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700`}
      >
        {title}
      </div>
    </Link>
  );
};

export default ButtonOutlined;

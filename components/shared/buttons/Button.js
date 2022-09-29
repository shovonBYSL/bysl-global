import Link from "next/link";

const Button = (props) => {
  const { title, link, px, py, width, xs } = props;

  return (
    <Link passHref href={`/${link}`}>
      <a
        className={`gradient-btn w-max h-max text-center rounded-lg text-white py-2 hover:cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:to-blue-800  from-blue-900 to-blue-700 
        ${py ? "xl:py-2.5" : "xl:py-3"} 
        ${
          (px === 42 && "px-8 xl:px-[42px]") ||
          (px === 48 && "px-8 xl:px-12") ||
          (px === 64 && "px-8 xl:px-12 2xl:px-16")
        } 
        ${width && "!w-[235px]"} 
        ${xs ? "text-xs" : "text-sm font-semibold"}`}
      >
        {title}
      </a>
    </Link>
  );
};

export default Button;

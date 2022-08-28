import Link from "next/link";
import { TextGradient } from "../SharedTextgroups";

const ButtonWhite = (props) => {
  const { title, link, px, width } = props;

  return (
    <Link passHref href={`/${link}`}>
      <div
        className={`w-max h-max text-center rounded-lg text-sm font-semibold py-2 xl:py-3 ${
          (px === 48 && "px-4 xl:px-6 2xl:px-12") ||
          (px === 64 && "px-8 xl:px-8 2xl:px-16") ||
          (px === 72 && "px-12 xl:px-14 2xl:px-[72px] xl:!py-2.5") ||
          (px === 76 && "px-12 xl:px-[76px]")
        }  ${width && "!w-[235px]"} hover:cursor-pointer bg-white`}
      >
        <TextGradient text={title} />
      </div>
    </Link>
  );
};

export default ButtonWhite;

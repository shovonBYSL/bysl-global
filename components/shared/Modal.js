import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

import { TextGradient } from "./SharedTextgroups";

const Modal = (props) => {
  const { data, handleClose, shadow, gradientBg } = props;
  const { title, title2, subTitle, img, hoverImg } = data;

  return (
    <div className="z-30 backdrop-blur-xs h-screen w-screen fixed top-0 left-0">
      <div className="centered bg-white px-5 py-10 w-[95%] max-w-[500px] mx-auto rounded-[15px] ">
        <div
          className={`mx-auto ${
            shadow
              ? "flex justify-center shadow-[0px_0px_20px_0px_#D0E2F4] h-16 w-16 rounded-full"
              : "w-max"
          } ${
            gradientBg &&
            "h-12 w-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg flex justify-center"
          }`}
        >
          <Image
            src={hoverImg && !gradientBg ? hoverImg : img}
            placeholder="blur"
            blurDataURL={hoverImg && !gradientBg ? hoverImg : img}
            height={gradientBg ? 30 : 40}
            width={gradientBg ? 30 : 40}
            alt=""
          />
        </div>
        <p className="text-gray-800 text-xl font-semibold text-center mt-5">
          {title2 ? <TextGradient text={title} /> : title}
        </p>
        {title2 && (
          <p className="text-xl text-center font-semibold text-gray-300 mt-3">
            {title2}
          </p>
        )}
        <p className="text-center text-gray-600 text-sm mt-3">{subTitle}</p>
        <div
          onClick={handleClose}
          className="bg-gray-100 w-max mx-auto rounded-lg p-2 hover:cursor-pointer mt-10"
        >
          <AiOutlinePlus className="text-2xl text-gray-600 rotate-45" />
        </div>
      </div>
    </div>
  );
};

export default Modal;

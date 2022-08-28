import { useState } from "react";

import { getPath } from "../../utils/paths";
import HoverImage from "./HoverImage";
import Modal from "./Modal";

const IconCard = (props) => {
  const { data, padding } = props;
  const faqPath = getPath("/faq");
  const arVrPath = getPath("/technologies/ar-vr");

  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  // modal state
  const handleOpen = (id) => {
    setIsOpen(true);
    setModalData(data[id]);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {data.map(({ id, img, title, hoverImg, subTitle }) => {
        return (
          <div
            key={id}
            onClick={() => handleOpen(id)}
            className={`group gradient-bg px-2 py-5 sm:p-5 hover:cursor-pointer ${
              !subTitle && !arVrPath && "lg:py-14"
            } ${!arVrPath && "sm:py-6"}`}
          >
            <div
              className={`h-10 w-10 lg:h-16 lg:w-16 ${
                !faqPath && "gradient-bg-sm"
              } flex justify-center items-center rounded-lg mx-auto`}
            >
              <div
                className={`h-5 w-5 z-50 ${!padding && "lg:h-9 lg:w-9"} ${
                  faqPath && "h-5 w-6 lg:h-10 lg:w-10"
                } mx-auto relative`}
              >
                <HoverImage
                  img1={img}
                  img2={hoverImg ? hoverImg : "/images/icon_hover.svg"}
                />
              </div>
            </div>
            <p
              className={`text-sm lg:text-base 2xl:text-xl 3xl:text-2xl !leading-5 text-gray-800 group-hover:text-white transition-all duration-500 font-bold text-center ${
                padding
                  ? "mt-6 xl:mt-10"
                  : subTitle
                  ? "my-3 xl:mt-5 xl:mb-4"
                  : "mt-3 xl:mt-5"
              }`}
            >
              {title}
            </p>
            {subTitle && (
              <div className="text-sm 2xl:text-base text-center text-gray-800/40 group-hover:text-white/80 hidden sm:block transition-all duration-500">
                {subTitle}
              </div>
            )}
          </div>
        );
      })}
      <div className="sm:hidden">
        {isOpen && modalData.subTitle && (
          <Modal
            data={modalData}
            handleClose={handleClose}
            isOpen={isOpen}
            gradientBg={true}
          />
        )}
      </div>
    </>
  );
};

export default IconCard;

// ${dataPath && "lg:py-14"} ${dataSciencePath && "lg:py-14"}

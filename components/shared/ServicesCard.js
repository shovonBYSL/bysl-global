import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

import { TextGradient } from "./SharedTextgroups";

const ServicesCard = (props) => {
  const { data, black, padding } = props;
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
    <div className="grid grid-cols-2 grid-rows-2 place-content-center gap-3 lg:gap-5 w-full">
      {data.map(({ id, img, title, titleNewLine, title2, subTitle }) => {
        return (
          <div
            key={id}
            onClick={() => handleOpen(id)}
            className={`bg-white rounded-[20px] flex flex-col justify-center items-center text-center px-2 py-6 lg:px-5 w-full self-center
            ${id === 0 && "row-span-2"}
            ${id !== 0 && "h-full"}
            ${padding && "3xl:py-16"}`}
          >
            <div className="h-14 xl:h-20 w-14 xl:w-20 mb-1 md:mb-5 rounded-full flex items-center justify-center shadow-[0px_0px_20px_0px_#D0E2F4]">
              <div className="h-8 w-8 xl:h-12 xl:w-12 relative">
                <Image
                  src={img}
                  placeholder="blur"
                  blurDataURL={img}
                  layout="fill"
                  alt=""
                />
              </div>
            </div>
            <div className="text-sm lg:text-base 2xl:text-2xl font-bold">
              {black ? (
                <span className="text-gray-800">
                  {title}
                  {titleNewLine && (
                    <>
                      <br /> {titleNewLine}
                    </>
                  )}
                </span>
              ) : (
                <TextGradient text={title} />
              )}
            </div>
            <div className="hidden xl:block">
              {title2 && (
                <p className="text-xl mt-1 font-semibold text-gray-300">
                  {title2}
                </p>
              )}
              {subTitle && (
                <p className="text-sm text-gray-300 mt-3">{subTitle} </p>
              )}
            </div>
          </div>
        );
      })}
      <div className="xl:hidden">
        {isOpen && modalData.subTitle && (
          <Modal
            data={modalData}
            handleClose={handleClose}
            isOpen={isOpen}
            shadow={true}
          />
        )}
      </div>
    </div>
  );
};

export default ServicesCard;

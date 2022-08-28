import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

const FeaturesCard = ({ data }) => {
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
    <div className="flex lg:flex-col mb-12 lg:mb-0 gap-4 xl:gap-6 mt-10 lg:mt-8 w-full">
      {data.map(({ id, title, subTitle, img }) => {
        return (
          <div
            key={id}
            onClick={() => handleOpen(id)}
            className={`lg:flex justify-start gap-5 w-10/12 ${
              !subTitle && "items-center"
            }`}
          >
            <div
              className={`h-12 w-12 mx-auto relative ${
                subTitle && "xl:h-[75px] xl:w-[75px]"
              }`}
            >
              <Image
                src={img}
                placeholder="blur"
                blurDataURL={img}
                layout="fill"
                alt=""
              />
            </div>
            <div className="w-full">
              <p className="mt-2 md:mt-0 text-sm lg:text-base 2xl:text-xl 3xl:text-2xl text-gray-800 font-bold text-center lg:text-start">
                {title}
              </p>
              {subTitle && (
                <p className="text-gray-300 hidden lg:block text-sm 2xl:text-base mt-2">
                  {subTitle}
                </p>
              )}
            </div>
          </div>
        );
      })}
      <div className="lg:hidden">
        {isOpen && modalData.subTitle && (
          <Modal data={modalData} handleClose={handleClose} isOpen={isOpen} />
        )}
      </div>
    </div>
  );
};

export default FeaturesCard;

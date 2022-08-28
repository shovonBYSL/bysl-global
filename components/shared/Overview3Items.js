import Image from "next/image";
import { useState } from "react";

import { getPath } from "../../utils/paths";
import Modal from "./Modal";
import { SectionTitleType, TechnologiesSectionTitle } from "./SharedTextgroups";

const Overview3Items = (props) => {
  const { data, children, type } = props;
  const iotPath = getPath("/technologies/iot");

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
    <div className={`py-10 xl:py-16 ${iotPath && "!pt-0"}`}>
      {type && <SectionTitleType title={type} />}
      {children && (
        <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      )}
      <div
        className={`w-full max-w-[1128px] mx-auto flex flex-wrap md:flex-nowrap justify-center sm:justify-evenly gap-4 sm:gap-6 ${
          children && "mt-10 "
        }`}
      >
        {data.map(({ id, title, img, subTitle }) => {
          return (
            <div
              key={id}
              onClick={() => handleOpen(id)}
              className="p-3 xl:p-5 text-center xxs:max-w-none xs:w-max justify-self-center"
            >
              <div className="mx-auto h-10 2xl:h-16 w-10 2xl:w-16 relative">
                <Image
                  src={img}
                  placeholder="blur"
                  blurDataURL={img}
                  layout="fill"
                  alt=""
                />
              </div>
              <p className="2xl:text-xl font-medium text-gray-800 mt-5">
                {title}
              </p>
              {subTitle && (
                <p className="hidden md:block text-gray-300 2xl:text-lg mt-5 3xl:w-5/6 mx-auto !leading-6">
                  {subTitle}
                </p>
              )}
            </div>
          );
        })}
        <div className="xl:hidden">
          {isOpen && modalData.subTitle && (
            <Modal data={modalData} handleClose={handleClose} isOpen={isOpen} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview3Items;

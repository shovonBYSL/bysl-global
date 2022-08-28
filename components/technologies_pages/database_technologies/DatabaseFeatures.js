import Image from "next/image";
import { useState } from "react";
import Modal from "../../shared/Modal";

import {
  SectionTitleType,
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";

const DatabaseFeatures = ({ data }) => {
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
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Features" />
      <TechnologiesSectionTitle>
        Multi-model database management
      </TechnologiesSectionTitle>
      <div className="md:flex items-center mt-10  gap-6">
        <div className="h-44 xs:h-56 lg:h-[475px] md:w-[55%] lg:w-1/2 xl:w-2/5 3xl:w-1/2 relative">
          <Image
            src="/images/technologies/database/features/database_features_banner.svg"
            layout="fill"
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 place-content-center gap-3 lg:gap-5 w-full mt-10 md:mt-0 md:w-[45%] lg:w-1/2 xl:w-3/5 3xl:w-1/2">
          {data.map(({ id, img, title, subTitle }) => {
            return (
              <div
                key={id}
                onClick={() => handleOpen(id)}
                className="bg-white rounded-[20px] flex flex-col justify-center items-center text-center p-2 py-4 lg:p-5 w-full self-center h-full"
              >
                <div className="h-14 xl:h-20 w-14 xl:w-20 mb-5 rounded-full flex items-center justify-center shadow-[0px_0px_20px_0px_#D0E2F4]">
                  <div className="relative h-6 w-6 xl:h-12 xl:w-12">
                    <Image src={img} layout="fill" alt="" />
                  </div>
                </div>
                <div className="text-sm lg:text-base 3xl:text-2xl font-bold">
                  <TextGradient text={title} />
                </div>
                <div className="hidden xl:block">
                  {subTitle && (
                    <p className="text-sm text-gray-300 mt-5">{subTitle} </p>
                  )}
                </div>
              </div>
            );
          })}
          <div className="xl:hidden">
            {isOpen && modalData.subTitle && (
              <Modal
                shadow={true}
                data={modalData}
                handleClose={handleClose}
                isOpen={isOpen}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseFeatures;

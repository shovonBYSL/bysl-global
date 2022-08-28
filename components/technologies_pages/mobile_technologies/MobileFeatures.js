import Image from "next/image";
import { useState } from "react";
import Modal from "../../shared/Modal";

import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../../shared/SharedTextgroups";

const MobileFeatures = ({ featuresData }) => {
  const { data1, data2, img } = featuresData;

  const Features = ({ data, reversed }) => {
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
      <div className="flex lg:flex-col gap-4 md:gap-x-6 md:gap-y-12 xl:gap-x-10 xl:gap-y-20 w-full">
        {data.map(({ id, title, subTitle, img }) => {
          return (
            <div
              key={id}
              onClick={() => handleOpen(id)}
              className={`flex flex-col gap-2 lg:gap-5 w-1/3 lg:w-full ${
                reversed ? "xl:flex-row" : "xl:flex-row-reverse"
              }`}
            >
              <div className="xl:w-1/4 3xl:w-2/12 flex justify-center">
                <div className="h-10 lg:h-16 w-10 lg:w-16 rounded-full bg-[#F2F2F3] flex justify-center items-center">
                  <div className="h-4 w-4 lg:h-8 lg:w-8 relative">
                    <Image
                      src={img}
                      placeholder="blur"
                      blurDataURL={img}
                      alt=""
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`text-center ${
                  reversed ? "xl:text-start" : "xl:text-end"
                } xl:w-3/4 3xl:w-10/12`}
              >
                <p className="text-sm md:text-base lg:text-lg 2xl:text-xl font-medium text-gray-800">
                  {title}
                </p>
                <p className="text-sm lg:text-base xl:text-lg mt-1 text-gray-300 hidden lg:block !leading-6">
                  {subTitle}
                </p>
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

  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Features" />
      <TechnologiesSectionTitle>
        Explore premium quality
      </TechnologiesSectionTitle>
      <div className="mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 place-items-center gap-4">
        <Features data={data1} />
        <div className="flex justify-center">
          {/* <div className="h-80 lg:h-96 2xl:h-[507px] w-44 lg:w-52 2xl:w-[244px] relative"> */}
          <div className="w-2/3 lg:w-4/5 xl:w-5/6 2xl:w-full">
            <Image
              src={img}
              placeholder="blur"
              blurDataURL={img}
              alt=""
              height={507}
              width={244}
              // layout="fill"
            />
          </div>
        </div>
        {/* </div> */}
        <Features data={data2} reversed={true} />
      </div>
    </div>
  );
};

export default MobileFeatures;

import Image from "next/image";
import { useEffect, useState } from "react";

import { getItem, setItem } from "../../utils/sessionStorage";
import { scrollYFocus } from "../../utils/scroller";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
  TextGradient,
} from "../shared/SharedTextgroups";

const ITServices = ({ data }) => {
  const serviceId = getItem();
  const [margin, setMargin] = useState(false);
  const [tabOpen, setTabOpen] = useState(0);
  const [tabData, setTabData] = useState(data[tabOpen]);

  // function for accordion handle
  const handleOpen = (id) => {
    setTabOpen("");
    setItem(id);
    screen.width < 1024 && setMargin(true);

    setTimeout(() => {
      screen.width < 1024 && tabOpen !== id && scrollYFocus(id);
      screen.width < 1024
        ? setTabOpen(tabOpen === id ? "" : id)
        : setTabOpen(id);
      setMargin(false);
    }, 1);
  };

  useEffect(() => {
    setTabOpen(serviceId ? (serviceId == "" ? 0 : serviceId) : 0);
    setTabData(data[tabOpen]);
  }, [serviceId, tabData]);

  const Tab = ({ data }) => {
    const { id, img, activeImg, tabTitle } = data;

    return (
      <div
        onClick={() => handleOpen(id)}
        className={`py-3 lg:py-2.5 rounded-[10px] hover:cursor-pointer w-full ${
          tabOpen === id
            ? "bg-gradient-to-r from-blue-900 to-blue-700"
            : "bg-blue-300 lg:bg-transparent"
        }`}
      >
        <div
          className={`flex items-center gap-5 w-full pl-5 ${
            tabOpen === id && "mx-auto lg:mx-0"
          }`}
        >
          <Image
            src={tabOpen === id ? activeImg : img}
            height={20}
            width={20}
            objectFit="contain"
            alt=""
          />
          <p
            className={`text-sm xl:text-base font-bold md:font-extrabold w-full ${
              tabOpen === id ? "text-white" : "text-gray-800"
            }`}
          >
            {tabTitle}
          </p>
        </div>
      </div>
    );
  };

  const TabElement = () => {
    return (
      <>
        {tabData && (
          <div className="p-5 mt-4 lg:mt-0 lg:p-10 lg:pr-0 lg:pb-0">
            <div className="service-scroll">
              <p className="text-gray-400 mb-10">{tabData.overview}</p>
              <p className="text-gray-800 font-semibold text-lg mb-2">
                Our Approach to {tabData.title}
              </p>
              <p className="text-gray-400 mb-10">{tabData.approach}</p>
              <span className="text-sm xl:text-base font-bold md:font-extrabold">
                <TextGradient text="Services Highlights:" />
              </span>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {tabData.highlights?.map((item, i) => (
                  <div key={i} className="flex items-center mt-[15px]">
                    <Image
                      src="/images/services/individual_service/arrow_blue.svg"
                      height={9}
                      width={9}
                      alt=""
                    />
                    <div className="ml-2.5 text-gray-800 text-sm xl:text-base font-bold md:font-extrabold">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className={`py-10 xl:py-16  ${margin && "mb-[1000px]"}`}>
      <SectionTitleType title="What We Do." />
      <TechnologiesSectionTitle>
        Trend-setting IT services
      </TechnologiesSectionTitle>
      <div className="mt-10 xl:mt-16">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4 2xl:col-span-3 flex flex-col space-y-4 bg-white p-5 rounded-[20px] lg:shadow-[-4px_-4px_25px_0px_#E5EBF3]">
            {data.map((item, i) => {
              return (
                <div key={i} id={i}>
                  <Tab data={item} />
                  <div className="lg:hidden">
                    {tabOpen === i && <TabElement />}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="hidden lg:block lg:col-span-8 2xl:col-span-9">
            <TabElement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServices;

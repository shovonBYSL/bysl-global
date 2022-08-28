import Image from "next/image";
import { useEffect, useState } from "react";

import { BPOCard, UIUXCard } from "./ITServicesDetails";
import { getItem, setItem } from "../../utils/sessionStorage";
import { scrollYFocus } from "../../utils/scroller";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../shared/SharedTextgroups";

const ITServices = ({ data }) => {
  const serviceId = getItem();
  const [margin, setMargin] = useState(false);
  const [tabOpen, setTabOpen] = useState(0);

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
  }, [serviceId]);

  const serviceDetails = [
    <BPOCard />,
    <UIUXCard />,
    <BPOCard />,
    <UIUXCard />,
    <BPOCard />,
    <UIUXCard />,
    <BPOCard />,
    <UIUXCard />,
    <BPOCard />,
    <UIUXCard />,
    <BPOCard />,
    <UIUXCard />,
  ];

  const Tab = ({ data }) => {
    const { id, img, activeImg, title } = data;

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
            className={`text-sm xl:text-base font-bold md:font-extrabold ${
              tabOpen === id ? "text-white" : "text-gray-800"
            }`}
          >
            {title}
          </p>
        </div>
      </div>
    );
  };

  const TabElement = () => {
    return (
      <div className="p-5 mt-4 lg:mt-0 lg:p-10 lg:pr-0">
        {serviceDetails.map((el, i) => (
          <div key={i} className={`${tabOpen === i && "service-scroll"}`}>
            {tabOpen === i && el}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`py-10 xl:py-16  ${margin && "mb-[1000px]"}`}>
      <SectionTitleType title="What We Do." />
      <TechnologiesSectionTitle>
        We Provide Various IT services
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

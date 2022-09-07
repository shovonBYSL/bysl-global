import Image from "next/image";

import {
  individualServiceITServicesDetails,
  servicesData,
} from "../../public/data/individualServiceData";
import { TextGradient } from "../shared/SharedTextgroups";

const {
  header,
  leftTitle1,
  leftServiceTitle,
  leftServices,
  rightTitle1,
  rightTitle2,
  rightServiceTitle,
  rightServices,
  footer,
} = individualServiceITServicesDetails;

const { title, overview, approach, highlights } = servicesData[0];

const ProjectsCard = (props) => {
  const { title1, title2, serviceTitle, services } = props;

  return (
    <div>
      <p className="text-gray-400 text-sm xl:text-base mb-10">
        {title1}
        {title2 && (
          <>
            <br />
            <br />
            {rightTitle2}
          </>
        )}
      </p>
      <span className="text-sm xl:text-base font-bold md:font-extrabold">
        <TextGradient text={serviceTitle} />
      </span>
      {services.map((item, i) => (
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
  );
};

const BPOCard = () => {
  return (
    <>
      <p className="text-sm xl:text-base text-gray-400 mb-10">{header}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ProjectsCard
          title1={leftTitle1}
          serviceTitle={leftServiceTitle}
          services={leftServices}
        />
        <ProjectsCard
          title1={rightTitle1}
          title2={rightTitle2}
          serviceTitle={rightServiceTitle}
          services={rightServices}
        />
      </div>
      <p className="text-sm xl:text-base text-gray-800 mt-10">{footer}</p>
    </>
  );
};

const UIUXCard = () => {
  return (
    <div>
      <p className="text-gray-400 mb-10">{overview}</p>
      <p className="text-gray-800 font-semibold text-lg mb-2">
        Our Approach to {title}
      </p>
      <p className="text-gray-400 mb-10">{approach}</p>
      <span className="text-sm xl:text-base font-bold md:font-extrabold">
        <TextGradient text="Services Highlights:" />
      </span>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {highlights.map((item, i) => (
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
  );
};

export { BPOCard, UIUXCard };

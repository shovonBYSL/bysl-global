import { useEffect, useState } from "react";

import {
  TechnologiesSectionTitle,
  TextGradient,
} from "../shared/SharedTextgroups";

const CompanyLocations = ({ data }) => {
  const [location, setLocation] = useState(0);

  useEffect(() => {}, [location]);

  return (
    <div className="py-10 xl:py-16 ">
      <TechnologiesSectionTitle>
        Find Us <TextGradient text="Globally" />
      </TechnologiesSectionTitle>

      <div className="flex flex-wrap justify-center gap-4 mt-6 lg:mt-10 mb-10 xl:mb-16">
        {data.map(({ id, shortName }) => (
          <div
            onClick={() => setLocation(id)}
            key={id}
            className={`${
              location === id
                ? "text-white bg-gradient-to-r from-blue-900 to-blue-700 rounded-[5px]"
                : "light-border-gradient text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
            } w-28 xxs:w-36 h-max text-center text-xs xs:text-sm font-semibold py-2 2xl:py-[12.5px]  hover:cursor-pointer`}
          >
            {shortName}
          </div>
        ))}
      </div>

      {data.map(({ id, name, name2, country, address, city }) => {
        return (
          id === location && (
            <div
              key={id}
              className={`zooming-less-animation h-[350px] pt-16 pl-4 xs:pl-8 md:pl-16 xl:pt-20 xl:pl-24 bg-[#EBEFF5] rounded-xl lg:rounded-[20px] relative ${
                (id === 0 && "bg-[url('/images/locations/uae.png')]") ||
                (id === 1 && "bg-[url('/images/locations/usa.png')]") ||
                (id === 2 && "bg-[url('/images/locations/singapore.png')]") ||
                (id === 3 && "bg-[url('/images/locations/bangladesh.png')]")
              } bg-right-bottom bg-no-repeat`}
            >
              <h3 className="uppercase break-words text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] font-semibold text-gray-800 text-start">
                <TextGradient text={country} />
              </h3>
              <p className="uppercase mt-6 xl:mt-10 mb-4 font-bold lg:text-xl xl:text-2xl text-gray-800">
                {name}
              </p>
              {name2 && (
                <p className="uppercase mb-4 font-bold lg:text-xl xl:text-2xl text-gray-800">
                  {name2}
                </p>
              )}
              <p className="uppercase font-light text-sm xl:text-base text-gray-700">
                {address}&nbsp;
                <br className="hidden xs:block" /> {city}
              </p>
            </div>
          )
        );
      })}
    </div>
  );
};

export default CompanyLocations;

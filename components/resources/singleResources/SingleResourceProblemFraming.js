import Image from "next/image";

import { TechnologiesSectionTitle } from "../../shared/SharedTextgroups";

const SingleResourceProblemFraming = ({data}) => {
  return (
    <div className="resource-box py-10 xl:py-16">
      <TechnologiesSectionTitle>Problem Framing</TechnologiesSectionTitle>
      <p className="mt-6 text-gray-500 text-center w-11/12 sm:w-4/5 lg:w-3/5 2xl:w-1/2 mx-auto mb-10 xl:mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar
        consectetur eu vel sem elementum sollicitudin. Nisl libero lobortis
        lectus posuere. Volutpat at mauris lorem curabitur. Varius aliquet
        egestas eros, dictum leo nec mi.
      </p>
      <div className="h-max w-full bg-[url('/images/resources/single/problem_bg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-y-10 mx-6 sm:mx-10 lg:mx-28">
          {data.map(
            ({ id, title, subTitle, img, type1, type2 }) => {
              return (
                <div
                  key={id}
                  className="backdrop-blur-sm bg-gray-100/40 border border-gray-300/10 rounded-[30px] px-5 py-10"
                >
                  <div className="flex items-center justify-between mb-16">
                    <p className="xl:text-lg 2xl:text-xl font-extrabold text-gray-500">
                      {title}
                    </p>
                    <div className="h-6 w-6 xl:h-9 xl:w-9 relative">
                      <Image src={img} layout="fill" objectFit="cover" alt="" />
                    </div>
                  </div>
                  <p className="mb-10 font-semibold xl:text-lg 2xl:text-2xl text-gray-800">
                    {subTitle}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <p className="text-gray-500 font-medium text-sm xl:text-base">
                      {type1}
                    </p>
                    <p className="h-1 w-1 bg-gray-800 rounded-full"></p>
                    <p className="text-gray-500 font-medium text-sm xl:text-base">
                      {type2}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleResourceProblemFraming;

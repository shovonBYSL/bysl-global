import Image from "next/image";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";

import { TextGradient } from "../../shared/SharedTextgroups";

const EducationProblems = ({ data }) => {
  const [open, setOpen] = useState(0);

  return (
    <div className="py-10 xl:py-16">
      <div className="bg-white rounded-[16px] xl:rounded-[40px] overflow-hidden shadow-[0px_5px_20px_0px_#E5ECF5] grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-4 pb-0 md:p-6 md:pb-0 lg:pb-6 xl:p-10">
          <p className="text-gray-600 mb-2">Problems</p>
          <p className="break-words text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-[40px] font-bold ">
            <TextGradient text="Existing problems in today’s education system" />
          </p>
          <div className="mt-6 xl:mt-10 flex flex-col gap-2 xl:gap-4">
            {data.map(({ id, problem, problemInfo }) => {
              return (
                <div key={id}>
                  <div
                    onClick={() => setOpen(id === open ? "" : id)}
                    className="flex sm:items-center gap-4 hover:cursor-pointer"
                  >
                    <div
                      className={`h-2 w-2 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 rounded-full mt-[9px] sm:mt-0 ${
                        id === open
                          ? "bg-gradient-to-r from-blue-900 to-blue-700"
                          : "bg-gray-800"
                      }`}
                    />
                    <div className="xl:text-xl text-gray-800 font-medium w-full">
                      {problem}
                    </div>
                  </div>
                  {open === id && (
                    <p className="mt-2 xl:mt-4 ml-10 text-gray-600 text-sm xl:text-base">
                      {problemInfo}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <Scroll smooth={true} offset={-40} duration={500} to="solutions">
            <p className="mt-5 xl:mt-10 text-end text-sm lg:text-base font-medium hover:cursor-pointer">
              <TextGradient text="See All solutions regarding this porblems" />
            </p>
          </Scroll>
        </div>
        <div className="relative h-52 xs:h-60 sm:h-64 md:h-80 lg:h-full ">
          <Image
            src={data[0].problemImg}
            placeholder="blur"
            blurDataURL={data[0].problemImg}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EducationProblems;

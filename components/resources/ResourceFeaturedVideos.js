import Image from "next/image";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";

import { TechnologiesSectionTitle } from "../shared/SharedTextgroups";
import ResourceVideoModal from "./ResourceVideoModal";

const ResourceFeaturedVideos = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoFile, setVideoFile] = useState();

  const handleClick = (video) => {
    setIsOpen(true);
    setVideoFile(video);
  };

  return (
    <div className="py-10 xl:py-16 bg-gray-800">
      {isOpen && <ResourceVideoModal video={videoFile} setIsOpen={setIsOpen} />}
      <div className="box text-white">
        <TechnologiesSectionTitle white start>
          Featured Videos
        </TechnologiesSectionTitle>
        <div className="mt-6 xl:mt-10 grid lg:grid-flow-col grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 xl:gap-6">
          {data.map(({ id, thumb, video, title }) => {
            return (
              <div
                key={id}
                onClick={() => handleClick(video)}
                className={`cursor-pointer ${
                  id === 0 && "lg:row-span-2 lg:col-span-2"
                }`}
              >
                <div
                  className={`relative h-40 rounded-xl xl:rounded-[20px] overflow-hidden ${
                    id === 0 ? "lg:h-[390px] xl:h-[460px]" : "xl:h-[200px]"
                  }`}
                >
                  <Image
                    src={thumb}
                    placeholder="blur"
                    blurDataURL={thumb}
                    layout="fill"
                    alt=""
                  />
                  <div
                    className={`bg-white h-[46px] w-[46px] ${
                      id === 0 && "xl:h-[74px] xl:w-[74px]"
                    } rounded-full flex justify-center items-center centered`}
                  >
                    <BsFillPlayFill
                      className={`text-gray-800 text-xl ${
                        id === 0 && "xl:text-4xl"
                      }`}
                    />
                  </div>
                </div>
                <p
                  className={`text-white/60 mt-2 ${
                    id === 0 && "lg:text-white/80 lg:text-xl 2xl:text-2xl"
                  }`}
                >
                  {title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResourceFeaturedVideos;

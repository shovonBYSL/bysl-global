import Image from "next/image";
import { useState, useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";

import ResourceVideoModal from "./ResourceVideoModal";
import { TechnologiesSectionTitle } from "../shared/SharedTextgroups";

const ResourceFeaturedVideos = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoFile, setVideoFile] = useState();

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [isOpen]);

  const handleClick = (video) => {
    setIsOpen(true);
    setVideoFile(video);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="py-10 xl:py-16 bg-gray-800">
      {isOpen && (
        <ResourceVideoModal
          video={videoFile}
          isOpen={isOpen}
          handleClose={handleClose}
        />
      )}
      <div className="box text-white">
        <TechnologiesSectionTitle white start>
          Tutorials
        </TechnologiesSectionTitle>
        <div className="mt-6 xl:mt-10 grid lg:grid-flow-col grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 xl:gap-6">
          {data?.map(({ id, video_thumbnail, video_link, title }) => {
            return (
              <div
                key={id}
                onClick={() => handleClick(video_link)}
                className={`cursor-pointer ${
                  id === 1 && "lg:row-span-2 lg:col-span-2"
                }`}
              >
                <div
                  className={`relative h-40 rounded-xl xl:rounded-[20px] overflow-hidden ${
                    id === 1 ? "lg:h-[390px] xl:h-[460px]" : "xl:h-[200px]"
                  }`}
                >
                  <Image
                    src={video_thumbnail}
                    placeholder="blur"
                    blurDataURL={video_thumbnail}
                    layout="fill"
                    alt=""
                  />
                  <div
                    className={`bg-white h-[46px] w-[46px] relative inline-flex ${
                      id === 1 && "xl:h-[74px] xl:w-[74px]"
                    } rounded-full flex justify-center items-center centered`}
                  >
                    <BsFillPlayFill
                      className={`text-gray-800 text-xl z-10 ml-[3px] ${
                        id === 1 && "xl:text-4xl xl:!ml-1"
                      }`}
                    />
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  </div>
                </div>
                <p
                  className={`text-white/60 mt-2 ${
                    id === 1 &&
                    "lg:text-white/80 lg:text-xl 2xl:text-2xl lg:font-semibold"
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

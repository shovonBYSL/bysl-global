import Image from "next/image";

const SingleResourceGoal = ({ img }) => {
  return (
    <div className="box py-10 xl:py-16 md:flex items-center gap-12 xl:gap-20 3xl:gap-28">
      <div className="md:w-1/2">
        <p className="break-words text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] font-semibold text-gray-800 text-center md:text-start mb-4 md:mb-6">
          Goal?
        </p>
        <p className="text-sm lg:text-base 2xl:text-2xl font-medium text-gray-800 text-center md:text-start mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
          pulvinar quis eu vel feugiat erat duis. Molestie volutpat tristique
          sit cras phasellus purus. Proin volutpat eget fames sem facilisis nec
          lobortis.
        </p>
        <p className="text-sm lg:text-base 2xl:text-lg text-gray-500 text-center md:text-start">
          Praesent in eu, id sed cursus molestie pellentesque et tellus. Non
          risus, in eu elit quisque scelerisque sapien. Integer id nec gravida
          ut justo, neque nullam dignissim. Tempus nulla in volutpat elementum,
          amet a, eget volutpat. Urna velit, et orci pretium lacus, egestas arcu
          varius. Eget viverra sed arcu ac gravida convallis aliquet. Tortor
          turpis proin vestibulum massa orci, interdum et pharetra,
          pellentesque. Convallis habitasse in dui rutrum nibh amet lectus
          laoreet.
        </p>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 mx-auto">
        <Image
          src={img}
          placeholder="blur"
          blurDataURL={img}
          height={636}
          width={636}
          alt=""
        />
      </div>
    </div>
  );
};

export default SingleResourceGoal;

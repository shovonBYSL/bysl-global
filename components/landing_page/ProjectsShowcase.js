import Image from "next/image";

const ProjectsShowcase = ({ data }) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 xl:gap-6 py-10 xl:py-16">
      {data.map(({ id, img, video }) => (
        <div
          key={id}
          className="h-44 md:h-52 lg:h-64 xl:h-72 2xl:h-[350px] w-full rounded-xl overflow-hidden relative"
        >
          {/* {id === 1 ? (
            <video
              className="w-full h-full object-cover"
              src={video}
              autoPlay
              muted
              loop
            />
          ) : ( */}
          <Image
            src={img}
            placeholder="blur"
            blurDataURL={img}
            layout="fill"
            objectFit="cover"
            alt=""
          />
          {/* )} */}
        </div>
      ))}
    </div>
  );
};

export default ProjectsShowcase;

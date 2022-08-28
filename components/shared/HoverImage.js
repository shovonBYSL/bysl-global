import Image from "next/image";

const HoverImage = ({ img1, img2 }) => {
  return (
    <>
      <div className="relative w-full h-full group-hover:opacity-0 transition-all duration-1000">
        <Image
          src={img1}
          placeholder="blur"
          blurDataURL={img1}
          layout="fill"
          alt=""
        />
      </div>
      <div className="absolute top-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-1000">
        <Image
          src={img2}
          placeholder="blur"
          blurDataURL={img2}
          layout="fill"
          alt=""
        />
      </div>
    </>
  );
};

export default HoverImage;

import { AiOutlinePlus } from "react-icons/ai";

const ResourceVideoModal = (props) => {
  const { video, setIsOpen } = props;

  return (
    <div className="z-50 bg-black/40 h-screen w-screen fixed top-0 left-0">
      <button
        onBlur={() => setIsOpen(false)}
        className="centered bg-white p-2 w-11/12 sm:w-4/5 lg:w-3/5 2xl:w-1/2 max-h-96 lg:max-h-[450px] xl:max-h-[550px] mx-auto rounded-lg relative clip-video"
      >
        <video
          className="w-full mx-auto h-full max-h-[350px] lg:max-h-[400px] xl:max-h-[520px] object-cover"
          src={video}
          autoPlay
          controls
        />
        <AiOutlinePlus
          onClick={() => setIsOpen(false)}
          className="text-2xl text-red-800/70 bg-white rounded-full rotate-45 absolute top-3 right-3 cursor-pointer"
        />
      </button>
    </div>
  );
};

export default ResourceVideoModal;

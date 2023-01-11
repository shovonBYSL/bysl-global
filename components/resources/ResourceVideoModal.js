import { AiOutlinePlus } from "react-icons/ai";

const ResourceVideoModal = (props) => {
  const { video, isOpen, handleClose } = props;

  return (
    <div className="relative z-50">
      <div
        onClick={handleClose}
        className={`h-screen w-full fixed top-0 left-0 invisible transition-all duration-500 ${
          isOpen && "bg-black/40 !visible backdrop-blur-xs"
        }`}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-4/5 lg:w-3/5 2xl:w-1/2 max-h-96 lg:max-h-[450px] xl:max-h-[550px] clip-video">
        <video
          className="w-full mx-auto h-full max-h-[350px] lg:max-h-[400px] xl:max-h-[520px] object-cover"
          src={video}
          autoPlay
          controls
        />
        <AiOutlinePlus
          onClick={handleClose}
          className="text-2xl text-red-800/70 bg-white/70 hover:bg-white/90 transition-all duration-300 rounded-full rotate-45 absolute top-3 right-3 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ResourceVideoModal;

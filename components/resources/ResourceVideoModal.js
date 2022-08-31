import { AiOutlinePlus } from "react-icons/ai";

const ResourceVideoModal = (props) => {
  const { video, setIsOpen } = props;

  return (
    <div className="z-50 bg-black/40 h-screen w-screen fixed top-0 left-0">
      <div className="centered bg-white p-2 w-4/5 lg:w-full lg:max-w-3xl max-h-80 lg:max-h-[450px] mx-auto rounded-lg relative clip-video">
        <video
          className="w-full mx-auto max-w-3xl max-h-[300px] lg:max-h-[400px] h-full object-cover"
          src={video}
          autoPlay
          controls
        />
        <AiOutlinePlus
          onClick={() => setIsOpen(false)}
          className="text-2xl text-red-800/70 bg-white rounded-full rotate-45 absolute top-3 right-3 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ResourceVideoModal;

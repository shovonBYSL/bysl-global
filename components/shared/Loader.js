import Lottie from "lottie-react";

import loader from "../../public/data/lottieAnimations/loader.json";

const Loader = () => {
  return (
    <div className="h-screen mx-auto md:w-[500px] flex items-center justify-center">
      <Lottie animationData={loader} loop={true} />
    </div>
  );
};

export default Loader;

import SolutionsNav from "../navigation/SolutionsNav";
// import { TextGradient } from "../shared/SharedTextgroups";

const SolutionsBanner = ({ data }) => {
  const handleClick = () => {
    const solnav = document.querySelector(".sol-nav");

    solnav.style.display === "block"
      ? (solnav.style.display = "none")
      : (solnav.style.display = "block");
  };

  const showTooltip = () => {
    const solutionsTooltip = document.getElementById("solutionsTooltip");

    window.onmousemove = function (e) {
      solutionsTooltip.style.top = e.clientY + "px";
      solutionsTooltip.style.left = e.clientX + "px";
    };
  };

  return (
    <>
      <div className="hidden lg:block">
        <SolutionsNav />
      </div>
      <div
        onClick={handleClick}
        onMouseMove={showTooltip}
        className="solutions-box group cursor-none relative my-10 xl:my-16 bg-gradient-to-r from-blue-900 to-blue-700 min-h-max 2xl:h-96 3xl:h-[531px] p-5 md:p-7 xl:p-10 3xl:p-16 lg:pl-16 xl:pl-32 text-center text-white rounded-xl lg:rounded-3xl 2xl:rounded-[40px] overflow-hidden"
      >
        <span
          id="solutionsTooltip"
          className="bg-white/70 text-sm py-1.5 px-4 z-10 absolute text-gray-800 font-bold rounded-lg invisible lg:group-hover:visible group-hover:block group-hover:fixed group-hover:overflow-hidden"
        >
          Click Here To See All Solutions
        </span>
        <div className="flex flex-col sm:flex-row justify-between sm:gap-4 sm:items-center xl:items-start">
          <div className="sm:w-1/2 text-center sm:text-start xl:mt-8 3xl:mt-16 mb-11 sm:mb-0">
            <p className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-[64px] font-bold mb-5 3xl:mb-6">
              ​​Solutions
            </p>
            <p className="text-white/75 leading-4 text-sm lg:text-base 2xl:text-lg 3xl:text-xl max-w-[450px]">
              Whether it's subtle interactions that improve the UX, or a
              complete restructuring of virtual networks, or hardforking of
              difficult systems, or building comprehensive software frameworks
              for massive business projects, we provide class-leading
              sustainable solutions catalyzing exponential and sustainable
              growth.
            </p>
            {/* <div className="hidden lg:block mt-6 w-max text-center rounded-lg text-sm font-semibold py-2 xl:py-3 xl:px-6 cursor-pointer bg-white">
              <TextGradient text="View all Solutions" />
            </div> */}
          </div>
          <div className="sm:w-1/2 xs:px-12 sm:px-0 2xl:pl-10 flex justify-center sm:justify-end clip-video">
            <video className="w-full h-full" src={data} autoPlay muted loop />
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsBanner;

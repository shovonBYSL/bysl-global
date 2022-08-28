const WebBanner = ({ img }) => {
  const Tech = ({ img, title }) => {
    return (
      <>
        <img className="w-full h-full" src={img} alt="" />
        <p>{title}</p>
      </>
    );
  };

  return (
    <div className="img_animate1 mt-3 border mx-auto relative w-[253px] xl:w-[350px] 2xl:w-[450px] h-[253px] xl:h-[350px] 2xl:h-[450px]">
      <div className="angular absolute top-[-10%] left-[-10%] w-12 xl:w-16 h-12 xl:h-16 shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
        <Tech img={img.angular} title="Angular" />
      </div>
      <div className="tailwind absolute top-[50%] translate-y-[-50%] left-[-10%] w-12 xl:w-14 2xl:w-[70px] h-12 xl:h-14 2xl:h-[70px] shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
        <Tech img={img.tailwind} title="Tailwindcss" />
      </div>
      <div className="mui absolute top-[100%] translate-y-[-70%] left-[-10%] w-12 xl:w-14 2xl:w-20 h-12 xl:h-14 2xl:h-20 shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
        <Tech img={img.mui} title="Material UI" />
      </div>
      <div className="node absolute top-[100%] translate-y-[-70%] right-[-10%] w-11 xl:w-14 2xl:w-[70px] h-11 xl:h-14 2xl:h-[70px] shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
        <Tech img={img.node} title="Node Js" />
      </div>
      <div className="vue absolute top-[-10%] right-[-10%] w-14 xl:w-14 2xl:w-20 h-14 xl:h-14 2xl:h-20 shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
        <Tech img={img.vue} title="Vue Js" />
      </div>

      <div className="img_animate2 border w-[177px] xl:w-[230px] 2xl:w-[320px] h-[177px] xl:h-[230px] 2xl:h-[320px] relative top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
        <div className="next absolute top-[-10%] left-[-10%] w-14 xl:w-16 2xl:w-20 h-14 xl:h-16 2xl:h-20 shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
          <Tech img={img.next} title="Next Js" />
        </div>
        <div className="laravel absolute top-[100%] translate-y-[-57%] left-[10%] w-12 xl:w-14 2xl:w-16 h-12 xl:h-14 2xl:h-16 shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
          <Tech img={img.laravel} title="Laravel" />
        </div>
        <div className="firebase absolute top-[-10%] right-[-10%] w-12 xl:w-14 2xl:w-16 h-12 xl:h-14 2xl:h-16 shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
          <Tech img={img.firebase} title="Firebase" />
        </div>
        <div className="python absolute top-[85%] translate-y-[-70%] right-[-15%] w-14 xl:w-16 2xl:w-20 h-14 xl:h-16 2xl:h-20 shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
          <Tech img={img.python} title="Python" />
        </div>

        <div className="img_animate3 border w-[96px] xl:w-[120px] 2xl:w-[170px] h-[96px] xl:h-[120px] 2xl:h-[170px] relative top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
          <div className="ts absolute top-[10%] left-[-13%] w-8 xl:w-10 2xl:w-12 h-8 xl:h-10 2xl:h-12 shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
            <Tech img={img.ts} title="TypeScript" />
          </div>
          <div className="react absolute top-[70%] translate-y-[-70%] right-[-18%] w-10 xl:w-12 2xl:w-16 h-10 xl:h-12 2xl:h-16 shadow-[0px_0px_40px_rgba(0,0,0,0.1)] rounded-full">
            <Tech img={img.react} title="React Js" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebBanner;

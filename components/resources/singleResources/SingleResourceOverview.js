const SingleResourceOverview = () => {
  const OverviewInfoTitle = ({ title }) => (
    <p className="font-bold text-gray-800 text-lg mb-4">{title}</p>
  );
  const OverviewInfoDetails = ({ details }) => (
    <p className="font-medium text-gray-500">{details}</p>
  );

  return (
    <div className="box py-10 xl:py-16">
      <div className="h-max w-full bg-[url('/images/resources/single/single_resource_overview_bg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="backdrop-blur-sm bg-gray-300/5 rounded-[25px] xl:rounded-[55px] p-4 sm:p-8 md:p-12 lg:p-16 xl:px-28 xl:py-20">
          <p className="break-words text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] font-black text-gray-800 md:text-start text-center">
            Overview
          </p>
          <div className="flex flex-col lg:flex-row-reverse gap-7 lg:gap-32">
            <div className="flex lg:flex-col flex-wrap justify-between lg:justify-start gap-6 xl:gap-y-16 mt-12 lg:mt-0">
              <div className="w-max">
                <OverviewInfoTitle title="Role" />
                <OverviewInfoDetails details="Product designer, product strategist" />
              </div>
              <div className="w-max">
                <OverviewInfoTitle title="Duration" />
                <OverviewInfoDetails details="12 Weeks" />
              </div>
              <div className="w-max xxs:mx-auto lg:mx-0">
                <OverviewInfoTitle title="Outcomes" />
                <div className="flex gap-4">
                  {["Mobile App", "Branding"].map((item, i) => (
                    <p
                      key={i}
                      className="bg-white/50 px-4 py-2 rounded-lg text-xs text-gray-500"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <p className="lg:w-2/3 text-sm xl:text-base 2xl:text-lg text-gray-500 mt-7 lg:mt-12 text-center md:text-start ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pulvinar consectetur eu vel sem elementum sollicitudin. Nisl
              libero lobortis lectus posuere. Volutpat at mauris lorem
              curabitur. Varius aliquet egestas eros, dictum leo nec mi. Congue
              ultrices facilisis duis malesuada erat sollicitudin sed quis.
              Mattis euismod imperdiet dictum pellentesque facilisi ultricies.
              Tincidunt eget duis tellus iaculis. Arcu metus velit nisl aliquam
              mauris in donec. Rhoncus in dolor dignissim faucibus. Molestie id
              urna, mi placerat praesent gravida nunc.
              <br />
              <br />
              Enim sit at quis massa sodales bibendum lobortis. Porta est
              ullamcorper amet varius leo pellentesque laoreet. Adipiscing nulla
              consequat quis arcu turpis eleifend. Nunc vel enim scelerisque
              tortor, maecenas amet, hendrerit turpis. Sed tristique facilisi eu
              lacus velit dis aliquam imperdiet. Iaculis orci quam scelerisque
              porttitor neque, nec congue sit. Integer consequat massa est
              platea suscipit. Lectus massa in tellus nibh vitae. Dui euismod
              sed tortor auctor.
              <br />
              <br />
              Eros, sapien diam nulla mattis hac fusce tristique. Sagittis,
              rutrum pellentesque vulputate elementum tristique curabitur nulla.
              Ornare laoreet cursus neque, in. Turpis et morbi orci, cursus non.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleResourceOverview;
// bg-gradient-to-b from-[#F2E9F1] to-[#F2F4F9]

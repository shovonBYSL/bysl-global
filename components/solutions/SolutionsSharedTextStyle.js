import { getPath } from "../../utils/paths";

const Title = ({ label }) => {
  const financePath = getPath("/solutions/finance");
  return (
    <div className="mb-3">
      <p className="text-sm lg:text-base xl:text-xl font-medium text-gray-800">
        {label}
      </p>
      <p
        className={`${
          !financePath && "mx-auto lg:mx-0"
        } h-[2px] w-14 lg:w-16 xl:w-[82px] bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg`}
      ></p>
    </div>
  );
};

const Heading = ({ label }) => (
  <p className="mb-2 lg:text-xl xl:text-2xl font-semibold text-gray-800">
    {label}
  </p>
);

const Info = (props) => {
  const { text, noMargin } = props;

  return (
    <p className={`${!noMargin && "mb-6"}  text-sm xl:text-base text-gray-500`}>
      {text}
    </p>
  );
};

export { Title, Heading, Info };

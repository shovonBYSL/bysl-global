const ArrowRight = ({ color }) => {
  return (
    <svg
      height="16"
      width="16"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 8.5H13.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 4L13.5 8.5L9 13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const PolygonArrow = () => {
  return (
    <svg
      width="7"
      height="8"
      viewBox="0 0 7 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 4L0.249999 7.89711L0.249999 0.102886L7 4Z" fill="#408CD9" />
    </svg>
  );
};

export { ArrowRight, PolygonArrow };

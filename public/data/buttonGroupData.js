const data = [
  {
    id: 0,
    title: "Mission",
    link: "/about-us/mission",
  },
  {
    id: 1,
    title: "Purpose",
    link: "/about-us/purpose",
  },
  {
    id: 2,
    title: "Values",
    link: "/about-us/values",
  },
  {
    id: 3,
    title: "Culture",
    link: "/about-us/culture",
  },
];

const missionButtonData = data.filter(
  (item) => item.link !== "/about-us/mission"
);
const purposeButtonData = data.filter(
  (item) => item.link !== "/about-us/purpose"
);
const valuesButtonData = data.filter(
  (item) => item.link !== "/about-us/values"
);
const cultureButtonData = data.filter(
  (item) => item.link !== "/about-us/culture"
);

export {
  missionButtonData,
  purposeButtonData,
  valuesButtonData,
  cultureButtonData,
};

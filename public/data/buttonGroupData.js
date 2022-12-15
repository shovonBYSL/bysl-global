const data = [
  {
    id: 0,
    title: "Mission",
    link: "/about/mission",
  },
  {
    id: 1,
    title: "Purpose",
    link: "/about/purpose",
  },
  {
    id: 2,
    title: "Values",
    link: "/about/values",
  },
  {
    id: 3,
    title: "Culture",
    link: "/about/culture",
  },
];

const missionButtonData = data.filter((item) => item.link !== "/about/mission");
const purposeButtonData = data.filter((item) => item.link !== "/about/purpose");
const valuesButtonData = data.filter((item) => item.link !== "/about/values");
const cultureButtonData = data.filter((item) => item.link !== "/about/culture");

export {
  missionButtonData,
  purposeButtonData,
  valuesButtonData,
  cultureButtonData,
};

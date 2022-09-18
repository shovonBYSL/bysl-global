// service

const getItem = () => {
  if (
    typeof window !== "undefined" &&
    sessionStorage.hasOwnProperty("serviceId")
  ) {
    return JSON.parse(sessionStorage.getItem("serviceId"));
  } else return [];
};

const setItem = (param) =>
  sessionStorage.setItem("serviceId", JSON.stringify(param));

// legal
const getLegalState = () => {
  if (
    typeof window !== "undefined" &&
    sessionStorage.hasOwnProperty("legalId")
  ) {
    return JSON.parse(sessionStorage.getItem("legalId"));
  } else return [];
};

const setLegalState = (param) =>
  sessionStorage.setItem("legalId", JSON.stringify(param));

// navbar state
const getState = () => {
  if (
    typeof window !== "undefined" &&
    sessionStorage.hasOwnProperty("navState")
  ) {
    return JSON.parse(sessionStorage.getItem("navState"));
  } else return [];
};

const setState = (param) =>
  sessionStorage.setItem("navState", JSON.stringify(param));

// side drawer state
const getSideDrawer = () => {
  if (
    typeof window !== "undefined" &&
    sessionStorage.hasOwnProperty("sideDrawer")
  ) {
    return JSON.parse(sessionStorage.getItem("sideDrawer"));
  } else return [];
};

const setSideDrawer = (param) =>
  sessionStorage.setItem("sideDrawer", JSON.stringify(param));

export {
  getItem,
  setItem,
  getState,
  setState,
  getLegalState,
  setLegalState,
  getSideDrawer,
  setSideDrawer,
};

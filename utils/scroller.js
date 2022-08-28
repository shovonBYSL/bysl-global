const ScrollCenterCommon = (id, offset) => {
  document.getElementById(id).scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });

  const position =
    document.getElementById(id).getBoundingClientRect().top +
    window.pageYOffset -
    offset;
  window.scrollTo({ top: position, behavior: "smooth" });
};

const scrollCenter = (id) => {
  ScrollCenterCommon(id, 150);
};

const supplyScroll = (id) => {
  ScrollCenterCommon(id, 180);
};

const educationScroll = (id) => {
  ScrollCenterCommon(id, 190);
};

const scrollCenterTop = (id) => {
  ScrollCenterCommon(id, 110);
};

const marketingScroll = (id) => {
  ScrollCenterCommon(id, 70);
};

const scrollYFocus = (id) => {
  const position =
    document.getElementById(id).getBoundingClientRect().top +
    window.pageYOffset -
    70;
  window.scrollTo({ top: position, behavior: "smooth" });
};

export {
  scrollCenter,
  scrollYFocus,
  scrollCenterTop,
  marketingScroll,
  supplyScroll,
  educationScroll,
};

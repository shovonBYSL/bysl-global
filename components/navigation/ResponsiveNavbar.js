import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import NavbarSmall from "./NavbarSmall";
import { getPath } from "../../utils/paths";
import { getState, setState } from "../../utils/sessionStorage";

const ResponsiveNavbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const navState = getState();

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setState(true);
      setColorchange(true);
    } else {
      setState(false);
      setColorchange(false);
    }
  };

  useEffect(() => {
    setColorchange(
      typeof window !== "undefined" && window.scrollY >= 80 ? true : false
    );
    window.addEventListener("scroll", changeNavbarColor);
  }, [colorChange, navState]);

  const arVrPath = getPath("/technologies/ar-vr");
  const investmentPath = getPath("/investments");
  const resourcesPath = getPath("/resources");
  const foodAndBeveragePath = getPath("/solutions/food-and-beverage");
  const healthcarePath = getPath("/solutions/healthcare");
  const supplyChainSolutionsPath = getPath(
    "/solutions/supply-chain-and-logistics"
  );

  const specificPath =
    arVrPath ||
    investmentPath ||
    resourcesPath ||
    healthcarePath ||
    foodAndBeveragePath ||
    supplyChainSolutionsPath;

  return (
    <div className={`pb-14 lg:pb-[100px] ${specificPath && "!pb-0"}`}>
      <div className="hidden lg:block">
        <Navbar colorChange={colorChange} specificPath={specificPath} />
      </div>
      <div className="block lg:hidden">
        <NavbarSmall colorChange={colorChange} specificPath={specificPath} />
      </div>
    </div>
  );
};

export default ResponsiveNavbar;

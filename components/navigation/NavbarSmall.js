import Link from "next/link";
import { useState } from "react";

import { BYSLMainLogo, BYSLWhiteLogo } from "../svg/BYSLLogo";
import { MenubarRGB, MenubarWhite } from "../svg/Menubar";
import SideDrawer from "./SideDrawer";

const NavbarSmall = ({ colorChange, specificPath }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <div
        className={`h-14 shadow ${
          !colorChange && specificPath
            ? "backdrop-blur-sm bg-white/10"
            : "bg-white"
        } px-4 sm:px-8 flex items-center fixed w-full z-[100]`}
      >
        <div
          className="h-4 w-5 sm:h-5 sm:w-7 absolute"
          onClick={() => setShowDrawer(!showDrawer)}
        >
          {!colorChange && specificPath ? <MenubarWhite /> : <MenubarRGB />}
        </div>
        <Link passHref href="/">
          <div className="w-max mx-auto flex justify-center items-center">
            {!colorChange && specificPath ? (
              <BYSLWhiteLogo />
            ) : (
              <BYSLMainLogo />
            )}
          </div>
        </Link>
      </div>
      <SideDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </>
  );
};

export default NavbarSmall;

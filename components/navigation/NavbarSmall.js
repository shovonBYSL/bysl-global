import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import SideDrawer from "./SideDrawer";

const NavbarSmall = ({ colorChange, specificPath }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <div
        className={`h-14 bg-white shadow ${
          !colorChange && specificPath
            ? "backdrop-blur-sm bg-white/10 "
            : "bg-white"
        } px-4 sm:px-8 flex items-center fixed w-full z-[100]`}
      >
        <div
          className="h-4 w-5 sm:h-5 sm:w-7 absolute"
          onClick={() => setShowDrawer(!showDrawer)}
          // onBlur={() => setShowDrawer(false)}
        >
          <Image
            src={
              !colorChange && specificPath
                ? "/images/menuBar_white.svg"
                : "/images/menuBar.svg"
            }
            layout="fill"
            alt=""
          />
        </div>
        <Link passHref href="/">
          <div className="w-max mx-auto flex justify-center items-center">
            <Image
              src={
                !colorChange && specificPath
                  ? "/images/logo_light.svg"
                  : "/images/logo.svg"
              }
              alt=""
              height={28}
              width={57}
            />
          </div>
        </Link>
      </div>
      <SideDrawer showDrawer={showDrawer} />
    </>
  );
};

export default NavbarSmall;

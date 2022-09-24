import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";

import Button from "../shared/buttons/Button";
import { TextGradient } from "../shared/SharedTextgroups";
import { navbars } from "../../public/data/navigation/navbarData";
import { setItem } from "../../utils/sessionStorage";
import { BYSLMainLogo, BYSLWhiteLogo } from "../svg/BYSLLogo";

const Navbar = ({ colorChange, specificPath }) => {
  const router = useRouter();
  const handleMouseOver = () => {
    const nav = document.querySelector(".sol-nav");
    if (nav) {
      nav.style.display = "none";
    }
  };

  const handleClick = (id) => {
    console.log("click", id);
    setItem(id);
    window.location.pathname === "/service" &&
      Router.reload(window.location.pathname);
  };

  // breaking navbar code into components start

  // navbar logo
  const NavbarLogo = () => {
    return (
      <Link passHref href="/">
        <a className="hover:cursor-pointer">
          {/* <Image
            src={
              !colorChange && specificPath
                ? "/images/logo_light.svg"
                : "/images/logo.svg"
            }
            layout="fill"
            priority
            alt=""
          /> */}
          {!colorChange && specificPath ? (
            <div className="h-7 lg:h-8 xl:h-10 lg:mt-1 xl:mt-0">
              <BYSLWhiteLogo />
            </div>
          ) : (
            <div className="h-7 lg:h-8 xl:h-10 lg:mt-1 xl:mt-0">
              <BYSLMainLogo />
            </div>
          )}
        </a>
      </Link>
    );
  };

  // navbar items
  const NavItems = ({ data }) => {
    const { title, link, dropdowns } = data;

    return (
      <button
        onMouseOver={handleMouseOver}
        className={`${
          !colorChange && specificPath
            ? "text-white hover:text-white/80"
            : "text-gray-600 hover:text-gray-800/90"
        } text-sm lg:text-base font-normal py-2 px-4 rounded inline-flex items-center transition duration-100`}
      >
        <span
          className={`mr-1 transition duration-300 ${
            router.asPath === link &&
            "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
          } ${!dropdowns && "pb-5"}`}
        >
          {dropdowns ? (
            title
          ) : (
            <Link href={link} passHref>
              <a>{title}</a>
            </Link>
          )}
        </span>
      </button>
    );
  };

  // dropdown items
  const DropdownItems = ({ data }) => {
    const { id, title, subTitle, link } = data;

    return (
      <Link passHref href={link}>
        <a
          onClick={() => link === "/services#it-services" && handleClick(id)}
          className={`h-full w-full hover:bg-[#E7F0F9] group shadow-[0px_0px_10px_1px_rgba(112,128,176,0.1)] hover:shadow-none border-transparent p-4 rounded-lg cursor-pointer transition-all duration-500 ${
            link !== "/services#it-services" &&
            router.asPath === link &&
            "text-white bg-gradient-to-r from-blue-900 to-blue-700"
          }`}
        >
          <div
            className={`flex items-center justify-between ${
              !subTitle && "h-12"
            }`}
          >
            <p
              className={`w-full ${
                link !== "/services#it-services" && router.asPath !== link
                  ? "text-gray-800"
                  : ""
              }`}
            >
              {title}
            </p>
            <Image
              src={
                link !== "/services#it-services" && router.asPath === link
                  ? "/images/navIconRightWhite.svg"
                  : "/images/navIconRight.svg"
              }
              alt=""
              height={18}
              width={18}
            />
          </div>
          {subTitle && (
            <p
              className={`lg:w-[90%] 2xl:w-[85%] font-normal text-xs mt-2 ${
                link !== "/services#it-services" && router.asPath === link
                  ? "text-white/40"
                  : "text-gray-400"
              }`}
            >
              {subTitle}
            </p>
          )}
        </a>
      </Link>
    );
  };

  // breaking navbar code into components end

  return (
    <div className="relative">
      <div
        className={`z-50 h-max pt-5 flex items-center fixed w-full transition-all duration-500 ${
          colorChange
            ? "bg-white shadow-[0px_-5px_20px_#d7d7d7]"
            : specificPath
            ? "backdrop-blur-sm bg-white/10 "
            : "bg-transparent !pt-10"
        }`}
      >
        <div className="box flex justify-between items-start w-full">
          <NavbarLogo />
          <div className="flex items-center">
            {navbars.map((item) => {
              const { id, title, dropdowns } = item;

              return (
                <div key={id} id="nav" className="inline-block">
                  <NavItems data={item} />
                  {dropdowns && (
                    <div className="pt-5 bg-transparent">
                      <div className="shadow-lg shadow-[#7080B0]/10 py-12 xl:pb-[72px] absolute left-0 top-22 w-full bg-white rounded-b-lg navbar text-gray-700">
                        <p className="block box font-bold text-2xl pb-8">
                          <TextGradient text={title} />
                        </p>
                        <div className="box grid grid-cols-3 xl:grid-cols-4 gap-6">
                          {dropdowns.map((dropdownItem) => (
                            <DropdownItems
                              key={dropdownItem.id}
                              data={dropdownItem}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <Button title="Contact Us" link="contact-us" px={48} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

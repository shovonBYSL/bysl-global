import Link from "next/link";
import { useRouter } from "next/router";

// components
import Button from "../shared/buttons/Button";
import { TextGradient } from "../shared/SharedTextgroups";

// data
import { navbars } from "../../public/data/navigation/navbarData";
import { BYSLMainLogo, BYSLWhiteLogo } from "../svg/BYSLLogo";
import { ArrowRight, ArrowRightWhite } from "../svg/Arrows";

// utility functions
import { setItem } from "../../utils/sessionStorage";
import { handleMouseOver } from "../../utils/scroller";

const Navbar = ({ colorChange, specificPath }) => {
  const router = useRouter();

  // breaking navbar code into components start
  // navbar logo
  const NavbarLogo = () => {
    return (
      <Link passHref href="/">
        <a className="hover:cursor-pointer">
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
            : "text-gray-600 hover:text-blue-900"
        } text-sm lg:text-base font-normal py-2 px-4 rounded inline-flex items-center transition duration-100`}
      >
        <div
          className={`mr-1 transition duration-300 ${
            router.pathname.startsWith(`/${title.toLowerCase()}`) &&
            "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
          } ${!dropdowns && "pb-5"}`}
        >
          {dropdowns ? (
            <p>{title}</p>
          ) : (
            <Link href={link} passHref>
              <a>{title}</a>
            </Link>
          )}
          <span
            className={`block h-[2px] w-1/2 mx-auto mt-1 ${
              router.pathname.startsWith(`/${title.toLowerCase()}`)
                ? "bg-gradient-to-r from-blue-900 to-blue-700"
                : "bg-transparent"
            }`}
          />
        </div>
      </button>
    );
  };

  // dropdown items
  const DropdownItems = ({ data }) => {
    const { id, title, subTitle, link } = data;

    return (
      <Link passHref href={link}>
        <a
          onClick={() => link === "/services#it-services" && setItem(id)}
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

            {link !== "/services#it-services" && router.asPath === link ? (
              <ArrowRightWhite />
            ) : (
              <ArrowRight />
            )}
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
            ? "backdrop-blur-sm bg-white/10"
            : "bg-transparent !pt-10"
        }`}
      >
        <div className="box flex justify-between items-start w-full">
          <NavbarLogo />
          <div className="flex items-center">
            {navbars.map((item) => {
              const { id, title, dropdowns } = item;

              return (
                <div key={id} id="nav" className="inline-block group">
                  <NavItems data={item} />
                  {dropdowns && (
                    <div className="pt-5 bg-transparent transition-all duration-500">
                      <div className="shadow-lg shadow-[#7080B0]/10 py-12 xl:pb-[72px] absolute left-0 top-22 w-full bg-white rounded-b-lg navbar text-gray-700 hidden group-hover:block transition-all duration-300">
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

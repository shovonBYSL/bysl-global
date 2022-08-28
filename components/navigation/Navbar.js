import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../shared/buttons/Button";
import { TextGradient } from "../shared/SharedTextgroups";
import { navbars } from "../../public/data/navigation/navbarData";

const Navbar = ({ colorChange, specificPath }) => {
  const router = useRouter();

  // breaking navbar code into components start

  // navbar logo
  const NavbarLogo = () => {
    return (
      <Link passHref href="/">
        <div className="relative h-10 w-16 xl:w-20 hover:cursor-pointer">
          <Image
            src={
              !colorChange && specificPath
                ? "/images/logo_light.svg"
                : "/images/logo.svg"
            }
            layout="fill"
            alt=""
          />
        </div>
      </Link>
    );
  };

  // navbar items
  const NavItems = ({ data }) => {
    const { title, link, dropdowns } = data;

    return (
      <button
        className={`${
          !colorChange && specificPath ? "text-white" : "text-gray-500"
        } text-sm lg:text-base font-normal py-2 px-4 xl:px-6 rounded inline-flex items-center`}
      >
        <span
          className={`mr-1 hover:text-gray-700 transition duration-300 ${
            router.asPath === link &&
            "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
          } ${!dropdowns && "pb-5"}`}
        >
          {dropdowns ? (
            title
          ) : (
            <Link href={link} passHref>
              {title}
            </Link>
          )}
        </span>
      </button>
    );
  };

  // dropdown items
  const DropdownItems = ({ data }) => {
    const { title, subTitle, link } = data;

    return (
      <Link passHref href={link}>
        <div
          className={`h-full w-full hover:bg-[#E7F0F9] group shadow-[0px_0px_10px_1px_rgba(112,128,176,0.1)] border-transparent p-4 rounded-lg cursor-pointer transition-all duration-500 ${
            router.asPath === link &&
            "text-white bg-gradient-to-r from-blue-900 to-blue-700"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`${router.asPath !== link && "text-gray-800"}`}>
              {title}
            </p>
            <Image
              src={
                router.asPath === link
                  ? "/images/navIconRightWhite.svg"
                  : "/images/navIconRight.svg"
              }
              alt=""
              height={18}
              width={18}
            />
          </div>
          <p
            className={`lg:w-[90%] 2xl:w-4/5 font-normal text-xs ${
              router.asPath === link ? "text-white/40" : "text-[#393e50]/40"
            }`}
          >
            {subTitle}
          </p>
        </div>
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
            : "bg-transparent mt-5"
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
                      <div className="shadow-lg shadow-[#7080B0]/10 py-12 xl:pb-[72px] absolute left-0 top-20 w-full bg-white rounded-b-lg navbar text-gray-700">
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

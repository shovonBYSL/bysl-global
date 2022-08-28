import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Accordion, AccordionBody } from "@material-tailwind/react";

import Button from "../shared/buttons/Button";
import { navbars } from "../../public/data/navigation/navbarData";

const SideDrawer = ({ showDrawer }) => {
  const router = useRouter();
  const [open, setOpen] = useState("");

  const handleOpen = (value) => {
    setOpen(open === value ? "" : value);
  };

  useEffect(() => {
    showDrawer
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [showDrawer]);

  return (
    <div
      className={`invisible transition-all duration-1000 w-screen h-screen overflow-hidden fixed top-14 left-0 z-50 
      ${showDrawer && "bg-[#c7c7c7]/40 !visible"}`}
    >
      <div
        className={`w-60 xxs:w-[280px] h-full translate-x-[-100%] transition-all duration-1000 
        ${showDrawer && "translate-x-[0%]"}`}
      >
        <div className="flex items-end justify-center bg-[url('/images/drawer-bg.svg')] bg-no-repeat bg-center bg-cover h-[100px]">
          <p className="text-white text-center font-bold mx-6 xxs:mx-8 mb-6">
            BYSL Global Technology Group
          </p>
        </div>
        <div className="bg-white h-[calc(100vh-156px)] overflow-y-auto px-4 py-3 flex flex-col">
          {navbars.map(({ id, title, link, dropdowns }) => {
            return (
              <Accordion
                key={id}
                open={open === id}
                onClick={() => handleOpen(id)}
              >
                <div className="flex justify-between py-3">
                  <p
                    className={`text-sm font-medium w-full ${
                      router.pathname === link
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
                        : "text-gray-800"
                    }`}
                  >
                    {dropdowns ? (
                      title
                    ) : (
                      <Link href={link} passHref>
                        <span className="block">{title}</span>
                      </Link>
                    )}
                  </p>
                  {dropdowns && (
                    <IoIosArrowDown
                      className={`text-gray-800 text-sm font-medium ${
                        open === id && "rotate-180"
                      }`}
                    />
                  )}
                </div>
                <AccordionBody className="py-0">
                  <div className="flex flex-col gap-4 border-l border-gray-300 ">
                    {dropdowns?.map(({ id, title, link }) => {
                      return (
                        <div key={id} className="ml-3">
                          <Link href={link} passHref>
                            <p
                              className={`text-sm font-medium ${
                                router.pathname === link
                                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
                                  : "text-gray-300"
                              }`}
                            >
                              {title}
                            </p>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </AccordionBody>
              </Accordion>
            );
          })}
          <div className="flex justify-center pt-3 pb-6">
            <Button link="contact-us" title="Contact Us" px={48} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;

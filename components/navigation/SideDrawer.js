import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Accordion, AccordionBody } from "@material-tailwind/react";

import Button from "../shared/buttons/Button";
import { navbars } from "../../public/data/navigation/navbarData";
import { getItem, setItem } from "../../utils/sessionStorage";

const SideDrawer = ({ showDrawer, setShowDrawer }) => {
  const router = useRouter();
  // const serviceId = getItem();
  const [open, setOpen] = useState("");

  const handleOpen = (value) => {
    setOpen(open === value ? "" : value);
  };

  const handleClick = (id) => {
    setItem(id);
    (router.pathname === "/services" || "/investments") && setShowDrawer(false);
  };

  useEffect(() => {
    showDrawer
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");

    navbars.map((item) => {
      item?.dropdowns?.find((dropItems) => {
        router.asPath === dropItems.link && setOpen(item.id);
      });
    });

    window.addEventListener('resize', function(){
      if(window.innerWidth >= 1024){
        document.body.style.overflow = "auto";
      }
    })
  }, [showDrawer]);

  return (
    <>
      <div
        onClick={() => setShowDrawer(false)}
        className={`invisible transition-all duration-1000 w-screen h-screen overflow-hidden fixed top-14 left-0 z-50 
      ${showDrawer && "bg-[#c7c7c7]/40 !visible"}`}
      />
      <div
        className={`fixed top-14 left-0 z-[99] side-drawer h-full w-60 xxs:w-[280px] translate-x-[-100%] transition-all duration-1000 ${
          showDrawer && "translate-x-[0%]"
        }`}
      >
        <div className="flex items-end justify-center bg-[url('/images/drawer-bg.webp')] bg-no-repeat bg-center bg-cover h-[100px]">
          <p className="text-white text-center font-bold mx-6 xxs:mx-8 mb-6">
            BYSL Global Technology Group
          </p>
        </div>
        <div className="bg-white h-[calc(100vh-156px)] overflow-y-auto px-4 py-3 flex flex-col text-start">
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
                    } `}
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
                  <div className="flex flex-col gap-4 border-l ml-3 border-gray-300 ">
                    {dropdowns?.map(({ id, title, link }) => {
                      return (
                        <div key={id} className="ml-5">
                          <Link href={link} passHref>
                            <p
                              onClick={() =>
                                (link === "/services#it-services" ||
                                  "/investments#marketplace-platform" ||
                                  "/investments#it-platform" ||
                                  "/investments") &&
                                handleClick(id)
                              }
                              className={`text-sm font-medium ${
                                router.asPath === link &&
                                router.pathname !== "/services"
                                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
                                  : "text-gray-400"
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
          <div className="flex justify-center pt-3 pb-16">
            <Button link="contact-us" title="Contact Us" px={48} xs />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;

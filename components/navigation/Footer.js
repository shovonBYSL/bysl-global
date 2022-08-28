import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { ImFacebook, ImLinkedin2, ImTwitter } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";

import ButtonWhite from "../shared/buttons/ButtonWhite";
import { setItem, setLegalState } from "../../utils/sessionStorage";
import {
  footerBottomData,
  footerData,
} from "../../public/data/navigation/footerData";

const Footer = () => {
  const handleClick = (id) => {
    setItem(id);
    window.location.pathname === "/service" &&
      Router.reload(window.location.pathname);
  };

  const handleLegal = (id) => {
    setLegalState(id);
    window.location.pathname === "/legal" &&
      Router.reload(window.location.pathname);
  };

  const Items = ({ title, data }) => {
    const customItems =
      title !== "Solutions" && title !== "Technologies" && title !== "About Us";

    return (
      <>
        <p
          className={`text-white mb-6 ${title === "Company" && "mt-10"} ${
            customItems && "xxxs:text-end sm:text-start"
          } font-semibold`}
        >
          {title}
        </p>
        {data?.map(({ id, name, path }) => {
          return (
            <Link passHref key={id} href={path}>
              <span
                onClick={() => title === "Services" && handleClick(id)}
                className={`block hover:cursor-pointer text-xs xxs:text-sm leading-5 mb-2 lg:mb-4 text-white/60 hover:text-white transition duration-300 ${
                  customItems && "xxxs:text-end sm:text-start"
                }`}
              >
                {name}
              </span>
            </Link>
          );
        })}
      </>
    );
  };

  const Career = () => {
    return (
      <>
        <p className="text-white/60 font-medium my-6 text-xs xxs:text-sm">
          More Than Just A Job.
          <br /> We Offer An Opportunity To Grow.
        </p>
        <div className="w-max mx-auto lg:mx-0">
          <ButtonWhite link="careers" title="Careers" px={72} />
        </div>
      </>
    );
  };

  return (
    <div className="bg-gray-800">
      <div className="box pt-16 pb-8">
        <div className="grid grid-cols-6 lg:grid-cols-5 xl:grid-cols-6 gap-4 gap-y-10 3xl:gap-14">
          <div className="col-span-6 xl:col-span-1">
            <Link passHref href="/">
              <div className="h-7 md:h-10 w-16 md:w-20 mx-auto xl:mx-0 relative hover:cursor-pointer">
                <Image src="/images/logo_light.svg" layout="fill" alt="" />
              </div>
            </Link>
            <div className="hidden xl:block">
              <Career />
            </div>
          </div>
          {footerData?.map(({ id, title, items, title2, items2 }) => (
            <div
              key={id}
              className="col-span-6 xxxs:col-span-3 sm:col-span-2 lg:col-span-1"
            >
              <Items title={title} data={items} />
              <div className="hidden lg:block">
                {title2 && <Items title={title2} data={items2} />}
              </div>
            </div>
          ))}
          <div className="lg:hidden col-span-3 sm:col-span-2">
            {footerData?.map(({ id, title2, items2 }) => (
              <div
                key={id}
                className="col-span-6 xxxs:col-span-3 sm:col-span-2"
              >
                {title2 && <Items title={title2} data={items2} />}
              </div>
            ))}
          </div>

          <div className="xl:hidden col-span-6 w-max mx-auto text-center">
            <Career />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between mt-10 pt-5 border-t gap-y-6 border-white/40">
          <div className="flex gap-x-6 gap-y-2 xl:order-3 flex-wrap justify-center">
            {footerBottomData.map(({ id, name, path }) => {
              return (
                <Link passHref key={id} href={path}>
                  <p
                    onClick={() => handleLegal(id)}
                    className="text-white/40 text-sm hover:cursor-pointer hover:text-white"
                  >
                    {name}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="flex justify-center md:justify-start gap-6 md:gap-4 xl:gap-6">
            <Link passHref href="/">
              <a>
                <ImFacebook className="text-lg text-white/40 hover:cursor-pointer hover:text-blue-700 transition-all duration-150 " />
              </a>
            </Link>
            <Link passHref href="/">
              <a>
                <ImLinkedin2 className="text-lg text-white/40 hover:cursor-pointer hover:text-blue-900 transition-all duration-150" />
              </a>
            </Link>
            <Link passHref href="/">
              <a>
                <ImTwitter className="text-lg text-white/40 hover:cursor-pointer hover:text-blue-700 transition-all duration-150" />
              </a>
            </Link>
            <Link passHref href="/">
              <a>
                <FaPinterestP className="text-lg text-white/40 hover:cursor-pointer hover:text-pink-800 transition-all duration-150" />
              </a>
            </Link>
          </div>
          <p className="text-white/40 text-xs xxs:text-sm mb-2 lg:mb-0 text-center">
            © 2022 BYSL Global Technology Group. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

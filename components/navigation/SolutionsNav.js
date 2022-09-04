import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { TextGradient } from "../shared/SharedTextgroups";
import { navbars } from "../../public/data/navigation/navbarData";

const SolutionsNav = () => {
  const router = useRouter();

  return (
    <div className="sol-nav shadow-lg shadow-[#7080B0]/10 py-12 xl:pb-[72px] fixed left-0 top-20 w-full bg-white rounded-b-lg  text-gray-700 z-50">
      <p className="block box font-bold text-2xl pb-8">
        <TextGradient text="Solutions" />
      </p>
      <div className="box grid grid-cols-3 xl:grid-cols-4 gap-6">
        {navbars[0].dropdowns.map(({ id, title, subTitle, link }) => (
          <Link key={id} passHref href={link}>
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
        ))}
      </div>
    </div>
  );
};

export default SolutionsNav;

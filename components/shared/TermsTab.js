import { useRouter } from "next/router";

import { legalTabData } from "../../public/data/legalPagesData";

const TermsTab = () => {
  const router = useRouter();

  return (
    <div className="flex flex-nowrap md:flex-col gap-6 mb-6 md:mb-0 md:mt-6 w-max mx-auto overflow-hidden">
      {legalTabData.map(({ id, name, path }) => (
        <p
          key={id}
          className={`w-max hover:cursor-pointer hover:text-blue-700 transition-all duration-150 text-sm lg:text-base ${
            router.pathname === path
              ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 text-lg font-extrabold"
              : "text-[#808D9E]"
          }`}
        >
          {name}
        </p>
      ))}
    </div>
  );
};

export default TermsTab;

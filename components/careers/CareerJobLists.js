import { format } from "date-fns";
import Link from "next/link";

const CareerJobLists = ({ data }) => {
  return (
    <div>
      {data.length > 0 ? (
        <div className="max-w-[1076px] mt-10 lg:mt-16 mx-auto grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 gap-x-4 lg:gap-x-0">
          {data.map(
            ({
              id,
              slug,
              job_title,
              years_of_experiences,
              last_date_of_apply,
              job_type,
            }) => {
              return (
                <div
                  key={id}
                  className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4 py-6 text-xs md:text-sm lg:text-base border-b border-blue-700 lg:hover:bg-[#EDF1F8] transition duration-500"
                >
                  <p className="lg:col-span-3 text-gray-800 font-semibold lg:pl-2.5 pb-2 lg:pb-0 text-sm lg:text-base">
                    {job_title}
                  </p>
                  <p className="lg:col-span-2 text-gray-600 font-medium">
                    {years_of_experiences} Years Experience
                  </p>
                  <p className="lg:col-span-3 text-gray-600 font-medium">
                    Last Date{" "}
                    {format(new Date(last_date_of_apply), "do MMM, y")}
                  </p>
                  <p className="lg:col-span-2 text-gray-600 font-medium">
                    {job_type}
                  </p>
                  <div className="lg:col-span-2 text-gray-600 font-medium w-full">
                    <Link
                      passHref
                      href={`/about/careers/job-description/${slug}`}
                    >
                      <a>
                        <div className="gradient-btn w-full lg:w-max h-max mx-auto lg:mx-0 text-center rounded-lg text-white text-sm font-semibold px-8 xl:px-[42px] py-2 xl:py-2.5 hover:cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:to-blue-800  from-blue-900 to-blue-700">
                          Apply Now
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
      ) : (
        <p className="shadow-[0px_4px_15px_0px_#F1F0F0] text-xl text-gray-600 font-semibold mt-10 h-32 max-w-[1076px] mx-auto rounded-lg bg-white flex justify-center items-center">
          No Positions Found
        </p>
      )}
    </div>
  );
};

export default CareerJobLists;

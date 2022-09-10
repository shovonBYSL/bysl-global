import Link from "next/link";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import {
  departmentList,
  jobList,
  positionTypeList,
} from "../../public/data/careersData";

const CareerJobCirculars = () => {
  const [data, setData] = useState(jobList);
  const [filteredData, setFilteredData] = useState(data);

  const [department, setDepartment] = useState("Departments");
  const [position, setPosition] = useState("Position Type");
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [positionOpen, setPositionOpen] = useState(false);

  const matchedData = data.filter(
    (item) =>
      (item.department == department ||
        department == "Departments" ||
        department == "All") &&
      (item.designation == position ||
        position == "Position Type" ||
        position == "All")
  );

  const handleDepartment = (item) => {
    setDepartment(item);
    setDepartmentOpen(false);
  };

  const handlePosition = (item) => {
    setPosition(item);
    setPositionOpen(false);
  };

  useEffect(() => {
    setFilteredData(matchedData);
  }, [position, department]);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedJob = data.filter((item) =>
      item.position.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(matchedJob);
    setDepartment("Departments");
    setPosition("Position Type");
  };

  const JobCircularList = ({ data }) => {
    const { url, position, experience, lastDate, employmentType } = data;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4 py-6 text-xs md:text-sm lg:text-base border-b border-blue-700 lg:hover:bg-[#EDF1F8] transition duration-500">
        <p className="lg:col-span-3 text-gray-800 font-semibold lg:pl-2.5 pb-2 lg:pb-0 text-sm lg:text-base">
          {position}
        </p>
        <p className="lg:col-span-2 text-gray-400 font-medium">{experience}</p>
        <p className="lg:col-span-3 text-gray-400 font-medium">
          Last Date {lastDate}
        </p>
        <p className="lg:col-span-2 text-gray-400 font-medium">
          {employmentType}
        </p>
        <div className="lg:col-span-2 text-gray-400 font-medium w-full">
          <Link passHref href={`/careers/job-description/${url}`}>
            <a>
              <div className="w-full lg:w-max h-max mx-auto lg:mx-0 text-center rounded-lg text-white text-sm font-semibold px-8 xl:px-[42px] py-2 xl:py-2.5 hover:cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:to-blue-800  from-blue-900 to-blue-700">
                Apply Now
              </div>
            </a>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="max-w-[856px] mx-auto">
        <div className="relative max-w-[416px] mx-auto">
          <input
            onChange={(e) => handleSearch(e)}
            required
            name="phone"
            type="text"
            placeholder="Search Careers"
            className=" bg-white text-[10px] xs:text-xs lg:text-sm w-full pr-10 px-1.5 py-2.5 sm:p-3 lg:p-4 rounded-lg lg:rounded-[11px] text-gray-600 focus:outline-gray-500/10 shadow-[0px_4px_15px_0px_#F1F0F0]"
          />
          <RiSearchLine className="flex text-2xl md:text-3xl lg:text-4xl absolute inset-y-0 right-0 pt-2 xs:pt-3 md:pt-3.5 lg:pt-4 items-center pr-3 pointer-events-none text-gray-500" />
        </div>

        <div className="flex gap-4 lg:gap-6 mt-6">
          <button
            onBlur={() => setDepartmentOpen(false)}
            className="w-full relative text-start"
          >
            <div
              onClick={() => setDepartmentOpen(!departmentOpen)}
              className={`w-full flex justify-between items-center bg-white text-[10px] xs:text-xs lg:text-sm px-1.5 py-2.5 sm:p-3 lg:px-5 lg:py-4  ${
                departmentOpen
                  ? "rounded-t-[11px]"
                  : "rounded-lg lg:rounded-[11px]"
              } text-gray-500 focus:outline-gray-500/10 shadow-[0px_4px_15px_0px_#F1F0F0] hover:cursor-pointer `}
            >
              <span className="text-gray-600">{department} </span>
              <MdKeyboardArrowDown
                className={`scale-150 xl:scale-[1.7] ${
                  departmentOpen && "-rotate-180 transition duration-700"
                }`}
              />
            </div>
            {departmentOpen && (
              <div className="z-20 careerScrollbar shadow-xl lg:shadow-[-3px_10px_15px_0px_#dcdcdc] h-max max-h-[225px] divide-y divide-solid divide-gray-200/50 w-full bg-white absolute top-8 lg:top-12 rounded-b-[11px] left-0 px-5">
                {departmentList.map((item, i) => (
                  <p
                    key={i}
                    onClick={() => handleDepartment(item)}
                    className="py-3 text-xs lg:text-sm text-gray-800 hover:cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </button>

          <button
            onBlur={() => setPositionOpen(false)}
            className="w-full relative text-start"
          >
            <div
              onClick={() => setPositionOpen(!positionOpen)}
              className={`flex justify-between items-center bg-white text-[10px] xs:text-xs lg:text-sm px-1.5 py-2.5 sm:p-3 lg:px-5 lg:py-4 ${
                positionOpen
                  ? "rounded-t-[11px]"
                  : "rounded-lg lg:rounded-[11px]"
              } text-gray-500 focus:outline-gray-500/10 shadow-[0px_4px_15px_0px_#F1F0F0] hover:cursor-pointer `}
            >
              <span className="text-gray-600">{position} </span>
              <MdKeyboardArrowDown
                className={`scale-150 xl:scale-[1.7] ${
                  positionOpen && "-rotate-180 transition duration-1000"
                }`}
              />
            </div>
            {positionOpen && (
              <div className="z-20 careerScrollbar shadow-xl lg:shadow-[-3px_10px_15px_0px_#dcdcdc] h-max max-h-[225px] divide-y divide-solid divide-gray-200/50 w-full bg-white absolute top-8 lg:top-12 rounded-b-[11px] left-0 px-5">
                {positionTypeList.map((item, i) => (
                  <p
                    key={i}
                    onClick={() => handlePosition(item)}
                    className="py-3 text-xs lg:text-sm text-gray-800 hover:cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </button>
        </div>
      </div>

      {filteredData.length > 0 ? (
        <div className="max-w-[1076px] mt-10 lg:mt-16 mx-auto grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 gap-x-4 lg:gap-x-0">
          {filteredData.map((item) => (
            <JobCircularList key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <p className="shadow-[0px_4px_15px_0px_#F1F0F0] text-xl text-gray-500 font-semibold mt-10 h-32 max-w-[1076px] mx-auto rounded-lg bg-white flex justify-center items-center">
          No Data Found
        </p>
      )}
    </div>
  );
};

export default CareerJobCirculars;

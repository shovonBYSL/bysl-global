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

  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [department, setDepartment] = useState("Departments");
  const [positionOpen, setPositionOpen] = useState(false);
  const [position, setPosition] = useState("Position Type");

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
    const { id, position, experience, lastDate, jobType } = data;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-10 items-center gap-4 lg:gap-6 py-6 border-b border-blue-700 lg:hover:bg-[#EDF1F8] transition duration-500">
        <p className="lg:col-span-3 text-gray-800 font-semibold pl-2.5">
          {position}
        </p>
        <p className="lg:col-span-2 text-gray-400 font-medium">{experience}</p>
        <p className="lg:col-span-2 text-gray-400 font-medium">
          Last Date {lastDate}
        </p>
        <p className="text-gray-400 font-medium">{jobType}</p>
        <div className="lg:col-span-2 text-gray-400 font-medium w-full">
          <Link passHref href={`/careers/job-description/${id}`}>
            <div className="w-full lg:w-max h-max mx-auto lg:mx-0 text-center rounded-lg text-white text-sm font-semibold px-8 xl:px-[42px] py-2 xl:py-2.5 hover:cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:to-blue-800  from-blue-900 to-blue-700">
              Apply Now
            </div>
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
            className=" bg-white text-xs lg:text-sm w-full pr-10 px-1.5 py-2 lg:p-4 rounded-lg lg:rounded-[11px] text-gray-500 focus:outline-gray-500/10 shadow-[0px_4px_15px_0px_#F1F0F0]"
          />
          <RiSearchLine className="flex text-3xl lg:text-4xl absolute inset-y-0 right-0 lg:pt-4 items-center pr-3 pointer-events-none text-gray-500" />
        </div>
        <div className="flex gap-6 mt-6">
          <div className="w-full relative">
            <div
              onClick={() => setDepartmentOpen(!departmentOpen)}
              className={`flex justify-between items-center bg-white text-xs lg:text-sm px-1.5 py-2 lg:px-5 lg:py-4  ${
                departmentOpen
                  ? "rounded-t-[11px]"
                  : "rounded-lg lg:rounded-[11px]"
              } text-gray-500 focus:outline-gray-500/10 shadow-[0px_4px_15px_0px_#F1F0F0] hover:cursor-pointer `}
            >
              <span>{department} </span>
              <MdKeyboardArrowDown
                className={`text-xl ${
                  departmentOpen && "-rotate-180 transition duration-700"
                }`}
              />
            </div>
            {departmentOpen && (
              <div className="z-20 careerScrollbar shadow-[-3px_10px_15px_0px_#dcdcdc] h-max max-h-[225px] divide-y divide-solid divide-gray-200/50 w-full bg-white absolute top-8 lg:top-12 rounded-b-[11px] left-0 px-5">
                {departmentList.map((item, i) => (
                  <p
                    key={i}
                    onClick={() => handleDepartment(item)}
                    className="py-3 text-sm text-gray-800 hover:cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="w-full relative">
            <div
              onClick={() => setPositionOpen(!positionOpen)}
              // onBlur={() => setPositionOpen(false)}
              className={`flex justify-between items-center bg-white text-xs lg:text-sm px-1.5 py-2 lg:px-5 lg:py-4 ${
                positionOpen
                  ? "rounded-t-[11px]"
                  : "rounded-lg lg:rounded-[11px]"
              } text-gray-500 focus:outline-gray-500/10 shadow-[0px_4px_15px_0px_#F1F0F0] hover:cursor-pointer `}
            >
              <span>{position} </span>
              <MdKeyboardArrowDown
                className={`text-xl ${
                  positionOpen && "-rotate-180 transition duration-1000"
                }`}
              />
            </div>
            {positionOpen && (
              <div className="z-20 careerScrollbar shadow-[-3px_10px_15px_0px_#dcdcdc] h-max max-h-[225px] divide-y divide-solid divide-gray-200/50 w-full bg-white absolute top-8 lg:top-12 rounded-b-[11px] left-0 px-5">
                {positionTypeList.map((item, i) => (
                  <p
                    key={i}
                    onClick={() => handlePosition(item)}
                    className="py-3 text-sm text-gray-800 hover:cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {filteredData.length > 0 ? (
        <div className="max-w-[1076px] mt-10 lg:mt-16 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-0">
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

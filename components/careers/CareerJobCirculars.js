import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import CareerJobLists from "./CareerJobLists";

const CareerJobCirculars = ({
  careersData,
  departmentsData,
  positionsData,
}) => {
  const [filteredData, setFilteredData] = useState(careersData);
  const [department, setDepartment] = useState(0);
  const [position, setPosition] = useState(0);
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [positionOpen, setPositionOpen] = useState(false);

  const departmentList = [
    { id: 0, department_name: "All Departments", order_number: 0 },
    ...departmentsData,
  ];

  const positionTypeList = [
    { id: 0, position_name: "All Positions", order_number: 0 },
    ...positionsData,
  ];

  const matchedData = careersData.filter(
    (item) =>
      (item.department.id == department || department == 0) &&
      (item.position_type.id == position || position == 0)
  );

  const handleDepartment = (item) => {
    setDepartment(item);
    setDepartmentOpen(false);
  };

  const handlePosition = (item) => {
    setPosition(item);
    setPositionOpen(false);
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedJob = careersData.filter((item) =>
      item.job_title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(matchedJob);
    setDepartment(0);
    setPosition(0);
  };

  useEffect(() => {
    setFilteredData(matchedData);
  }, [position, department]);

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
            className=" bg-white text-xs lg:text-sm w-full pr-10 px-1.5 py-2.5 sm:p-3 lg:p-4 rounded-lg lg:rounded-[11px] text-gray-400 focus:outline-gray-500/10 shadow-[0px_4px_15px_0px_#F1F0F0]"
          />
          <RiSearchLine className="flex text-2xl md:text-3xl lg:text-4xl absolute inset-y-0 right-0 pt-2 xs:pt-3 md:pt-3.5 lg:pt-4 items-center pr-3 pointer-events-none text-gray-600" />
        </div>

        <div className="flex gap-4 lg:gap-6 mt-6">
          <button
            onBlur={() => setDepartmentOpen(false)}
            className="w-full relative text-start"
          >
            <div
              onClick={() => setDepartmentOpen(!departmentOpen)}
              className={`w-full flex justify-between items-center bg-white text-xs lg:text-sm px-1.5 py-2.5 sm:p-3 lg:px-5 lg:py-4  ${
                departmentOpen
                  ? "rounded-t-[11px]"
                  : "rounded-lg lg:rounded-[11px]"
              } text-gray-600 focus:outline-gray-500/10 shadow-[0px_4px_15px_0px_#F1F0F0] hover:cursor-pointer `}
            >
              <span className="text-gray-400">
                {
                  departmentList.find((item) => item.id == department)
                    .department_name
                }
              </span>
              <MdKeyboardArrowDown
                className={`scale-150 xl:scale-[1.7] ${
                  departmentOpen && "-rotate-180 transition duration-700"
                }`}
              />
            </div>
            {departmentOpen && (
              <div className="z-20 careerScrollbar shadow-xl lg:shadow-[-3px_10px_15px_0px_#dcdcdc] h-max max-h-[225px] divide-y divide-solid divide-gray-200/50 w-full bg-white absolute top-8 lg:top-12 rounded-b-[11px] left-0 px-5">
                {departmentList.map(({ id, department_name }) => (
                  <p
                    key={id}
                    onClick={() => handleDepartment(id)}
                    className="py-2 md:py-3 text-xs lg:text-sm text-gray-800 hover:cursor-pointer"
                  >
                    {department_name}
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
              className={`flex justify-between items-center bg-white text-xs lg:text-sm px-1.5 py-2.5 sm:p-3 lg:px-5 lg:py-4 ${
                positionOpen
                  ? "rounded-t-[11px]"
                  : "rounded-lg lg:rounded-[11px]"
              } text-gray-600 focus:outline-gray-500/10 shadow-[0px_4px_15px_0px_#F1F0F0] hover:cursor-pointer `}
            >
              <span className="text-gray-400">
                {
                  positionTypeList.find((item) => item.id == position)
                    .position_name
                }
              </span>
              <MdKeyboardArrowDown
                className={`scale-150 xl:scale-[1.7] ${
                  positionOpen && "-rotate-180 transition duration-1000"
                }`}
              />
            </div>
            {positionOpen && (
              <div className="z-20 careerScrollbar shadow-xl lg:shadow-[-3px_10px_15px_0px_#dcdcdc] h-max max-h-[225px] divide-y divide-solid divide-gray-200/50 w-full bg-white absolute top-8 lg:top-12 rounded-b-[11px] left-0 px-5">
                {positionTypeList.map(({ id, position_name }) => (
                  <p
                    key={id}
                    onClick={() => handlePosition(id)}
                    className="py-2 md:py-3 text-xs lg:text-sm text-gray-800 hover:cursor-pointer"
                  >
                    {position_name}
                  </p>
                ))}
              </div>
            )}
          </button>
        </div>
      </div>

      <CareerJobLists data={filteredData} />
    </div>
  );
};

export default CareerJobCirculars;

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import CommonLayout from "../../../layouts/CommonLayout";
import {
  CompanyDescription,
  JobDescriptionTitle,
  JobTitle,
} from "../../../components/careers/CareersCommonComponents";
import { jobList } from "../../../public/data/careersData";
import Loader from "../../../components/shared/Loader";

const JobDescription = () => {
  const [data, setData] = useState("");
  const router = useRouter();
  const { jobId } = router.query;

  useEffect(() => {
    if (jobId !== "undefined") {
      const singleJobData = jobList.find((item) => item.id == jobId);
      setData(singleJobData);
    }
  }, [jobId]);

  return (
    <>
      {data ? (
        <CommonLayout title="Job Description">
          <div className="max-w-[856px] mx-auto py-10 xl:py-16">
            <div className="lg:flex justify-between items-center">
              <JobTitle title={data.position} />
              <Link passHref href={`/careers/application-form/${data.id}`}>
                <div className="w-max h-max mx-auto lg:mx-0 text-center rounded-lg text-white text-sm font-semibold px-8 xl:px-[42px] py-2 xl:py-2.5 hover:cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:to-blue-800  from-blue-900 to-blue-700">
                  Apply Now
                </div>
              </Link>
            </div>
            <CompanyDescription />
            <JobDescriptionTitle title={data.role} />
            <p className="text-gray-600 mb-6 lg:mb-10">{data.roleDetails}</p>
            {data.requirements.map(({ id, title, details }) => {
              return (
                <div key={id} className="mb-6 lg:mb-10">
                  <JobDescriptionTitle title={title} />
                  {details.map((item, i) => (
                    <div key={i} className="flex ml-4 items-start mb-1">
                      <div className="h-1 w-1 mt-2 mr-2 bg-gray-600 rounded-full"></div>
                      <p className="text-gray-600 text-sm md:text-base w-full ">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              );
            })}
            <Link passHref href={`/careers/application-form/${data.id}`}>
              <div className="w-max h-max mx-auto text-center rounded-lg text-white text-sm font-semibold px-8 lg:px-[64px] py-2 lg:py-2.5 hover:cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:to-blue-800  from-blue-900 to-blue-700">
                Apply Now
              </div>
            </Link>
          </div>
        </CommonLayout>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default JobDescription;

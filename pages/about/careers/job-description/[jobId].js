import Link from "next/link";

// components
import CommonLayout from "../../../../layouts/CommonLayout";
import Loader from "../../../../components/shared/Loader";
import { JobDescriptionTitle } from "../../../../components/careers/CareersCommonComponents";

// API endpoint
import { API } from "../../../../api";

const JobDescription = ({ data }) => {
  const {
    slug,
    job_title,
    job_contexts,
    job_responsibilities,
    qualifications,
    educational_requirements,
    benefits,
  } = data;

  const JobDescription = ({ label, content }) => (
    <div>
      <JobDescriptionTitle title={label} />
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="text-gray-600 text-sm md:text-base !leading-6 md:!leading-7"
      />
    </div>
  );

  return (
    <>
      {data ? (
        <CommonLayout title="Job Description">
          <div className="max-w-[856px] mx-auto py-10 xl:py-16">
            <div className="lg:flex justify-between items-center mb-6">
              <div className="text-center lg:text-start">
                <p className="text-gray-800 text-2xl font-semibold">
                  {job_title}
                </p>
                <p className="mt-4 mb-10 lg:mb-0 text-gray-400 text-lg font-medium">
                  BYSL Global Technology Group
                </p>
              </div>
              <Link passHref href={`/about/careers/application-form/${slug}`}>
                <div className="gradient-btn w-[150px] h-max mx-auto lg:mx-0 text-center rounded-lg text-white text-sm font-semibold py-2 xl:py-2.5 hover:cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:to-blue-800  from-blue-900 to-blue-700">
                  Apply Now
                </div>
              </Link>
            </div>
            <div className="space-y-6 lg:space-y-10">
              <JobDescription label="Job Context" content={job_contexts} />
              <JobDescription
                label="Job Responsibilities"
                content={job_responsibilities}
              />
              <JobDescription label="Qualifications" content={qualifications} />
              <JobDescription
                label="Key Qualifications"
                content={qualifications}
              />
              <JobDescription
                label="Educational Requirements"
                content={educational_requirements}
              />
              <JobDescription
                label="Compensation & other benefits"
                content={benefits}
              />
              <Link passHref href={`/about/careers/application-form/${slug}`}>
                <p className="gradient-btn w-[150px] h-max mx-auto text-center rounded-lg text-white text-sm font-semibold py-2 lg:py-2.5 hover:cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:to-blue-800  from-blue-900 to-blue-700">
                  Apply Now
                </p>
              </Link>
            </div>
          </div>
        </CommonLayout>
      ) : (
        <Loader />
      )}
    </>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`${API}/job-posts/${params.jobId}/`);
  const jobData = await res.json();

  return {
    props: {
      data: jobData,
    },
  };
}

export default JobDescription;

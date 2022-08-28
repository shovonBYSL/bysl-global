const CompanyDescription = () => (
  <p className="my-6 lg:my-10 text-center lg:text-start text-gray-800/80">
    BYSL Global Technology Group stands on four core values regarded as the
    fundamental ideological constants to govern the organization. The chronology
    of these values is arranged on a priority basis. The values we belives are
    Principles & Beliefs, Exceptionalism & High Standards, Customer Experience &
    Satisfaction, Employee Wellbeing & Team Spirit.
  </p>
);

const JobTitle = ({ title }) => {
  return (
    <div>
      <p className="text-gray-800 text-2xl font-semibold text-center lg:text-start">
        {title}
      </p>
      <p className="mt-4 mb-10 lg:mb-0 text-gray-600 text-lg font-medium text-center lg:text-start">
        BYSL Global Technology Group
      </p>
    </div>
  );
};

const JobDescriptionTitle = ({ title }) => (
  <p className="text-gray-800 font-semibold mb-6">{title}</p>
);

const JobHeader = ({ jobTitle }) => {
  return (
    <>
      <JobTitle title={jobTitle} />
      <CompanyDescription />
    </>
  );
};

const CareerInputTitle = ({ title }) => (
  <p className="text-gray-800 mb-4">{title}</p>
);

const CareerUserInput = ({ text }) => (
  <p className="text-gray-600 mb-6">{text}</p>
);

export {
  CompanyDescription,
  JobTitle,
  JobDescriptionTitle,
  JobHeader,
  CareerInputTitle,
  CareerUserInput,
};

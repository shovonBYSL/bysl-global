import LegalFeedback from "./LegalFeedback";
import LegalPageTitle from "./LegalPageTitle";
import LegalText from "./LegalText";

const PrivacyPolicy = ({ data }) => {
  return (
    <>
      <LegalPageTitle
        title="Privacy Policy"
        version="Version 1.2"
        date="July 25, 2022"
      />
      <div className="flex flex-col gap-8">
        {data.map((data) => {
          return (
            <div key={data.id}>
              <LegalText data={data} />
            </div>
          );
        })}
      </div>
      <LegalFeedback />
    </>
  );
};

export default PrivacyPolicy;

import { AiOutlinePlus } from "react-icons/ai";
import { CareerInputTitle, CareerUserInput } from "./CareersCommonComponents";

const CareersPreviewModal = ({ jobTitle, data }) => {
  return (
    <div className="relative">
      <input
        type="checkbox"
        id="application-preview"
        className="modal-toggle"
      />
      <div className="modal backdrop-blur-xs">
        <div className="modal-box !rounded-md w-11/12 max-w-3xl customScrollbar">
          <div className="max-w-3xl mx-auto pt-8">
            <p className="text-gray-800 text-xl font-semibold text-center border-b pb-3">
              {jobTitle}
            </p>
            <div className="max-w-[416px] mx-auto pt-4">
              {data.map(({ id, question, answer }) => {
                return (
                  <div key={id}>
                    <CareerInputTitle title={question} />
                    {answer ? (
                      <CareerUserInput text={answer} />
                    ) : (
                      <CareerUserInput text="Not Answered Yet" />
                    )}
                  </div>
                );
              })}
              <CareerInputTitle title="Your Resume" />
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-700 opacity-80">
                user_resume.pdf
              </p>
            </div>
          </div>
          <div className="modal-action ">
            <label
              htmlFor="application-preview"
              className="absolute right-1 top-1 p-2 hover:cursor-pointer"
            >
              <AiOutlinePlus className="text-2xl text-red-600 rotate-45" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPreviewModal;

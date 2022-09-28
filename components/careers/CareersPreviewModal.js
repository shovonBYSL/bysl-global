import { AiOutlinePlus } from "react-icons/ai";
import { CareerInputTitle, CareerUserInput } from "./CareersCommonComponents";

const CareersPreviewModal = ({
  jobTitle,
  data,
  handleClose,
}) => {
  return (
    <>
      <div
        onClick={handleClose}
        className="z-[100] backdrop-blur-xs bg-black/30 h-screen w-screen fixed top-0 left-0"
      />
      <div className="fixed customScrollbar top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[110] bg-white !rounded-md w-11/12 max-w-3xl max-h-[90vh] mx-auto px-5 pb-8 pt-14">
        <div className="h-full">
          <p className="text-gray-800 text-xl font-semibold text-center border-b pb-3">
            {jobTitle}
          </p>
          <div className="max-w-[416px] mx-auto pt-4">
            {data.map(({ id, question, answer, fileUploaded }) => {
              return (
                <div key={id}>
                  <CareerInputTitle title={question} />
                  {answer ? (
                    <CareerUserInput text={answer} />
                  ) : fileUploaded ? (
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-700 opacity-80">
                      {fileUploaded}
                    </p>
                  ) : (
                    <CareerUserInput
                      text={`Not ${id === 7 ? "Uploaded" : "Answered"} Yet`}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <AiOutlinePlus
            onClick={handleClose}
            className="absolute right-1 top-1 p-2 cursor-pointer h-10 w-10 text-red-600 rotate-45"
          />
        </div>
      </div>
    </>
  );
};

export default CareersPreviewModal;

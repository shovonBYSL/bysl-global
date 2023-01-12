import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import PhoneInput from "react-phone-input-2";

// components
import CommonLayout from "../../../../layouts/CommonLayout";
import Loader from "../../../../components/shared/Loader";
import CareersPreviewModal from "../../../../components/careers/CareersPreviewModal";
import {
  CareerInputTitle,
  JobHeader,
} from "../../../../components/careers/CareersCommonComponents";
import { TextGradient } from "../../../../components/shared/SharedTextgroups";

// API endpoint
import { API } from "../../../../api";

const ApplicationForm = ({ data }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [background, setBackground] = useState("");
  const [whyFit, setWhyFit] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [fileName, setFileName] = useState("");
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [],
    },
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const uploadFile = (e) => {
      if (acceptedFiles.length > 0) {
        setAttachment(acceptedFiles[0]);
        setFileName(acceptedFiles[0].name);
      }
    };
    uploadFile();
  }, [acceptedFiles, isLoading]);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    let application_form = new FormData();

    application_form.append("full_name", name);
    application_form.append("email", email);
    application_form.append("phone", phone);
    application_form.append("location", location);
    application_form.append("work_experience", experience);
    application_form.append("work_background_describtion", background);
    application_form.append("why_fit_for_position", whyFit);
    application_form.append("resume", attachment);
    application_form.append("job_post", data.id);

    if (attachment != null) {
      const res = await fetch(`${API}/job-posts/apply/`, {
        method: "POST",
        credentials: "include",
        body: application_form,
      });
      console.log(res);

      if (res.status === 201) {
        toast.success("Thanks for your application");
        setIsLoading(false);
        setTimeout(() => {
          router.push("/about/careers");
        }, 2000);
        // after successful
        setName("");
        setEmail("");
        setPhone("");
        setLocation("");
        setExperience("");
        setBackground("");
        setWhyFit("");
      }
    } else {
      toast.error("Please upload your resume.");
    }
  };

  const previewData = [
    {
      id: 0,
      question: "Full name",
      answer: name,
    },
    {
      id: 1,
      question: "Email",
      answer: email,
    },
    {
      id: 2,
      question: "Phone",
      answer: phone,
    },
    {
      id: 3,
      question: "Location",
      answer: location,
    },
    {
      id: 4,
      question: "How many years of professional work experience do you have?",
      answer: experience,
    },
    {
      id: 5,
      question: "Could you briefly describe your work background?",
      answer: background,
    },
    {
      id: 6,
      question: "Why do you think you are the best fit for this position?",
      answer: whyFit,
    },
    {
      id: 7,
      question: "Your Resume",
      fileUploaded: fileName,
    },
  ];

  return (
    <>
      {data ? (
        <CommonLayout title="Application Form">
          <ToastContainer theme="dark" />
          {isOpen && (
            <CareersPreviewModal
              jobTitle={data.job_title}
              data={previewData}
              handleClose={handleClose}
            />
          )}

          {isLoading && (
            <div className="fixed top-0 left-0 h-full w-full bg-white/30 z-40 flex items-center justify-center">
              <Loader />
            </div>
          )}
          <div className="max-w-[856px] mx-auto py-10 xl:py-16">
            <JobHeader jobTitle={data.job_title} />
            <form
              onSubmit={handleSubmit}
              className="max-w-[416px] mx-auto lg:pt-6"
            >
              {/* name input  */}
              <CareerInputTitle title="Full name *" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="bg-gray-50 text-sm w-full p-2.5 rounded-[5px] text-gray-600 placeholder-gray-600 focus:outline-gray-800/20 border border-gray-600 mb-10"
              />

              {/* email input  */}
              <CareerInputTitle title="Email *" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
                type="text"
                placeholder="Your email"
                className="bg-gray-50 text-sm w-full p-2.5 rounded-[5px] text-gray-600 placeholder-gray-600 focus:outline-gray-800/20 border border-gray-600 mb-10"
              />

              {/* phone input  */}
              <CareerInputTitle title="Phone *" />
              <div className="mb-10">
                <PhoneInput
                  enableSearch
                  disableSearchIcon
                  countryCodeEditable={false}
                  country={"bd"}
                  value={phone}
                  onChange={setPhone}
                  placeholder="+8809666 722788"
                  inputClass="!bg-gray-50 !text-sm !w-full !pl-12 !p-5 !rounded-[5px] !text-gray-600 placeholder-gray-600 !focus:outline-gray-800/20 !border !border-gray-600"
                />
              </div>

              {/* location input  */}
              <CareerInputTitle title="Location *" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                name="location"
                type="text"
                placeholder="Dhaka"
                className="bg-gray-50 text-sm w-full p-2.5 rounded-[5px] text-gray-600 placeholder-gray-600 focus:outline-gray-800/20 border border-gray-600 mb-10"
              />

              {/* experience input  */}
              <CareerInputTitle title="How many years of professional work experience do you have? *" />
              <textarea
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
                name="experience"
                rows="5"
                placeholder="Explain"
                className="bg-gray-50 text-sm w-full p-2.5 rounded-[5px] text-gray-600 placeholder-gray-600 focus:outline-gray-800/20 border border-gray-600 mb-10 resize-none"
              />

              {/* background input  */}
              <CareerInputTitle title="Could you briefly describe your work background? *" />
              <textarea
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                required
                name="background"
                rows="5"
                placeholder="Explain"
                className="bg-gray-50 text-sm w-full p-2.5 rounded-[5px] text-gray-600 placeholder-gray-600 focus:outline-gray-800/20 border border-gray-600 mb-10 resize-none"
              />

              {/* experience2 input  */}
              <CareerInputTitle title="Why do you think you are the best fit for this position? *" />
              <textarea
                value={whyFit}
                onChange={(e) => setWhyFit(e.target.value)}
                required
                name="experience2"
                rows="5"
                placeholder="Explain"
                className="bg-gray-50 text-sm w-full p-2.5 rounded-[5px] text-gray-600 placeholder-gray-600 focus:outline-gray-800/20 border border-gray-600 mb-10 resize-none"
              />

              {/* resume upload  */}
              <CareerInputTitle title="Upload your resume here *" />
              <div
                {...getRootProps({
                  className: `h-[120px] ${
                    acceptedFiles.length > 0 ? "mb-4" : "mb-10"
                  } bg-[#EBEFF5] hover:bg-blue-400 transition duration-500 rounded-[5px] border border-dashed border-gray-600 flex justify-center items-center text-center hover:cursor-pointer`,
                })}
              >
                <input {...getInputProps()} />
                <div>
                  <p className="text-sm text-gray-700 font-light">
                    Upload Resume
                  </p>
                  <p className="text-xs text-[#B1B6C1] font-light">
                    *pdf format only
                  </p>
                </div>
              </div>
              {acceptedFiles.length > 0 && (
                <div className="mb-10 flex">
                  <p className="font-semibold text-gray-600 mr-1">
                    Selected File:
                  </p>
                  <TextGradient
                    text={`${acceptedFiles[0]?.path} - ${acceptedFiles[0]?.size} bytes`}
                  />
                </div>
              )}
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10">
                <div
                  onClick={() => setIsOpen(true)}
                  className="w-[150px] h-max mx-auto lg:mx-0 text-center rounded-lg text-sm font-semibold py-2 xl:py-2.5 hover:cursor-pointer light-border-gradient text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
                >
                  Preview
                </div>
                <button
                  type="submit"
                  className="gradient-btn w-[150px] h-max mx-auto lg:mx-0 text-center rounded-lg text-white text-sm font-semibold py-2 xl:py-2.5 hover:cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:to-blue-800  from-blue-900 to-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
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

export default ApplicationForm;

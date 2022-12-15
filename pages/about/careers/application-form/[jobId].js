import Script from "next/script";
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

// data
import { jobList } from "../../../../public/data/careersData";

const ApplicationForm = () => {
  const router = useRouter();
  const { jobId } = router.query;

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState("");
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
    if (jobId !== "undefined") {
      setData(jobList.find((item) => item.url == jobId));
    }

    const uploadFile = (e) => {
      if (acceptedFiles.length > 0) {
        setAttachment(acceptedFiles[0]);
        setFileName(acceptedFiles[0].name);
      }
    };
    uploadFile();
  }, [jobId, acceptedFiles]);
  console.log(attachment);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let support_form = new FormData();
    support_form.append("subject", `Application for ${data.position}`);
    support_form.append("name", name);
    support_form.append("email", email);
    support_form.append("phone", phone);
    support_form.append("location", location);
    support_form.append("experience", experience);
    support_form.append("background", background);
    support_form.append("whyFit", whyFit);
    support_form.append("attachment", attachment);
    console.log(support_form);

    const endpoint =
      "http://live.staging.intellidigital.com/api/notification/bysl-job-application/";

    if (attachment != null) {
      const res = await fetch(`${endpoint}`, {
        method: "POST",
        credentials: "include",
        body: support_form,
      });

      let result = await res.json();

      if (result.code == 200) {
        toast.success("Thanks for your application");
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
      <Script src="https://smtpjs.com/v3/smtp.js" />
      {data ? (
        <CommonLayout title="Application Form">
          <ToastContainer theme="dark" />
          {isOpen && (
            <CareersPreviewModal
              jobTitle={data.position}
              data={previewData}
              handleClose={handleClose}
            />
          )}
          <div className="max-w-[856px] mx-auto py-10 xl:py-16">
            <JobHeader jobTitle={data.position} />
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

export default ApplicationForm;

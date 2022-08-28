import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

import CommonLayout from "../../../layouts/CommonLayout";
import CareersPreviewModal from "../../../components/careers/CareersPreviewModal";
import Loader from "../../../components/shared/Loader";
import {
  CareerInputTitle,
  JobHeader,
} from "../../../components/careers/CareersCommonComponents";
import { jobList } from "../../../public/data/careersData";

const ApplicationForm = () => {
  const [data, setData] = useState("");
  const router = useRouter();
  const { jobId } = router.query;

  useEffect(() => {
    if (jobId !== "undefined") {
      const singleJobData = jobList.find((item) => item.id == jobId);
      setData(singleJobData);
    }
  }, [jobId]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [background, setBackground] = useState("");
  const [question3, setQuestion3] = useState("");

  const userData = {
    name,
    email,
    phone,
    location,
    experience,
    background,
    question3,
  };

  const previewData = [
    {
      id: 0,
      question: "Full Name",
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
      question: "Could you briefly describe your work background? ",
      answer: background,
    },
    {
      id: 6,
      question: "How many years of professional work experience do you have? ",
      answer: question3,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

    // after successful
    toast.success("Thanks for your application");
    setName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setExperience("");
    setBackground("");
    setQuestion3("");
  };

  return (
    <>
      {data ? (
        <CommonLayout title="Application Form">
          <ToastContainer theme="dark" />
          <CareersPreviewModal jobTitle={data.position} data={previewData} />
          <div className="max-w-[856px] mx-auto py-10 xl:py-16">
            <JobHeader jobTitle={data.position} />
            <form
              onSubmit={handleSubmit}
              className="max-w-[416px] mx-auto lg:pt-6"
            >
              {/* name input  */}
              <CareerInputTitle title="Full Name" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                name="name"
                type="text"
                placeholder="Your Name"
                className="bg-gray-50 text-sm w-full p-2.5 rounded-[5px] text-gray-500 focus:outline-gray-800/20 border border-gray-600 mb-10"
              />

              {/* email input  */}
              <CareerInputTitle title="Email" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
                type="text"
                placeholder="Your Email"
                className="bg-gray-50 text-sm w-full p-2.5 rounded-[5px] text-gray-500 focus:outline-gray-800/20 border border-gray-600 mb-10"
              />

              {/* phone input  */}
              <CareerInputTitle title="Phone" />
              <div className="relative mb-10">
                <p className="flex text-sm absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-800">
                  +880
                </p>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  name="phone"
                  type="text"
                  placeholder="9666 722788"
                  className="bg-gray-50 text-sm w-full pl-12 p-2.5 rounded-[5px] text-gray-500 focus:outline-gray-800/20 border border-gray-600"
                />
              </div>

              {/* location input  */}
              <CareerInputTitle title="Location" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                name="location"
                type="text"
                placeholder="Dhaka"
                className="bg-gray-50 text-sm w-full p-2.5 rounded-[5px] text-gray-500 focus:outline-gray-800/20 border border-gray-600 mb-10"
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
                className="bg-gray-50 text-sm w-full p-2.5 rounded-[5px] text-gray-500 focus:outline-gray-800/20 border border-gray-600 mb-10 resize-none"
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
                className="bg-gray-50 text-sm w-full p-2.5 rounded-[5px] text-gray-500 focus:outline-gray-800/20 border border-gray-600 mb-10 resize-none"
              />

              {/* experience2 input  */}
              <CareerInputTitle title="How many years of professional work experience do you have? *" />
              <textarea
                value={question3}
                onChange={(e) => setQuestion3(e.target.value)}
                required
                name="experience2"
                rows="5"
                placeholder="Explain"
                className="bg-gray-50 text-sm w-full p-2.5 rounded-[5px] text-gray-500 focus:outline-gray-800/20 border border-gray-600 mb-10 resize-none"
              />

              {/* resume upload  */}
              <CareerInputTitle title="Upload your resume here *" />
              <div className="h-[120px] mb-10 bg-[#EBEFF5] hover:bg-blue-400 transition duration-500 rounded-[5px] border border-dashed border-gray-600 flex justify-center items-center text-center hover:cursor-pointer">
                <div>
                  <p className="text-sm text-gray-800/80 font-light">
                    Upload Resume
                  </p>
                  <p className="text-xs text-[#B1B6C1] font-light">
                    *pdf or docx formate only
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10">
                <label
                  htmlFor="application-preview"
                  className="w-[150px] h-max mx-auto lg:mx-0 text-center rounded-lg text-sm font-semibold py-2 xl:py-2.5 hover:cursor-pointer light-border-gradient text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700"
                >
                  Preview
                </label>
                <button
                  type="submit"
                  className="w-[150px] h-max mx-auto lg:mx-0 text-center rounded-lg text-white text-sm font-semibold py-2 xl:py-2.5 hover:cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:to-blue-800  from-blue-900 to-blue-700"
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

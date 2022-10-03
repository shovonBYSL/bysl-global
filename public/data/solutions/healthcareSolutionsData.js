import { healthcareProblemsSolutionsSvg } from "../../../components/svg/solutions/healthcareSvg";

const healthcareSolutionsBannerData = {
  img: "/images/banners/healthcare_solutions_banner.webp",
  heading: "Health care",
  title: "Powering the healthcare of the future",
  subTitle:
    "We build technologies to improve patient’s journey all the way from the telemedicine appointment to recovery.  From protecting sensitive information to unlocking the potential of data, BYSL Global fuels innovation through delivering the technology of the future.        ",
  buttons: [
    {
      id: 0,
      label: "Overview",
      link: "overview",
    },
    {
      id: 1,
      label: "Problems & Solutions",
      link: "problems&solutions",
    },
  ],
};

const healthcareOverviewData = {
  title:
    "Understanding the scale, implication, and potential of health data is key to shaping the future of healthcare",
  subTitle:
    "Innovation in healthcare heavily depends upon the purpose-built digitization and utilization of data while safeguarding the information flow and storage systems. Healthcare organizations must unlock and mobilize the enormous potential of data to maximize patient outcomes and mitigate physical burnout. From finance, to clinical systems, administrative processes, engaging with patients, to medical research, innovation is driven by the pace of digitization.",
};

const healthcareProblemsAndSolutionsData = [
  {
    id: 0,
    problem: "True potential of health data remains undiscovered",
    problemInfo:
      "For the most part, healthcare organizations have to deal with a massive scale of data that remains mostly unused due to lack of proper analytics and processing applications. Besides, due to not having quality metrics reporting, informed decisions are not made on various critical issues. Also the unstructured health data sets obstruct the right utilization of data through advanced processing of health and other records.",
    solution: "Unlock the power of data",
    solutionInfo:
      "Our AI/ML powered data analytics tools use advanced architecture to help healthcare organizations get valuable insights from healthcare data. Institutions can address various critical issues utilizing our well-designed intelligent data analytics applications that provide real time insights, visualizations and forecasting. We help our partners with simplified processes of reporting on various metrics relating to outcomes and processes, while still achieving compliance.",
    icon: healthcareProblemsSolutionsSvg[0],
  },
  {
    id: 1,
    problem: "Need for optimization of systems through digitization",
    problemInfo:
      "Operational optimization is key to delivering the best services without compromising quality, time and confidentiality. Healthcare industry, by type, is a heavily regulated one and compliance plays a big role in it. Optimization of operations while maintaining compliance is a big challenge for most organizations.",
    solution: "Optimize operations",
    solutionInfo:
      "From minimizing human intervention during extracting patient’s information, digital operation processing using intelligent document readers, meeting compliance requirements to operating a secure financial system, our partner healthcare organizations can enhance the entire healthcare experience for all.",
    icon: healthcareProblemsSolutionsSvg[1],
  },
  {
    id: 2,
    problem: "Unremarkable experience for clinicians & patients",
    problemInfo:
      "Clinicians’ well-being and the patient experience are two major issues every healthcare organization deals with. Burned out physicians often prove to be difficult for patients and the overall healthcare experience. Apart from building a psychological safety net, there is a dire need for systemic efficacy through advanced communication and information processing solutions.",
    solution: "Create remarkable healthcare experience",
    solutionInfo:
      "Leverage machine learning by accessing our well-crafted solutions for clinical workflows to reduce burnout for clinicians so that patient care is streamlined. Our applications help minimize both the patients and the clinicians to reduce friction and complexity in the exchange of information and documentation through omni-channel engagements while keeping sensitive information protected.",
    icon: healthcareProblemsSolutionsSvg[2],
  },
  {
    id: 3,
    problem: "Insufficient tech support for medical research",
    problemInfo:
      "Researchers need to access, analyze and store a gigantic volume of data for their works. They often have to use advanced tech like quantum computing, AI and ML to solve intricate problems while sharing their data with other collaborators across the globe. However, the gnawing scarcity of low-cost hi-tech solutions for such needs still persists today.",
    solution: "Achieve more in medical research",
    solutionInfo:
      "Handle complex data with higher computing power and intelligent analytics for deeper insights.  We develop applications that empower researchers in the healthcare industry to utilize health data to its fullest potential. We provide solutions for collecting, processing and forecasting of relevant data from any targeted group.",
    icon: healthcareProblemsSolutionsSvg[3],
  },
];

export {
  healthcareSolutionsBannerData,
  healthcareOverviewData,
  healthcareProblemsAndSolutionsData,
};

import { marketingProblemSolutionsSvg } from "../../../components/svg/solutions/marketingSvg";

const marketingBannerData = {
  img: "/images/banners/marketing_solutions_banner.png",
  imgSmall: "/images/banners/marketing_solutions_banner_sm.png",
  type: "Marketing",
  heading: "Utilize innovative marketing solutions to scale",
  subHeading:
    "We enable businesses at any scale and provide a comprehensive SaaS platform for our partners so that they can make data-driven decisions and utilize opportunities to deliver marketing messages.  ",
};

const marketingOverviewData = {
  img: "/images/solutions/marketing/overview.svg",
  // details1:
  //   "Marketing consulting is considered as professional services provided by experienced and qualified experts in the field of marketing. ",
  details2:
    "With increasing imposition of data privacy laws and shrunken scopes for consumer identifiers, conventional marketing technology has taken a blow. Amidst this crisis, companies are seeking new ways of activating  customer data and reviewing the processes of sharing, collecting and enriching data in full compliance with various privacy laws. For marketers, the biggest challenges of this post-identifier age include reinvention of data collaboration, rebuilding the 1st-party data platform, advertising intelligence and platform, and customer experience while managing connectivity with a voluminous community of customers and partners.",
  details3:
    "With our advanced solutions, you keep up with the pace of innovation utilizing higher capabilities for analytics, compute, and ML in order to recreate the required data platform, advertising intelligence, customer experience and faster interoperability. ",
};

const marketingProblemsAndSolutionsData = [
  {
    id: 0,
    problem: "Data access across platforms",
    problemInfo:
      "Modern customers utilize a variety of channels and devices (smartphones, laptops, tablets), generating a plethora of data points along the way. This implies that marketers must access data from numerous sources to acquire a complete picture of a customer. A single data set will no longer give a comprehensive picture. If a marketer does not have information from the appropriate channel, they may be missing important details.",
    // problemImg:"/images/solutions/marketing/problems_and_solutions/problem_image_0.png",
    // problemImgWhite:"/images/solutions/marketing/problems_and_solutions/problem_image_white_0.png",
    problemIcon: marketingProblemSolutionsSvg[0].icon,
    problemIconWhite: marketingProblemSolutionsSvg[0].iconWhite,
    solution: "Using cloud-based solutions to recreate 1st-party data platform",
    solutionInfo:
      "Our cloud-based data solutions would benefit our partners by giving them access to all legit data points to receive data from multiple channels. Using our solutions our partners can engage with the customers at the right place, right device and at the right time. We provide solutions for customer data workload through offering quick set up options for data centers as well.",
    solutionPoints: [
      "Access data from multiple channels",
      "Different styles and scales of compute",
      "Quick set up of data center",
      "Low latency interactions",
    ],
  },
  {
    id: 1,
    problem: "Lack of affordable advanced database solutions",
    problemInfo:
      "In a fast-paced environment with ever increasing power of digital devices, today’s customers share preferences and data faster than ever before. Advertising organizations need to engage with customers even faster. The support for the right solutions is often too high. For smaller startups, it’s essential to access fast-paced database service at an affordable cost.",
    // problemImg:"/images/solutions/marketing/problems_and_solutions/problem_image_1.png",
    // problemImgWhite:"/images/solutions/marketing/problems_and_solutions/problem_image_white_1.png",
    problemIcon: marketingProblemSolutionsSvg[1].icon,
    problemIconWhite: marketingProblemSolutionsSvg[1].iconWhite,
    solution: "Smart database technologies for efficient data management",
    solutionInfo:
      "BYSL Global offers affordable database solutions for faster results. Our multitenant database architecture supports multiple types of processor including AMD, ARM and Intel processors. We have a hybrid model database management system that allows multiple access  methods serving both single and multi-purpose needs.",
    solutionPoints: [
      "Flexible deployment",
      "Real-time bidding",
      "Low-latency platform with high peak loads",
      "Entirely cloud-based",
    ],
  },
  {
    id: 2,
    problem: "Difficulty in data interoperability and collaboration",
    problemInfo:
      "In today’s marketing world, collaborative partnership is essential between peers. With the evolving technology landscape, data collaboration with partners who have the capacity to understand its true potential without jeopardizing privacy simply unlocks new horizons of opportunities. But due to the complex data models and formats, it has become a challenge to perform data collaboration be it intercompany or intracompany.",
    // problemImg:"/images/solutions/marketing/problems_and_solutions/problem_image_2.png",
    // problemImgWhite:"/images/solutions/marketing/problems_and_solutions/problem_image_white_2.png",
    problemIcon: marketingProblemSolutionsSvg[2].icon,
    problemIconWhite: marketingProblemSolutionsSvg[2].iconWhite,
    solution: "Smart Big Data solutions to harness the power of data",
    solutionInfo:
      "Our data interoperability and collaboration solutions allow partners to adapt to innovate in the areas of data segmentation, data identity resolution, ad measurement, attribution and data enrichment.",
    solutionPoints: [
      "Data collaboration",
      "Data measurement",
      "Data activation",
      "Data analysis",
    ],
  },
  {
    id: 3,
    problem: "Less innovation in bettering customer experience",
    problemInfo:
      "Marketers are in a constant need for innovation in the ways to upgrade customer experience and they need cost-effective digital solutions in the ever changing digital landscape. From the beginning of the customer journey to its end, there are lots of touch points that can be upgraded substantially in terms of improving customer experience. Existing mediums and solutions to engage with customers often prove to be ineffective or costly for most advertisers.",
    // problemImg:"/images/solutions/marketing/problems_and_solutions/problem_image_3.png",
    // problemImgWhite:"/images/solutions/marketing/problems_and_solutions/problem_image_white_3.png",
    problemIcon: marketingProblemSolutionsSvg[3].icon,
    problemIconWhite: marketingProblemSolutionsSvg[3].iconWhite,
    solution: "Powerful automated systems to enhance customer experience",
    solutionInfo:
      "We help our marketing partners with higher capabilities for analytics, compute, networking and messaging queuing so that they can have full control over managing customers, engaging with them in more scalable ways. For example, we provide affordable and complete solutions for the automation of customer journey, customer engagement, message logging, deliverability analytics, spam detection, and task queues etc.",
    solutionPoints: [
      "Automation for customer journey management",
      "Fast and secure messaging platforms",
      "Complete content management system",
      "Applications for customer engagement",
    ],
  },
];

export {
  marketingBannerData,
  marketingOverviewData,
  marketingProblemsAndSolutionsData,
};

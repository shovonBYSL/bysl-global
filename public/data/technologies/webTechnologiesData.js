import {
  react,
  angular,
  vue,
  next,
  node,
  python,
  laravel,
  materialUI,
  tailwind,
  firebase,
  ts,
} from "./techSlidersSvg";

const webBannerData = {
  angular: angular,
  tailwind: tailwind,
  mui: materialUI,
  node: node,
  vue: vue,
  next: next,
  laravel: laravel,
  firebase: firebase,
  python: python,
  ts: ts,
  react: react,
};

const businessValuesData = [
  {
    id: 0,
    title: "Advanced analytics",
    icon: `<svg viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.875 32.5V21.25H17.625" stroke="url(#paint0_linear_1_5173)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M37.625 32.5H6.375" stroke="url(#paint1_linear_1_5173)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.625 32.5V13.75H26.375" stroke="url(#paint2_linear_1_5173)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M35.125 6.25H26.375V32.5H35.125V6.25Z" stroke="url(#paint3_linear_1_5173)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23 1L13 11L9 7L1 15" stroke="url(#paint4_linear_1_5173)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_1_5173" x1="8.875" y1="27.027" x2="17.625" y2="27.027" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1_5173" x1="6.375" y1="33.0135" x2="37.625" y2="33.0135" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint2_linear_1_5173" x1="17.625" y1="23.3784" x2="26.375" y2="23.3784" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint3_linear_1_5173" x1="26.375" y1="19.7297" x2="35.125" y2="19.7297" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint4_linear_1_5173" x1="1" y1="8.18919" x2="23" y2="8.18919" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    </defs>
    </svg>
    `,
    subTitle:
      "Integrated advanced anlytics engine to create insight-driven results.",
    title2: "Included with",
    benefits: [
      "AI based insights",
      "Event driven data model",
      "Custom filter",
      "Multiple reporting tools",
      "Prediction capabilities ",
      "Third party integration",
      "Real-time analytics",
    ],
  },
  {
    id: 1,
    title: "Automated Reports",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 20H25" stroke="url(#paint0_linear_1_5205)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 25H25" stroke="url(#paint1_linear_1_5205)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.75 6.25H31.25C31.5815 6.25 31.8995 6.3817 32.1339 6.61612C32.3683 6.85054 32.5 7.16848 32.5 7.5V31.25C32.5 32.2446 32.1049 33.1984 31.4017 33.9017C30.6984 34.6049 29.7446 35 28.75 35H11.25C10.2554 35 9.30161 34.6049 8.59835 33.9017C7.89509 33.1984 7.5 32.2446 7.5 31.25V7.5C7.5 7.16848 7.6317 6.85054 7.86612 6.61612C8.10054 6.3817 8.41848 6.25 8.75 6.25V6.25Z" stroke="url(#paint2_linear_1_5205)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5 3.75V8.75" stroke="url(#paint3_linear_1_5205)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 3.75V8.75" stroke="url(#paint4_linear_1_5205)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5 3.75V8.75" stroke="url(#paint5_linear_1_5205)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_1_5205" x1="15" y1="20.5135" x2="25" y2="20.5135" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1_5205" x1="15" y1="25.5135" x2="25" y2="25.5135" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint2_linear_1_5205" x1="7.5" y1="21.0135" x2="32.5" y2="21.0135" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint3_linear_1_5205" x1="12.5" y1="6.31757" x2="13.5" y2="6.31757" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint4_linear_1_5205" x1="20" y1="6.31757" x2="21" y2="6.31757" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint5_linear_1_5205" x1="27.5" y1="6.31757" x2="28.5" y2="6.31757" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    </defs>
    </svg>
    `,
    subTitle:
      "Flexible & custom reporting opportunity for fast & accurate decision making",
  },
  {
    id: 2,
    title: "User Journey",
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.4004 34.6499C20.1963 34.6499 22.4629 32.3833 22.4629 29.5874C22.4629 26.7915 20.1963 24.5249 17.4004 24.5249C14.6044 24.5249 12.3379 26.7915 12.3379 29.5874C12.3379 32.3833 14.6044 34.6499 17.4004 34.6499Z" stroke="url(#paint0_linear_1_5210)" stroke-width="2" stroke-miterlimit="10"/>
    <path d="M9.27441 39.6363C10.0362 38.1358 11.1986 36.8755 12.6328 35.9952C14.067 35.1149 15.7169 34.6489 17.3997 34.6489C19.0825 34.6489 20.7325 35.1149 22.1667 35.9952C23.6008 36.8755 24.7632 38.1358 25.525 39.6363" stroke="url(#paint1_linear_1_5210)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M29.3981 28.6886C29.5005 29.3205 29.5513 29.9596 29.55 30.5997C29.55 33.0028 28.8374 35.3519 27.5024 37.3499C26.1673 39.348 24.2697 40.9053 22.0496 41.8249C19.8295 42.7445 17.3865 42.9851 15.0297 42.5163C12.6728 42.0475 10.5079 40.8903 8.80866 39.1911C7.10945 37.4919 5.95227 35.3269 5.48346 32.9701C5.01465 30.6132 5.25526 28.1702 6.17487 25.9501C7.09447 23.73 8.65177 21.8324 10.6498 20.4974C12.6479 19.1623 14.997 18.4497 17.4 18.4497C18.0401 18.4485 18.6792 18.4993 19.3111 18.6016" stroke="url(#paint2_linear_1_5210)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M26.184 20.8056L26.0422 11.3567C26.0296 10.5213 26.3494 9.71524 26.9312 9.1157C27.513 8.51616 28.3092 8.17229 29.1445 8.15975C29.9799 8.1472 30.786 8.46701 31.3855 9.04881C31.985 9.63062 32.3289 10.4268 32.3415 11.2621L32.4833 20.711C32.499 21.7552 32.9288 22.7504 33.6783 23.4776C34.4277 24.2049 35.4353 24.6046 36.4795 24.589C37.5237 24.5733 38.5189 24.1435 39.2461 23.394C39.9734 22.6446 40.3731 21.637 40.3574 20.5928L40.2037 10.3564" stroke="url(#paint3_linear_1_5210)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M44.0806 6.31184C44.0482 4.15105 42.2702 2.42568 40.1094 2.45813C37.9486 2.49058 36.2233 4.26855 36.2557 6.42934C36.2882 8.59013 38.0661 10.3155 40.2269 10.283C42.3877 10.2506 44.1131 8.47263 44.0806 6.31184Z" fill="url(#paint4_linear_1_5210)" stroke="url(#paint5_linear_1_5210)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M41.7611 5.5498L39.5943 7.61699L38.5127 6.5834" stroke="#F5F7FD" stroke-width="1.08" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_1_5210" x1="12.3379" y1="29.7242" x2="22.4629" y2="29.7242" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1_5210" x1="9.27441" y1="37.21" x2="25.525" y2="37.21" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint2_linear_1_5210" x1="5.25" y1="30.9281" x2="29.55" y2="30.9281" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint3_linear_1_5210" x1="33.5214" y1="24.6334" x2="33.2731" y2="8.09775" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint4_linear_1_5210" x1="40.3327" y1="10.2815" x2="40.2152" y2="2.45654" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint5_linear_1_5210" x1="40.3327" y1="10.2815" x2="40.2152" y2="2.45654" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    </defs>
    </svg>
    `,
    subTitle:
      "User friendly & highly intuitive user flow for maximum productivity",
  },
  {
    id: 3,
    title: "Support Center",
    icon: `<svg viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.9844 20H30.9844C30.3213 20 29.6854 20.2634 29.2166 20.7323C28.7478 21.2011 28.4844 21.837 28.4844 22.5V28.75C28.4844 29.4131 28.7478 30.049 29.2166 30.5178C29.6854 30.9866 30.3213 31.25 30.9844 31.25H33.4844C34.1474 31.25 34.7833 30.9866 35.2521 30.5178C35.721 30.049 35.9844 29.4131 35.9844 28.75V20ZM35.9844 20C35.9844 18.0196 35.5924 16.0588 34.8307 14.2308C34.0691 12.4027 32.953 10.7435 31.5469 9.34899C30.1407 7.95447 28.4724 6.85219 26.638 6.10576C24.8037 5.35933 22.8397 4.98353 20.8594 5.00003C18.8804 4.9856 16.9181 5.36294 15.0855 6.11029C13.253 6.85765 11.5865 7.96026 10.182 9.35457C8.77751 10.7489 7.66283 12.4074 6.90218 14.2344C6.14153 16.0615 5.74995 18.021 5.75 20V28.75C5.75 29.4131 6.01339 30.049 6.48223 30.5178C6.95107 30.9866 7.58696 31.25 8.25 31.25H10.75C11.413 31.25 12.0489 30.9866 12.5178 30.5178C12.9866 30.049 13.25 29.4131 13.25 28.75V22.5C13.25 21.837 12.9866 21.2011 12.5178 20.7323C12.0489 20.2634 11.413 20 10.75 20H5.75" stroke="url(#paint0_linear_1_5230)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M35.9844 28.75V32.5C35.9844 33.8261 35.4576 35.0979 34.5199 36.0355C33.5822 36.9732 32.3105 37.5 30.9844 37.5H22" stroke="url(#paint1_linear_1_5230)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_1_5230" x1="5.75" y1="18.4795" x2="35.9844" y2="18.4795" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1_5230" x1="22" y1="33.2432" x2="35.9844" y2="33.2432" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    </defs>
    </svg>
    `,
    subTitle: "24/7 end user help-desk",
  },
  {
    id: 4,
    title: "Dynamic Configuration",
    icon: `<svg viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.25 26.875C24.047 26.875 27.125 23.797 27.125 20C27.125 16.203 24.047 13.125 20.25 13.125C16.453 13.125 13.375 16.203 13.375 20C13.375 23.797 16.453 26.875 20.25 26.875Z" stroke="url(#paint0_linear_1_5238)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M31.0939 12.6094C31.4701 13.1479 31.7994 13.7177 32.0783 14.3125L36.1252 16.5625C36.6305 18.8257 36.6358 21.172 36.1408 23.4375L32.0783 25.6875C31.7994 26.2823 31.4701 26.8521 31.0939 27.3906L31.172 32.0313C29.457 33.5941 27.4271 34.7716 25.2189 35.4844L21.2345 33.0938C20.5791 33.1406 19.9212 33.1406 19.2658 33.0938L15.297 35.4688C13.0819 34.7689 11.0453 33.596 9.32829 32.0313L9.40642 27.4062C9.0334 26.8602 8.70425 26.2855 8.42204 25.6875L4.37517 23.4375C3.86985 21.1743 3.86452 18.828 4.35954 16.5625L8.42204 14.3125C8.70092 13.7177 9.03025 13.1479 9.40642 12.6094L9.32829 7.96875C11.0434 6.40588 13.0733 5.22844 15.2814 4.51562L19.2658 6.90625C19.9212 6.85937 20.5791 6.85937 21.2345 6.90625L25.2033 4.53125C27.4184 5.23109 29.455 6.40399 31.172 7.96875L31.0939 12.6094Z" stroke="url(#paint1_linear_1_5238)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_1_5238" x1="13.375" y1="20.1858" x2="27.125" y2="20.1858" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1_5238" x1="3.99219" y1="20.4185" x2="36.5081" y2="20.4185" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    </defs>
    </svg>
    `,
    subTitle: "Dynamic customization option creating  greater opportunities",
  },
];

const webProcessData = [
  {
    id: 0,
    title: "Research",
    subTitle: "Continuous application of top-tier R&D practices ",
    img: "/images/technologies/web/process/icon_0.svg",
    hoverImg: "/images/technologies/web/process/icon_hover_0.svg",
  },
  {
    id: 1,
    title: "Designing",
    subTitle: "Innovative, dynamic, functional and  user-friendly",
    img: "/images/technologies/web/process/icon_1.svg",
    hoverImg: "/images/technologies/web/process/icon_hover_1.svg",
  },
  {
    id: 2,
    title: "Building",
    subTitle: "Combining advanced technologies with the right skill set ",
    img: "/images/technologies/web/process/icon_2.svg",
    hoverImg: "/images/technologies/web/process/icon_hover_2.svg",
  },
  {
    id: 3,
    title: "Delivery",
    subTitle: "Convenient, timely & consistent",
    img: "/images/technologies/web/process/icon_3.svg",
    hoverImg: "/images/technologies/web/process/icon_hover_3.svg",
  },
];

const webFeaturesData = {
  type: "Features",
  subTitle:
    "Get the right features designed and developed to serve precise needs. ",
  img: "/images/technologies/web/features/web_features.webp",
  features: [
    {
      id: 0,
      title: "Productivity",
      subTitle:
        "Maximize productivity with well-researched, user-centric, smart features engineered to maximize productivity",
      img: "/images/technologies/web/features/icon_0.png",
    },
    {
      id: 1,
      title: "Security",
      subTitle:
        "From threat modeling, implementing secure coding cryptography & design architecture to meticulous app vulnerability testings, strict security is ensured throughout ",
      img: "/images/technologies/web/features/icon_1.png",
    },
  ],
};

const webServicesBannerData = {
  type: "Applications",
  img: "/images/technologies/web/web_services.webp",
  subTitle:
    "Flexible, cost-saving & dynamic web applications utilizing integrated system architecture.  ",
};

export {
  businessValuesData,
  webProcessData,
  webFeaturesData,
  webServicesBannerData,
  webBannerData,
};

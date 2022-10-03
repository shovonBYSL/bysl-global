const dataScienceControlPanelData = [
  {
    id: 0,
    title: "Security",
    icon: `<svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8374 27.6125C11.9351 25.4025 12.5043 22.9676 12.4999 20.5C12.5009 19.3002 12.771 18.116 13.2902 17.0343C13.8094 15.9527 14.5645 15.0013 15.4999 14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20.5 20.5C20.5054 24.5671 19.4728 28.5684 17.5 32.125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.5 20.5C16.5 19.4391 16.9214 18.4217 17.6716 17.6716C18.4217 16.9214 19.4391 16.5 20.5 16.5C21.5609 16.5 22.5783 16.9214 23.3284 17.6716C24.0786 18.4217 24.5 19.4391 24.5 20.5C24.5083 24.6233 23.5988 28.6968 21.8375 32.425" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M31.825 27.5C32.2728 25.1935 32.4988 22.8495 32.5 20.5C32.5 17.3174 31.2357 14.2652 28.9853 12.0147C26.7348 9.76428 23.6826 8.5 20.5 8.5C17.3174 8.5 14.2652 9.76428 12.0147 12.0147C9.76428 14.2652 8.5 17.3174 8.5 20.5C8.50358 21.863 8.27097 23.2164 7.8125 24.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.0999 24.5C15.6681 26.6032 14.9044 28.6243 13.8374 30.4875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19.5 12.5625C19.8319 12.5226 20.1657 12.5017 20.5 12.5C22.6217 12.5 24.6566 13.3429 26.1569 14.8431C27.6571 16.3434 28.5 18.3783 28.5 20.5C28.4988 21.8372 28.4154 23.1731 28.25 24.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.4876 28.5C27.3001 29.2375 27.0876 29.975 26.8501 30.6875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    hoverIcon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.3374 27.1125C11.4351 24.9025 12.0043 22.4676 11.9999 20C12.0009 18.8002 12.271 17.616 12.7902 16.5343C13.3094 15.4527 14.0645 14.5013 14.9999 13.75" stroke="url(#paint0_linear_20_30805)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 20C20.0054 24.0671 18.9728 28.0684 17 31.625" stroke="url(#paint1_linear_20_30805)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 20C16 18.9391 16.4214 17.9217 17.1716 17.1716C17.9217 16.4214 18.9391 16 20 16C21.0609 16 22.0783 16.4214 22.8284 17.1716C23.5786 17.9217 24 18.9391 24 20C24.0083 24.1233 23.0988 28.1968 21.3375 31.925" stroke="url(#paint2_linear_20_30805)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M31.325 27C31.7728 24.6935 31.9988 22.3495 32 20C32 16.8174 30.7357 13.7652 28.4853 11.5147C26.2348 9.26428 23.1826 8 20 8C16.8174 8 13.7652 9.26428 11.5147 11.5147C9.26428 13.7652 8 16.8174 8 20C8.00358 21.363 7.77097 22.7164 7.3125 24" stroke="url(#paint3_linear_20_30805)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.5999 24C15.1681 26.1032 14.4044 28.1243 13.3374 29.9875" stroke="url(#paint4_linear_20_30805)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19 12.0625C19.3319 12.0226 19.6657 12.0017 20 12C22.1217 12 24.1566 12.8429 25.6569 14.3431C27.1571 15.8434 28 17.8783 28 20C27.9988 21.3372 27.9154 22.6731 27.75 24" stroke="url(#paint5_linear_20_30805)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M26.9876 28C26.8001 28.7375 26.5876 29.475 26.3501 30.1875" stroke="url(#paint6_linear_20_30805)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_20_30805" x1="10.3374" y1="20.6118" x2="14.9999" y2="20.6118" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint1_linear_20_30805" x1="17" y1="25.9696" x2="20" y2="25.9696" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint2_linear_20_30805" x1="16" y1="24.1777" x2="24.0001" y2="24.1777" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint3_linear_20_30805" x1="7.3125" y1="17.7568" x2="32" y2="17.7568" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint4_linear_20_30805" x1="13.3374" y1="27.0747" x2="15.5999" y2="27.0747" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint5_linear_20_30805" x1="19" y1="18.1622" x2="28" y2="18.1622" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint6_linear_20_30805" x1="26.3501" y1="29.1233" x2="26.9876" y2="29.1233" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    </defs>
    </svg>
    `,
  },
  {
    id: 1,
    title: "Customer Service",
    icon: `<svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_11_21263)">
    <path d="M35.7344 20.5005H30.7344C30.0713 20.5005 29.4354 20.7639 28.9666 21.2328C28.4978 21.7016 28.2344 22.3375 28.2344 23.0005V29.2505C28.2344 29.9136 28.4978 30.5494 28.9666 31.0183C29.4354 31.4871 30.0713 31.7505 30.7344 31.7505H33.2344C33.8974 31.7505 34.5333 31.4871 35.0021 31.0183C35.471 30.5494 35.7344 29.9136 35.7344 29.2505V20.5005ZM35.7344 20.5005C35.7344 18.5201 35.3424 16.5593 34.5807 14.7313C33.8191 12.9032 32.703 11.244 31.2969 9.84948C29.8907 8.45495 28.2224 7.35268 26.388 6.60625C24.5537 5.85982 22.5897 5.48402 20.6094 5.50052C18.6304 5.48609 16.6681 5.86342 14.8355 6.61078C13.003 7.35814 11.3365 8.46074 9.932 9.85506C8.52751 11.2494 7.41283 12.9078 6.65218 14.7349C5.89153 16.5619 5.49995 18.5215 5.5 20.5005V29.2505C5.5 29.9136 5.76339 30.5494 6.23223 31.0183C6.70107 31.4871 7.33696 31.7505 8 31.7505H10.5C11.163 31.7505 11.7989 31.4871 12.2678 31.0183C12.7366 30.5494 13 29.9136 13 29.2505V23.0005C13 22.3375 12.7366 21.7016 12.2678 21.2328C11.7989 20.7639 11.163 20.5005 10.5 20.5005H5.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M35.7344 29.25V33C35.7344 34.3261 35.2076 35.5979 34.2699 36.5355C33.3322 37.4732 32.0605 38 30.7344 38H21.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_11_21263">
    <rect width="40" height="40" fill="white" transform="translate(0.5 0.5)"/>
    </clipPath>
    </defs>
    </svg>
    `,
    hoverIcon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_20_30799)">
    <path d="M35.2344 20.0005H30.2344C29.5713 20.0005 28.9354 20.2639 28.4666 20.7328C27.9978 21.2016 27.7344 21.8375 27.7344 22.5005V28.7505C27.7344 29.4136 27.9978 30.0494 28.4666 30.5183C28.9354 30.9871 29.5713 31.2505 30.2344 31.2505H32.7344C33.3974 31.2505 34.0333 30.9871 34.5021 30.5183C34.971 30.0494 35.2344 29.4136 35.2344 28.7505V20.0005ZM35.2344 20.0005C35.2344 18.0201 34.8424 16.0593 34.0807 14.2313C33.3191 12.4032 32.203 10.744 30.7969 9.34948C29.3907 7.95495 27.7224 6.85268 25.888 6.10625C24.0537 5.35982 22.0897 4.98402 20.1094 5.00052C18.1304 4.98609 16.1681 5.36342 14.3355 6.11078C12.503 6.85814 10.8365 7.96074 9.432 9.35506C8.02751 10.7494 6.91283 12.4078 6.15218 14.2349C5.39153 16.0619 4.99995 18.0215 5 20.0005V28.7505C5 29.4136 5.26339 30.0494 5.73223 30.5183C6.20107 30.9871 6.83696 31.2505 7.5 31.2505H10C10.663 31.2505 11.2989 30.9871 11.7678 30.5183C12.2366 30.0494 12.5 29.4136 12.5 28.7505V22.5005C12.5 21.8375 12.2366 21.2016 11.7678 20.7328C11.2989 20.2639 10.663 20.0005 10 20.0005H5" stroke="url(#paint0_linear_20_30799)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M35.2344 28.75V32.5C35.2344 33.8261 34.7076 35.0979 33.7699 36.0355C32.8322 36.9732 31.5605 37.5 30.2344 37.5H21.25" stroke="url(#paint1_linear_20_30799)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <linearGradient id="paint0_linear_20_30799" x1="5" y1="18.48" x2="35.2344" y2="18.48" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint1_linear_20_30799" x1="21.25" y1="33.2432" x2="35.2344" y2="33.2432" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <clipPath id="clip0_20_30799">
    <rect width="40" height="40" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
  },
  {
    id: 2,
    title: "Finance",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32.9805 12.5L7.01172 27.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.25015 22.75C5.07962 21.8434 4.99591 20.9225 5.00015 20C4.99818 16.8978 5.95909 13.8715 7.75027 11.3386C9.54145 8.80576 12.0746 6.89128 15.0002 5.85938V17.1094L5.25015 22.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19.998 5C22.6264 5.0003 25.2086 5.69123 27.4859 7.00359C29.7632 8.31594 31.6557 10.2037 32.9738 12.4776C34.2919 14.7516 34.9894 17.332 34.9963 19.9604C35.0032 22.5888 34.3194 25.1728 33.0133 27.4537C31.7073 29.7346 29.8248 31.6323 27.5544 32.9567C25.2841 34.281 22.7056 34.9856 20.0773 34.9998C17.4489 35.014 14.863 34.3373 12.5785 33.0375C10.294 31.7377 8.39116 29.8604 7.06055 27.5938" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    hoverIcon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20V5" stroke="url(#paint0_linear_25_5886)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32.9805 12.5L7.01172 27.5" stroke="url(#paint1_linear_25_5886)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.25015 22.75C5.07962 21.8434 4.99591 20.9225 5.00015 20C4.99818 16.8978 5.95909 13.8715 7.75027 11.3386C9.54145 8.80576 12.0746 6.89128 15.0002 5.85938V17.1094L5.25015 22.75Z" stroke="url(#paint2_linear_25_5886)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19.998 5C22.6264 5.0003 25.2086 5.69123 27.4859 7.00359C29.7632 8.31594 31.6557 10.2037 32.9738 12.4776C34.2919 14.7516 34.9894 17.332 34.9963 19.9604C35.0032 22.5888 34.3194 25.1728 33.0133 27.4537C31.7073 29.7346 29.8248 31.6323 27.5544 32.9567C25.2841 34.281 22.7056 34.9856 20.0773 34.9998C17.4489 35.014 14.863 34.3373 12.5785 33.0375C10.294 31.7377 8.39116 29.8604 7.06055 27.5938" stroke="url(#paint3_linear_25_5886)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_25_5886" x1="20" y1="12.7027" x2="21" y2="12.7027" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint1_linear_25_5886" x1="7.01172" y1="20.2027" x2="32.9805" y2="20.2027" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint2_linear_25_5886" x1="5" y1="14.5329" x2="15.0002" y2="14.5329" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint3_linear_25_5886" x1="7.06055" y1="20.4054" x2="34.9963" y2="20.4054" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    </defs>
    </svg>
    `,
  },
  {
    id: 3,
    title: "Human Resource",
    icon: `<svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.75 8H9.25C8.55964 8 8 8.55964 8 9.25V16.75C8 17.4404 8.55964 18 9.25 18H16.75C17.4404 18 18 17.4404 18 16.75V9.25C18 8.55964 17.4404 8 16.75 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.75 23H9.25C8.55964 23 8 23.5596 8 24.25V31.75C8 32.4404 8.55964 33 9.25 33H16.75C17.4404 33 18 32.4404 18 31.75V24.25C18 23.5596 17.4404 23 16.75 23Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M31.75 8H24.25C23.5596 8 23 8.55964 23 9.25V16.75C23 17.4404 23.5596 18 24.25 18H31.75C32.4404 18 33 17.4404 33 16.75V9.25C33 8.55964 32.4404 8 31.75 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23 23V28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23 33H28V23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28 25.5H33" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M33 30.5V33" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    hoverIcon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.25 7.5H8.75C8.05964 7.5 7.5 8.05964 7.5 8.75V16.25C7.5 16.9404 8.05964 17.5 8.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V8.75C17.5 8.05964 16.9404 7.5 16.25 7.5Z" stroke="url(#paint0_linear_25_5950)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.25 22.5H8.75C8.05964 22.5 7.5 23.0596 7.5 23.75V31.25C7.5 31.9404 8.05964 32.5 8.75 32.5H16.25C16.9404 32.5 17.5 31.9404 17.5 31.25V23.75C17.5 23.0596 16.9404 22.5 16.25 22.5Z" stroke="url(#paint1_linear_25_5950)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M31.25 7.5H23.75C23.0596 7.5 22.5 8.05964 22.5 8.75V16.25C22.5 16.9404 23.0596 17.5 23.75 17.5H31.25C31.9404 17.5 32.5 16.9404 32.5 16.25V8.75C32.5 8.05964 31.9404 7.5 31.25 7.5Z" stroke="url(#paint2_linear_25_5950)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.5 22.5V27.5" stroke="url(#paint3_linear_25_5950)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.5 32.5H27.5V22.5" stroke="url(#paint4_linear_25_5950)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5 25H32.5" stroke="url(#paint5_linear_25_5950)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32.5 30V32.5" stroke="url(#paint6_linear_25_5950)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_25_5950" x1="7.5" y1="12.6351" x2="17.5" y2="12.6351" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint1_linear_25_5950" x1="7.5" y1="27.6351" x2="17.5" y2="27.6351" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint2_linear_25_5950" x1="22.5" y1="12.6351" x2="32.5" y2="12.6351" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint3_linear_25_5950" x1="22.5" y1="25.0676" x2="23.5" y2="25.0676" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint4_linear_25_5950" x1="22.5" y1="27.6351" x2="27.5" y2="27.6351" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint5_linear_25_5950" x1="27.5" y1="25.5135" x2="32.5" y2="25.5135" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint6_linear_25_5950" x1="32.5" y1="31.2838" x2="33.5" y2="31.2838" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    </defs>
    </svg>
    `,
  },
  {
    id: 4,
    title: "Supply Chain",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 25H32.5C32.8315 25 33.1495 24.8683 33.3839 24.6339C33.6183 24.3995 33.75 24.0815 33.75 23.75V7.5C33.75 7.16848 33.6183 6.85054 33.3839 6.61612C33.1495 6.3817 32.8315 6.25 32.5 6.25H15C14.6685 6.25 14.3505 6.3817 14.1161 6.61612C13.8817 6.85054 13.75 7.16848 13.75 7.5V8.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.25 21.25L12.5 25L16.25 28.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5 15H7.5C7.16848 15 6.85054 15.1317 6.61612 15.3661C6.3817 15.6005 6.25 15.9185 6.25 16.25V32.5C6.25 32.8315 6.3817 33.1495 6.61612 33.3839C6.85054 33.6183 7.16848 33.75 7.5 33.75H25C25.3315 33.75 25.6495 33.6183 25.8839 33.3839C26.1183 33.1495 26.25 32.8315 26.25 32.5V31.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23.75 18.75L27.5 15L23.75 11.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    hoverIcon: `<svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 25.5H33C33.3315 25.5 33.6495 25.3683 33.8839 25.1339C34.1183 24.8995 34.25 24.5815 34.25 24.25V8C34.25 7.66848 34.1183 7.35054 33.8839 7.11612C33.6495 6.8817 33.3315 6.75 33 6.75H15.5C15.1685 6.75 14.8505 6.8817 14.6161 7.11612C14.3817 7.35054 14.25 7.66848 14.25 8V9.25" stroke="url(#paint0_linear_25_5943)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.75 21.75L13 25.5L16.75 29.25" stroke="url(#paint1_linear_25_5943)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28 15.5H8C7.66848 15.5 7.35054 15.6317 7.11612 15.8661C6.8817 16.1005 6.75 16.4185 6.75 16.75V33C6.75 33.3315 6.8817 33.6495 7.11612 33.8839C7.35054 34.1183 7.66848 34.25 8 34.25H25.5C25.8315 34.25 26.1495 34.1183 26.3839 33.8839C26.6183 33.6495 26.75 33.3315 26.75 33V31.75" stroke="url(#paint2_linear_25_5943)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24.25 19.25L28 15.5L24.25 11.75" stroke="url(#paint3_linear_25_5943)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_25_5943" x1="13" y1="16.3784" x2="34.25" y2="16.3784" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint1_linear_25_5943" x1="13" y1="25.6014" x2="16.75" y2="25.6014" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint2_linear_25_5943" x1="6.75" y1="25.1284" x2="28" y2="25.1284" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint3_linear_25_5943" x1="24.25" y1="15.6014" x2="28" y2="15.6014" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    </defs>
    </svg>
    `,
  },
  {
    id: 5,
    title: "Sales",
    icon: `<svg viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36.75 10.5H4.25C3.55964 10.5 3 11.0596 3 11.75V29.25C3 29.9404 3.55964 30.5 4.25 30.5H36.75C37.4404 30.5 38 29.9404 38 29.25V11.75C38 11.0596 37.4404 10.5 36.75 10.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 10.5V8.25C7 7.55964 7.55964 7 8.25 7H40.75C41.4404 7 42 7.55964 42 8.25V25.75C42 26.4404 41.4404 27 40.75 27H38" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20.5 25.5C23.2614 25.5 25.5 23.2614 25.5 20.5C25.5 17.7386 23.2614 15.5 20.5 15.5C17.7386 15.5 15.5 17.7386 15.5 20.5C15.5 23.2614 17.7386 25.5 20.5 25.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28 10.5L38 19.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28 30.5L38 21.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13 10.5L3 19.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13 30.5L3 21.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    hoverIcon: `<svg viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36.25 10H3.75C3.05964 10 2.5 10.5596 2.5 11.25V28.75C2.5 29.4404 3.05964 30 3.75 30H36.25C36.9404 30 37.5 29.4404 37.5 28.75V11.25C37.5 10.5596 36.9404 10 36.25 10Z" stroke="url(#paint0_linear_25_5933)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.5 10V7.75C6.5 7.05964 7.05964 6.5 7.75 6.5H40.25C40.9404 6.5 41.5 7.05964 41.5 7.75V25.25C41.5 25.9404 40.9404 26.5 40.25 26.5H37.5" stroke="url(#paint1_linear_25_5933)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z" stroke="url(#paint2_linear_25_5933)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5 10L37.5 18.75" stroke="url(#paint3_linear_25_5933)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5 30L37.5 21.25" stroke="url(#paint4_linear_25_5933)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5 10L2.5 18.75" stroke="url(#paint5_linear_25_5933)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5 30L2.5 21.25" stroke="url(#paint6_linear_25_5933)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_25_5933" x1="2.5" y1="20.2703" x2="37.5" y2="20.2703" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint1_linear_25_5933" x1="6.5" y1="16.7703" x2="41.5" y2="16.7703" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint2_linear_25_5933" x1="15" y1="20.1351" x2="25" y2="20.1351" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint3_linear_25_5933" x1="27.5" y1="14.4932" x2="37.5" y2="14.4932" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint4_linear_25_5933" x1="27.5" y1="25.7432" x2="37.5" y2="25.7432" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint5_linear_25_5933" x1="2.5" y1="14.4932" x2="12.5" y2="14.4932" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    <linearGradient id="paint6_linear_25_5933" x1="2.5" y1="25.7432" x2="12.5" y2="25.7432" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00469F"/>
    <stop offset="1" stop-color="#1E79D6"/>
    </linearGradient>
    </defs>
    </svg>
    `,
  },
];

const dataScienceAnalysisData = {
  img: "/images/divisions/data_science/real-time-data-banner.png",
  features: [
    {
      id: 0,
      title: "Actionable Insights",
      img: "/images/divisions/data_science/real_time_data_analysis/icon_0.svg",
    },
    {
      id: 1,
      title: "Informed Decisions",
      img: "/images/divisions/data_science/real_time_data_analysis/icon_1.svg",
    },
    {
      id: 2,
      title: "Data-Driven Operations",
      img: "/images/divisions/data_science/real_time_data_analysis/icon_2.svg",
    },
  ],
};
export { dataScienceControlPanelData, dataScienceAnalysisData };

import "../styles/globals.css";
import "../styles/swiperJs.css";
import "../styles/svg-styles.css";
import "../styles/purpose.css";
import "../styles/animations.css";
import "../styles/scrollbar.css";
import "../styles/web-technologies.css";
import "../styles/gradient-bg.css";
import "../styles/border-gradient.css";
import "../styles/investments-banner.css";

// important imports for swiper slider
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// import "rsuite/dist/rsuite.min.css";

// country code
import "react-phone-input-2/lib/style.css";

// notification alert
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#f8f8fa]">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

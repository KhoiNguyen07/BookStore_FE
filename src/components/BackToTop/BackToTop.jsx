import React, {useState, useEffect} from "react";
import {FaArrowUp} from "react-icons/fa";
import {useLanguage} from "~/contexts/LanguageContext";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {t} = useLanguage();

  // Show button only when user scrolls upward and passed a threshold
  const lastScrollY = React.useRef(
    typeof window !== "undefined" ? window.pageYOffset : 0
  );
  const threshold = 300;

  const handleScroll = () => {
    const currentY = window.pageYOffset || 0;

    // hide if near top
    if (currentY <= 100) {
      setIsVisible(false);
      lastScrollY.current = currentY;
      return;
    }

    // show only when scrolled past threshold AND user is scrolling up
    if (currentY < lastScrollY.current && currentY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    lastScrollY.current = currentY;
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // initialize lastScrollY
    lastScrollY.current = window.pageYOffset || 0;
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50">
      <div
        className={
          "transform transition-all duration-300 ease-out " +
          (isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none")
        }
      >
        <button
          onClick={scrollToTop}
          className="group relative bg-black text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-gray-800 transition-transform duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 touch-manipulation"
          aria-label={t("backToTop")}
        >
          {/* Icon */}
          <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            <div className="bg-black text-white text-xs font-medium py-1 px-2 rounded whitespace-nowrap">
              {t("backToTop")}
            </div>
            {/* Arrow */}
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-l-4 border-l-black border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
          </div>

          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150"></div>
        </button>
      </div>
    </div>
  );
};

export default BackToTop;

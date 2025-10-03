import React, {useState, useEffect} from "react";
import {useLanguage} from "~/contexts/LanguageContext";

const SpecialOffer = () => {
  const {t} = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set target date (e.g., 7 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({days, hours, minutes, seconds});
      } else {
        setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0});
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Book mockup */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Book stack */}
              <div className="relative transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-2xl relative overflow-hidden">
                  {/* Book cover design */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="text-white text-xs font-medium mb-2">
                      HIGH QUALITY
                    </div>
                    <div className="text-white text-2xl sm:text-3xl font-bold leading-tight">
                      BOOK
                      <br />
                      <span className="text-orange-200">COVERS</span>
                      <br />
                      <span className="text-lg font-normal">MOCKUP</span>
                    </div>
                  </div>

                  {/* Book details */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white rounded p-3 mb-3 text-xs">
                      <div className="font-bold text-gray-800">
                        100% EDITABLE
                      </div>
                      <div className="text-gray-600">
                        SMART OBJECT REPLACEMENT
                      </div>
                      <div className="text-gray-600">INSTANT EFFECT</div>
                    </div>
                    <div className="text-white text-xs">BOOK COVERS MOCKUP</div>
                  </div>
                </div>
              </div>

              {/* Additional items */}
              <div className="absolute -bottom-4 -right-8 w-16 h-4 bg-gray-800 rounded transform rotate-45"></div>
              <div className="absolute -bottom-8 right-4 w-12 h-12 bg-gray-600 rounded"></div>
            </div>
          </div>

          {/* Right side - Special offer content */}
          <div className="text-center lg:text-left space-y-6">
            <div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-2">
                {t("specialOffer.label") || "Special Offers"}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                <span className="text-red-500">
                  {t("specialOffer.title") || "All books are 50% off now!"}
                </span>
                <br />
                <span className="text-red-400">
                  {t("specialOffer.subtitle") || "Don't miss such a deal!"}
                </span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                {t("specialOffer.description") ||
                  "You will learn how to animate shapes like circles, lines, and polygons. You'll also learn how to animate CSS properties like color and size."}
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto lg:mx-0">
              {[
                {value: timeLeft.days, label: t("countdown.days") || "Days"},
                {value: timeLeft.hours, label: t("countdown.hours") || "Hour"},
                {
                  value: timeLeft.minutes,
                  label: t("countdown.minutes") || "Mint",
                },
                {
                  value: timeLeft.seconds,
                  label: t("countdown.seconds") || "Sec",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md border-2 border-gray-100">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {formatTime(item.value)}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mt-2 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors duration-300 text-sm font-medium uppercase tracking-wider">
                {t("specialOffer.button") || "Explore More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

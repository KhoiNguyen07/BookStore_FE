import React from "react";
import {FaInstagram, FaYoutube, FaPinterest, FaTwitter} from "react-icons/fa";
import {IoMdSend} from "react-icons/io";
import {useLanguage} from "~/contexts/LanguageContext";

const Footer = () => {
  const {t} = useLanguage();
  // Footer columns data with translations
  const footerColumns = [
    {
      title: t("footer.info.title"),
      links: [
        t("footer.info.customService"),
        t("footer.info.faqs"),
        t("footer.info.orderTracking"),
        t("footer.info.contactUs"),
        t("footer.info.events"),
        t("footer.info.popular"),
      ],
    },
    {
      title: t("footer.services.title"),
      links: [
        t("footer.services.sitemap"),
        t("footer.services.privacyPolicy"),
        t("footer.services.yourAccount"),
        t("footer.services.advancedSearch"),
        t("footer.services.termCondition"),
        t("footer.services.contactUs"),
      ],
    },
    {
      title: t("footer.account.title"),
      links: [
        t("footer.account.aboutUs"),
        t("footer.account.deliveryInfo"),
        t("footer.account.privacyPolicy"),
        t("footer.account.discount"),
        t("footer.account.customService"),
        t("footer.account.termCondition"),
      ],
    },
  ];

  // Social media icons data
  const socialIcons = [
    {icon: FaInstagram, href: "#"},
    {icon: FaYoutube, href: "#"},
    {icon: FaPinterest, href: "#"},
    {icon: FaTwitter, href: "#"},
  ];

  // Payment methods data
  const paymentMethods = [
    {name: "AMEX", bgColor: "bg-gray-300", textColor: "text-gray-600"},
    {name: "VISA", bgColor: "bg-blue-600", textColor: "text-white"},
    {name: "Paypal", bgColor: "bg-blue-800", textColor: "text-white"},
  ];
  return (
    <footer className="mt-20 bg-gray-100 pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t("footer.company")}
            </h3>
            <div className="space-y-2 text-sm sm:text-base text-gray-600">
              <p className="font-semibold text-gray-800">
                {t("footer.callFree")}
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                1800 68 68
              </p>
              <div className="mt-3 sm:mt-4 space-y-1">
                <p>{t("footer.address")}</p>
                <p>{t("footer.email")}</p>
                <p>{t("footer.fax")}</p>
              </div>
            </div>
          </div>

          {/* Dynamic Footer Columns */}
          {footerColumns.map((column, index) => (
            <div key={index} className="sm:col-span-1">
              <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg">
                {column.title}
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors duration-200 inline-block py-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* NEWSLETTER Column */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg">
              {t("footer.newsletter.title")}
            </h4>
            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
              {t("footer.newsletter.description")}
            </p>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row mb-4 sm:mb-6">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:border-gray-500 text-sm sm:text-base mb-2 sm:mb-0"
              />
              <button
                className="bg-black text-white px-3 sm:px-4 py-2 sm:py-3 rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
                aria-label={t("footer.newsletter.subscribe")}
              >
                <IoMdSend className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 sm:gap-3">
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 touch-manipulation"
                  >
                    <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
            {/* Copyright */}
            <div className="text-sm sm:text-base text-gray-600 text-center lg:text-left">
              <p>{t("footer.copyright")}</p>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className={`w-12 h-8 sm:w-14 sm:h-10 ${method.bgColor} rounded flex items-center justify-center`}
                >
                  <span
                    className={`text-xs sm:text-sm font-bold ${method.textColor}`}
                  >
                    {method.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

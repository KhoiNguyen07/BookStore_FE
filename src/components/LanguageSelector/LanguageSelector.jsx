import React, {useState} from "react";
import {IoChevronDown} from "react-icons/io5";
import {useLanguage} from "~/contexts/LanguageContext";

const LanguageSelector = ({className = "", variant = "header"}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {currentLanguage, changeLanguage} = useLanguage();

  const languages = [
    {code: "en", name: "English", flag: "🇺🇸"},
    {code: "vi", name: "Tiếng Việt", flag: "🇻🇳"},
  ];

  const handleLanguageSelect = (language) => {
    changeLanguage(language.code);
    setIsOpen(false);
    console.log(`Language changed to: ${language.name}`);
  };

  const selectedLang = languages.find((lang) => lang.code === currentLanguage);

  // Sidebar version (for mobile navigation)
  if (variant === "sidebar") {
    return (
      <div className={`relative ${className}`}>
        {/* Language Selector Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Select language"
        >
          <div className="flex items-center gap-2">
            <span className="text-base">{selectedLang?.flag}</span>
            <span className="text-sm font-medium">{selectedLang?.name}</span>
          </div>
          <IoChevronDown
            className={`text-sm transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="mt-2 bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
            <div className="py-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                    currentLanguage === language.code
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  <span className="text-base">{language.flag}</span>
                  <span className="text-sm font-medium">{language.name}</span>
                  {currentLanguage === language.code && (
                    <span className="ml-auto text-blue-600 text-sm">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Header version (for desktop and mobile header)
  return (
    <div className={`relative ${className}`}>
      {/* Language Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 text-white hover:text-gray-300 transition-colors rounded-md"
        aria-label="Select language"
      >
        <span className="text-xs sm:text-sm">{selectedLang?.flag}</span>
        <span className="text-xs sm:text-sm font-medium hidden xs:inline">
          {currentLanguage.toUpperCase()}
        </span>
        <IoChevronDown
          className={`text-xs sm:text-sm transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-36 sm:w-44 bg-white rounded-lg shadow-lg border border-gray-200 z-20 overflow-hidden">
            <div className="py-1 sm:py-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language)}
                  className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                    currentLanguage === language.code
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  <span className="text-sm sm:text-base">{language.flag}</span>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-xs sm:text-sm font-medium truncate">
                      {language.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {language.code.toUpperCase()}
                    </span>
                  </div>
                  {currentLanguage === language.code && (
                    <span className="text-blue-600 text-sm">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;

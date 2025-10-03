import React, {createContext, useContext, useState, useEffect} from "react";
import {translations} from "../locales";

// Create Language Context
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Language Provider Component
export const LanguageProvider = ({children}) => {
  // Get saved language from localStorage or default to 'en'
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "en";
    }
    return "en";
  });

  // Save language to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", currentLanguage);
    }
  }, [currentLanguage]);

  // Function to change language
  const changeLanguage = (languageCode) => {
    if (translations[languageCode]) {
      setCurrentLanguage(languageCode);
    }
  };

  // Function to get translation by key path (e.g., 'nav.home')
  const t = (keyPath) => {
    const keys = keyPath.split(".");
    let translation = translations[currentLanguage];

    for (const key of keys) {
      if (
        translation &&
        typeof translation === "object" &&
        key in translation
      ) {
        translation = translation[key];
      } else {
        // Fallback to English if translation not found
        let fallback = translations.en;
        for (const fallbackKey of keys) {
          if (
            fallback &&
            typeof fallback === "object" &&
            fallbackKey in fallback
          ) {
            fallback = fallback[fallbackKey];
          } else {
            return keyPath; // Return key if even fallback is not found
          }
        }
        return fallback;
      }
    }

    return translation || keyPath;
  };

  // Check if current language is RTL (for future use)
  const isRTL = currentLanguage === "ar" || currentLanguage === "he";

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    isRTL,
    availableLanguages: Object.keys(translations),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

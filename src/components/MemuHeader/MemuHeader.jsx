import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {CiSearch, CiUser, CiHeart, CiShoppingCart} from "react-icons/ci";
import {RiMenu2Line} from "react-icons/ri";
import {IoClose, IoChevronForward} from "react-icons/io5";
import LanguageSelector from "~/components/LanguageSelector/LanguageSelector";
import {useLanguage} from "~/contexts/LanguageContext";

const MenuHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {t} = useLanguage();

  // Navigation items with translation keys
  const navigationItems = [
    {key: "home", path: "/", label: t("nav.home")},
    {key: "about", path: "/about", label: t("nav.about")},
    {key: "shop", path: "/shop", label: t("nav.shop")},
    {key: "blog", path: "/blog", label: t("nav.blog")},
    {key: "contact", path: "/contact", label: t("nav.contact")},
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const HeaderContent = ({className = ""}) => (
    <div className={`w-full container px-4 sm:px-6 py-4 sm:py-6 ${className}`}>
      <div className="flex items-center justify-between items-center">
        {/* Left - Mobile Hamburger + Desktop Logo */}
        <div className="flex items-center gap-3 w-1/5">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white text-2xl hover:text-gray-300 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <IoClose /> : <RiMenu2Line />}
          </button>

          {/* Desktop Logo - shown only on lg+ and placed on the left */}
          <div className="hidden lg:flex items-center">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-3xl font-bold tracking-wider">
              BOOKET
            </h1>
          </div>
        </div>

        {/* Center - Mobile Logo (centered) and Desktop Navigation (center) */}
        <div className="flex justify-center items-center w-3/5">
          {/* Mobile: show logo centered */}
          <div className="flex lg:hidden justify-center w-full">
            <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-wider">
              BOOKET
            </h1>
          </div>

          {/* Desktop: show navigation centered */}
          <div className="hidden lg:flex justify-center items-center gap-6 xl:gap-8">
            {navigationItems.map((item) => (
              <div key={item.key}>
                <Link
                  to={item.path}
                  className="text-white hover:text-gray-300 transition-colors font-medium text-sm xl:text-base uppercase"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Search, Heart & Cart */}
        <div className="flex justify-end items-center gap-3 sm:gap-4 w-1/5">
          <CiSearch className="text-white text-xl sm:text-2xl hover:text-gray-300 cursor-pointer transition-colors" />
          <CiHeart className="text-white text-xl sm:text-2xl hover:text-gray-300 cursor-pointer transition-colors" />
          <div className="relative">
            <CiShoppingCart className="text-white text-xl sm:text-2xl hover:text-gray-300 cursor-pointer transition-colors" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
              2
            </span>
          </div>

          {/* Additional icons for larger screens */}
          <div className="hidden lg:flex gap-3 items-center">
            <CiUser className="text-white text-2xl hover:text-gray-300 cursor-pointer transition-colors" />
            <LanguageSelector variant="header" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="bg-black px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <RiMenu2Line className="text-white text-xl" />
            <span className="text-white font-medium">MENU</span>
          </div>
          <div className="flex items-center gap-3">
            {/* Language Selector in Header */}
            <div className="text-white">
              <LanguageSelector variant="header" />
            </div>
            <div className="bg-gray-700 p-2 rounded-full">
              <CiUser className="text-white text-xl" />
            </div>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="py-2">
          {/* Navigation Links */}
          {/* Mobile Navigation Links */}
          {navigationItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className="flex items-center justify-between px-6 py-4 text-gray-800 hover:bg-gray-50 transition-colors border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-medium">{item.label}</span>
              <IoChevronForward className="text-gray-400" />
            </Link>
          ))}
        </div>
      </div>

      {/* Top absolute header (hidden on mobile when sidebar open) */}
      <div
        className={`${
          isMobileMenuOpen ? "hidden" : "block"
        } absolute top-0 left-0 right-0 z-10 bg-transparent border-b border-white/20`}
      >
        <HeaderContent />
      </div>

      {/* Fixed header that appears on scroll (hidden on mobile when sidebar open) */}
      <div
        className={`${
          isMobileMenuOpen ? "hidden" : "block"
        } fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isVisible
            ? "bg-black/95 backdrop-blur-sm shadow-lg transform translate-y-0 opacity-100"
            : "bg-transparent transform -translate-y-full opacity-0"
        }`}
      >
        <HeaderContent className="py-3 sm:py-4" />
      </div>
    </>
  );
};

export default MenuHeader;

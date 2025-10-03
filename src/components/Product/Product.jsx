import React from "react";
import {FiShoppingBag, FiSearch} from "react-icons/fi";
import {AiOutlineHeart} from "react-icons/ai";
import {useLanguage} from "~/contexts/LanguageContext";

const Product = ({
  image,
  altImage = null,
  title,
  salePrice,
  originalPrice,
  isOnSale = false,
  className = "",
}) => {
  const {t} = useLanguage();

  const actionButtons = [
    {Icon: FiShoppingBag, label: t("products.addToCart")},
    {Icon: FiSearch, label: t("products.quickView")},
    {Icon: AiOutlineHeart, label: t("products.addToWishlist")},
  ];
  return (
    <div
      className={`group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 relative ${className}`}
    >
      {/* Sale ribbon */}
      {isOnSale &&
        (() => {
          const discount =
            originalPrice && originalPrice > salePrice
              ? Math.round(((originalPrice - salePrice) / originalPrice) * 100)
              : null;

          return (
            <div
              className="absolute top-2 sm:top-3 md:top-4 lg:top-5 -right-3 sm:-right-4 md:-right-5 translate-y-3 sm:translate-y-4 md:translate-y-5 z-20 pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-32 sm:w-36 md:w-40 lg:w-44 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white text-xs sm:text-xs md:text-xs font-semibold py-1 shadow-lg transform translate-x-4 sm:translate-x-5 md:translate-x-6 -translate-y-2 rotate-45">
                <div className="text-center tracking-widest">
                  {discount
                    ? `${t("products.sale")} -${discount}%`
                    : t("products.sale")}
                </div>
              </div>
            </div>
          );
        })()}
      <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-gray-100">
        {/* Two layered images for smooth crossfade on hover */}
        <div className="absolute inset-0 w-full h-full">
          {/* Ảnh chính */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover 
               transition-all duration-700 ease-in-out
               opacity-100 
               group-hover:opacity-0 group-hover:scale-105"
          />

          {/* Ảnh hover */}
          {altImage && (
            <img
              src={altImage}
              alt={`${title} - alternate`}
              className="absolute inset-0 w-full h-full object-cover 
                 transition-all duration-700 ease-in-out
                 opacity-0 
                 group-hover:opacity-100 group-hover:scale-100"
            />
          )}
        </div>

        {/* Hover overlay that triggers image transitions using group hover */}
        <div className="absolute inset-0 pointer-events-none"></div>

        {/* Dim overlay to make icons pop on hover */}
        <div
          className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-colors duration-300"
          aria-hidden="true"
        ></div>

        {/* Action icons (appear on hover) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 sm:bottom-8 md:bottom-10 z-30 pointer-events-none">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-auto">
            {actionButtons.map(({Icon, label}, idx) => (
              <div key={idx} className="relative">
                <button
                  aria-label={label}
                  className="peer w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black touch-manipulation"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Tooltip: slides down from above smoothly on hover/focus */}
                <div className="absolute left-1/2 w-20 sm:w-24 text-center -top-12 sm:-top-14 -translate-x-1/2 transform opacity-0 -translate-y-2 peer-hover:opacity-100 peer-focus:opacity-100 peer-hover:translate-y-0 peer-focus:translate-y-0 transition-all duration-200 pointer-events-none">
                  <div className="bg-black text-white text-xs font-medium py-1 px-2 rounded">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 text-center">
        {/* Title */}
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight line-clamp-2">
          {title}
        </h3>

        {/* Price */}
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <span className="text-lg sm:text-xl font-bold text-red-500">
            ${salePrice}
          </span>
          {originalPrice && originalPrice !== salePrice && (
            <span className="text-base sm:text-lg text-gray-400 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

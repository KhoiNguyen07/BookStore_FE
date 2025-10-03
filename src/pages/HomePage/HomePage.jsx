import React from "react";
import MenuHeader from "~/components/MemuHeader/MemuHeader";
import Button from "~/components/Buttont/Button";
import imgHome1 from "~/assets/images/home_1.webp";
import imgHome2 from "~/assets/images/home_2.webp";
import imgBook1 from "~/assets/images/book1.webp";
import imgBook2 from "~/assets/images/book2.webp";
import Footer from "~/components/Footer/Footer";
import Product from "~/components/Product/Product";
import BackToTop from "~/components/BackToTop/BackToTop";
import {useLanguage} from "~/contexts/LanguageContext";

const HomePage = () => {
  const {t} = useLanguage();

  // Categories data with translation keys
  const categories = [
    {key: "horror", label: t("categories.horror")},
    {key: "scienceFiction", label: t("categories.scienceFiction")},
    {key: "romance", label: t("categories.romance")},
    {key: "nonFiction", label: t("categories.nonFiction")},
  ];
  return (
    <div className="min-h-screen">
      {/* Header - Bao gồm cả transparent và sticky */}
      <section>
        <MenuHeader />
      </section>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black flex items-end py-12 sm:py-16 md:py-20 justify-center">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          <source
            src="https://sample-videos.com/zip/10/mp4/480/mp4-0.5MB.mp4"
            type="video/mp4"
          />
          {/* Fallback for browsers that don't support the video tag */}
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute left-4 sm:left-6 md:left-10 lg:left-16 bottom-12 sm:bottom-16 md:bottom-20 z-10 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl pr-4 sm:pr-6 md:pr-10 lg:pr-16">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-tight text-left">
              {t("hero.title")}
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-left">
              {t("hero.subtitle")}
            </p>
            <div className="pt-2 sm:pt-4">
              <Button content={t("hero.shopNow")} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group relative block rounded-lg overflow-hidden shadow-lg h-64 sm:h-80 md:h-96 lg:h-[420px] xl:h-[480px]">
              {/* Background Image */}
              <img
                src={imgHome1}
                alt="Short story"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-8 text-white transition-all duration-500 ease-in-out group-hover:translate-y-[-8px]">
                <div className="uppercase text-xs sm:text-sm tracking-wider text-white/80 mb-2 opacity-90">
                  Short story
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold leading-snug mb-3 sm:mb-4">
                  Stories That Unite, Books That Inspire
                </h3>

                {/* Button */}
                <div>
                  <Button content={t("hero.shopNow")} />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative block rounded-lg overflow-hidden shadow-lg h-64 sm:h-80 md:h-96 lg:h-[420px] xl:h-[480px]">
              {/* Background Image */}
              <img
                src={imgHome2}
                alt="Historical Fiction"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-8 text-white transition-all duration-500 ease-in-out group-hover:translate-y-[-8px]">
                <div className="uppercase text-xs sm:text-sm tracking-wider text-white/80 mb-2 opacity-90">
                  Historical Fiction
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold leading-snug mb-3 sm:mb-4">
                  Read Together, Rise Together
                </h3>

                {/* Button */}
                <div>
                  <Button content={t("hero.shopNow")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Categories Navigation */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
              {categories.map((category, idx) => (
                <li
                  key={category.key}
                  className="relative text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold px-2 sm:px-3 lg:px-4 py-2 cursor-pointer transition-colors duration-200 text-gray-800 group text-center"
                  style={{fontFamily: "inherit"}}
                >
                  <span className="relative z-10">{category.label}</span>
                  {/* Underline effect */}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] sm:h-[3px] bg-black rounded origin-center scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mb-8 sm:mb-12">
            <Product
              image={imgBook1}
              altImage={imgBook2}
              title={"Book Title 1"}
              salePrice={19.99}
              originalPrice={24.99}
              isOnSale={true}
            />
            <Product
              image={imgBook1}
              altImage={imgBook2}
              title={"Book Title 2"}
              salePrice={19.99}
              originalPrice={24.99}
              isOnSale={true}
            />
            <Product
              image={imgBook1}
              altImage={imgBook2}
              title={"Book Title 3"}
              salePrice={19.99}
              originalPrice={24.99}
              isOnSale={true}
            />
            <Product
              image={imgBook1}
              altImage={imgBook2}
              title={"Book Title 4"}
              salePrice={19.99}
              originalPrice={24.99}
              isOnSale={true}
            />
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <Button content={"LOAD MORE"} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="mt-12 sm:mt-16 lg:mt-20">
        <Footer />
      </section>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default HomePage;

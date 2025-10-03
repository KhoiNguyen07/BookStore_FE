import React from "react";
import {motion} from "framer-motion";
import MenuHeader from "~/components/MemuHeader/MemuHeader";
import Button from "~/components/Button/Button";
import imgHome1 from "~/assets/images/homepage/home_1.webp";
import imgHome2 from "~/assets/images/homepage/home_2.webp";
import imgBook1 from "~/assets/images/homepage/book1.webp";
import imgBook2 from "~/assets/images/homepage/book2.webp";

import Footer from "~/components/Footer/Footer";
import Product from "~/components/Product/Product";
import BackToTop from "~/components/BackToTop/BackToTop";
import SpecialOffer from "~/components/SpecialOffer/SpecialOffer";
import {useLanguage} from "~/contexts/LanguageContext";
import Policy from "~/components/Policy/Policy";
import Blog from "~/components/Blog/Blog";
import Gallery from "./Gallery/Gallery";

const HomePage = () => {
  const {t} = useLanguage();

  // Categories data with translation keys
  const categories = [
    {key: "horror", label: t("categories.horror")},
    {key: "scienceFiction", label: t("categories.scienceFiction")},
    {key: "romance", label: t("categories.romance")},
    {key: "nonFiction", label: t("categories.nonFiction")},
  ];

  // Animation variants
  const fadeInUp = {
    initial: {opacity: 0, y: 60},
    animate: {opacity: 1, y: 0},
    transition: {duration: 1.6, ease: "easeOut"},
  };

  const fadeInLeft = {
    initial: {opacity: 0, x: -60},
    animate: {opacity: 1, x: 0},
    transition: {duration: 1.6, ease: "easeOut"},
  };

  const fadeInRight = {
    initial: {opacity: 0, x: 60},
    animate: {opacity: 1, x: 0},
    transition: {duration: 1.6, ease: "easeOut"},
  };

  const scaleIn = {
    initial: {opacity: 0, scale: 0.8},
    animate: {opacity: 1, scale: 1},
    transition: {duration: 1.6, ease: "easeOut"},
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0},
    transition: {duration: 1.2, ease: "easeOut"},
  };

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

        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 3}}
        ></motion.div>

        <motion.div
          className="absolute container w-full"
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 2, delay: 1}}
        >
          <div className="w-2/3">
            <div className="space-y-4 sm:space-y-6">
              <motion.h1
                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-tight text-left"
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1.6, delay: 1.6}}
              >
                {t("hero.title")}
              </motion.h1>
              <motion.p
                className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-left"
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1.6, delay: 2.2}}
              >
                {t("hero.subtitle")}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* New promotional section - heading left, overlapping images right */}
      <motion.section
        className="py-16"
        initial="initial"
        whileInView="animate"
        viewport={{once: true, amount: 0.3}}
      >
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            variants={staggerContainer}
          >
            {/* Left: text */}
            <motion.div className="lg:col-span-6" variants={fadeInLeft}>
              <div className="max-w-lg">
                <motion.div
                  className="uppercase text-sm text-gray-500 tracking-wider mb-3"
                  variants={staggerItem}
                >
                  Creative Vision
                </motion.div>
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
                  variants={staggerItem}
                >
                  We Collect & Publish Books
                </motion.h2>
                <motion.p className="text-gray-600 mb-6" variants={staggerItem}>
                  Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit sed quia.
                </motion.p>
                <motion.div variants={staggerItem}>
                  <Button content={t("hero.shopNow")} />
                </motion.div>
              </div>
            </motion.div>

            {/* Right: overlapping images */}
            <motion.div className="lg:col-span-6" variants={fadeInRight}>
              <div className="relative w-full h-80 sm:h-96 md:h-[420px] lg:h-[480px] group">
                {/* Top image (back) */}
                <motion.img
                  src={imgHome2}
                  alt="books shelf"
                  className="absolute right-0 top-0 w-2/3 h-2/3 object-cover rounded shadow-md border border-white/30"
                  whileHover={{
                    x: 24,
                    y: -8,
                    scale: 1.05,
                    rotate: 1,
                    transition: {duration: 1.4, ease: "easeInOut"},
                  }}
                />

                {/* Foreground image (front) */}
                <motion.img
                  src={imgHome1}
                  alt="reader"
                  className="absolute -left-28 -bottom-16 w-3/4 h-3/4 object-cover rounded shadow-xl"
                  whileHover={{
                    x: 40,
                    y: -24,
                    scale: 1.05,
                    rotate: 0,
                    transition: {duration: 1.4, ease: "easeInOut"},
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* poster */}
      <motion.section
        className="mt-28"
        initial="initial"
        whileInView="animate"
        viewport={{once: true, amount: 0.3}}
        variants={scaleIn}
      >
        <SpecialOffer />
      </motion.section>

      {/* policy */}
      <motion.section
        className="mt-20"
        initial="initial"
        whileInView="animate"
        viewport={{once: true, amount: 0.3}}
        variants={fadeInUp}
      >
        <Policy />
      </motion.section>

      {/* Best Sellers */}
      <motion.section
        className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{once: true, amount: 0.2}}
      >
        <div className="lg:container mx-auto">
          {/* Categories Navigation */}
          <motion.div className="mb-8 sm:mb-12 lg:mb-16" variants={fadeInUp}>
            <motion.ul
              className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10"
              variants={staggerContainer}
            >
              {categories.map((category, idx) => (
                <motion.li
                  key={category.key}
                  className="relative text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold px-2 sm:px-3 lg:px-4 py-2 cursor-pointer transition-colors duration-200 text-gray-800 group text-center"
                  style={{fontFamily: "inherit"}}
                  variants={staggerItem}
                  whileHover={{scale: 1.05, y: -2, transition: {duration: 0.8}}}
                  whileTap={{scale: 0.95}}
                >
                  <span className="relative z-10">{category.label}</span>
                  {/* Underline effect */}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] sm:h-[3px] bg-black rounded origin-center scale-x-0 transition-transform duration-600 ease-in-out group-hover:scale-x-100"></span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mb-8 sm:mb-12"
            variants={staggerContainer}
          >
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{scale: 1.03, y: -5, transition: {duration: 0.8}}}
                transition={{duration: 0.6}}
              >
                <Product
                  image={imgBook1}
                  altImage={imgBook2}
                  title={`Book Title ${index + 1}`}
                  salePrice={19.99}
                  originalPrice={24.99}
                  isOnSale={true}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div className="flex justify-center" variants={fadeInUp}>
            <Button content={"LOAD MORE"} />
          </motion.div>
        </div>
      </motion.section>
      {/* gallery */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{once: true, amount: 0.3}}
        variants={scaleIn}
      >
        <Gallery />
      </motion.section>

      {/* blog */}
      <motion.section
        className="mt-20"
        initial="initial"
        whileInView="animate"
        viewport={{once: true, amount: 0.3}}
        variants={fadeInUp}
      >
        <Blog />
      </motion.section>

      {/* Footer */}
      <motion.section
        className="mt-12 sm:mt-16 lg:mt-20"
        initial="initial"
        whileInView="animate"
        viewport={{once: true, amount: 0.3}}
        variants={fadeInUp}
      >
        <Footer />
      </motion.section>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default HomePage;

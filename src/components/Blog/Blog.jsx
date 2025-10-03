import React from "react";
import {useLanguage} from "~/contexts/LanguageContext";
import home1 from "~/assets/images/homepage/home_1.webp";
import home2 from "~/assets/images/homepage/home_2.webp";
import book1 from "~/assets/images/homepage/book1.webp";
import book2 from "~/assets/images/homepage/book2.webp";
import Button from "~/components/Button/Button";

const POSTS = ["post1", "post2", "post3", "post4"];

const Blog = () => {
  const {t} = useLanguage();

  // sample comment counts to display next to date (can be dynamic later)
  const commentCounts = [1, 0, 1, 2];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Centered header */}
        <div className="text-center my-20">
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
            {t("blog.subtitle")}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">
            {t("blog.title")}
          </h2>
        </div>

        {/* Cards grid: 1 col mobile, 2 tablet, 3 desktop (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POSTS.map((key, idx) => (
            <article
              key={key}
              style={{["--i"]: idx}}
              className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm flex flex-col animate-fade-up"
            >
              <div className="h-56 bg-gray-100 overflow-hidden">
                <img
                  src={[home1, home2, book1, book2][idx]}
                  alt={t(`blog.${key}.title`)}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center transition-colors duration-200 hover:text-primary-600">
                  {t(`blog.${key}.title`)}
                </h3>

                <div className="text-center text-xs text-gray-500 mb-4">
                  <span>{t(`blog.${key}.date`)}</span>
                  <span className="mx-2">\u2758</span>
                  <span>
                    {commentCounts[idx]} {t("blog.comment")}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed text-center">
                  {t(`blog.${key}.excerpt`)}
                </p>

                <div className="mt-auto flex justify-center">
                  <Button content={t("blog.readMore")} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

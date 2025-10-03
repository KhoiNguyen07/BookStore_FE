import React from "react";
import g1 from "~/assets/images/homepage/gallery1.webp";
import g2 from "~/assets/images/homepage/gallery2.webp";
import g3 from "~/assets/images/homepage/gallery3.webp";
import g4 from "~/assets/images/homepage/gallery4.webp";
import g5 from "~/assets/images/homepage/gallery5.webp";
import g6 from "~/assets/images/homepage/gallery6.webp";
import g7 from "~/assets/images/homepage/gallery7.webp";
import g8 from "~/assets/images/homepage/gallery8.webp";
import g9 from "~/assets/images/homepage/gallery9.webp";
import g10 from "~/assets/images/homepage/gallery10.webp";

import {Fancybox} from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
const Gallery = () => {
  return (
    <div className=" bg-gray-100">
      <div className="flex flex-col items-center justify-center text-center py-20">
        <p className="text-gray-400 text-xl">What we offer</p>
        <h2 className="text-5xl uppercase text-black font-bold">
          Photo Gallery
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-4 px-4">
        {[g1, g2, g3, g4, g5, g6, g7, g8, g9, g10].map((src, idx) => {
          const isLarge = idx === 0 || idx === 7; // first and last -> 2x2 (4 ô vuông)
          return (
            <div
              key={idx}
              className={`relative ${
                isLarge ? "col-span-2 row-span-2" : ""
              } aspect-square overflow-hidden group`}
            >
              <img
                src={src}
                alt={`gallery-${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* overlay that fades in; text slides up from bottom on hover */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-auto">
                  {/* magnifier top-right fades in slightly after overlay */}
                  <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100">
                    <a
                      href={src}
                      data-fancybox="gallery"
                      data-caption={`Gallery ${idx + 1}`}
                      className="p-2 bg-white bg-opacity-10 rounded-full inline-flex items-center justify-center outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-7 h-7 text-white cursor-pointer"
                        aria-hidden="true"
                      >
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </a>
                  </div>

                  {/* title bottom-left slides up from below */}
                  <h3 className="absolute left-3 bottom-3 text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                    Gallery {idx + 1}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;

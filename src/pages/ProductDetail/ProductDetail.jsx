import React, {useState, useRef, useEffect} from "react";
import banner from "~/assets/images/productDetail/banner.webp";
import book1 from "~/assets/images/productDetail/book1.webp";
import MenuHeader from "~/components/MemuHeader/MemuHeader";
import RouteCurrent from "~/components/RouteCurrent/RouteCurrent";
import H1Banner from "~/components/H1Banner/H1Banner";
import Footer from "~/components/Footer/Footer";
import Product from "~/components/Product/Product";
import BtnHeartAnimation from "~/components/btnHeartAnimation/btnHeartAnimation";
import {InputNumber} from "antd";

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabWrapRef = useRef(null);
  const descBtnRef = useRef(null);
  const revBtnRef = useRef(null);
  const [underline, setUnderline] = useState({left: 0, width: 0});

  const updateUnderline = () => {
    const wrap = tabWrapRef.current;
    const activeBtn =
      activeTab === "description" ? descBtnRef.current : revBtnRef.current;
    if (!wrap || !activeBtn) return;
    const wrapRect = wrap.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    // if the tab header is horizontally scrollable, account for scrollLeft
    const scrollLeft = wrap.scrollLeft || 0;
    setUnderline({
      left: btnRect.left - wrapRect.left + scrollLeft,
      width: btnRect.width,
    });
  };

  useEffect(() => {
    // set initially and when activeTab changes
    updateUnderline();
    const onResize = () => updateUnderline();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeTab]);

  const TabHeader = () => (
    <div ref={tabWrapRef} className="w-full relative overflow-x-auto">
      <div className="flex min-w-max">
        <div
          ref={descBtnRef}
          onClick={() => setActiveTab("description")}
          className={`px-8 py-5 font-semibold cursor-pointer${
            activeTab === "description" ? "text-black" : "text-gray-600"
          }`}
        >
          Description
        </div>

        <div
          ref={revBtnRef}
          onClick={() => setActiveTab("reviews")}
          className={`px-8 py-5 font-semibold cursor-pointer ${
            activeTab === "reviews" ? "text-black" : "text-gray-600"
          }`}
        >
          Reviews (1)
        </div>
      </div>

      {/* sliding underline */}
      <div
        aria-hidden
        className="absolute bottom-0 h-0.5 bg-black transition-all duration-300"
        style={{left: underline.left, width: underline.width}}
      />
    </div>
  );
  return (
    <div>
      {/* header */}
      <section style={{position: "relative", zIndex: 20}}>
        <MenuHeader />
      </section>
      {/* reusable H1 banner */}
      <H1Banner
        img={banner}
        title={"We help you find your book"}
        height={750}
        fixed={true}
        overlayOpacity={30}
      />
      {/* route */}
      <section>
        <RouteCurrent
          items={[
            {label: "Home", path: "/"},
            {label: "Product", path: "/product", current: true},
          ]}
        />
      </section>
      {/* content */}
      <section className="py-12">
        <div className="container">
          {/* Use responsive grid: stack on small screens, two columns on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 items-start">
            <div className="md:col-span-2">
              <img src={book1} alt="" className="w-full object-cover" />
            </div>
            {/* right: info */}
            <div className="md:col-span-3">
              <h1 className="text-3xl font-bold">Enough About Me</h1>
              <p className="text-gray-600 mt-2">
                Author: <span className="font-medium">Richard Mann</span>
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6">
                <div>
                  <div className="text-3xl font-bold">$13.99 – $22.00</div>
                  <p className="text-gray-600 mt-2">
                    Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas
                    sit odit aut fugit, sed quia consequuntur. Lorem ipsum nonum
                    eirmod dolor.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-sm text-gray-700">
                <div>
                  <div className="mb-3">
                    <span className="font-medium">Category:</span>{" "}
                    <span className="ml-2">Online Book, Paper Book</span>
                  </div>
                  <div className="mb-3">
                    <span className="font-medium">Genre:</span>{" "}
                    <span className="ml-2">Drama</span>
                  </div>
                  <div className="mb-3">
                    <span className="font-medium">ISBN:</span>{" "}
                    <span className="ml-2">2544555561</span>
                  </div>
                  <div className="mb-3">
                    <span className="font-medium">Number of Pages:</span>{" "}
                    <span className="ml-2">412</span>
                  </div>

                  <div className="mb-3">
                    <span className="font-medium">Publisher:</span>{" "}
                    <span className="ml-2">Manager FeedWise</span>
                  </div>
                  <div className="mb-3">
                    <span className="font-medium">Year of Publishing:</span>{" "}
                    <span className="ml-2">2021</span>
                  </div>
                </div>
              </div>

              {/* Desktop / larger screens: single row with qty, buy, heart */}
              <div className="">
                <div className="flex mt-6 items-center space-x-4">
                  <div>
                    <BtnHeartAnimation />
                  </div>
                  <div className="border py-1 h-11">
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={3}
                      bordered={false} // bỏ border
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    className="bg-black text-white py-2 px-6 w-full
                     hover:bg-gray-800 transition-colors duration-300 ease-in-out outline-none"
                  >
                    Buy now
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center mt-6">
                <span className="border-t border-gray-300 flex-grow mr-2"></span>
                <h2 className="text-gray-600 mx-10">OR</h2>
                <span className="border-t border-gray-300 flex-grow ml-2"></span>
              </div>

              <div className="mt-8 text-sm text-gray-700">
                <div className="mb-2">
                  <span className="font-medium">SKU:</span> N/A
                </div>
                <div className="mb-2">
                  <span className="font-medium">Category:</span> My Books
                </div>
                <div className="mb-2">
                  <span className="font-medium">Tags:</span> Book, Psychology,
                  Sale
                </div>
                <div className="mb-2">
                  <span className="font-medium">Product ID:</span> 2381
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description / Reviews tabs */}
      <section className="mt-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-t-md overflow-hidden">
            <div className="flex items-center border-b">
              <TabHeader />
            </div>
          </div>

          <div className="bg-white rounded-b-md p-6 md:p-8 mt-0 relative">
            {/* Description panel (always mounted) */}
            <div
              role="tabpanel"
              aria-hidden={activeTab !== "description"}
              style={{
                transition:
                  "opacity 420ms cubic-bezier(.2,.8,.2,1), transform 420ms cubic-bezier(.2,.8,.2,1)",
                willChange: "opacity, transform",
              }}
              className={
                "transition-all duration-500 ease-in-out " +
                (activeTab === "description"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3 pointer-events-none absolute inset-0")
              }
            >
              <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
                <p>
                  Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit
                  odit aut fugit, sed quia consequuntur. Lorem ipsum dolor.
                  Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt
                  labore et dolore magna aliquyam.erat, sed diam voluptua. At
                  vero accusam et justo duo dolores et ea rebum. Stet clitaim
                  vidunt ut labore eirmod tempor invidunt magna aliquyam.
                </p>
              </div>
            </div>

            {/* Reviews panel (always mounted) */}
            <div
              role="tabpanel"
              aria-hidden={activeTab !== "reviews"}
              style={{
                transition:
                  "opacity 420ms cubic-bezier(.2,.8,.2,1), transform 420ms cubic-bezier(.2,.8,.2,1)",
                willChange: "opacity, transform",
              }}
              className={
                "transition-all duration-500 ease-in-out " +
                (activeTab === "reviews"
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3 pointer-events-none absolute inset-0")
              }
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: average rating & bars (cols 1-7) */}
                <div className="lg:col-span-7">
                  <h3 className="text-2xl font-semibold mb-6">
                    Average rating
                  </h3>

                  <div className="flex items-center gap-4 mb-4 flex-col sm:flex-row sm:items-center">
                    <div className="text-4xl sm:text-5xl text-yellow-500 font-semibold">
                      4.00
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <div className="text-sm sm:text-base text-gray-700">
                          ★★★★☆
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">1 review</div>
                    </div>
                  </div>

                  {/* rating bars */}
                  <div className="space-y-3 mt-6">
                    {[
                      {stars: 5, pct: 0},
                      {stars: 4, pct: 100},
                      {stars: 3, pct: 0},
                      {stars: 2, pct: 0},
                      {stars: 1, pct: 0},
                    ].map((r) => {
                      return (
                        <div key={r.stars} className="flex items-center gap-4">
                          <div className="w-24 text-sm text-gray-600">
                            {r.stars} stars
                          </div>
                          <div className="flex-1 bg-gray-100 h-3 rounded overflow-hidden">
                            <div
                              className="h-3 bg-yellow-400"
                              style={{width: r.pct + "%"}}
                            />
                          </div>
                          <div className="w-12 text-sm text-gray-600 text-right">
                            {r.pct}%
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right: add review */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl font-semibold mb-3">Add a review</h3>
                  <p className="text-gray-600">
                    You must be logged in to post a review.
                  </p>
                </div>
              </div>

              {/* Reviews list */}
              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-6">
                  1 review for Enough About Me
                </h4>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden" />
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="font-semibold">Ashton Porter</div>
                      <div className="text-sm text-gray-500">
                        – May 26, 2020
                      </div>
                    </div>
                    <p className="mt-2 text-gray-700">
                      It's a bit too small, but looks expensive
                    </p>
                    <div className="mt-3 text-yellow-400">★★★★☆</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* related products */}
      <section>
        <div className="container mt-20">
          <div className="text-center text-5xl font-semibold mb-6">
            <h2>Related Products</h2>
          </div>
          {/* responsive related products: 1 column on sm, 2 on md, 5 on xl */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            <Product image={banner} />
            <Product image={banner} />
            <Product image={banner} />
            <Product image={banner} />
            <Product image={banner} />
          </div>
        </div>
      </section>
      {/* footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default ProductDetail;

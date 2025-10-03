import React from "react";
import freeship from "~/assets/images/homepage/freeship.webp";
import price from "~/assets/images/homepage/price.webp";
import imgReturn from "~/assets/images/homepage/return.webp";
import secu from "~/assets/images/homepage/secu.webp";

const Policy = () => {
  const policy = [
    {
      image: freeship,
      title: "Free Shipping",
      description: "Order over $100",
    },
    {
      image: secu,
      title: "Secure Payment",
      description: "100% Secure Payment",
    },
    {
      image: price,
      title: "Best Price",
      description: "Guaranteed the best price",
    },
    {
      image: imgReturn,
      title: "Free Returns",
      description: "30-day free returns",
    },
  ];
  return (
    <>
      <style>{`
        .img-shake { will-change: transform; transition: transform 150ms ease; display: inline-block; }
        .boxHover:hover  .img-shake { animation: shake 0.6s linear infinite; }
        @keyframes shake {
          0% { transform: translateX(0) rotate(0); }
          10% { transform: translateX(-4px) rotate(-1deg); }
          30% { transform: translateX(4px) rotate(1deg); }
          50% { transform: translateX(-4px) rotate(-1deg); }
          70% { transform: translateX(4px) rotate(1deg); }
          90% { transform: translateX(-2px) rotate(-0.5deg); }
          100% { transform: translateX(0) rotate(0); }
        }
      `}</style>
      <div className="container flex justify-between items-center gap-8 flex-wrap cursor-default">
        {policy.map((item, index) => (
          <div key={index} className="flex items-center gap-4 mb-6 boxHover">
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 img-shake"
            />
            <div>
              <h4 className="text-2xl font-semibold">{item.title}</h4>
              <p className="text-lg text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Policy;

import React, {useState} from "react";
import {motion} from "framer-motion";
import {IoMdHeart, IoMdHeartEmpty} from "react-icons/io";

const BtnHeartAnimation = () => {
  const [hearts, setHearts] = useState([]);
  const [liked, setLiked] = useState(false); // trạng thái đổi icon

  const handleClick = () => {
    setLiked((prev) => !prev); // đổi icon tim

    const idBase = Date.now();

    // tạo 1 loạt tim bay lên
    const newHearts = Array.from({length: 6}).map((_, i) => ({
      id: idBase + i,
      x: (Math.random() - 0.5) * 200,
      y: -(Math.random() * 200 + 100),
      rotation: (Math.random() - 0.5) * 90,
      size: Math.random() * 10 + 15,
    }));

    setHearts((prev) => [...prev, ...newHearts]);

    // xoá sau 1.8s
    setTimeout(() => {
      setHearts((prev) =>
        prev.filter((h) => !newHearts.some((nh) => nh.id === h.id))
      );
    }, 1800);
  };

  return (
    <div className="relative flex justify-center items-center">
      <button
        onClick={handleClick}
        className=" border bg-transparent outline-none flex justify-center items-center relative z-20 "
      >
        {liked ? (
          <IoMdHeart size={28} className="text-red-500" />
        ) : (
          <IoMdHeartEmpty size={28} className="text-gray-600" />
        )}
      </button>

      {/* Render tim bay lên */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{opacity: 1, x: 0, y: 0, rotate: 0, scale: 1}}
          animate={{
            opacity: 0,
            x: heart.x,
            y: heart.y,
            rotate: heart.rotation,
            scale: [1, 1.4, 0.8],
          }}
          transition={{duration: 1.5, ease: "easeOut"}}
          className="absolute z-50 text-red-500 pointer-events-none"
          style={{zIndex: 9999}}
        >
          <IoMdHeart size={heart.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default BtnHeartAnimation;

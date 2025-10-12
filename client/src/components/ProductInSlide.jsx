import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";


const Product = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img8,
    img9,
    img10,
    img11,
    img13,
    img14,
    img15,
  ];

  const ImageCard = ({ src }) => (
    <div className="p-4 mx-4 shrink-0">
      <img
        className="rounded-2xl w-54 h-42 object-cover shadow-md hover:shadow-xl transition-all duration-300"
        src={src}
        alt="Sliding"
      />
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* First row (left to right) */}
      <div className="w-full mx-auto max-w-6xl overflow-hidden relative mt-10">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>

        <div className="marquee-inner flex transform-gpu min-w-[200%] py-5">
          {[...images, ...images].map((src, index) => (
            <ImageCard key={index} src={src} />
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>

      {/* Second row (right to left) */}
      <div className="w-full mx-auto max-w-6xl overflow-hidden relative mt-5">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>

        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] py-5">
          {[...images, ...images].map((src, index) => (
            <ImageCard key={index} src={src} />
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </>
  );
};

export default Product;

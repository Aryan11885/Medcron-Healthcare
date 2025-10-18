import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1a from "../assets/img1a.jpg";
import img2a from "../assets/img2a.jpg";
import img3a from "../assets/img3a.jpg";
import img4a from "../assets/img4a.jpg";
import img5a from "../assets/img5a.jpg";
import img6a from "../assets/img6a.jpg";
import img7a from "../assets/img7a.jpg";
import img8a from "../assets/img8a.jpg";
import img9a from "../assets/img9a.jpg";
import img10a from "../assets/img10a.jpg";
import img11a from "../assets/img11a.jpg";
import img12a from "../assets/img12a.jpg";
import img13a from "../assets/img13a.jpg";
import img14a from "../assets/img14a.jpg";
import img15a from "../assets/img15a.jpg";

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateHero(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const logos = [
    img1a,
    img2a,
    img3a,
    img4a,
    img5a,
    img6a,
    img7a,
    img8a,
    img9a,
    img10a,
    img11a,
    img12a,
    img13a,
    img14a,
    img15a,
  ];

  return (
    <section className="relative overflow-x-hidden overflow-y-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-100 text-gray-900 font-[Poppins]">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-6 px-5 sm:px-8 md:px-16 lg:px-24">
        {/* Logo + Heading */}
        <div className="flex items-center space-x-3">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <img
              src="/logo.jpg" // place your image inside /public and rename it to logo.jpg
              alt="Medcron Healthcare Logo"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-cyan-700 whitespace-nowrap">
            Medcron Healthcare
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-gray-700 font-medium">
          {["Home", "Products", "Careers", "About Us"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-cyan-700 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Link
          to="/contact us"
          className="hidden md:block bg-cyan-700 text-white px-5 py-2 rounded-full hover:bg-cyan-600 transition"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 text-3xl relative z-50 transition-colors ${
            mobileMenuOpen ? "text-white" : "text-gray-800"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-6 text-lg md:hidden transition-all duration-300">
          {["Home", "Products", "Careers", "About Us"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-white text-xl hover:text-cyan-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-5 sm:px-8 md:px-16 lg:px-24 mt-10 md:mt-20 gap-12">
        {/* Left Section */}
        <div
          className={`max-w-xl text-center md:text-left transition-all duration-1000 ${
            animateHero
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Community Badge */}
          <div className="flex items-center gap-2 text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm mb-8 justify-center md:justify-start">
            <div className="flex -space-x-2">
              <img
                className="w-7 h-7 rounded-full border-2 border-gray-200"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                alt="user1"
              />
              <img
                className="w-7 h-7 rounded-full border-2 border-gray-200"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                alt="user2"
              />
            </div>
            <span>
              Join Medcron Healthcare, Connect with 50+ Distributors...
            </span>
          </div>

          {/* Hero Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-gray-900">
            Medcron Healthcare — <br />
            <span className="text-cyan-700">
              Delivering Trust in Every Dose
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600">
            A pharmaceutical company dedicated to providing quality and trusted
            medicines that support better health for all.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
            <Link
              to="/products"
              className="bg-cyan-700 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-all active:scale-95"
            >
              Explore Products
            </Link>
            <Link
              to="/contact us"
              className="border border-cyan-600 text-cyan-700 px-6 py-3 rounded-lg hover:bg-cyan-50 transition-all active:scale-95"
            >
              Join Us
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className={`w-full flex justify-center md:justify-end transition-all duration-1000 ${
            animateHero
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } animate-float`}
        >
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-3.png"
            alt="hero"
            className="w-[320px] sm:w-[360px] md:w-[420px] lg:w-[500px] max-w-full drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Logo Marquee */}
      <div className="w-full overflow-hidden mt-20 mb-16 select-none">
        <div className="flex gap-16 animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand Logo ${index + 1}`}
              className="h-8 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>

        <style>{`
             @keyframes marquee {
               0% { transform: translateX(0); }
               100% { transform: translateX(-100%); }
             }
         
             .animate-marquee {
               display: flex;
               gap: 4rem;
               width: max-content; /* auto-fit based on number of logos */
               animation: marquee 80s linear infinite;
             }
         
             .animate-marquee:hover {
               animation-play-state: paused; /* pause on hover */
             }
         `}</style>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import QuerySection from "../components/QuerySection";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-200 py-16 px-6">
      {/* Company Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 text-center tracking-wide">
        Medcron HealthCare
      </h1>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Person 1 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center">
          <img
            src="https://randomuser.me/api/portraits/men/85.jpg"
            alt="Person 1"
            className="w-28 h-28 rounded-full object-cover shadow-md mb-4"
          />
          <h2 className="text-xl font-semibold text-slate-800">
            Mr. J.N Shukla
          </h2>
          <div className="text-slate-500 mb-4">
            <p>+91 98114 47060</p>
          </div>

          <div className="flex items-center gap-5 text-2xl">
            <a
              // href="tel:+918888888888"
              className="text-sky-600 hover:scale-110 transition"
            >
              <FaPhoneAlt />
            </a>
            <a
              // href="https://wa.me/918888888888"
              target="_blank"
              className="text-green-500 hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              // href="mailto:jayendra@medcronhealthcare.com"
              className="text-red-500 hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>
            <a
              // href="https://facebook.com"
              target="_blank"
              className="text-blue-600 hover:scale-110 transition"
            >
              <FaFacebook />
            </a>
            <a
              // href="https://instagram.com"
              target="_blank"
              className="text-pink-500 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Person 2 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400"
            alt="Person 2"
            className="w-28 h-28 rounded-full object-cover shadow-md mb-4"
          />
          <h2 className="text-xl font-semibold text-slate-800">
            Mrs. M.Shukla
          </h2>
          <div className="text-slate-500 mb-4">
            <p>+91 1244383379</p>
          </div>

          <div className="flex items-center gap-5 text-2xl">
            <a
              // href="tel:+919999999999"
              className="text-sky-600 hover:scale-110 transition"
            >
              <FaPhoneAlt />
            </a>
            <a
              // href="https://wa.me/"
              target="_blank"
              className="text-green-500 hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              // href="mailto:aryan@medcronhealthcare.com"
              className="text-red-500 hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>
            <a
              // href="https://facebook.com"
              target="_blank"
              className="text-blue-600 hover:scale-110 transition"
            >
              <FaFacebook />
            </a>
            <a
              // href="https://instagram.com"
              target="_blank"
              className="text-pink-500 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Landline Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-slate-700 mb-4">
          Landline Number
        </h3>
        <a
          // href="tel:+91 1244383379"
          className="inline-flex items-center gap-3 text-lg text-slate-700 font-medium bg-white px-6 py-3 rounded-full shadow hover:shadow-lg transition-all duration-300"
        >
          <FaPhoneAlt className="text-sky-600" />
          +91 12345 67890
        </a>
      </div>

      <div className="mt-30 w-full ">
        <QuerySection />
      </div>
      
    </section>
  );
};

export default ContactUs;

import { motion } from "framer-motion";
import Developer from "../assets/developer.jpg"
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

const AboutUs = () => {
  const team = [
    {
      name: "Mr. J.N Shukla",
      image:
        "https://randomuser.me/api/portraits/men/85.jpg",
      description:
        "With 12+ years in the pharmaceutical industry, Mr. J.N Shukla has built Medcron Healthcare with a vision to provide high-quality medicines accessible and affordable.",
      // whatsapp: "https://wa.me/919812345678",
      // email: "mailto:ceo@medcronhealthcare.com",
      // facebook: "https://facebook.com/",
      // instagram: "https://instagram.com/",
    },
    {
      name: "Mrs. M.Shukla",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400",
      description:
        "M.Shukla ensures seamless team coordination and contributes significantly to the company's growth.",
      // whatsapp: "https://wa.me/919876543210",
      // email: "mailto:manager@medcronhealthcare.com",
      // facebook: "https://facebook.com/",
      // instagram: "https://instagram.com/",
    },
  ];

  const developer = {
    name: "Aryan Tripathi",
    role: "Software Developer",
    image:
      Developer,
    description:
      "Hey there 👋 I’m the mind behind this website. Passionate about clean design, smooth animations, and turning coffee into code ☕💻. Always open to collaborations and creative projects!",
    whatsapp: "https://wa.me/917754057492",
    email: "mailto:aryanapril4@gmail.com",
    linkedin: "https://linkedin.com/",
    instagram: "https://instagram.com/arryyaannnnn",
  };

  return (
    <section className="bg-white text-slate-800">
      {/* 🌟 Mission Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 text-white text-center py-10 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering Healthcare, Inspiring Trust 💊
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
            At Medcron Healthcare, we’re committed to delivering quality,
            innovation, and reliability in every product we supply.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_60%)]"></div>
      </div>

      {/* 🏢 Company Description */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700">
          About Medcron Healthcare
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Medcron Healthcare is a trusted name in the pharmaceutical industry,
          specializing in third-party manufacturing and distribution of
          high-quality medicines. With years of expertise, a commitment to
          innovation, and a customer-first approach, we aim to strengthen the
          healthcare ecosystem in India and beyond.
        </p>
      </motion.div>

      {/* 👩‍💼 Team Section */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 pb-20">
        {team.map((person, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-md p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-blue-200 mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700">
              {person.name}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{person.role}</p>
            <p className="text-gray-600 text-sm mb-4">{person.description}</p>
            <div className="flex justify-center gap-4 text-2xl">
              <a href={person.whatsapp} target="_blank" rel="noreferrer">
                <FaWhatsapp className="text-green-500 hover:scale-110 transition-transform duration-200" />
              </a>  
              <a href={person.email}>
                <FaEnvelope className="text-gray-500 hover:scale-110 transition-transform duration-200" />
              </a>
              <a href={person.facebook} target="_blank" rel="noreferrer">
                <FaFacebook className="text-blue-600 hover:scale-110 transition-transform duration-200" />
              </a>
              <a href={person.instagram} target="_blank" rel="noreferrer">
                <FaInstagram className="text-pink-500 hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 👨‍💻 Developer Section (cool zone 😎) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-14"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <motion.img
            src={developer.image}
            alt={developer.name}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-500 shadow-lg hover:scale-105 transition-all"
          />
          <div>
            <h3 className="text-3xl font-bold">{developer.name}</h3>
            <p className="text-blue-400 font-semibold mb-3">{developer.role}</p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {developer.description}
            </p>
            <div className="flex gap-4 text-2xl">
              <a href={developer.whatsapp} target="_blank" rel="noreferrer">
                <FaWhatsapp className="text-green-500 hover:scale-110 transition-transform duration-200" />
              </a>
              <a href={developer.email}>
                <FaEnvelope className="text-gray-500 hover:scale-110 transition-transform duration-200" />
              </a>
              <a href={developer.facebook} target="_blank" rel="noreferrer">
                <FaLinkedin className="text-blue-600 hover:scale-110 transition-transform duration-200" />
              </a>
              <a href={developer.instagram} target="_blank" rel="noreferrer">
                <FaInstagram className="text-pink-500 hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;

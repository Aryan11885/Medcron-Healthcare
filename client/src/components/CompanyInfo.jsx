import { motion } from "framer-motion";

function CompanyInfo() {
  const infoData = [
    {
      title: "What We Do",
      description:
        "We provide high-quality medicines and healthcare solutions, ensuring doctors and distributors have access to trusted products worldwide.",
      icon: "🧪",
    },
    {
      title: "Our Vision",
      description:
        "To innovate healthcare solutions that improve lives, foster wellness, and make trusted medicine accessible to everyone.",
      icon: "🌐",
    },
    {
      title: "Why Join Us?",
      description:
        "We nurture a collaborative and innovative environment, giving professionals the opportunity to grow, contribute, and make a real impact in healthcare.",
      icon: "🚀",
    },
  ];

  return (
    <section className="px-6 py-20 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Medcron Healthcare
        </h2>
        <p className="text-gray-600 text-lg">
          Learn more about what drives us, our vision, and why working with us is rewarding.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {infoData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CompanyInfo;

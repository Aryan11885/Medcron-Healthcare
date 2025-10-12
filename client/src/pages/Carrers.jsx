import React from "react";

const Careers = () => {
  const careersInfo = [
    {
      title: "Leading PCD Pharma Company",
      content: `Become the boss of your own business with 
                <strong>Medcron Healthcare </strong>and explore our range of products`,
    },
    {
      title: "Products manufactured at WHO & GMP Units",
    },
    {
      title: "Contact Us ?",
      content: `Contact no. : +91 98114 47060 <br> Email : medcronhealthcare@gmail.com`,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-12">
          Careers at <span className="text-blue-600">Medcron Healthcare</span>
        </h1>

        <div className="space-y-12">
          {careersInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-blue-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h2>
              <p
                className="text-gray-700 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;

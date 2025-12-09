import React from "react";
import { FaTools, FaChartLine, FaHandshake, FaHardHat, FaTruck, FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaHandshake />,
    title: "Consulting",
    desc: "Expert advice in civil works, project management, and construction solutions."
  },
  {
    icon: <FaTools />,
    title: "Civil & Construction",
    desc: "Comprehensive construction services for residential and commercial projects."
  },
  {
    icon: <FaChartLine />,
    title: "Plant & Equipment Hire",
    desc: "State-of-the-art plant and equipment available for all types of projects."
  },
  {
    icon: <FaHardHat />,
    title: "Project Planning",
    desc: "Careful and strategic planning to ensure timely project completion."
  },
  {
    icon: <FaTruck />,
    title: "Logistics & Transport",
    desc: "Efficient transport solutions for materials and machinery."
  },
  {
    icon: <FaProjectDiagram />,
    title: "Infrastructure Development",
    desc: "Roads, bridges, and civil infrastructure projects executed to the highest standards."
  },
];

const ProductsServices = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
          Products & Services
        </h1>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          We offer a wide range of products and services designed to support your projects from start to finish. Explore what we provide below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative p-1 rounded-3xl bg-gradient-to-r from-blue-400 via-yellow-400 to-pink-500 animate-gradient-x cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col items-start justify-start">
                <div className="text-5xl mb-4 text-blue-500">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>

                {/* Glow effect on hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-100 via-transparent to-teal-100 opacity-0 hover:opacity-20 rounded-2xl transition duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsServices;

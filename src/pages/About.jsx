import React from "react";
import { FaBuilding, FaHammer, FaTools, FaRoad, FaWater, FaBolt, FaCogs } from "react-icons/fa";

const About = () => {
  const services = [
    { name: "Building construction", icon: <FaBuilding className="text-3xl text-white" /> },
    { name: "Brick work", icon: <FaHammer className="text-3xl text-white" /> },
    { name: "Carpentry and roofing", icon: <FaTools className="text-3xl text-white" /> },
    { name: "Plumbing", icon: <FaWater className="text-3xl text-white" /> },
    { name: "Tiling and carpeting", icon: <FaBolt className="text-3xl text-white" /> },
    { name: "Civil infrastructure", icon: <FaRoad className="text-3xl text-white" /> },
    { name: "Roads & Paving", icon: <FaRoad className="text-3xl text-white" /> },
    { name: "Bridge construction", icon: <FaCogs className="text-3xl text-white" /> },
    { name: "Sanitation", icon: <FaWater className="text-3xl text-white" /> },
    { name: "Sewer works", icon: <FaWater className="text-3xl text-white" /> },
    { name: "Steel works", icon: <FaCogs className="text-3xl text-white" /> },
    { name: "Electrical installations", icon: <FaBolt className="text-3xl text-white" /> },
    { name: "Mechanical installations", icon: <FaTools className="text-3xl text-white" /> },
    { name: "Other related construction works", icon: <FaHammer className="text-3xl text-white" /> },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#4CAF50]/10 via-[#FF6B6B]/10 to-[#F06529]/10 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] via-[#FF6B6B] to-[#F06529]">
          About Mintirho
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-800 mb-6">
          Established in <strong>2002</strong>, Mintirho Business Enterprises is a 100% Black-owned company
          committed to delivering quality, innovative, and sustainable civil and construction solutions
          across South Africa.
        </p>
        <p className="text-lg text-gray-800 mb-6">
          We regard our customers as quality-driven organizations, departments, or individuals who value
          excellence and aim to maintain long-term business relationships. Our commitment includes:
        </p>

        <ul className="text-left list-disc list-inside mb-8 text-gray-800 space-y-2">
          <li>Excellent service regarding building materials, quality workmanship, on-time deliveries, and accurate invoicing.</li>
          <li>Prioritizing the safety of customers, employees, partners, and stakeholders.</li>
          <li>Utilizing accredited and experienced sub-contractors when required.</li>
          <li>BEE compliance without compromising quality.</li>
        </ul>

        {/* Services */}
        <h2 className="text-3xl font-semibold mt-8 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] via-[#FF6B6B] to-[#F06529]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-[#4CAF50] via-[#FF6B6B] to-[#F06529] rounded-3xl shadow-2xl p-6 text-white flex flex-col items-center justify-center hover:scale-105 transform transition duration-500"
            >
              {service.icon}
              <p className="mt-4 font-semibold text-lg">{service.name}</p>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-800">Vision</h2>
        <p className="text-gray-800 mb-6">
          To become a dominant force within the construction industry, be counted among the best,
          and lead in skills development and BEE.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-800">Mission</h2>
        <p className="text-gray-800 mb-6">
          Our mission is to provide a one-stop construction solution at the most affordable rates with value-added services.
        </p>

        {/* Values */}
        <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-800">Our Values</h2>
        <ul className="list-disc list-inside text-left text-gray-800 space-y-2 mb-6">
          <li>Customer service and excellence</li>
          <li>Passion for quality and value for money</li>
          <li>Human dignity and respect</li>
          <li>Employee ownership and empowerment</li>
          <li>Diversifying into home development</li>
          <li>Recruiting, retaining, and developing high-performing people</li>
        </ul>
      </div>
    </main>
  );
};

export default About;

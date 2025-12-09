import React from "react";
import { MdEngineering, MdPeople, MdBusiness, MdStar } from "react-icons/md";
import { motion } from "framer-motion";

const services = [
  "Building construction",
  "Brick work",
  "Carpentry and roofing",
  "Plumbing",
  "Tiling and carpeting",
  "Civil infrastructure",
  "Roads & Paving",
  "Bridge construction",
  "Sanitation",
  "Sewer",
  "Steel works",
  "Electrical installations",
  "Mechanical installations",
  "Other related construction works",
];

const management = [
  { name: "Mamaretele Beatrice Mkhombo", role: "CEO" },
  { name: "Singita Clifford Mkhombo", role: "COO" },
  { name: "Mikateko Richard Mkhombo", role: "CFO" },
  { name: "Makgohle Malema", role: "Human Resource" },
  { name: "Martha Mokganya", role: "Procurement & Accounts" },
  { name: "Tendani Phadziri", role: "Finance" },
  { name: "Dingani Ramathuthu", role: "Electrician" },
  { name: "Themba Makhubele", role: "Contract Managers & Quality Controller" },
  { name: "Thandeka Marimane", role: "Technical Manager" },
  { name: "Nyiko Mkhombo", role: "Contract Managers & Quality Controller" },
  { name: "Humphrey Mabunda", role: "Civil Engineer" },
  { name: "Rhandzu Mkhombo", role: "Head SHEQ" },
];

const CompanyProfile = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-8 text-gray-800"
        >
          Company Profile
        </motion.h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
          Mintirho Business Enterprises is a <strong>Level 1 B-BBEE contributor</strong> delivering professional and innovative civil and construction solutions.
        </p>

        <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
          We specialize in quality management, project supervision, and sustainable infrastructure development, ensuring every project exceeds client expectations.
        </p>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="my-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-blue-700 flex items-center justify-center gap-3">
            <MdEngineering className="text-yellow-400 text-4xl" /> Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-400 via-yellow-400 to-pink-500 text-white rounded-2xl p-6 shadow-xl cursor-default"
              >
                <MdStar className="text-yellow-300 text-3xl mb-2" />
                <p className="font-semibold">{service}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision, Mission, Values */}
        <section className="my-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Vision", "Mission", "Core Values"].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-1 rounded-3xl bg-gradient-to-r from-blue-400 via-yellow-400 to-pink-500 animate-gradient-x"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg text-left">
                  <h3 className="text-2xl font-bold mb-3 text-blue-700 flex items-center gap-2">
                    <MdStar className="text-yellow-400 text-3xl" /> {item}
                  </h3>
                  {item === "Vision" && (
                    <p>To become a dominant force in the construction industry, leading in skills development and BEE empowerment.</p>
                  )}
                  {item === "Mission" && (
                    <p>Provide one-stop construction solutions with affordable rates and superior project delivery.</p>
                  )}
                  {item === "Core Values" && (
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Customer service and excellence</li>
                      <li>Passion for quality and value for money</li>
                      <li>Human dignity and respect</li>
                      <li>Employee ownership extension</li>
                      <li>Diversification into home development</li>
                      <li>Recruitment and development of high-performing people</li>
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Management Team */}
        <section className="my-20">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 flex items-center justify-center gap-3">
            <MdBusiness className="text-yellow-400 text-4xl" /> Management Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {management.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-400 via-yellow-400 to-pink-500 p-1 rounded-3xl"
              >
                <div className="bg-gray-800 rounded-2xl p-6 text-gray-100 shadow-xl text-center">
                  <div className="h-24 w-24 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default CompanyProfile;

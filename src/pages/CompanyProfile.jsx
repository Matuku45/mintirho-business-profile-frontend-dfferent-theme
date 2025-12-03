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
  { name: "Mamaretele Beatrice Mkhombo", role: "Chief Executive Officer" },
  { name: "Singita Clifford Mkhombo", role: "Chief Operating Officer" },
  { name: "Mikateko Richard Mkhombo", role: "Chief Financial Officer" },
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

const ownership = [
  {
    name: "Mamaretele Beatrice Mkhombo",
    identity: "7905100323081",
    race: "African",
    gender: "Woman",
    ownership: "75%",
  },
  {
    name: "Singita Clifford Mkhombo",
    identity: "7404165386084",
    race: "African",
    gender: "Man",
    ownership: "25%",
  },
];

const CompanyProfile = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-8 text-gray-800"
        >
          Company Profile
        </motion.h1>

        <p className="text-lg text-gray-700 mb-6">
          Mintirho Business Enterprises is a <strong>Level 1 B-BBEE contributor</strong> delivering professional and innovative civil and construction solutions. We specialize in quality management, project supervision, and sustainable infrastructure development.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Our company is driven by a commitment to excellence, ensuring every project meets stringent standards and exceeds client expectations.
        </p>

        <p className="text-lg text-gray-700 mb-12">
          With years of experience, we continue to expand our services across multiple sectors including construction, plant hire, and consulting services.
        </p>

        {/* Services Offered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-600 flex items-center justify-center gap-2">
            <MdEngineering className="text-4xl text-yellow-400" /> Services We Offer
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-left max-w-3xl mx-auto">
            {services.map((service, idx) => (
              <li
                key={idx}
                className="p-2 rounded-lg bg-gradient-to-r from-blue-400 via-yellow-400 to-pink-500 text-white shadow-md hover:scale-105 transition transform cursor-default"
              >
                {service}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Vision, Mission, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-3 text-blue-600 flex items-center gap-2">
              <MdStar className="text-yellow-400" /> Vision
            </h3>
            <p>To become a dominant force within the construction industry, counted among the best, and lead in skills development and BEE empowerment.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-3 text-blue-600 flex items-center gap-2">
              <MdStar className="text-yellow-400" /> Mission
            </h3>
            <p>Our mission is to provide a one-stop construction solution at the most affordable rates, with value-added services and superior project delivery.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-3 text-blue-600 flex items-center gap-2">
              <MdStar className="text-yellow-400" /> Core Values
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Customer service and excellence</li>
              <li>Passion for quality and value for money</li>
              <li>Human dignity and respect</li>
              <li>Employee ownership extension</li>
              <li>Diversification into home development</li>
              <li>Recruitment and development of high-performing people</li>
            </ul>
          </motion.div>
        </div>

        {/* Ownership */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 flex items-center justify-center gap-2">
            <MdPeople className="text-yellow-400 text-4xl" /> Ownership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {ownership.map((owner, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-400 animate-gradient-x p-1 rounded-3xl"
              >
                <div className="bg-gray-800 rounded-2xl p-6 text-gray-100 shadow-xl">
                  <h3 className="text-xl font-bold mb-2">{owner.name}</h3>
                  <p><strong>ID:</strong> {owner.identity}</p>
                  <p><strong>Race:</strong> {owner.race}</p>
                  <p><strong>Gender:</strong> {owner.gender}</p>
                  <p><strong>Ownership:</strong> {owner.ownership}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Management Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 flex items-center justify-center gap-2">
            <MdBusiness className="text-yellow-400 text-4xl" /> Management Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {management.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-400 via-yellow-400 to-pink-500 animate-gradient-x p-1 rounded-3xl"
              >
                <div className="bg-gray-800 rounded-2xl p-6 text-gray-100 shadow-xl">
                  <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                  <p className="text-gray-200">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyProfile;

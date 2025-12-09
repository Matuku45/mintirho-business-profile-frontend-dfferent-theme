import React from "react";
import { FaUserTie, FaUsers, FaHardHat, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const headOffice = [
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

const siteTeam = [
  { name: "Willy Koma", role: "Foreman" },
  { name: "Bernard Mudzitiri", role: "Foreman" },
  { name: "Peace Mathebula", role: "Senior Carpenter" },
  { name: "Thomas Gezani", role: "Senior Plumber" },
  { name: "Petrus Tshikota", role: "Senior Foreman" },
  { name: "Jabu Mlambo", role: "Site Agent" },
  { name: "Elsie Lefika", role: "Safety Officer" },
  { name: "Patson Mathonsi", role: "Foreman" },
  { name: "Samuel Matsuvuki", role: "Senior Foreman" },
  { name: "Emmanuel Myalato", role: "Contract Manager" },
  { name: "Kulani Mayayise", role: "Contract Manager" },
  { name: "Mbulaheni Tshikota", role: "Site Foreman" },
  { name: "Themba Mashaba", role: "Auditor / Finance" },
  { name: "Nhlamulo Maringa", role: "Quality Controller" },
];

const keyProfiles = [
  {
    name: "Mamaretele Beatrice Mkhombo",
    role: "CEO",
    bio: `Mamaretele is the major shareholder and CEO, responsible for corporate governance, contractual/legal, and risk management for Mintirho Business Enterprise (MBE).

- Holds an LLB Degree
- Completed articles of clerkship at Legal Aid Board (2002-2004)
- Admitted as an attorney of the High Court in January 2006
- Worked as Senior Legal Administrator at Department of Justice (2004) and Consumer Protector at Limpopo Provincial – Department of Economic Development (2004-2008)
- Joined MBE full-time in 2008
- Trained with Gauteng Masters Association for JBCC course
- Highly proactive, goal-oriented, team-focused, and committed to excellence`
  },
  {
    name: "Singita Clifford Mkhombo",
    role: "COO",
    bio: `Singita holds 25% shares and manages day-to-day business operations.

- Holds B.Sc. in Maths & Chemistry, Diploma in Chemical Engineering, Higher Education Diploma (Teaching)
- Extensive experience in business management
- Instrumental in marketing MBE across South Africa, achieving +R100 million turnover`
  },
  {
    name: "Mikateko Richard Mkhombo",
    role: "CFO",
    bio: `Richard holds B.Comm, MBA, CIS and is an associate member of the Institute of Chartered Secretaries and Administration.

- International finance and audit experience in Zambia, Malawi, Kenya, Botswana, Nigeria
- Founded Masana Consulting and Masana Hair Salon`
  },
];

const Management = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-12 text-gray-800"
        >
          Management Team
        </motion.h1>

        {/* Head Office Executives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 flex justify-center items-center gap-2">
            <FaUserTie className="text-yellow-400" /> Head Office Executives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {headOffice.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-400 p-1 rounded-3xl shadow-lg"
              >
                <div className="bg-white rounded-2xl p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Site & Operational Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-green-600 flex justify-center items-center gap-2">
            <FaHardHat className="text-yellow-400" /> Site & Operational Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {siteTeam.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 p-1 rounded-3xl shadow-lg"
              >
                <div className="bg-white rounded-2xl p-6 text-center">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Profiles */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-purple-600 flex justify-center items-center gap-2">
            <FaStar className="text-yellow-400" /> Key Profiles
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {keyProfiles.map((profile, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 shadow-xl rounded-2xl hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-2">{profile.name}</h3>
                <p className="font-semibold mb-2 text-gray-700">{profile.role}</p>
                <p className="text-gray-600 whitespace-pre-line">{profile.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Management;

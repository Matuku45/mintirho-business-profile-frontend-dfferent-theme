import React from "react";
import { MdLocationOn, MdPhone, MdEmail, MdFax, MdBusiness } from "react-icons/md";
import { TbBuildingFactory } from "react-icons/tb";

const offices = [
  {
    name: "Polokwane Office",
    address: "22 Voortrekker street, Polokwane, 0699",
    tel: "015 291 2142",
    fax: "086 616 4687",
  },
  {
    name: "Eastern Cape Office",
    address: "16 Donald road, Vincent, East London, 5247",
    tel: "043 726 6321",
    fax: "086 616 4687",
  },
  {
    name: "Gauteng Office",
    address: "202a Lourgadia Building, Cnr Embarkment & Hendrick Verwoerd Drive, Centurion 0164",
    tel: "012 740 7300",
    fax: "086 616 4687",
  },
  {
    name: "Western Cape Office",
    address: "39 Belgravia Road, Imperial Building, Athlone 7760",
    tel: "021 823 1502",
    cell: "084 500 0507",
    fax: "086 616 4687",
  },
];

const companyInfo = [
  { label: "Business Name", value: "Mintirho Business Enterprises", icon: <MdBusiness /> },
  { label: "Close Corporation Reg. No.", value: "2002/104 966/23" },
  { label: "VAT Number", value: "404 021 6469" },
  { label: "PAYE Registration", value: "745 076 4917" },
  { label: "SDL", value: "L4507 649 17" },
  { label: "UIF", value: "U4507 649 17" },
  { label: "CIDB Number", value: "100821" },
  { label: "NHBRC Number", value: "34722" },
  { label: "COIDA Reg. No.", value: "0705 644 0500" },
  { label: "MBA Membership No.", value: "–" },
];

const Contact = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800 animate-fadeIn">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-16 animate-fadeIn delay-100">
          Reach out to Mintirho Business Enterprises for inquiries, quotes, or project collaborations. Our team is ready to assist you across South Africa.
        </p>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {offices.map((office, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-blue-500 animate-gradient-x"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <TbBuildingFactory className="text-3xl" /> {office.name}
              </h3>
              <p className="flex items-center gap-2 text-gray-700 mb-2">
                <MdLocationOn className="text-blue-500" /> {office.address}
              </p>
              <p className="flex items-center gap-2 text-gray-700 mb-2">
                <MdPhone className="text-blue-500" /> {office.tel}
              </p>
              {office.cell && (
                <p className="flex items-center gap-2 text-gray-700 mb-2">
                  <MdPhone className="text-blue-500" /> {office.cell}
                </p>
              )}
              <p className="flex items-center gap-2 text-gray-700">
                <MdFax className="text-blue-500" /> {office.fax}
              </p>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="bg-white p-8 rounded-2xl shadow-xl animate-gradient-x">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center justify-center gap-2">
            <MdBusiness /> Company Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            {companyInfo.map((info, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                {info.icon && <span className="text-blue-500">{info.icon}</span>}
                <span className="font-semibold">{info.label}:</span>
                <span>{info.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <form className="bg-white shadow-md rounded-2xl p-8 max-w-xl mx-auto animate-fadeIn delay-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Send Us a Message
            </h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;

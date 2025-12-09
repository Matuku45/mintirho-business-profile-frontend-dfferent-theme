import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white pt-16 pb-10 mt-20">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4 tracking-wide">
            Mintirho Business Enterprises
          </h2>
          <p className="text-gray-300 mb-2">Established in 2002 • 100% Black-owned</p>
          <p className="text-gray-300">Level 1 B-BBEE Contributor</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center gap-3 text-gray-300 mb-2">
            <FaEnvelope className="text-blue-300" /> info@mintirho.co.za
          </p>
          <p className="flex items-center gap-3 text-gray-300 mb-2">
            <FaPhone className="text-blue-300" /> +27 123 456 789
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-5 text-gray-300">
            <a href="#" className="hover:text-blue-400 transition duration-300">
              <FaFacebook size={26} />
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              <FaLinkedin size={26} />
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              <FaInstagram size={26} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="mt-12 mb-8">
        <div className="h-1 w-3/4 mx-auto bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 rounded-full animate-pulse"></div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Mintirho Business Enterprises. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;

import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
return ( <footer className="bg-blue-800 text-white py-12 mt-12"> <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">


    {/* Company Info */}
    <div>
      <h2 className="text-2xl font-bold mb-4">Mintirho Business Enterprises</h2>
      <p className="text-gray-200 mb-2">Established in 2002, 100% Black-owned.</p>
      <p className="text-gray-200">Level 1 B-BBEE Contributor</p>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
      <p className="flex items-center gap-2 text-gray-200 mb-2">
        <FaEnvelope /> info@mintirho.co.za
      </p>
      <p className="flex items-center gap-2 text-gray-200 mb-2">
        <FaPhone /> +27 123 456 789
      </p>
    </div>

    {/* Social Media */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
      <div className="flex gap-4 text-gray-200">
        <a href="#" className="hover:text-yellow-400 transition duration-300"><FaFacebook size={24} /></a>
        <a href="#" className="hover:text-yellow-400 transition duration-300"><FaLinkedin size={24} /></a>
        <a href="#" className="hover:text-yellow-400 transition duration-300"><FaInstagram size={24} /></a>
      </div>
    </div>

  </div>

  <div className="text-center text-gray-300 mt-10">
    &copy; {new Date().getFullYear()} Mintirho Business Enterprises. All rights reserved.
  </div>
</footer>
);
};

export default Footer;

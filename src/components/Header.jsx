import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image.png";

const Header = () => {
  return (
    <header className="fixed w-full z-50">
      <div
        className="
          backdrop-blur-lg
          bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90
          shadow-xl border-b border-white/10
        "
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-3 group relative">

            {/* Soft Neon Glow */}
            <div
              className="
                absolute inset-0 rounded-full blur-2xl 
                bg-gradient-to-r from-purple-500 to-cyan-400
                opacity-30 group-hover:opacity-60
                transition-all duration-700
              "
            ></div>

            {/* Floating Logo */}
            <img
              src={Logo}
              alt="Mintirho Logo"
              className="
                relative h-12 w-auto object-contain 
                transition-all duration-500 ease-out
                group-hover:scale-110 group-hover:rotate-3
              "
            />

            <span className="text-2xl font-semibold tracking-wide text-white">
              MINTIRHO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-lg font-medium text-gray-200">
            {[
              ["Company Profile", "/company-profile"],
              ["Products & Services", "/products-services"],
              ["Projects", "/projects"],
              ["Management", "/management"],
              ["Gallery", "/gallery"],
              ["Equipment", "/equipment"],
              ["About Us", "/about"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <Link
                key={label}
                to={path}
                className="
                  relative transition duration-300 
                  hover:text-white
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 
                  after:h-[2px] after:w-0 after:bg-cyan-400 
                  after:transition-all after:duration-300 
                  hover:after:w-full
                "
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu - Nice Glow */}
          <div className="md:hidden">
            <button className="text-white p-2 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;

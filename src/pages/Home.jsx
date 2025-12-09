import React, { useState, useEffect } from "react";
import { TbBuildingCommunity, TbTools } from "react-icons/tb";
import { FaAward } from "react-icons/fa";
import BritsWorkshop from "../assets/Brits-FET-Campus-workshop.png";
import Capricon from "../assets/capricon.png";
import DipTank from "../assets/DIP-TANK-WITH-PROOF-PHOKENG.png";
import Letaba from "../assets/Letaba-fet-college.png";
import Midoroniclinic from "../assets/midoroniclinic.png";

const carouselImages = [BritsWorkshop, Capricon, DipTank, Letaba, Midoroniclinic];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="font-sans">

      {/* Hero Section with Carousel */}
      <section className="relative w-full h-screen overflow-hidden">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
                Welcome to Mintirho Business Enterprises
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl text-white opacity-90">
                Empowering your business with professional solutions and modern strategies in <strong>Construction, Civil Works, and Consulting</strong>.
              </p>
              <a
                href="#services"
                className="bg-[#FF6B6B] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#F06529] transition duration-300 shadow-xl inline-block mt-4"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full transition-colors ${
                index === current ? "bg-[#4CAF50]" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* About / Company Overview Section */}
      <section id="about" className="max-w-5xl mx-auto text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-6 text-[#007ACC]">About Us</h2>
        <div className="relative p-1 rounded-3xl bg-gradient-to-r from-[#4CAF50] via-[#FF6B6B] to-[#F06529] animate-gradient-x">
          <div className="bg-white rounded-2xl p-8 relative shadow-xl">
            <p className="text-gray-700 mb-4">
              Mintirho Business Enterprises, established in <strong>2002</strong>, is a 100% Black-owned company with a Level 1 B-BBEE Contributor status. We are committed to delivering innovative, professional, and sustainable solutions in civil and construction projects across South Africa.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Turnover: R65m (2018/17), R36.5m (2017/16), R47.3m (2016/15), R69.6m (2015/16), R72.6m (2014/15), R63m (2013/14); highest single project: R28.9m</li>
              <li>Registered with NHBRC, CIDB, VAT, PAYE, Income Tax, Department of Labour; member of MBA</li>
              <li>8GB PE & 8CE PE CIDB rating — eligible for tenders up to R140m</li>
              <li>Strategic partnerships with companies providing specialized services (Mechanical, Electrical, etc.)</li>
              <li>Experienced workforce: Contract Managers, Site Agents, Foremen, Artisans (1–30 years experience)</li>
              <li>Focus on Safety, Health, Environment & Quality (SHEQ) policies with competent safety personnel</li>
              <li>Accounts with multiple suppliers ensuring smooth operations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Strategic Foundation Section */}
      <section id="strengths" className="py-20 px-6 text-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-12 text-[#FF6B6B]">Our Strategic Foundation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Vision */}
          <div className="p-1 rounded-3xl bg-gradient-to-r from-[#563D7C] via-[#00BFFF] to-[#007ACC] animate-gradient-x">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="text-4xl mb-3 text-[#007ACC] inline-block"><TbBuildingCommunity /></div>
              <h3 className="text-2xl font-semibold mb-3 text-[#007ACC]">Vision</h3>
              <p className="text-gray-600">To be the leading, most reliable, and sustainable business enterprise in Africa, setting the benchmark for quality and ethical operations.</p>
            </div>
          </div>
          {/* Mission */}
          <div className="p-1 rounded-3xl bg-gradient-to-r from-[#4CAF50] via-[#FF6B6B] to-[#F06529] animate-gradient-x">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="text-4xl mb-3 text-[#007ACC] inline-block"><TbTools /></div>
              <h3 className="text-2xl font-semibold mb-3 text-[#007ACC]">Mission</h3>
              <p className="text-gray-600">To deliver innovative and professional solutions in construction and civil works, ensuring client success through integrity, expertise, and precision.</p>
            </div>
          </div>
          {/* Core Values */}
          <div className="p-1 rounded-3xl bg-gradient-to-r from-[#F06529] via-[#00BFFF] to-[#333333] animate-gradient-x">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="text-4xl mb-3 text-[#007ACC] inline-block"><FaAward /></div>
              <h3 className="text-2xl font-semibold mb-3 text-[#007ACC]">Core Values</h3>
              <p className="text-gray-600">Integrity, Professionalism, Quality Assurance, Safety, and Sustainable Growth are at the heart of everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#FF6B6B]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="service-card p-1 rounded-3xl bg-gradient-to-r from-[#4CAF50] via-[#FF6B6B] to-[#F06529] animate-gradient-x">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-2 text-[#007ACC]">Consulting</h3>
              <p className="text-gray-600">Professional business consulting to optimize operations, construction strategy, and project planning.</p>
              <a href="/products-services" className="text-[#00BFFF] text-sm mt-3 block hover:underline">Learn More →</a>
            </div>
          </div>
          <div className="service-card p-1 rounded-3xl bg-gradient-to-r from-[#563D7C] via-[#00BFFF] to-[#007ACC] animate-gradient-x">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-2 text-[#007ACC]">Civil & Construction</h3>
              <p className="text-gray-600">Comprehensive civil engineering, road construction, earthworks, and general building services.</p>
              <a href="/products-services" className="text-[#00BFFF] text-sm mt-3 block hover:underline">View Portfolio →</a>
            </div>
          </div>
          <div className="service-card p-1 rounded-3xl bg-gradient-to-r from-[#F06529] via-[#00BFFF] to-[#333333] animate-gradient-x">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-2 text-[#007ACC]">Plant & Equipment Hire</h3>
              <p className="text-gray-600">Access to modern tech solutions and a full inventory of high-capacity plant and equipment for hire.</p>
              <a href="/equipment" className="text-[#00BFFF] text-sm mt-3 block hover:underline">View Inventory →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold mb-12 text-[#FF6B6B]">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="testimonial-card p-8 bg-gray-50 rounded-xl shadow-md border-l-4 border-[#4CAF50]">
            <p className="italic text-gray-700">"Mintirho transformed our business approach and helped us achieve record growth. Their professionalism and quality of work are unmatched. Highly recommended!"</p>
            <h4 className="mt-4 font-bold text-[#007ACC]">– John Doe, CEO, Alpha Corp</h4>
          </div>
          <div className="testimonial-card p-8 bg-gray-50 rounded-xl shadow-md border-l-4 border-[#4CAF50]">
            <p className="italic text-gray-700">"The team is professional, knowledgeable, and always responsive to our needs. The project was completed on time and well within budget."</p>
            <h4 className="mt-4 font-bold text-[#007ACC]">– Jane Smith, Marketing Director, Beta Industries</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="bg-[#333333] text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#F06529]">Ready to Take Your Business to the Next Level?</h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg opacity-90">
          Contact Mintirho Business Enterprises today and start your journey towards growth, compliance, and guaranteed success.
        </p>
        <a
          href="/contact"
          className="bg-[#FF6B6B] text-white px-8 py-4 rounded-lg font-extrabold text-xl hover:bg-[#F06529] transition duration-300 shadow-2xl"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
};

export default Home;

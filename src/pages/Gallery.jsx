import React, { useState } from "react";
import { FaCameraRetro, FaBuilding, FaTools } from "react-icons/fa";
import BritsWorkshop from '../assets/Brits-FET-Campus-workshop.png';
import Capricon from '../assets/capricon.png';
import DipTank from '../assets/DIP-TANK-WITH-PROOF-PHOKENG.png';
import LetabaCollege from '../assets/Letaba-fet-college.png';
import MidoroniClinic from '../assets/midoroniclinic.png';
import WorkInProgress from '../assets/Mintirho-work-in-progress.png';

const galleryImages = [
  { src: BritsWorkshop, alt: 'Brits FET Campus Workshop', icon: <FaBuilding /> },
  { src: Capricon, alt: 'Capricon Project Site', icon: <FaTools /> },
  { src: DipTank, alt: 'DIP TANK Proof Phokeng', icon: <FaBuilding /> },
  { src: LetabaCollege, alt: 'Letaba FET College Project', icon: <FaBuilding /> },
  { src: MidoroniClinic, alt: 'Midoroni Clinic Development', icon: <FaBuilding /> },
  { src: WorkInProgress, alt: 'Current Work in Progress', icon: <FaCameraRetro /> },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#4CAF50]/10 via-[#FF6B6B]/10 to-[#F06529]/10 px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Page Header */}
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] via-[#FF6B6B] to-[#F06529]">
          Mintirho Project Gallery
        </h1>
        <p className="text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
          Explore our portfolio of ongoing and completed projects across South Africa. Click any image to view it in detail.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="relative overflow-hidden rounded-3xl shadow-lg cursor-pointer transform hover:scale-105 hover:shadow-2xl transition duration-500 group bg-gradient-to-tr from-[#4CAF50]/30 via-[#FF6B6B]/30 to-[#F06529]/30"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-90 transition duration-300 flex flex-col items-center justify-center text-white rounded-3xl backdrop-blur-sm">
                <div className="text-4xl mb-2 animate-bounce">{image.icon}</div>
                <p className="text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#4CAF50] via-[#FF6B6B] to-[#F06529]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto object-cover rounded-t-3xl"
            />
            <div className="p-6 text-center bg-white rounded-b-3xl">
              <p className="text-gray-800 text-xl font-semibold">{selectedImage.alt}</p>
            </div>
            <button
              className="absolute top-4 right-4 text-gray-800 text-3xl font-bold hover:text-red-500 transition"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;

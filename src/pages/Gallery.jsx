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

return ( <main className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 px-6 py-20"> <div className="max-w-7xl mx-auto text-center"> <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
Mintirho Project Gallery </h1> <p className="text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
Explore our portfolio of ongoing and completed projects across South Africa. Click any image to view it in detail. </p>


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer transform hover:scale-105 hover:shadow-2xl transition duration-300 group"
          onClick={() => setSelectedImage(image)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white">
            <div className="text-4xl mb-2">{image.icon}</div>
            <p className="text-lg font-semibold">{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Modal */}
  {selectedImage && (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      onClick={() => setSelectedImage(null)}
    >
      <div className="relative max-w-4xl w-full">
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="w-full rounded-lg shadow-2xl animate-fadeIn"
        />
        <p className="text-white mt-4 text-center text-xl font-semibold">
          {selectedImage.alt}
        </p>
        <button
          className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500"
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

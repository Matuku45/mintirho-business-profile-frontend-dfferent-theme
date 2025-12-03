import React from "react";
import { FaCogs, FaTruck, FaMixer, FaTools, FaWrench } from "react-icons/fa";

const equipmentData = [
{ name: "Karoo Batch Plant & Duets Engine Generator on Trailer", qty: 2, capacity: "30KVA", age: "2009/2009", icon: <FaCogs className="text-4xl text-blue-700 mx-auto mb-2" /> },
{ name: "Mercedes Benz Atego 2628 6m3 Ready Mix Truck", qty: 3, capacity: "-", age: "2013", icon: <FaTruck className="text-4xl text-green-600 mx-auto mb-2" /> },
{ name: "Mercedesbenz Actross 3340 with 2 side tipper trail & super link trailer", qty: 1, capacity: "-", age: "2013", icon: <FaTruck className="text-4xl text-green-600 mx-auto mb-2" /> },
{ name: "Fuso Canter FE7 136 TD & Isuzu NPR400 (4 ton)-Dropside Truck", qty: 3, capacity: "-", age: "2010/2007", icon: <FaTruck className="text-4xl text-green-600 mx-auto mb-2" /> },
{ name: "Fuso FM 16-253 FC & Mercedes Benz 1214/48 EC (8 ton)-Dropside Truck", qty: 4, capacity: "-", age: "2010-2013", icon: <FaTruck className="text-4xl text-green-600 mx-auto mb-2" /> },
{ name: "Fuso FV26-310 (10M3) Tipper", qty: 3, capacity: "-", age: "2010", icon: <FaTruck className="text-4xl text-green-600 mx-auto mb-2" /> },
{ name: "Ford Ranger 2500XLT/ 2200LWB (Bakkie)", qty: 3, capacity: "-", age: "2004/2000", icon: <FaTruck className="text-4xl text-green-600 mx-auto mb-2" /> },
{ name: "Isuzu KB250D LWB (Bakkie)", qty: 3, capacity: "-", age: "2011/1997", icon: <FaTruck className="text-4xl text-green-600 mx-auto mb-2" /> },
{ name: "TLB CAT 428E", qty: 5, capacity: "-", age: "2013", icon: <FaCogs className="text-4xl text-blue-700 mx-auto mb-2" /> },
{ name: "Isuzu KB300 TDI with Canopy (Bakkie)", qty: 1, capacity: "-", age: "2004", icon: <FaTruck className="text-4xl text-green-600 mx-auto mb-2" /> },
{ name: "Concrete Mixers (Heavy Duty)", qty: 10, capacity: "-", age: "2009/10", icon: <FaMixer className="text-4xl text-yellow-500 mx-auto mb-2" /> },
{ name: "Concrete Mixer (Light Duty)", qty: 8, capacity: "-", age: "2008/09", icon: <FaMixer className="text-4xl text-yellow-500 mx-auto mb-2" /> },
{ name: "Compactors", qty: 6, capacity: "-", age: "2009/10", icon: <FaCogs className="text-4xl text-blue-700 mx-auto mb-2" /> },
{ name: "Rammer-Wacker", qty: 1, capacity: "-", age: "2008/09", icon: <FaTools className="text-4xl text-red-500 mx-auto mb-2" /> },
{ name: "Roller- Bomaq", qty: 1, capacity: "-", age: "2010", icon: <FaCogs className="text-4xl text-blue-700 mx-auto mb-2" /> },
{ name: "Generator", qty: 3, capacity: "-", age: "2009/10", icon: <FaWrench className="text-4xl text-purple-600 mx-auto mb-2" /> },
{ name: "Welder & Generator Welder", qty: 4, capacity: "-", age: "2009/10", icon: <FaWrench className="text-4xl text-purple-600 mx-auto mb-2" /> },
{ name: "Tools (Drill, Grinder, Wheelbarrow, Circular saw)", qty: "8,6,67,8", capacity: "-", age: "2008/09/10", icon: <FaTools className="text-4xl text-red-500 mx-auto mb-2" /> },
{ name: "Scaffolding 50 m length by 6m height", qty: 1, capacity: "-", age: "-", icon: <FaCogs className="text-4xl text-blue-700 mx-auto mb-2" /> }
];

const Equipment = () => {
return ( <main className="min-h-screen bg-gray-50 px-6 py-20"> <div className="max-w-7xl mx-auto text-center"> <h1 className="text-5xl font-bold mb-12 text-gray-800">Our Equipment</h1> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{equipmentData.map((eq, index) => ( <div key={index} className="bg-white rounded-xl shadow-2xl p-6 hover:scale-105 transition transform duration-500">
{eq.icon} <h3 className="text-2xl font-semibold text-gray-800 mb-2">{eq.name}</h3> <p className="text-gray-700 mb-1"><span className="font-semibold">Quantity:</span> {eq.qty}</p> <p className="text-gray-700 mb-1"><span className="font-semibold">Capacity:</span> {eq.capacity}</p> <p className="text-gray-700 mb-1"><span className="font-semibold">Age:</span> {eq.age}</p> </div>
))} </div> </div> </main>
);
};

export default Equipment;

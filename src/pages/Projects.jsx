import React from "react";
import BritsWorkshop from '../assets/Brits-FET-Campus-workshop.png';
import Capricon from '../assets/capricon.png';
import DipTank from '../assets/DIP-TANK-WITH-PROOF-PHOKENG.png';
import LetabaCollege from '../assets/Letaba-fet-college.png';
import MidoroniClinic from '../assets/midoroniclinic.png';
import WorkInProgress from '../assets/Mintirho-work-in-progress.png';
import { motion } from "framer-motion";

const projectData = [
  {
    title: 'Brits FET Campus Workshop',
    description: 'Construction of new workshop',
    client: 'Capricorn FET College',
    contactPerson: 'Khathu Mahuwa',
    contactNumber: '015 296 4570',
    contractAmount: 'R 5 999 000',
    contractPeriod: '7 Months',
    startDate: 'Mar 2007',
    scheduleCompletion: 'Dec 2007',
    actualCompletion: 'Feb 2008',
    status: 'Completed',
    image: BritsWorkshop
  },
  {
    title: 'Capricon Construction Site',
    description: 'Polokwane FET Campus 3 storey building',
    client: 'Capricorn FET College',
    contactPerson: 'Khathu Mahuwa & Sam Manyathela',
    contactNumber: '015 296 4570',
    contractAmount: 'R 3 999 000',
    contractPeriod: '10 Months',
    startDate: 'Nov 2006',
    scheduleCompletion: 'Sept 2007',
    actualCompletion: 'Nov 2007',
    status: 'Completed',
    image: Capricon
  },
  {
    title: 'DIP TANK Proof Phokeng',
    description: 'Construction of 5 single quarter units',
    client: 'Dept of Water Affairs and Forestry',
    contactPerson: 'Grobler',
    contactNumber: '082 807 5396',
    contractAmount: 'R 3 977 107',
    contractPeriod: '6 months',
    startDate: 'Aug 2008',
    scheduleCompletion: 'Mar 2009',
    actualCompletion: 'Mar 2009',
    status: 'Completed',
    image: DipTank
  },
  {
    title: 'Letaba FET College Project',
    description: 'New classroom, laboratory and ablution block',
    client: 'Letaba FET College',
    contactPerson: 'Vic Osmers Tekiniplan',
    contactNumber: '015 307 5455',
    contractAmount: 'R 1 452 030',
    contractPeriod: '6 Months',
    startDate: 'Jul 2008',
    scheduleCompletion: 'Feb 2008',
    actualCompletion: 'Feb 2008',
    status: 'Completed',
    image: LetabaCollege
  },
  {
    title: 'Midoroni Clinic Development',
    description: 'Construction of new clinic',
    client: 'Department of Health',
    contactPerson: 'Creswell Phasha',
    contactNumber: '079 929 7594',
    contractAmount: 'R 12 551 571',
    contractPeriod: '12 Months',
    startDate: 'Mar 2011',
    scheduleCompletion: 'Mar 2012',
    actualCompletion: 'Mar 2012',
    status: 'Completed',
    image: MidoroniClinic
  },
  {
    title: 'Current Work in Progress',
    description: 'Ongoing projects in various locations',
    client: 'Multiple Clients',
    contactPerson: 'Project Managers',
    contactNumber: 'Varies',
    contractAmount: 'Varies',
    contractPeriod: 'Ongoing',
    startDate: '2023',
    scheduleCompletion: 'Ongoing',
    actualCompletion: 'Ongoing',
    status: 'Ongoing',
    image: WorkInProgress
  }
];

const Projects = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-12 text-gray-800">Our Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative bg-gradient-to-r from-blue-400 via-yellow-400 to-pink-400 rounded-3xl p-1 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500">
                    <h3 className="text-white text-2xl font-bold text-center px-4">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6 text-left space-y-1">
                  <p className="text-gray-600">{project.description}</p>
                  <p className="text-gray-700"><span className="font-semibold">Client:</span> {project.client}</p>
                  <p className="text-gray-700"><span className="font-semibold">Contact:</span> {project.contactPerson} ({project.contactNumber})</p>
                  <p className="text-gray-700"><span className="font-semibold">Contract Amount:</span> {project.contractAmount}</p>
                  <p className="text-gray-700"><span className="font-semibold">Period:</span> {project.contractPeriod}</p>
                  <p className="text-gray-700"><span className="font-semibold">Start Date:</span> {project.startDate}</p>
                  <p className="text-gray-700"><span className="font-semibold">Scheduled Completion:</span> {project.scheduleCompletion}</p>
                  <p className="text-gray-700"><span className="font-semibold">Actual Completion:</span> {project.actualCompletion}</p>
                  <span
                    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                      project.status === 'Ongoing' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;

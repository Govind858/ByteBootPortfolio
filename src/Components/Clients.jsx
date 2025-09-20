import React, { useState } from 'react';
import { motion } from 'framer-motion';

import empireFitnes from '../assets/empireFitnessNew.png'
import greatWaters from '../assets/greatWaters-removebg-preview.png'
import neoTokyo from '../assets/neoTokyo-removebg-preview.png'
import oyaBaby from '../assets/oyaBaby-removebg-preview.png'
import strengthBase from '../assets/strengthBase-removebg-preview.png'
import techFord from '../assets/techFord-removebg-preview.png'
import techSport from '../assets/techSport-removebg-preview.png'
import wheelAlgment from '../assets/wheelAlgment-removebg-preview.png'

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    { id: 1, name: "Empire Fitness", logo: empireFitnes, website: "#", description: "Fitness center management system" },
    { id: 2, name: "Great Waters", logo: greatWaters, website: "#", description: "Water purification company website" },
    { id: 3, name: "Neo Tokyo", logo: neoTokyo, website: "#", description: "Japanese restaurant online platform" },
    { id: 4, name: "Oya Baby", logo: oyaBaby, website: "#", description: "Baby products e-commerce store" },
    { id: 5, name: "Strength Base", logo: strengthBase, website: "#", description: "Gym equipment supplier portal" },
    { id: 6, name: "Tech Ford", logo: techFord, website: "#", description: "Automotive technology solutions" },
    { id: 7, name: "Tech Sport", logo: techSport, website: "https://www.techford.in/", description: "Sports technology innovation" },
    { id: 8, name: "Wheel Alignment", logo: wheelAlgment, website: "#", description: "Automotive service management system" }
  ];

  const openModal = (client) => setSelectedClient(client);
  const closeModal = () => setSelectedClient(null);

  return (
    <section id="clients" className="w-full py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-500/5 animate-pulse"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title */}
        <h2 className="rajdhani-bold text-4xl md:text-5xl mb-8 text-center animate-fade-in opacity-0" 
            style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Our Valued Clients
          </span>
        </h2>
        
        <p className="poppins-light text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto animate-fade-in opacity-0"
           style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
          We've had the privilege of partnering with innovative companies across various industries
        </p>
        
        {/* Client Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          {clients.map((client, index) => (
            <motion.div 
              key={client.id}
              className="group relative bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 animate-fade-in opacity-0 cursor-pointer"
              style={{animationDelay: `${0.6 + index * 0.1}s`, animationFillMode: 'forwards'}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(client)}
            >
              <div className="flex flex-col items-center">
                {/* Client Logo */}
                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-4 flex items-center justify-center p-4 bg-white/5 rounded-xl">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Client Name */}
                <h3 className="rajdhani-bold text-lg text-white text-center mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {client.name}
                </h3>
                
                {/* View Details Button */}
                <button className="poppins-medium text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Modal */}
        {selectedClient && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-gray-800/90 backdrop-blur-lg rounded-2xl border border-cyan-400/20 p-8 max-w-2xl w-full mx-4">
              <div className="flex justify-between items-start mb-6">
                <h3 className="rajdhani-bold text-2xl text-white">{selectedClient.name}</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <div className="w-64 h-64 mx-auto bg-white/5 rounded-xl p-6 flex items-center justify-center">
                    <img 
                      src={selectedClient.logo} 
                      alt={selectedClient.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <p className="poppins-light text-gray-300 mb-4">{selectedClient.description}</p>
                  <div className="space-y-2">
                    <p className="poppins-medium text-cyan-400">Services Provided:</p>
                    <ul className="poppins-regular text-gray-300 list-disc list-inside space-y-1">
                      <li>Custom Web Application</li>
                      <li>Mobile App Development</li>
                      <li>Ongoing Maintenance & Support</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 flex gap-4">
                    <a 
                      href={selectedClient.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="poppins-medium px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300"
                    >
                      Visit Website
                    </a>
                    <button 
                      onClick={closeModal}
                      className="poppins-medium px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Clients;

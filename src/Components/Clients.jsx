import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import empireFitnes from '../assets/empireFitness.jpg'
import greatWaters from '../assets/greatWaters.jpg'
import neoTokyo from '../assets/neoTokyo.jpg'
import oyaBaby from '../assets/oyaBaby.jpg'
import strengthBase from '../assets/strengthBase.jpg'
import techFord from '../assets/techFord.jpg'
import techSport from '../assets/techSport.jpg'
import wheelAlgment from '../assets/wheelAlgment.jpg'

const Clients = () => {
  // Array for client logos - replace with your actual client logo URLs
  const clients = [
    {
      id: 1,
      name: "Client 1",
      logo: empireFitnes,
      website: "#"
    },
    {
      id: 2,
      name: "Client 2",
      logo: greatWaters,
      website: "#"
    },
    {
      id: 3,
      name: "Client 3",
      logo: neoTokyo,
      website: "#"
    },
    {
      id: 4,
      name: "Client 4",
      logo: oyaBaby,
      website: "#"
    },
    {
      id: 5,
      name: "Client 5",
      logo: strengthBase,
      website: "#"
    },
    {
      id: 6,
      name: "Client 6",
      logo: techFord,
      website: "#"
    },
    {
      id: 7,
      name: "Client 7",
      logo: techSport,
      website: "#"
    },
    {
      id: 8,
      name: "Client 8",
      logo: wheelAlgment,
      website: "#"
    }
  ];

  return (
    <section id="clients" className="w-full py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-500/5 animate-pulse"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center animate-fade-in opacity-0" 
            style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Our Clients
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto animate-fade-in opacity-0"
           style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
          We've had the privilege of working with some amazing companies and brands
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div 
              key={client.id}
              className="flex items-center justify-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 animate-fade-in opacity-0"
              style={{animationDelay: `${0.6 + index * 0.1}s`, animationFillMode: 'forwards'}}
            >
              <a 
                href={client.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-20"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-fade-in opacity-0"
             style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
          <h3 className="text-2xl font-semibold text-white mb-6">Want to join our client list?</h3>
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105">
            Start a Project
          </button>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Clients;
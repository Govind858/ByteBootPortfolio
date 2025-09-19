import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "We craft web and mobile apps that are fast, scalable, and user-friendly, helping businesses grow with technology.",
      icon: "💻",
      gradient: "from-cyan-400 to-cyan-600"
    },
    {
      id: 2,
      title: "IoT & Robotics Projects",
      description: "From automation to smart devices, we bring innovative ideas to life using electronics, sensors, and robotics.",
      icon: "🤖",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      id: 3,
      title: "Digital Transformation",
      description: "We design modern websites and integrate technology to make your business smarter, faster, and future-ready.",
      icon: "🚀",
      gradient: "from-cyan-400 to-purple-600"
    }
  ];

  return (
    <section id="services" className="min-h-screen w-full flex items-center justify-center py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? 'rgba(6, 182, 212, 0.05)' : 
                         i % 3 === 1 ? 'rgba(147, 51, 234, 0.05)' : 'rgba(255, 255, 255, 0.03)',
              animationDelay: `${i * 3}s`,
              animationDuration: `${Math.random() * 12 + 12}s`
            }}
          />
        ))}
      </div>

      <div className="w-full px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center animate-fade-in opacity-0" 
              style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 animate-fade-in opacity-0"
                style={{animationDelay: `${0.4 + index * 0.2}s`, animationFillMode: 'forwards'}}
              >
                <div className={`text-5xl mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-6 px-5 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-cyan-400 rounded-full font-medium border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-cyan-400/5 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Additional CTA section */}
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20 animate-fade-in opacity-0"
               style={{animationDelay: '1.0s', animationFillMode: 'forwards'}}>
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Let's discuss how our services can help you achieve your goals and drive innovation in your industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105">
                  Start a Project
                </button>
                <button className="px-8 py-3 border border-cyan-400/30 text-cyan-400 rounded-full font-medium hover:bg-cyan-400/10 transition-colors duration-300 transform hover:scale-105">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
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

export default Services;
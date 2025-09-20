import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center py-16 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: Math.random() * 250 + 50,
              height: Math.random() * 250 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? 'rgba(6, 182, 212, 0.05)' : 
                         i % 3 === 1 ? 'rgba(147, 51, 234, 0.05)' : 'rgba(255, 255, 255, 0.03)',
              animationDelay: `${i * 2}s`,
              animationDuration: `${Math.random() * 15 + 15}s`
            }}
          />
        ))}
      </div>

      <div className="w-full px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center animate-fade-in opacity-0" 
              style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Driving Digital Transformation
            </span>
          </h2>
          
          <div className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center mb-10 animate-fade-in opacity-0" 
               style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <p className="mb-8">
              We are passionate about building smart, scalable, and innovative digital solutions.
            </p>
            <p className="mb-8">
              Our mission is to empower businesses, institutions, and individuals by delivering 
              cutting-edge software, intuitive mobile apps, and seamless web experiences.
            </p>
          </div>

          {/* Additional content */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-500 animate-fade-in opacity-0"
                 style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
              <div className="text-cyan-400 text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-gray-400">We stay ahead of technology trends to deliver future-proof solutions that give you a competitive edge.</p>
            </div>
            
            <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 animate-fade-in opacity-0"
                 style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
              <div className="text-purple-400 text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Tailored Solutions</h3>
              <p className="text-gray-400">Every project is unique. We craft custom solutions that perfectly fit your specific needs and goals.</p>
            </div>
            
            <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-500 animate-fade-in opacity-0"
                 style={{animationDelay: '1.0s', animationFillMode: 'forwards'}}>
              <div className="text-cyan-400 text-3xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence Guaranteed</h3>
              <p className="text-gray-400">We're committed to delivering exceptional quality with rigorous testing and attention to detail.</p>
            </div>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center animate-fade-in opacity-0" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-400 bg-clip-text text-transparent">150+</div>
              <div className="text-gray-400 mt-2">Projects Completed</div>
            </div>
            <div className="text-center animate-fade-in opacity-0" style={{animationDelay: '1.3s', animationFillMode: 'forwards'}}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-500 bg-clip-text text-transparent">98%</div>
              <div className="text-gray-400 mt-2">Client Satisfaction</div>
            </div>
            <div className="text-center animate-fade-in opacity-0" style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-400 bg-clip-text text-transparent">50+</div>
              <div className="text-gray-400 mt-2">Team Members</div>
            </div>
            <div className="text-center animate-fade-in opacity-0" style={{animationDelay: '1.5s', animationFillMode: 'forwards'}}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-500 bg-clip-text text-transparent">12+</div>
              <div className="text-gray-400 mt-2">Years Experience</div>
            </div>
          </div>
          
          {/* <div className="flex justify-center animate-fade-in opacity-0" 
               style={{animationDelay: '1.6s', animationFillMode: 'forwards'}}>
            <button 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 mr-4"
            >
              View Our Work
            </button>
            <button 
              className="px-8 py-4 border border-cyan-400/30 text-cyan-400 rounded-full font-medium text-lg hover:bg-cyan-400/10 transition-colors duration-300 transform hover:scale-105"
            >
              Meet Our Team
            </button>
          </div> */}
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

export default Introduction;
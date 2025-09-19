import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Expert Team",
      description: "Skilled developers, designers, and innovators who love what they do.",
      icon: "👨‍💻",
      gradient: "from-cyan-400 to-cyan-600"
    },
    {
      id: 2,
      title: "End-to-End Support",
      description: "From idea to launch, we're with you at every step.",
      icon: "🛠️",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      id: 3,
      title: "Quality & Speed",
      description: "Fast delivery without compromising on performance or design.",
      icon: "⚡",
      gradient: "from-cyan-400 to-purple-600"
    },
    {
      id: 4,
      title: "Innovative Approach",
      description: "We craft solutions that are smart, scalable, and future-ready.",
      icon: "💡",
      gradient: "from-purple-500 to-cyan-600"
    }
  ];

  return (
    <section id="why-choose-us" className="w-full py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 4 === 0 ? 'rgba(6, 182, 212, 0.05)' : 
                         i % 4 === 1 ? 'rgba(147, 51, 234, 0.05)' : 
                         i % 4 === 2 ? 'rgba(255, 255, 255, 0.03)' : 'rgba(6, 182, 212, 0.03)',
              animationDelay: `${i * 2}s`,
              animationDuration: `${Math.random() * 12 + 12}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center animate-fade-in opacity-0" 
            style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            WHY CHOOSE US
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 animate-fade-in opacity-0 group"
              style={{animationDelay: `${0.4 + index * 0.2}s`, animationFillMode: 'forwards'}}
            >
              <div className={`text-5xl mb-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center animate-fade-in opacity-0" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-400 bg-clip-text text-transparent">150+</div>
            <div className="text-gray-400 mt-2">Projects</div>
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

        {/* CTA Section */}
        <div className="text-center animate-fade-in opacity-0" style={{animationDelay: '1.6s', animationFillMode: 'forwards'}}>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">Ready to experience the difference?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our growing list of satisfied clients who have transformed their ideas into successful digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="px-8 py-3 border border-cyan-400/30 text-cyan-400 rounded-full font-medium hover:bg-cyan-400/10 transition-colors duration-300 transform hover:scale-105">
              View Case Studies
            </button>
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

export default WhyChooseUs;
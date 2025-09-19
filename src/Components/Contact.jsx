import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
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
            GET IN TOUCH
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Left Column - Contact Information */}
          <div className="animate-fade-in opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Have an idea, project, or collaboration in mind?
            </h3>
            <p className="text-xl text-cyan-400 mb-10">
              Let's build something amazing together!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-cyan-400/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-1">Email</h4>
                  <a href="mailto:contact@byteboo.in" className="text-white text-lg hover:text-cyan-400 transition-colors duration-300">
                    contact@byteboo.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-500/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-1">Website</h4>
                  <a href="https://www.byteboot.in" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-cyan-400 transition-colors duration-300">
                    www.byteboot.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-cyan-400/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-1">Social Media</h4>
                  <p className="text-white text-lg">bytebootTechno solutions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-500/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-1">Phone Number</h4>
                  <div className="space-y-2">
                    <a href="tel:+919778527748" className="block text-white text-lg hover:text-cyan-400 transition-colors duration-300">
                      +91 9778527748
                    </a>
                    <a href="tel:+919141109785" className="block text-white text-lg hover:text-cyan-400 transition-colors duration-300">
                      +91 9141109785
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="animate-fade-in opacity-0" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
            <div className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-400 text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
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

export default Contact;
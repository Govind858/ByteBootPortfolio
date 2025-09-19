import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function HomeContent() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
         {/* Animated background elements */}
         <div className="absolute inset-0 overflow-hidden">
           {[...Array(5)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute rounded-full bg-cyan-500/10"
               style={{
                 width: Math.random() * 300 + 100,
                 height: Math.random() * 300 + 100,
                 top: `${Math.random() * 100}%`,
                 left: `${Math.random() * 100}%`,
               }}
               animate={{
                 scale: [1, 1.2, 1],
                 rotate: [0, 180, 360],
               }}
               transition={{
                 duration: Math.random() * 10 + 10,
                 repeat: Infinity,
                 ease: "linear",
               }}
             />
           ))}
         </div>
         
         <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
           <motion.h1 
             className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
           >
             <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient">
               ByteBoot
             </span>
           </motion.h1>
           
           <motion.p 
             className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           >
             We craft digital experiences that shape the future of technology
           </motion.p>
           
           <motion.div 
             className="flex flex-col sm:flex-row gap-4 justify-center"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
           >
             <motion.button 
               className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
               whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4), 0 8px 10px -6px rgba(147, 51, 234, 0.4)" }}
               whileTap={{ scale: 0.95 }}
             >
               Our Projects
             </motion.button>
             
             <motion.button 
               className="px-8 py-3 border border-cyan-400/30 text-cyan-400 rounded-full font-medium hover:bg-cyan-400/10 transition-colors duration-300"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               Learn More
             </motion.button>
           </motion.div>
         </div>
         
         {/* Scroll indicator */}
         <motion.div 
           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
         >
           <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
             <motion.div
               className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
               animate={{ y: [0, 12, 0] }}
               transition={{ duration: 1.5, repeat: Infinity }}
             />
           </div>
         </motion.div>
       </section>
  )
}

export default HomeContent
import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Gym Management System",
      description: "Simplify member registrations, track workouts, and manage subscriptions with ease. Keep your fitness business running smarter. Integration with devices.",
      icon: "🏋️‍♂️",
      gradient: "from-cyan-400 to-cyan-600",
      features: ["Member Management", "Subscription Tracking", "Device Integration", "Workout Analytics"]
    },
    {
      id: 2,
      title: "Prebuilt eCommerce",
      description: "Launch your online store in minutes with a ready-to-use, customizable eCommerce solution designed for growth.",
      icon: "🛒",
      gradient: "from-purple-500 to-purple-700",
      features: ["Quick Setup", "Customizable Templates", "Payment Integration", "Inventory Management"]
    },
    {
      id: 3,
      title: "CRM System",
      description: "Streamline customer interactions, track leads, and boost sales with an intuitive and powerful CRM system.",
      icon: "📊",
      gradient: "from-cyan-400 to-purple-600",
      features: ["Lead Tracking", "Customer Management", "Sales Pipeline", "Reporting Dashboard"]
    },
    {
      id: 4,
      title: "AI Chatbot",
      description: "Engage customers 24/7 with an intelligent, conversational AI chatbot that enhances support and drives conversions.",
      icon: "🤖",
      gradient: "from-purple-500 to-cyan-600",
      features: ["24/7 Support", "Natural Language Processing", "Multi-platform", "Conversation Analytics"]
    },
    {
      id: 5,
      title: "CoffyByte",
      description: "Manage orders, tables, inventory, and billing effortlessly with our all-in-one restaurant management solution.",
      icon: "☕",
      gradient: "from-amber-500 to-amber-700",
      features: ["Order Management", "Table Reservation", "Inventory Control", "Billing System"]
    }
  ];

  return (
    <section id="products" className="min-h-screen w-full flex items-center justify-center py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: Math.random() * 180 + 40,
              height: Math.random() * 180 + 40,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 4 === 0 ? 'rgba(6, 182, 212, 0.05)' : 
                         i % 4 === 1 ? 'rgba(147, 51, 234, 0.05)' : 
                         i % 4 === 2 ? 'rgba(245, 158, 11, 0.05)' : 'rgba(255, 255, 255, 0.03)',
              animationDelay: `${i * 2}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="w-full px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h2 className="rajdhani-bold text-4xl md:text-5xl lg:text-6xl mb-16 text-center animate-fade-in opacity-0" 
              style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 hover:scale-[1.02] animate-fade-in opacity-0 group"
                style={{animationDelay: `${0.4 + index * 0.15}s`, animationFillMode: 'forwards'}}
              >
                <div className={`text-5xl mb-6 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>

                {/* Product Title with Rajdhani */}
                <h3 className="rajdhani-bold text-2xl text-white mb-4">
                  {product.title}
                </h3>

                {/* Description with Poppins */}
                <p className="poppins-light text-gray-400 text-lg leading-relaxed mb-6">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="poppins-medium text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span className="poppins-regular text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* <button className="w-full px-5 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-cyan-400 rounded-full poppins-medium border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-cyan-400/5 transition-all duration-300">
                  View Details
                </button> */}
              </div>
            ))}
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

export default Products;

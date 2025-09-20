import React from 'react';

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
          {/* Rajdhani font for main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 text-center animate-fade-in opacity-0 font-rajdhani" 
              style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="bg-gray-800/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 animate-fade-in opacity-0 font-poppins"
                style={{animationDelay: `${0.4 + index * 0.2}s`, animationFillMode: 'forwards'}}
              >
                <div className={`text-4xl md:text-5xl mb-4 md:mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.icon}
                </div>
                {/* Rajdhani font for service titles */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4 font-rajdhani">
                  {service.title}
                </h3>
                {/* Poppins font for descriptions */}
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-poppins">
                  {service.description}
                </p>
                <button className="mt-4 md:mt-6 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-cyan-400 rounded-full font-medium border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-cyan-400/5 transition-all duration-300 text-sm md:text-base font-poppins">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Creative Process Visualization - Poppins font */}
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12 border border-cyan-400/20 animate-fade-in opacity-0 font-poppins"
               style={{animationDelay: '1.0s', animationFillMode: 'forwards'}}>
            <div className="text-center max-w-4xl mx-auto">
              {/* Rajdhani font for section title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 font-rajdhani">
                Our Creative Process
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-cyan-400/10 rounded-full flex items-center justify-center text-xl md:text-2xl">
                    1
                  </div>
                  <h4 className="text-cyan-400 font-semibold mb-1 md:mb-2 text-sm md:text-base">Discover</h4>
                  <p className="text-gray-300 text-xs md:text-sm">Understanding your vision and requirements</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-purple-500/10 rounded-full flex items-center justify-center text-xl md:text-2xl">
                    2
                  </div>
                  <h4 className="text-purple-400 font-semibold mb-1 md:mb-2 text-sm md:text-base">Design</h4>
                  <p className="text-gray-300 text-xs md:text-sm">Crafting innovative solutions and prototypes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-cyan-400/10 rounded-full flex items-center justify-center text-xl md:text-2xl">
                    3
                  </div>
                  <h4 className="text-cyan-400 font-semibold mb-1 md:mb-2 text-sm md:text-base">Develop</h4>
                  <p className="text-gray-300 text-xs md:text-sm">Building with cutting-edge technologies</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-purple-500/10 rounded-full flex items-center justify-center text-xl md:text-2xl">
                    4
                  </div>
                  <h4 className="text-purple-400 font-semibold mb-1 md:mb-2 text-sm md:text-base">Deliver</h4>
                  <p className="text-gray-300 text-xs md:text-sm">Launching and supporting your solution</p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 p-4 md:p-6 rounded-xl border border-gray-700">
                {/* Rajdhani font for "Why Choose Our Approach?" */}
                <h4 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 font-rajdhani">Why Choose Our Approach?</h4>
                <p className="text-gray-300 text-sm md:text-base">
                  We combine technical expertise with creative thinking to deliver solutions that not only 
                  meet your business objectives but also provide exceptional user experiences and drive 
                  measurable results. Our iterative process ensures we're always aligned with your vision.
                </p>
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
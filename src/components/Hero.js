import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-24 pb-20 px-6 min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Modern, minimalist architecture image */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Main Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6 leading-tight">
            Redefining
            <span className="block font-medium mt-2 text-white">Real Estate Excellence</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            We craft exceptional living spaces through innovative development,
            meticulous management, and thoughtful sales strategies.
          </p>
          
          {/* Simple CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3.5 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <span>Explore Properties</span>
              <ArrowRight size={18} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3.5 text-sm font-medium rounded-lg hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm">
              Our Services
            </button>
          </div>
        </div>

        {/* Minimalist Search */}
        <div className="max-w-2xl mx-auto mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />
            <input
              type="text"
              placeholder="Search properties, locations, or keywords"
              className="w-full pl-12 pr-4 py-4 text-sm bg-transparent text-white placeholder-gray-300 border-0 rounded-lg focus:outline-none focus:ring-0"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-primary p-2 rounded-md hover:bg-gray-100 transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Stats - Minimalist */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-light text-white mb-2">500+</div>
            <div className="text-sm text-gray-300">Properties Sold</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-white mb-2">$2B+</div>
            <div className="text-sm text-gray-300">Property Value</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-white mb-2">25+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-white mb-2">98%</div>
            <div className="text-sm text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
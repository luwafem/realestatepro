import React from 'react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import ServiceCard from '../components/ServiceCard';
import { properties, services } from '../data/properties';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const featuredProperties = properties.slice(0, 4);
  const allServices = services;

  // Debug: Check what's being imported
  console.log('Services imported:', services);
  console.log('All services array:', allServices);
  console.log('Is services array?', Array.isArray(allServices));

  return (
    <div className="bg-light min-h-screen">
      <Hero />
      
      {/* Featured Properties */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
              Featured Properties
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Curated selection of premium properties designed for modern living
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="text-center">
            <button className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              View all properties
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section with Safe Rendering */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
              Our Services
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Comprehensive real estate solutions from development to management
            </p>
          </div>
          
          {/* Check if services exist and is array */}
          {allServices && Array.isArray(allServices) && allServices.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {allServices.map((service, index) => {
                // Log each service being passed
                console.log(`Passing service ${index}:`, service);
                return service ? (
                  <ServiceCard key={service.id || `service-${index}`} service={service} />
                ) : (
                  <div key={`placeholder-${index}`} className="text-center text-muted">
                    Service unavailable
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center text-muted">
              <p>No services available</p>
              <p className="text-sm mt-2">Debug: allServices = {JSON.stringify(allServices)}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
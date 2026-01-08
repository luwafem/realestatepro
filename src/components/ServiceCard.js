import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }) => {
  // Early return if service is falsy
  if (!service) return null;

  // Safely extract values with defaults
  const { 
    title = 'Service Title', 
    description = 'Service description', 
    features = [] 
  } = service;

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
      {/* Simple title with accent line */}
      <div className="mb-6">
        <div className="w-12 h-0.5 bg-accent mb-4"></div>
        <h3 className="text-xl font-medium text-primary">{title}</h3>
      </div>
      
      {/* Description */}
      <p className="text-muted mb-6 leading-relaxed">{description}</p>

      {/* Simple features list */}
      {Array.isArray(features) && features.length > 0 && (
        <ul className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-primary">
              • {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Minimal CTA */}
      <div className="flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors cursor-pointer">
        <span>Learn more</span>
        <ArrowRight size={14} className="ml-1" />
      </div>
    </div>
  );
};

export default ServiceCard;
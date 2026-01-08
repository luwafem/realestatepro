import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
      {/* Icon */}
      <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
        {service.icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-medium text-primary mb-3">{service.title}</h3>
      <p className="text-muted mb-6 leading-relaxed">{service.description}</p>

      {/* Features List */}
      <ul className="space-y-3 mb-8">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
            <span className="text-primary">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className="flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors">
        <span>Learn more</span>
        <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  );
};

export default ServiceCard;
import React from 'react';
import { Bed, Bath, Square, MapPin, ChevronRight } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${property.type === 'sale' ? 'bg-accent text-white' : 'bg-gray-800 text-white'}`}>
            {property.type === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-light text-primary">
            ₦{property.price.toLocaleString()}
            {property.type === 'rent' && <span className="text-sm text-muted">/month</span>}
          </span>
        </div>

        {/* Title & Location */}
        <h3 className="text-lg font-medium text-primary mb-2">{property.title}</h3>
        <div className="flex items-center text-sm text-muted mb-4">
          <MapPin size={14} className="mr-1.5" />
          <span>{property.location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center justify-between text-sm text-muted mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Bed size={16} className="mr-1.5" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath size={16} className="mr-1.5" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square size={16} className="mr-1.5" />
              <span>{property.area} sqft</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full py-3 text-sm font-medium border border-gray-200 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 flex items-center justify-center group-hover:border-primary">
          View Details
          <ChevronRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;  // Now using the icon URL (image path) instead of React components
  isHighlighted?: boolean;
}

const ServiceCard = ({ title, description, icon, isHighlighted }: ServiceCardProps) => {
  return (
    <div
      className={`service-card ${isHighlighted ? 'highlighted' : ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br  to-purple-600/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
      
      {/* Image/Icon with hover effect to make it golden */}
      <img 
        src={icon} 
        alt={title} 
        className="service-icon"
      />
      
      {isHighlighted && (
        <div className="absolute top-2 right-2">
          <span className="highlight-golden-icon text-4xl main-icon-col">★</span>
        </div>
      )}
      
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white-300 text-base">{description}</p>

      {/* Add the golden effect text below the image */}
      <div className="hover-text text-xl font-semibold mt-2">
        
      </div>
    </div>
  );
};

export default ServiceCard;

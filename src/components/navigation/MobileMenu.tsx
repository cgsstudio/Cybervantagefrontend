import React from 'react';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`
        fixed inset-0 z-50 md:hidden transition-opacity duration-300
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-black/95 shadow-xl">
        <div className="px-6 py-6 h-full overflow-y-auto">
          <NavLinks 
            className="flex flex-col space-y-4 mt-8" 
            onLinkClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
      aria-expanded={isOpen}
    >
      <span className="sr-only">Open main menu</span>
      {isOpen ? (
        <X className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Menu className="block h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
};

export default MobileMenuButton;
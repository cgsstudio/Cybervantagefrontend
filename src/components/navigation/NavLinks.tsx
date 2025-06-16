import React from 'react';

interface NavLinksProps {
  className?: string;
  onLinkClick?: () => void;
}

const NavLinks = ({ className = '', onLinkClick }: NavLinksProps) => {
  const links = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#support', label: 'Support' },
    { href: '#contact', label: 'Contact Us' },
  ];

  return (
    <div className={className}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className="text-gray-300 hover:text-white px-3 py-2 rounded-lg block transition-colors duration-200 hover:bg-white/10"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
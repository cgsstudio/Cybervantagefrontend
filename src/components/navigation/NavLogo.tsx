import React from 'react';
import { Shield } from 'lucide-react';

const NavLogo = () => {
  return (
    <div className="flex items-center">
      <Shield className="h-8 w-8 text-orange-500" />
      <span className="ml-2 text-white font-bold text-xl">CyberVantage</span>
    </div>
  );
};

export default NavLogo;
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-7xl font-bold mb-4 text-orange-500">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-gray-400 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link to="/">
        <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:from-orange-600 hover:to-purple-700 transition-all duration-200">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound; 
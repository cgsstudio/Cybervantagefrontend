import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  pageTitle: string; // Add pageTitle prop
}

const Breadcrumb = ({ items, pageTitle }: BreadcrumbProps) => {
  return (
    <div>
      {/* Gradient Banner with Title */}
      <div className="w-full bg-gradient-to-r from-[#7103A4] to-[#F57A00] px-4 py-12 md:py-16 2xl:py-36 flex flex-col items-center justify-center mt-[100px]">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl font-bold text-white text-center drop-shadow-lg">{pageTitle}</h2>
        
      {/* Breadcrumb Navigation */}
      <nav className="flex container mx-auto items-center justify-center px-4 py-4 sm:" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="text-gray-500 text-[16px] md:text-[20px] text-white">
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex text-[16px] md:text-[20px] text-white items-center">
              /
              <Link
                to={item.path}
                className={`ml-2 ${
                  index === items.length - 1
                    ? 'text-white-900 font-medium'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      </div>

    
    </div>
  );
};

export default Breadcrumb;

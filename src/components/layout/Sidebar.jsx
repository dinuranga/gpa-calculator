import React, { useState, useEffect } from 'react';
import { 
  ChevronLeftIcon,
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { 
  ChartBarIcon,
  AcademicCapIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  ScaleIcon,
  PrinterIcon
} from '@heroicons/react/24/solid';
import { useUser } from '../../context/UserContext';

function Sidebar({ selectedItem = 'Overview', onSelectItem }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { signOut } = useUser();

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuItemClick = (itemName) => {
    onSelectItem(itemName);
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  const handleSignOut = (e) => {
    e.stopPropagation();
    signOut();
  };

  const menuItems = [
    { 
      name: 'Overview', 
      icon: ChartBarIcon, 
      path: '/dashboard',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      hoverBg: 'hover:bg-blue-50',
      selectedBg: 'bg-blue-50'
    },
    { 
      name: 'Semesters', 
      icon: AcademicCapIcon, 
      path: '/grades',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      hoverBg: 'hover:bg-purple-50',
      selectedBg: 'bg-purple-50'
    },
    { 
      name: 'Analysis', 
      icon: UserIcon, 
      path: '/profile',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      hoverBg: 'hover:bg-green-50',
      selectedBg: 'bg-green-50'
    },
    {
      name: 'Print Summary',
      icon: PrinterIcon,
      path: '/print',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      hoverBg: 'hover:bg-orange-50',
      selectedBg: 'bg-orange-50'
    }
  ];

  const sidebarContent = (
    <>
      {/* Logo Section */}
      <div className="h-[70.5px] flex items-center px-4 border-b border-gray-200">
        <div className={`flex items-center ${isCollapsed ? 'w-0 overflow-hidden' : 'w-full'}`}>
          <h1 className="text-xl font-bold whitespace-nowrap">
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Fast</span>
            <span className="text-gray-800">Graduate</span>
          </h1>
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 ml-auto hidden md:block"
        >
          {isCollapsed ? (
            <ChevronRightIcon className="h-5 w-5 text-gray-600" />
          ) : (
            <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 px-3 py-3 overflow-y-auto">
        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => handleMenuItemClick(item.name)}
            className={`flex items-center px-2 py-2.5 mb-1.5 rounded-lg cursor-pointer transition-colors duration-200 ${
              item.hoverBg
            } ${selectedItem === item.name ? item.selectedBg : ''}`}
          >
            <div className={`w-9 h-9 flex-shrink-0 rounded-lg ${item.bgColor} flex items-center justify-center transition-colors duration-200`}>
              <item.icon className={`w-5 h-5 ${item.iconColor}`} />
            </div>
            <div className={`ml-3 ${isCollapsed ? 'w-0 overflow-hidden' : 'w-full'}`}>
              <span className="text-gray-700 group-hover:text-gray-900 whitespace-nowrap">{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Settings Section */}
      <div className="border-t border-gray-200">
        <div className="p-3">
          <div 
            onClick={() => handleMenuItemClick('Grading Scale')}
            className={`flex items-center px-2 py-2.5 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors duration-200 ${
              selectedItem === 'Grading Scale' ? 'bg-amber-50' : ''
            }`}
          >
            <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-amber-100 flex items-center justify-center">
              <ScaleIcon className="w-5 h-5 text-amber-600" />
            </div>
            <div className={`ml-3 ${isCollapsed ? 'w-0 overflow-hidden' : 'w-full'}`}>
              <span className="text-gray-700 group-hover:text-gray-900 whitespace-nowrap">Grading Scale</span>
            </div>
          </div>
          <div 
            onClick={() => handleMenuItemClick('Settings')}
            className={`flex items-center px-2 py-2.5 mt-1.5 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 ${
              selectedItem === 'Settings' ? 'bg-gray-100' : ''
            }`}
          >
            <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-gray-100 flex items-center justify-center">
              <Cog6ToothIcon className="w-5 h-5 text-gray-600" />
            </div>
            <div className={`ml-3 ${isCollapsed ? 'w-0 overflow-hidden' : 'w-full'}`}>
              <span className="text-gray-700 group-hover:text-gray-900 whitespace-nowrap">Settings</span>
            </div>
          </div>
        </div>
        <div className="p-3 border-t border-gray-200">
          <div 
            onClick={handleSignOut}
            className="flex items-center px-2 py-2.5 rounded-lg cursor-pointer hover:bg-red-50 transition-colors duration-200"
          >
            <div className="w-9 h-9 flex-shrink-0 rounded-lg flex items-center justify-center">
              <ArrowLeftOnRectangleIcon className="w-5 h-5 text-red-500 group-hover:text-red-600" />
            </div>
            <div className={`ml-3 ${isCollapsed ? 'w-0 overflow-hidden' : 'w-full'}`}>
              <span className="text-red-500 group-hover:text-red-600 whitespace-nowrap">Sign Out</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      {!isMobileMenuOpen && (
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-lg"
        >
          <Bars3Icon className="h-6 w-6 text-gray-600" />
        </button>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed md:static inset-y-0 left-0 z-40 bg-white transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ${
          isCollapsed ? 'w-20' : 'w-64'
        } flex flex-col h-screen`}
      >
        {/* Close button for mobile */}
        {isMobileMenuOpen && (
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-lg md:hidden"
          >
            <XMarkIcon className="h-6 w-6 text-gray-600" />
          </button>
        )}
        {sidebarContent}
      </div>
    </>
  );
}

export default Sidebar; 
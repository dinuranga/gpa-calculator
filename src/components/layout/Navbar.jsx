import React, { useState, useEffect, useRef } from 'react';
import { useUser } from '../../context/UserContext';
import { Cog6ToothIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import ProfileSettingsModal from '../auth/ProfileSettingsModal';

function Navbar({ selectedItem = 'Overview' }) {
  const [greeting, setGreeting] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const { user, signOut } = useUser();
  const [imageError, setImageError] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  // Reset image error when user changes
  useEffect(() => {
    setImageError(false);
  }, [user?.picture]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getInitials = (name) => {
    if (!name) return '?';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="bg-white border-b border-gray-200 h-[70.5px] flex items-center px-4 md:px-6">
        {/* Left side - Page Title */}
        <div className="flex-1 ml-14 md:ml-0">
          <h1 className="text-lg md:text-xl font-semibold text-gray-900">{selectedItem}</h1>
        </div>

        {/* Right side - User Profile */}
        <div className="flex items-center justify-end space-x-3 md:space-x-4">
          <div className="text-right hidden sm:block">
            <p className="text-base md:text-lg font-semibold text-gray-800 leading-tight">
              {greeting}, {user?.given_name || user?.name?.split(' ')[0] || 'Guest'}
            </p>
            <p className="text-xs md:text-sm text-gray-500 text-right">
              {user?.email || 'Not signed in'}
            </p>
          </div>
          {user && (
            <div className="relative flex-shrink-0 flex items-center" ref={dropdownRef}>
              <button
                onClick={handleProfileClick}
                className="focus:outline-none flex items-center justify-center"
              >
                {user.picture && !imageError ? (
                  <img
                    src={user.picture}
                    alt={user.name || 'Profile'}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-200 object-cover"
                    onError={() => setImageError(true)}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-200 bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-xs md:text-sm">
                      {getInitials(user.name)}
                    </span>
                  </div>
                )}
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      setShowProfileModal(true);
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Cog6ToothIcon className="h-5 w-5 mr-3 text-gray-500" />
                    Profile Settings
                  </button>
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      signOut();
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-3 text-red-500" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Profile Settings Modal */}
      <ProfileSettingsModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        user={user}
      />
    </>
  );
}

export default Navbar; 
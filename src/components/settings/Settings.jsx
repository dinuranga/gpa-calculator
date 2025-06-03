import React, { useState } from 'react';
import {
  BellIcon,
  MoonIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

function ToggleSwitch({ checked, onChange, activeColor = 'bg-blue-600' }) {
  return (
    <button
      type="button"
      className={`${
        checked ? activeColor : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${activeColor.replace('bg-', 'focus:ring-')}`}
      onClick={() => onChange(!checked)}
    >
      <span className="sr-only">Toggle switch</span>
      <span
        className={`${
          checked ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
      />
    </button>
  );
}

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('english');

  const languages = [
    { code: 'english', label: 'English' },
    { code: 'sinhala', label: 'සිංහල' },
    { code: 'tamil', label: 'தமிழ்' },
  ];

  return (
    <div className="mx-auto">
      {/* Email Notifications */}
      <div className="mb-3 bg-white rounded-lg border border-gray-200 px-3 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-1.5 bg-blue-100 rounded-lg">
              <BellIcon className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Email Notifications</h2>
              <p className="text-sm text-gray-500">Receive updates about your academic progress</p>
            </div>
          </div>
          <ToggleSwitch 
            checked={notifications} 
            onChange={setNotifications}
            activeColor="bg-blue-600"
          />
        </div>
      </div>

      {/* Dark Mode */}
      <div className="mb-3 bg-white rounded-lg border border-gray-200 px-3 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-1.5 bg-purple-100 rounded-lg">
              <MoonIcon className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Dark Mode</h2>
              <p className="text-sm text-gray-500">Switch between light and dark themes</p>
            </div>
          </div>
          <ToggleSwitch 
            checked={darkMode} 
            onChange={setDarkMode}
            activeColor="bg-purple-600"
          />
        </div>
      </div>

      {/* Language Preferences */}
      <div className="bg-white rounded-lg border border-gray-200 px-3 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-1.5 bg-green-100 rounded-lg">
              <GlobeAltIcon className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Language</h2>
              <p className="text-sm text-gray-500">Choose your preferred language</p>
            </div>
          </div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="block w-32 rounded-md border-gray-300 py-1.5 text-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Settings; 
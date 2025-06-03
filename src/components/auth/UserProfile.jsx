import React from 'react'

function UserProfile({ user, onLogout }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        {user.picture ? (
          <img 
            src={user.picture} 
            alt="Profile" 
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 font-medium text-sm">
              {user.given_name?.[0] || user.email?.[0]?.toUpperCase()}
            </span>
          </div>
        )}
        <div className="ml-3 hidden md:flex flex-col">
          <span className="text-sm font-medium text-gray-900">
            {user.name || 'User'}
          </span>
          <span className="text-xs text-gray-500">
            {user.email}
          </span>
        </div>
      </div>
      <button
        onClick={onLogout}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
      >
        Sign out
      </button>
    </div>
  )
}

export default UserProfile 
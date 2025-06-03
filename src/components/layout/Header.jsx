import React from 'react'
import UserProfile from '../auth/UserProfile'

function Header({ user, onLogout }) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <UserProfile user={user} onLogout={onLogout} />
        </div>
      </div>
    </header>
  )
}

export default Header 
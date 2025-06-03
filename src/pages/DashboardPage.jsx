import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/layout/Header'

function DashboardPage() {
  const navigate = useNavigate()
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  useEffect(() => {
    // Check if user is logged in
    const savedUser = localStorage.getItem('user')
    if (!savedUser) {
      navigate('/')
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={handleLogout} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Welcome to your GPA Calculator dashboard!</p>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage 
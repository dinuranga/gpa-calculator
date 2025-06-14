import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/auth/LoginForm'
import UserProfile from '../components/auth/UserProfile'
import { useUser } from '../context/UserContext'

function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true)
  const navigate = useNavigate()
  const { user, updateUser } = useUser()

  const handleGoogleSuccess = async (credentialResponse) => {
    console.log('Google login success:', credentialResponse)
    try {
      // Decode the JWT token to get user info
      const decoded = JSON.parse(atob(credentialResponse.credential.split('.')[1]))
      console.log('Decoded token:', decoded) // For debugging
      const userInfo = {
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture, // Google profile photo URL
        given_name: decoded.given_name,
        family_name: decoded.family_name,
        full_name: decoded.name,
        locale: decoded.locale,
        email_verified: decoded.email_verified
      }
      // Update user info using context
      updateUser(userInfo)
      // Navigate to dashboard after successful login
      navigate('/dashboard')
    } catch (error) {
      console.error('Error processing login:', error)
    }
  }

  const handleGoogleError = () => {
    console.error('Google login failed')
    updateUser(null)
  }

  // If user is already logged in, redirect to dashboard
  if (user) {
    navigate('/dashboard')
    return null
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Banner */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-600">
        <div className="absolute inset-0 bg-[url('/static/image2.jpg')] bg-cover bg-top opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent"></div>
        <div className="absolute top-8 left-12 text-2xl font-medium z-10">
          <span className="bg-gradient-to-r from-blue-300 to-blue-500 inline-block text-transparent bg-clip-text">Fast</span><span className="text-white">Graduate</span>
        </div>
        <div className="absolute bottom-0 left-0 p-12 z-10">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold tracking-tight mb-4">
              <span className="text-white">Welcome to </span>
              <span className="bg-gradient-to-r from-blue-300 to-blue-500 inline-block text-transparent bg-clip-text">Fast</span><span className="text-white">Graduate</span>
            </h1>
            <p className="text-blue-100 text-xl mb-8">
              Calculate and track your academic performance with ease
            </p>
            <div className="flex gap-4">
              {isSignIn ? (
                <button 
                  onClick={() => setIsSignIn(false)}
                  className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Create New Account
                </button>
              ) : (
                <button 
                  onClick={() => setIsSignIn(true)}
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-[300px]">
          <div className="lg:hidden mb-8 text-2xl font-medium">
            <span className="bg-gradient-to-r from-blue-300 to-blue-500 inline-block text-transparent bg-clip-text">Fast</span>
            <span className="text-slate-800">Graduate</span>
          </div>
          <div className="mb-6">
            <h2 className="text-gray-900 text-2xl font-bold text-center">
              {isSignIn ? 'Sign In' : 'Create Account'}
            </h2>
          </div>

          <div className="mb-4">
            <div className="flex justify-center">
              <div className="w-full flex justify-center">
                <GoogleLogin
                  size="large"
                  text={isSignIn ? "continue_with" : "signup_with"}
                  shape="rectangular"
                  width={300}
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                  useOneTap={false}
                  flow="implicit"
                  auto_select={false}
                  ux_mode="popup"
                />
              </div>
            </div>
          </div>

          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Or continue with email</span>
            </div>
          </div>

          <LoginForm 
            isSignIn={isSignIn} 
            onToggleMode={() => setIsSignIn(!isSignIn)} 
          />
        </div>
      </div>
    </div>
  )
}

export default LoginPage 
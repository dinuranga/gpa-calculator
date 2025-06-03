import React from 'react'

function LoginForm({ isSignIn, onToggleMode }) {
  return (
    <form>
      <fieldset className="mb-4">
        <legend className="sr-only">
          {isSignIn ? 'Sign in Form' : 'Sign up Form'}
        </legend>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md bg-white py-2 px-3 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-colors"
            placeholder="you@example.com"
          />
        </div>

        {!isSignIn && (
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="block w-full rounded-md bg-white py-2 px-3 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-colors"
              placeholder="johndoe"
            />
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="block w-full rounded-md bg-white py-2 px-3 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-colors"
            placeholder="••••••••"
          />
        </div>
      </fieldset>

      {isSignIn && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-0 cursor-pointer"
            />
            <label htmlFor="remember-me" className="ml-1.5 block text-xs text-gray-500 font-normal cursor-pointer">
              Remember me
            </label>
          </div>

          <div>
            <a href="#" className="text-xs font-medium text-blue-600 hover:text-blue-500">
              Forgot your password?
            </a>
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 mb-4"
      >
        {isSignIn ? 'Sign in' : 'Sign up'}
      </button>

      <p className="text-center text-sm text-gray-600 font-normal">
        {isSignIn ? "Don't have an account? " : "Already have an account? "}
        <button
          type="button"
          onClick={onToggleMode}
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          {isSignIn ? 'Sign up' : 'Sign in'}
        </button>
      </p>
    </form>
  )
}

export default LoginForm 
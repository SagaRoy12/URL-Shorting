import React from 'react'
import UrlForm from '../components/UrlForm.jsx'

const HomePage = ()=> {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100 p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">URL Shortener</h1>
              <p className="text-gray-600 mt-2">Paste your long URL to get a shorter link</p>
            </div>
            <UrlForm/>
          </div>
          
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-300">
            <p className="text-xs text-center text-gray-600">
              Create short links that can be easily shared, tweeted, or emailed to friends and family.
            </p>
          </div>
        </div>
      </div>
  )
}

export default HomePage

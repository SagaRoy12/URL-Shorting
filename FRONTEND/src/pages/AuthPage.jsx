import React from 'react'
import LoginForm from '../components/LoginForm.jsx'

const AuthPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">URL Shortener</h1>

                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
export default AuthPage

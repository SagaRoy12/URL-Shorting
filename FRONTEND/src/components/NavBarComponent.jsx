import React from 'react';

export default function NavBar() {
    return (
        <nav className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left side - Logo/Brand */}
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold text-blue-600">
                            URL Shortener
                        </h1>
                    </div>

                    {/* Right side - Login */}
                    <div className="flex items-center">
            <button className="bg-blue-600 text-white hover:bg-blue-700 font-medium text-sm px-4 py-2 rounded-md transition-colors">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
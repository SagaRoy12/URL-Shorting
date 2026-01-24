import { Outlet } from "@tanstack/react-router"
import UserCreatedCustomUrls from "../components/UserCreatedCustomUrls"

const DashboardPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
            {/* Header */}
            <div className="bg-white shadow-md border-b border-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                            <p className="mt-1 text-sm text-gray-600">Manage your shortened URLs</p>
                        </div>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                            New URL
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-8">
                        {/* URL-based component renders here */}
                        <Outlet />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage

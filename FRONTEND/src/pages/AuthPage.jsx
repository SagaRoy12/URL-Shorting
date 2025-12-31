import React from 'react'
import LoginForm from '../components/LoginForm.jsx'
import RegisterForm from '../components/RegisterForm.jsx'

const AuthPage = () => {
    const [isLogin, setIsLogin] = React.useState(true);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">URL Shortener</h1>
                    </div>
                    {isLogin ? (
                        <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
                    ) : (
                        <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
                    )}
                </div>
            </div>
        </div>
    )
}
export default AuthPage

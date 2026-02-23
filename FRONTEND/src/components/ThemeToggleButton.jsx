import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../reduxStore/slice/themeSlice';

export default function ThemeToggleButton() {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const dispatch = useDispatch();

    const handleToggle = () => {
        const newDarkMode = !darkMode;
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        dispatch(toggleTheme());
    };

    return (
        <button
            onClick={handleToggle}
            className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <div className="relative w-6 h-6">
                {/* Sun icon */}
                <svg
                    className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-300 ${
                        darkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
                {/* Moon icon */}
                <svg
                    className={`absolute inset-0 w-6 h-6 text-blue-300 transition-all duration-300 ${
                        darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            </div>
        </button>
    );
}

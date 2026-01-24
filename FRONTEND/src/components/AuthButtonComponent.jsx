import { useSelector , useDispatch } from 'react-redux';
import { useNavigate, useLocation } from '@tanstack/react-router';
import axiosInstance from '../utility/axiosInstance.js';

function AuthButton(){
    const location = useLocation()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const navigate = useNavigate()
    const isAuthOnAuthPage = location.pathname === `/auth`;

    const handelClick = async () => {
        if (isAuthenticated) {
      // Logout logic - use axiosInstance
      try {
        await axiosInstance.post('/api/auth/logout'); // or '/api/auth/logout' - check your backend route
        dispatch({ type: 'auth/logout' });
        navigate({ to: `/` });
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }
        else if(isAuthOnAuthPage){
            navigate({to:`/`})
        }else{
            navigate({to:`/auth`})
        }
    }

    const handelText = ()=>{
        if(isAuthenticated){
            return `Logout`
        }else if(isAuthOnAuthPage){
            return `⬅️Go back `
        }else{
            return `Login`
    }
 }

   return (
    <button
      onClick={handelClick}
      className="py-2 px-4 bg-blue-600 hover:bg-blue-900 text-white font-medium rounded-md transition duration-150"
    >
      {handelText()}
    </button>
  );
}

export default AuthButton;
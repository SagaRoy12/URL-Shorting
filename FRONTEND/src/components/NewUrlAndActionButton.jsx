import { useNavigate, useLocation } from '@tanstack/react-router';
import { useDispatch } from 'react-redux';


function NewUrlAndActionButton() {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const isOnDashBoardPage = location.pathname === `/dashboard`

    const handelClick = async () => {
        if (isOnDashBoardPage) {
            navigate({ to: `/dashboard/shorten` })
        }else{
            navigate({to: `/dashboard`})
        }
    }

    const handelText = async()=>{
        if(!isOnDashBoardPage){
            return "⬅️Back"
        }
        else{
            return "New Url"
        }
    }

    return (
        <button
         onClick={handelClick}
         className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
           {handelText()}
        </button>
    );
}

export default NewUrlAndActionButton

import { useSelector } from "react-redux"
import { getCurrentUser } from "../../redux/authSlice"
import { Outlet, Navigate} from "react-router-dom"


function ProtectPage() {
    const currentUser = useSelector(getCurrentUser)
  return currentUser ? <Outlet/> : < Navigate to='/login' />
}

export default ProtectPage

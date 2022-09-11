import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from '../../hooks/useAuthStatus.js';
import Spinner from "../../components/Spinner/Spinner.jsx";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if(checkingStatus){
    return <Spinner />
  }

  // Rendering child component if loggedIn is true.. Here child is Home component...
  return !loggedIn ? <Outlet /> : <Navigate to='/home' />;
};

export default PrivateRoute;

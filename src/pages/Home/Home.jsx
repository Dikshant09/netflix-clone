import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import Header from "../../components/Header/Header";
import { useAuthStatus } from '../../hooks/useAuthStatus.js';
import { getAuth } from "firebase/auth";

const Home = () => {
    const navigate = useNavigate();
    
    const auth = getAuth();
    const { loggedIn } = useAuthStatus();

    const handleLogOut = (e) => {
      e.preventDefault();
  
      auth.signOut();
  
      navigate("/");
    };
  
  return (
    <>
    <Header classGiven="position-fixed-not"/>
      <h1>hello </h1>
      <div onClick={(e) => handleLogOut(e)}>
        {
          loggedIn && 
          <h1>{auth.currentUser.displayName}</h1>
        }
        <CustomButton text='Log Out' redirectNo/>
      </div>
    </>
  )
}

export default Home;
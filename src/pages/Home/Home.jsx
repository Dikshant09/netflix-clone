import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../../Context/User/UserContext";

const Home = () => {
    // const { email, dispatch } = useContext(userContext);
    const { email, dispatch } = useContext(UserContext);
    // console.log(email);
    dispatch(({ type: 'SET_EMAIL', payload: 'dk@gmail.com' }), () => console.log(email));
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if(!email || !email.includes('@')){
    //         toast.error('Please enter a valid email address');
    //         console.log(email);
    //         navigate('/');
    //     }
    // }, [email])
  return (
    <div>Home</div>
  )
}

export default Home;
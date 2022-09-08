import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../components/Header/Header";
import AlertContext from "../../Context/User/UserContext";

const Home = () => {
    const { name, email } = useContext(AlertContext);
    const navigate = useNavigate();
    useEffect(() => {
        if(!email || !email.includes('@')){
            toast.error('Please enter a valid email address');
            console.log(email);
            navigate('/');
        }
    }, [email])
  return (
    <>
    <Header classGiven="position-fixed-not"/>
    <h1>hello {email}</h1>
    </>
  )
}

export default Home;
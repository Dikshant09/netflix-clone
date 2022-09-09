import {useState, useContext} from 'react'
import Header from '../../components/Header/Header';
import cover from "../../assets/cover.png";
import CustomButton from '../../components/CustomButton/CustomButton';
import './SignIn.scss';
import AlertContext from "../../Context/User/UserContext";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });


  const setEmailBro = () => {
    setUserEmail(email, "SET_USER_EMAIL");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
    setEmailBro();
  };

  const { setUserEmail } = useContext(AlertContext);
  

  const { email, password } = user;

  return (
    <>
      <Header classGiven='position-fixed'/>
      <div className="netflixContainer coverImage" style={{
      backgroundImage: `url(${cover})`,
    }}>
      <div className='signInContainer'>
        <div className="signInInnerContainer">
          <div>
            <h1 className='head-text margin-1'>Sign In</h1>
          </div>
          <div>
            <input className='signInInput' type="email" value={email} name='email' placeholder="Enter your email address" required onChange={(e) => handleChange(e)}/>

            <input type="password" className='signInInput' value={password} name='password' placeholder="Enter your password" required onChange={(e) => handleChange(e)}/>
          </div>
          <div className='putDown signButtons margin-2'>
            <CustomButton path='home' text='Sign In'/>
            <div onClick={() => {toast.error('Calm Down & try to remember : )')}}>
              <CustomButton path='/' text='Forgot Password' large/>
            </div>
          </div>
        </div>
        <h4 className='p-text gray-color'>
          New to Netflix?
          <br /> 
          <Link to='/signup' className='linkBro'>
          Sign up now
          </Link>
        </h4>
      </div>
    </div>
    </>
  )
}
// width={'80px'} height={'33px'} 

export default SignIn;
import { useState, useContext } from 'react'
import Header from '../../components/Header/Header';
import cover from "../../assets/cover.png";
import CustomButton from '../../components/CustomButton/CustomButton';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import UserContext from "../../Context/User/UserContext";

import './ForgotPassword.scss';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const { Email } = useContext(UserContext);
    const [email, setEmail] = useState(Email);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    if(email === undefined || email === ''){
        return toast.error('Please enter a valid email address');
    }

    e.preventDefault();

    try {
      const auth = getAuth();

      await sendPasswordResetEmail(auth, email);
      toast.success('Email was sent successfully!');
      toast.success('Check Email!');
      
    } catch (error) {
      toast.error("Couldn't send reset email");
    }
  };

  return (
    <>
      <Header classGiven='position-fixed'/>
      <div className="netflixContainer coverImage" style={{
      backgroundImage: `url(${cover})`,
    }}>
      <div className='forgotPasswordContainer'>
        <div className="signInInnerContainer2">
          <div>
            <h1 className='p-text margin-1'>Forgot Password</h1>
          </div>
          <div>
            <input className='signInInput getExtraWidth' type="email" value={email} name='email' placeholder="Enter your email address" required onChange={(e) => handleChange(e)}/>
          </div>

          <div className='signButtons putDown'>
            <div onClick={(e) => handleSubmit(e) }>
              <CustomButton path='home' redirectNo text='Send Link'/>
            </div>
          </div>
        </div>
        <h4 className='p-text gray-color '>
            or create a new account.
          <br /> <br />
          <Link to='/signup' className='linkBro'>
            Sign up now
          </Link>
        </h4>
      </div>
    </div>
    </>
  )
}

export default ForgotPassword;
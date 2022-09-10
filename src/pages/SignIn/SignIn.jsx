import {useState, useContext} from 'react'
import Header from '../../components/Header/Header';
import cover from "../../assets/cover.png";
import CustomButton from '../../components/CustomButton/CustomButton';
import './SignIn.scss';
import UserContext from "../../Context/User/UserContext";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const SignIn = () => {
  const navigate = useNavigate();
  const { Name, Email, setUserEmail, setUserName } = useContext(UserContext);

  const [user, setUser] = useState({
    email: Email,
    password: '',
    currentName: Name,
    forgoPassword: false
  });
  
  const { email, password, forgotPassword, currentName } = user;

  const setEmailBro = () => {
    setUserEmail(email, "SET_USER_EMAIL");
  }

  const setUserNameBro = () => {
    setUserName(currentName, "SET_USER_NAME");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));    

    setEmailBro();
    setUserNameBro();
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const User = userCredential.user;
      if (User) {
        console.log(User);
        toast.success('Signed In Successfully');
        navigate("/home");
      }
    } catch (error) {
      toast.error('Bad User Credentials');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    toast.error('Calm Down & try to remember : )')

    setUser((prevState) => ({
      ...prevState, 
      forgotPassword: true
    }))
  }

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
            <input className='signInInput' type="text" value={currentName} name='currentName' placeholder="Enter your name" required onChange={(e) => handleChange(e)}/>

            <input className='signInInput' type="email" value={email} name='email' placeholder="Enter your email address" required onChange={(e) => handleChange(e)}/>

            <input type="password" className='signInInput' value={password} name='password' placeholder="Enter your password" required onChange={(e) => handleChange(e)}/>
          </div>

          <div className='signButtons'>
            <div className='putDown signButtons margin-1' onClick={(e) => handleSubmit(e) }>
              <CustomButton path='home' redirectNo text='Sign In'/>
            </div>
            <div className='putDown margin-1' onClick={(e) => handleForgotPassword(e)}>
              <CustomButton path='signin' text='Forgot Password' large/>
            </div>

            {
              forgotPassword && 
              <div className='putDown margin-1'>
                <CustomButton path='forgotpassword' text="Can't remember" large/>
            </div>
            }
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

export default SignIn;
import { useState, useContext } from "react";
import Header from "../../components/Header/Header";
import cover from "../../assets/cover.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import UserContext from "../../Context/User/UserContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase-config";
import OAuth from "../../components/OAuth/OAuth";
import './SignUp.scss';

const SignUp = () => {
  const { Email, Name, setUserEmail, setUserName } = useContext(UserContext);

  const [User, setUser] = useState({
    email: Email,
    password: "",
    name: Name,
  });
  
  const setEmailBro = () => {
    setUserEmail(email, "SET_USER_EMAIL");
  }

  const setUserNameBro = () => {
    setUserName(name, "SET_USER_NAME");
  }


  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setEmailBro();
    setUserNameBro();
  };

  const { email, password, name } = User;

  const handleSubmit = async (e) => {
    if (email === "" || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (name === "") return toast.error("Please enter a name");
    if (password.length < 6)
      return toast.error("Password must be at least 6 characters long");
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...User };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Signed Up Successfully");
      navigate("/home");
    } catch (error) {
      toast.error("Something went wrong with registeration");
    }
  };

  return (
    <>
      <Header classGiven="position-fixed" />
      <div
        className="netflixContainer coverImage"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        <div className="signInContainer">
          <div className="signInInnerContainer">
            <div>
              <h1 className="head-text margin-1">Sign Up</h1>
            </div>
            <div>
              <input
                className="signInInput"
                type="text"
                value={name}
                name="name"
                placeholder="Enter your name"
                required
                onChange={(e) => handleChange(e)}
              />
              <input
                className="signInInput"
                type="email"
                value={email}
                name="email"
                placeholder="Enter your email address"
                required
                onChange={(e) => handleChange(e)}
              />

              <input
                type="password"
                className="signInInput"
                value={password}
                name="password"
                placeholder="Enter your password"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='signUpButtons'>
              <div
                className="putDown signButtons margin-2"
                onClick={(e) => handleSubmit(e)}
              >
                <CustomButton redirectNo path="home" text="Sign Up" />
              </div>
              <div className='googleAuthButton'>
                <OAuth />
              </div>
            </div>
          </div>
          <h4 className="p-text gray-color">
            Already have Netflix account?
            <br />
            <Link to="/signin" className="linkBro">
              Sign in now
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
};

SignUp.defaultProps = {
  emailGiven: '',
}
export default SignUp;

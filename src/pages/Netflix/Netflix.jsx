import { useState, useContext } from "react";
import './Netflix.scss'
import cover from "../../assets/cover.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import AlertContext from "../../Context/User/UserContext";
import Header from "../../components/Header/Header";

const Netflix = () => {
  const [email, setEmail] = useState('');
  const { user, setUserEmail } = useContext(AlertContext);
  
  const setEmailBro = () => {
    setUserEmail(email, "SET_USER_EMAIL");
  }

  return (
    <>
    <Header classGiven='position-fixed' showButton/>
    <div className="netflixContainer coverImage" style={{
      backgroundImage: `url(${cover})`,
    }}>
      <div className="getStarted">
        <h1 className="head-text">Unlimited movies, TV</h1>
        <h1 className="head-text">shows and more.</h1>
        <h2 className="p-text">Watch anywhere. Cancel anytime.</h2>
        <div>
          <p className="p-text">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="emailBlock">
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} 
            className='emailInput'
            required
            placeholder="Enter your email address"id="" />
            <div className='emailSubmitButton' onClick={setEmailBro}>
              <CustomButton email={email} path='home' text='Get Started' 
              width="90px" height="35px"
              showButton
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Netflix;

/*

Unlimited movies, TV shows and more.
Watch anywhere. Cancel anytime.

Ready to watch? Enter your email to create or restart your membership.
Email address
Email is required.

Get Started
Enjoy

*/

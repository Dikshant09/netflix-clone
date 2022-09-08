import { useState } from "react";
import './Netflix.scss'
import cover from "../../assets/cover.png";
import CustomButton from "../../components/CustomButton/CustomButton";

const Netflix = () => {
  const [email, setEmail] = useState('')
  return (
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
            width=''
            placeholder="Enter your email address"id="" />
            <div className='emailSubmitButton'>
              <CustomButton email={email} path='home' text='Get Started' 
              
              width="90px" height="35px"/>
            </div>
          </div>
        </div>
      </div>
    </div>
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

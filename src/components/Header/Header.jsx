import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${logo})`,
          }}
        />
          <div className="navBar">
            <button className='button'>
              <Link to='/signin' className="linkBro">
                  Sign In
              </Link>
            </button>
          </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import CustomButton from "../CustomButton/CustomButton";

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
        <CustomButton path='signin' text='Sign In'/>
      </div>
    </>
  );
};

export default Header;

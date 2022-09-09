import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";

const Header = ({classGiven, showButton}) => {
  return (
    <>
      <div className={classGiven !== undefined ? `${classGiven} headerContainer`: "headerContainer"}>
        <Link to={'/'}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${logo})`,
          }}
          />
        </Link>
        {
          showButton &&
            <CustomButton path='signin' text='Sign In'/>
        }
      </div>
    </>
  );
};

export default Header;

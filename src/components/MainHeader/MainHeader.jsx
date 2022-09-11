import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./MainHeader.scss";
import { FaPowerOff, FaSearch, FaUser } from "react-icons/fa";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import UserContext from "../../Context/User/UserContext";

const MainHeader = () => {
    const { setUserSearch } = useContext(UserContext);

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogOut = (e) => {
    e.preventDefault();

    auth.signOut();

    navigate("/");
    toast.success("Logged Out Successfully");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    setShowSearchBar((prevState) => !prevState);
  };

  const handleSearchInput = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
    setUserSearch(e.target.value, "SET_USER_SEARCH");
  }

  const handleUser = (e) => {
    e.preventDefault();

    navigate("/profile");
  };

  return (
    <div className="mainHeaderContainer">
      <div className="mainHeaderLeft">
        <Link to='/'>
            <div
            className="mainHeaderLogoImage"
            style={{
               backgroundImage: `url(${logo})`,
            }}
            />
        </Link>
        {["Home", "TV Shows", "Movies", "New", "My List"].map(
          (item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "" : item.replace(/\s+/g, "").toLowerCase()}
              className="linkBro black-color margin-half"
            >
              <h4 key={item} className="navItem">
                {item}
              </h4>
            </Link>
          )
        )}
      </div>
      <div className="mainHeaderRight">
        {showSearchBar && (
          <>
            <input
              type="text"
              name="search"
              id=""
              className="searchBar"
              value={search}
              onChange={(e) => handleSearchInput(e)}
              placeholder='Search here'
            />
          </>
        )}
        <div
          className="margin-half powerButtonSearch"
          onClick={(e) => handleSearch(e)}
        >
          <FaSearch />
        </div>
        <div className="margin-half powerButton" onClick={(e) => handleUser(e)}>
          <FaUser />
        </div>
        <div
          className="margin-half powerButton"
          onClick={(e) => handleLogOut(e)}
        >
          <FaPowerOff />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;

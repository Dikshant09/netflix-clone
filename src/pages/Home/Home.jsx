import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import Header from "../../components/Header/Header";
import { useAuthStatus } from '../../hooks/useAuthStatus.js';
import { getAuth } from "firebase/auth";
import axios from 'axios';
import { useState } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";

const Home = () => {
    const navigate = useNavigate();
    
    const auth = getAuth();
    const { loggedIn } = useAuthStatus();
    const [movies, setMovies] = useState(null);

    const handleLogOut = (e) => {
      e.preventDefault();
  
      auth.signOut();
  
      navigate("/");
    };

    const API_KEY = 'https://imdb-api.com/en/API/Top250Movies/k_3p48dgiy';
    const fetchDataBro = async (e) => {
      e.preventDefault();

      const moviesData =  (await axios.get('https://imdb-api.com/en/API/Top250Movies/k_3p48dgiy')).data.items;
      setMovies(moviesData);

      // console.log(moviesData);
    }
    const movieLink = (movie) => {
      navigate(API_KEY + movie.id);
    }
  return (
    <>
    <MainHeader />
   {/* <Header classGiven="position-fixed"/>
      <h1>hello </h1>
      <div onClick={(e) => handleLogOut(e)}>
        {
          loggedIn && 
          <h1>{auth.currentUser.displayName}</h1>
        }
        <CustomButton text='Log Out' redirectNo/>
      </div>

      <button onClick={(e) => fetchDataBro(e)}>Fetch Data</button>
      {movies && movies.map((movie, id) => (
        <>
          <h1 className="margin-1" key={movie.id} onClick={(movie) => movieLink(movie)}>{movie.title}</h1>
            <img src={movie.image} alt={movie.fullTitle} />
        </>
      ))}  */}
    </>
  )
}

export default Home;
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import Header from "../../components/Header/Header";
import { useAuthStatus } from '../../hooks/useAuthStatus.js';
import { getAuth } from "firebase/auth";
import axios from 'axios';
import { useState, useContext, useEffect } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import UserContext from "../../Context/User/UserContext";
import GetDataBro from "./GetDataBro";
import CardContainer from "../../components/CardContainer/CardContainer";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
    const { Search, Data } = useContext(UserContext);
    const [data, setDataBro] = useState(null);
    const [scroll, setScroll] = useState(true);

    useEffect(() => {
      setDataBro(Data); 
      window.onscroll = () => {
        setScroll(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
    }, [Data, setDataBro, window]);
    // useEffect(() => {
    
    // }, [])
  return (
    <>
    {scroll ? <MainHeader /> : <MainHeader positionRelative/>}
      {/* <MainHeader positionFixed/> */}
    <GetDataBro />
    {/* {data && Object.keys(data).map((item, index) => <CardContainer key={index} item={item}/>)} */}
    <div className='homePageContainer'>
      {data && Object.entries(data).map(([key, value], index) =>
       <CardContainer key={index} keyBro={key} valueBro={value}/>)
       }
    </div>
    </>
  )
}

export default Home;
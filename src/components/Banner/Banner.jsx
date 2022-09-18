import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import UserContext from "../../Context/User/UserContext";
import CustomButton from "../CustomButton/CustomButton";
import MainHeader from "../MainHeader/MainHeader";
import Spinner from "../Spinner/Spinner";
import "./Banner.scss";

const Banner = () => {
  const { Search, Data } = useContext(UserContext);
  const [bannerItem, setBannerItem] = useState(null);
  const BASE_URL = "https://image.tmdb.org./t/p/original";

  // useEffect(() => {
  // setBannerItem(Data?.horrorMovies[Math.random() * 19]);
  // }, [Data, setBannerItem]);
  // console.log(bannerItem);
  useEffect(() => {
    setBannerItem(Data?.horrorMovies[Math.floor(Math.random() * 19)]);
    console.log(bannerItem);
  }, [Data]);

  if (bannerItem == null) return <Spinner />;

  return (
    <>
      <div className="bannerParent white-color">
        <div
          className="bannerContainer white-color"
          style={{
              backgroundImage: `url(${BASE_URL}${
                  bannerItem?.backdrop_path || bannerItem?.poster_path
                })`,
            }}
        >
            
        </div>
            <MainHeader />
        <div className="bannerContent white-color">
          {/* {bannerItem.overview}
           */}
            <h1>Watch {bannerItem.original_title}</h1>
           <p className="p-text-2">{bannerItem.overview}</p>
           <div>
            <CustomButton redirectNo text="Play Now" className='margin-right' /> 

           </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

import { useState, useContext, useEffect } from "react";
import Card from "../Card/Card";
import "./CardContainer.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import UserContext from "../../Context/User/UserContext";

const CardContainer = ({ keyBro, valueBro }) => {
  const { Search, Data } = useContext(UserContext);

  const item = valueBro.filter((itemBro) =>
    itemBro.title?.toLowerCase().includes(Search.toLowerCase())
  );

  const getTitle = (title) => {
    return title.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
      return str.toUpperCase();
    });
  };

  return (
    item.length >= 1 && (
      <>
        <h1 className="margin-half">{getTitle(keyBro)}</h1>
        <Swiper spaceBetween={50} slidesPerView={5}>
          <div className="menu-container">
            <div className="menu-containerItem">
              {item.map((item, index) => 
                {
                  if(index < 9){
                   return ( <SwiperSlide key={index}>
                  <Card key={index} item={item} />
                  </SwiperSlide>)
                }
                }
                  )}
            </div>
          </div>
        </Swiper>
      </>
    )
  );
};

export default CardContainer;

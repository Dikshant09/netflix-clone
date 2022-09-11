import React from 'react'
import './Card.scss';

const Card = ({ item }) => {
    const BASE_URL = 'https://image.tmdb.org./t/p/original';
  return (
    <div className='cardContainer'>
        <div 
        className='cardImage'
        style={{
               backgroundImage: `url(${BASE_URL}${item?.backdrop_path || item?.poster_path})`,
            }}></div>
        {/* <div style={{ background: url()}}>Image</div> */}
    </div>
  )
}

export default Card;
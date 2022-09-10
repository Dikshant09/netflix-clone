import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './MainHeader.scss';


const MainHeader = () => {
  return (
    <div className='mainHeaderContainer'>
        <div className="mainHeaderLeft">
            <div className="mainHeaderLogoImage" style={{
                backgroundImage: `url(${logo})`,
            }} /> 
            {
                ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'].map((item, index) => (
                    <Link to={(item.replace(/\s+/g, '')).toLowerCase()} className=
                    'linkBro black-color margin-half'>
                        <h4 key={item}>{item}</h4>
                        {console.log(index)}
                    </Link>
                ))
            }
          </div>
        <div className="mainHeaderRight">
            {
                ['Search', 'Notifications', 'Profile'].map((item, index) => (
                    <h4 key={index} className='margin-half'>{item}</h4>
                    ))
                }
        </div>
    </div>
    )
}

export default MainHeader;
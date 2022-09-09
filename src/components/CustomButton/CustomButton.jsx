import React from 'react'
import { Link } from 'react-router-dom'
import './CustomButton.scss';

const CustomButton = ({ path, text, width, height, large }) => {
  return (
    <div className="buttonContainer" style={{width: width, height: height}}>
        <button className='buttonBro'>
            <Link to={'/' + path} className={large ? `linkBro large` : 'linkBro'}>
                <h4>{text}</h4>
            </Link>
        </button>
    </div>
  )
}

export default CustomButton
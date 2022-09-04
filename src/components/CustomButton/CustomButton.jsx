import React from 'react'
import { Link } from 'react-router-dom'
import './CustomButton.scss';

const CustomButton = ({ path, text, width, height }) => {
  return (
    <div className="buttonContainer" style={{width: width, height: height}}>
        <button className='buttonBro'>
            <Link to={'/' + path} className="linkBro">
                <h3>{text}</h3>
            </Link>
        </button>
    </div>
  )
}

export default CustomButton
import React from 'react'
import { Link } from 'react-router-dom'
import './CustomButton.scss';

const CustomButton = ({ path, text, width, height, large, redirectNo }) => {
  return (
    <div className="buttonContainer" style={{width: width, height: height}}>
        <button className='buttonBro'>
          {redirectNo ?
            <h4 className={large ? `linkBro large` : 'linkBro'}>{text}</h4>
          :
            <Link to={'/' + path} className={large ? `linkBro large` : 'linkBro'}>
                <h4>{text}</h4>
            </Link>
        }
        </button>
    </div>
  )
}

export default CustomButton
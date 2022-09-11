import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import Header from '../../components/Header/Header'
import error from './error.png'

import './ErrorPage.scss'
const ErrorPage = () => {
  return (
    <div>
        <Header classGiven='position-fixed' />
    <div className="errorImageContainer">
        <div style={{
            backgroundImage: `url(${error})`,
        }}
        className="errorImage black-color"
        >
            Page Not Found
        </div>
        <div className='returnLinKBro' >
            <CustomButton text='return Home' color='black' path=''/>
        </div>
            </div>
    </div>
  )
}

export default ErrorPage;
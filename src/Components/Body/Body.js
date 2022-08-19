import React from 'react'
import './Body.css'
import hero from '../../images/hero-desktop.jpg'
import  logo from'../../images/logo.svg'
import arrow from'../../images/icon-arrow.svg'
import herom from '../../images/hero-mobile.jpg'

function Body() {
  return (
      <div id='body'>
          <div id='left'>
              <img src={logo} alt='...'/>
              <div id='mobileimg'><img src={herom} alt=',...' /></div>
              <div id='textcontainer'>
                <span id='come'><span className='purple'>WE'RE </span><br/>COMING SOON!</span>
                <p className='purple' id='hello' >Hello shoppers! We are currently building our new fashion store. Add your Email below to stay up-to-date with annoucements and our launch deals.</p> 
                <input type='text' id='input' placeholder='example@gmail.com'/><button id='arrow'><img src={arrow} alt='...'/></button>
              </div>
          </div>
          <div id='right'>
          <div id='inright'>
            <img src={hero} alt='...' id='hero' />
            </div>
          </div>
          <br/><br/>
    </div>
    
  )
}

export default Body
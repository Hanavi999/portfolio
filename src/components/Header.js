import React, { Component, useState } from 'react';
import Fade from 'react-reveal/Fade';
import scroll from '../img/scroll.gif';
class Header extends Component {
  render() {
    return(
      <div>
        <header className='home'>
          <div className='home-info'>
            <Fade top big>
             <h1>Welcome My Portfolio By Chanhyeon</h1>
            </Fade>
            <Fade top big>
              <img src={scroll} alt="scroll" className='scroll'/>
            </Fade>
          </div>
        </header>
      </div>
    )
  }
}

export default Header;
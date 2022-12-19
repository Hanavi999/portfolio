import React, { Component, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import jsp from '../img/jsp.png';
import oracle from '../img/oracle.png';
import react from '../img/react.png';
import html from '../img/html.png';


class Skill extends Component {
  render() {
    return(
      <div>
        <div className='skill'>
          <div className='profile'>
            <Fade left>
              <h1 className='profile-name'>Skill</h1>
            </Fade>
            <Zoom>
              <div className='CanDo'>
                <h2 className='IcanDo'>I Can Do</h2>
                <div className='developer'>
                  <img src={html} alt="html" className='html-img'></img>
                  <img src={react} alt="react" className='react-img'></img>
                  <img src={jsp} alt="jsp" className='jsp-img'></img>
                  <img src={oracle} alt="oracle" className='oracle-img'></img>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    )
  }
}

export default Skill;
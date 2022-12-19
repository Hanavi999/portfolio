import React, { Component, useState } from 'react';
import profile from '../img/profile.jpg';
import Fade from 'react-reveal/Fade';

class AboutMe extends Component {
  render() {
    return(
      <div>
        <div className='about-me'>
        <Fade left>
          <div className='profile'>
            <h1 className='profile-name'>Profile</h1>
            <div className='profile-box'>
            <img src={profile} alt="profile" className='pro-pic'/>
            <div className='profile-info'>
              <div className='profile-info-info'>
                <p>Name</p>
                <p className='entity'>박찬현</p>
              </div>
              <div className='profile-info-info'>
                <p>Age</p>
                <p className='entity'>18살</p>
              </div>
              <div className='profile-info-info'>
                <p>전화번호</p>
                <p className='entity'>010-7510-0379</p>
              </div>
              <div className='profile-info-info'>
                <p>E-mail</p>
                <p className='entity'>chanhyeon777@gmail.com</p>
              </div>
              <div className='profile-info-prize'>
                <p className='award-history'>수상내역 2021 - 2022</p>
                <p>교내 해커톤 대회 다음엔 너가 최우수상</p>
                <p>교내 알고리즘 경진대회 동상</p>
                <p>비즈쿨 창업아이템 해커톤 캠프 우수상</p>
                <p>2022 경북소프트웨어 고등학교 알고리즘 대회 동상</p>
                <p>캡스톤 프로젝트 우수상(3위)</p>
                <p>제1회 GCAC 알고리즘 대회 동상</p>
                <p className='Certificate'>보유 자격증</p>
                <p>정보처리기능사</p>
                <p>컴퓨터활용능력2급</p>
              </div>
              <div className='profile-info-info'>
                <a className='github-www' href='https://github.com/Hanavi999'>github</a>
              </div>
            </div>
            </div>
          </div>
        </Fade>
        </div>
      </div>
    )
  }
}

export default AboutMe;
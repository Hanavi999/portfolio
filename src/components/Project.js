import React, { Component, useState} from "react";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import board from '../img/board.png';
import chat from '../img/chating.png';
import mattermost from '../img/mattermost.png';
import random from '../img/random-app.png';
import mojadol from '../img/mojadol.png';
import movie from '../img/movie-app.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';


class Project extends Component {
  render() {
    const skill = [
      {id: 1, img: board, name: '회원제 게시판', useSkill: 'html, css, mysql, spring boot', site: 'https://github.com/Hanavi999/SpringBootMemberBoard'},
      {id: 2, img: chat, name: '실시간 채팅', useSkill: 'vue, css, mysql, spring boot', site: 'https://github.com/Hanavi999/Spring_Boot_Chating_Web'},
      {id: 3, img: mattermost, name: 'mattermost bot', useSkill: 'spring boot', site: 'https://github.com/Hanavi999/KISA_Security_Bot'},
      {id: 4, img: random, name: '랜덤뽑기 웹페이지', useSkill: 'react, css', site: 'https://github.com/Hanavi999/random-machine'},
      {id: 5, img: mojadol, name: 'mojadol 팀프로젝트', useSkill: 'html, css, javascript, Laravel, php', site: 'https://github.com/GBSWmojaDol'},
      {id: 6, img: movie, name: '영화소개 웹페이지', useSkill: 'react, css', site: 'https://github.com/Hanavi999/movie-app'},
    ];
    SwiperCore.use([Autoplay]);


    const swiperParams = {
      autoplay: {
        delay: 3000,
        disableOnInteraction: true
      },
      loop: true,
      slidesPerView:2,
    }

    return(
      <div>
        <div className='project'>
          <div className='profile'>
          <Fade left>
              <h1 className='profile-name'>Project</h1>
            </Fade>
            <div className='project-box'>
            <Zoom>
            <Swiper {...swiperParams} className="mySwiper">
              {skill.map((pro) => (
                <SwiperSlide key={pro.id}>
                  <div className='project-entity'>
                  <img src={pro.img} alt="img" className='count-img'></img>
                  <p className='project-name'>{pro.name}</p>
                  <p className='project-skill'>사용기술</p>
                  <p className='project-skill-info'>{pro.useSkill}</p>
                  <div className='address'>
                    <a href={pro.site} className='github-go'>깃허브 바로가기</a>
                  </div>
                </div>
                </SwiperSlide>
              ))}
              </Swiper>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
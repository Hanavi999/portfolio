// This example is live editable
import React, { Component, useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Skill from './components/Skill';
import Project from './components/Project';

class App extends Component {
  render() {
    return (
      <div> 
        <Header/>
        <AboutMe />
        <Skill />
        <Project />
      </div>
    );
  }
}

export default App;
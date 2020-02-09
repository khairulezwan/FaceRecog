import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLink from './components/ImageLink/ImageLink';

import './App.css';
import Particles from 'react-particles-js';


const particlesOptions = {
  particles: {
    number: {
      value:200,
      density:{
        enable:true,
        value_area:800,
      }
    }
  }
}

function App() {
  return (
    <div className="App">
    <Particles className='particles'
              params={particlesOptions}
            />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLink />

        {/* <Facerecognition /> */}
    </div>
  );
}

export default App;

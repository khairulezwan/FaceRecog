import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLink from './components/ImageLink/ImageLink';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: '874794d15eff425f8854a36ae4fcf494'
 });

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

class App extends Component{
  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
   this.setState({input:event.target.value})
  }


onButtonSubmit = () => {
  this.setState({imageUrl :this.state.input});
  app.models.predict(
    Clarifai.FACE_DETECT_MODEL,
     this.state.input)
     .then(
    function(response) {
      // do something with response
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
      console.log(err);
    }
  );
}

  render() {
    return (
      <div className="App">
      <Particles className='particles'
                params={particlesOptions}
              />
          <Navigation/>
          <Logo/>
          <Rank/>
          <ImageLink
           onInputChange={this.onInputChange}
           onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
} 
export default App;

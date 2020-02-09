import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLink from './components/ImageLink/ImageLink';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Logo/>
        <ImageLink />
        {/* <Facerecognition /> */}
    </div>
  );
}

export default App;

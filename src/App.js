import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import ImageCard from './components/ImageCard/ImageCard';
import images from './images.json';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
      </div>
    )
  }
}

export default App;

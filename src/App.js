import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import ImageCard from './components/ImageCard/ImageCard';
import images from './images.json';

// function to shuffle array via Durstenfield
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {

state = {
  images,
  score: 0,
  topScore: 0,
  pickedArray: [],
}
// function to handle if an item has been picked or not
// the method indexOf will return a value of -1 if a value in an array does not occur
// we will have a picked array containing the items picked 
// so if the item chosen by the user equals -1 the user will continue to play
// otherwise the game will reset

handleUserPick = (id) => {
  if (this.state.pickedArray.indexOf(id) === -1) {
    this.handleScore();
    this.setState({pickedArray: this.state.pickedArray.concat(id)});
  }
  else {
    this.handleEndGame();
  }
}

// at the end of the game:
//  the top score will be displayed
// the score will be reset and the top score displayed
// the array will be emptied
// images will be shuffled

handleEndGame = () => {
  this.setState({
    score: 0,
    topScore: this.state.topScore,
    pickedArray: []
  })
  this.handleShuffle();
}

// function to shuffle array of images
handleShuffle = () => {
  let shuffledImages = shuffle(images);
  this.setState({images: shuffledImages});
}

// function to handle users' score
handleScore = () => {

  const newScore = this.state.score + 1;
  this.setState({
    score: newScore
  })

  // change state of topScore if user surpasses it
  if (newScore > this.state.topScore) {
    this.setState({
      topScore: newScore
    })
  }

  // event to handle user victory
  if (newScore === 12) {
    // set instructions to say user wins
  }
  // shuffle to randomize images
  this.handleShuffle();
}



  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <div className="row">
          {this.state.images.map(image =>(
            <div className="col">
              <ImageCard
                key={image.id}
                id={image.id}
                image={image.image}
                handleUserPick={this.handleUserPick}
                handleScore={this.handleScore}
                handleShuffle={this.handleShuffle}
                />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App;

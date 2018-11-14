import React from 'react';

const styles = {
  jumbotron: {
    backgroundImage: "url(https://i.imgur.com/aEwNXVn.jpg)",
    minHeight: "30vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  instructions: {
    fontSize: "large"
  }
}

const Jumbotron = () => (
  <div>
    <div className="jumbotron jumbotron-fluid text-center" style={styles.jumbotron}>
    </div>
    <p className="text-center my-0">Click on an image to earn points, but don't click any more than once!</p>
  </div>
)

export default Jumbotron;

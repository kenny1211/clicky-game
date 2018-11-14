import React from 'react';

const styles = {
  jumbotron: {
    backgroundImage: "url(https://i.imgur.com/aEwNXVn.jpg)",
    minHeight: "30vh",
    backgroundPosition: "center top",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}

const Jumbotron = () => (
  <div>
    <div className="jumbotron jumbotron-fluid text-center" style={styles.jumbotron}>
    </div>
    <hr className="my-4">
    Click on an image to earn points, but don't click any more than once! 
    </hr>
  </div>
)

export default Jumbotron;

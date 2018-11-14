import React from 'react';

const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg">
    <span className="navbar-brand mb-0 h1">CLICKY GAME</span>

    <span className="mx-auto">Click An Image To Begin!</span>

    <span className="mr-2">Score: {props.score} | Top Score: {props.topScore} </span>

  </nav>
)

export default Navbar;
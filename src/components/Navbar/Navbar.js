import React from 'react';

const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg">
    <span className="navbar-brand mb-0 h1">CLICKY GAME</span>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item mx-auto">
            <span>Click An Image To Begin!</span>
          </li>
          <li className="nav-item mr-2">
            <span>Score: {props.score} | Top Score: {props.topScore} </span>
          </li>
        </ul>
      </div>
  </nav>
)

export default Navbar;
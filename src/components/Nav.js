import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav>
        <Link to="/">hello</Link>
        <Link to="/goodbye">goodbye</Link>
        <Link to="/colors/none">colors</Link>
    </nav>
  );
}

export default Nav;

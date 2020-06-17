import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav className="Nav">
      <ul>
          <Link to ="/">
          <li>Home</li>
          </Link>
          <Link to ="/about">
          <li>About</li>
          </Link>
          <Link to ="/shop">
          <li>shop</li>
          </Link>
          
          
      </ul>
    </nav>
  );
}

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/shirts.svg';

import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
<<<<<<< HEAD
      <Link to="/contact" className="option">
        CONTACT
      </Link>
=======
      <Link className="option">CONTACT</Link>
>>>>>>> 2e3bf5ae5096cb09efb02009373636b5b3d3adf2
    </div>
  </div>
);

export default Header;

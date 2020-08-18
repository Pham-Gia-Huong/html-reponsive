import React from 'react';
import './index.scss';

const Navigation = () => {
  return (
    <nav>
      <div className="row">
        <img className="logo" src={'image/logo-white.png'} alt="hero image" />
        <ul className="main-nav">
          <li>
            <a href="#">Food delivery</a>
          </li>
          <li>
            <a href="#">How it works</a>{' '}
          </li>
          <li>
            <a href="#">Our cities</a>{' '}
          </li>
          <li>
            <a href="#">Sign up</a>{' '}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

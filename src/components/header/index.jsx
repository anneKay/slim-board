import React, { useState } from 'react';
import appLogo from '../../assets/images/app-logo.png';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isLoggedIn, isAdmin, userData } from '../../utils/helper';
import '../../stylesheets/header.scss';

const Header = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  return (
    <>
      <div className="HeaderContainer">
        <div className="appLogo">
          <a href="/">
            <img src={appLogo} />
            <h4>SlimBoard</h4>
          </a>
        </div>
        <div className="HeaderLinks">
          <div className="AuthLinks">
            {isLoggedIn && window.location.pathname !== '/login' && !isAdmin && (
              <a href="/create"> Create a Story</a>
            )}
            {!isLoggedIn && (
              <>
                <a href="/login">Login</a>
                <a href="/signup">Signup</a>
              </>
            )}
          </div>

          <Button variant="outline-success"> Explore </Button>
          {console.log(userData, 'from header')}
          {isLoggedIn && window.location.pathname !== '/login' && (
            <div className="avatar">
              <img
                src={
                  'https://res.cloudinary.com/blackincode/image/upload/v1536160812/download_dfarj8.png'
                }
              ></img>{' '}
              <p>{userData.userRoles[0]}</p>
            </div>
          )}
        </div>
        <div className="mobileNav">
          {mobileNavVisible ? (
            <FontAwesomeIcon
              icon="times"
              size="2x"
              onClick={() => setMobileNavVisible(!mobileNavVisible)}
            />
          ) : (
            <FontAwesomeIcon
              icon="bars"
              size="2x"
              onClick={() => setMobileNavVisible(!mobileNavVisible)}
            />
          )}
        </div>
      </div>
      {mobileNavVisible && (
        <div className="displayMobileNav">
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/login">Signup</a>
            </li>
            <li>
              <a href="/explore">Explore</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;

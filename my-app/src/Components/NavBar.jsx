import React from 'react';
import { Link } from 'react-router-dom';
import Img from "../assets/logo3.png";
import './NavBar.css';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();

  return (
    <nav className='NavBar'>
      <img src={Img} alt="Logo" />
      <div>
        <ul className='navdata'>
          <li>
            <Link to="/roadmaps">Home</Link>
          </li>
          <li>
            <Link to="/roadmaps">Road Maps</Link>
          </li>
          <li>
            <Link to="/guide">Guide</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {isAuthenticated ? (
              <button onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>Log In</button>
            )}
          </li>
          <li>
            {isAuthenticated && (
              <div>
                <img src={user.picture} alt={user.name} />
            
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

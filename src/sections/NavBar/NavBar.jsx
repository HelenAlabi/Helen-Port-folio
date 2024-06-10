
import { useState } from 'react';
import Logo from '../../assets/logo.png';
import data from './data';
import './navBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className= "container navContainer">
        <a href="../../../index.html" className= 'navLog'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className= 'navMenu' id='navMenu'>
          {data.map(item => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className= "hamburgerMenu">
          <div className= "hamburger" onClick={menuHandler}>
            {isMenuOpen ? '⁙' : '≡'}
          </div>
          <div className= {`navHamMenu ${isMenuOpen ? 'open' : ''}`} id='navHamMenu'>
            <div className= "hamburger" onClick={menuHandler}>
              ⁙
            </div>
            <ul>
              {data.map(item => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;





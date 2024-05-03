import { useDarkMode } from '../../DarkModeContext';
import Logo from '../../assets/logo.png'
import data from './data'
import { IoMdColorPalette } from "react-icons/io";
import  './navBar.css'



const NavBar = () => {

  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <nav className={`navbar ${isDarkMode ? 'dark-navbar' : ''}`}>
        <div className= "container  navContainer">
            <a href="../../../index.html" className= 'navLogo'>
                <img src={Logo} alt="Logo" />
            </a>
            <ul className= 'navMenu'>
                {data.map(item =><li key={item.id}><a href={item.link}>{item.title}</a></li>)}
            </ul>
            {/* <button id='themeIcon'><IoMdColorPalette onClick={toggleDarkMode}/>{isDarkMode ? 'Light Mode' : 'Dark Mode'} </button> */}
        </div>
    </nav>
  )
}

export default NavBar;
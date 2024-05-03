import Logo from '../../assets/logo.png'
import { IoMdColorPalette } from "react-icons/io";
import  './footer.css'


const data =[
  {id:1, link: '#', title:'Home'},
  {id:2, link: '#about', title:'About'},
  {id:3, link: '#services', title:'Services'},
  {id:4, link: '#projects', title:'Projects'},
  {id:5, link: '#contact', title:'Contact'}
]


const Footer = () => {
  return (
    <footer id='footer'>
        <div className= "container  navContainer">
            <a href="../../../index.html" className= 'navLogo'>
                <img src={Logo} alt="Logo" />
            </a>
            <ul className= 'navMenu'>
                {data.map(item =><li key={item.id}><a href={item.link}>{item.title}</a></li>)}
            </ul>
            {/* <div className="hidden"></div> */}
            
        </div>
        <p id='copy'> Helen Alabi &copy;2024</p>
    </footer>
  )
}

export default Footer;
import Logo from '../../assets/logo.png'
import Git from '../../assets/git-white.png'
import WhatsApp from '../../assets/whatsapp-white.png'
import Linkdn from '../../assets/linkdn-white.png'

import  './footer.css'


const socials =[
  {id: 1, link: 'https://github.com/HelenAlabi', icon:Git },

  {id: 2, link: 'https://wa.link/8ef3p6', icon:WhatsApp },
  {id: 3, link: 'https://www.linkedin.com/in/helen-alabi64', icon: Linkdn }
]


const Footer = () => {
  return (
    <footer id='footer'>
        <div className= "container  navContainer">
            <a href="../../../index.html" className= 'navLogo'>
                <img src={Logo} alt="Logo" />
            </a>
            <div className= "navSoc">
            <ul className= 'navMenu'>
                {socials.map(item =><li key={item.id}><a href={item.link}><img src={item.icon} alt="" id='footImg'/></a></li>)}
            </ul>
            </div>

        </div>
        <p id='copy'> Helen Alabi &copy;2024</p>
    </footer>
  )
}

export default Footer;
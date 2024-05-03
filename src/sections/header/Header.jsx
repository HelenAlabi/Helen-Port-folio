import HeaderImage from '../../assets/p3.jpg'
import WhatsApp from '../../assets/whatsApp.png'
import Git from '../../assets/github.png'
import  Linkdn from '../../assets/linkdn.png'

import './header.css'

const socials =[
  {id: 1, link: 'https://github.com/HelenAlabi', icon:Git },

  {id: 2, link: 'https://wa.link/8ef3p6', icon:WhatsApp },
  {id: 3, link: 'https://www.linkedin.com/in/helen-alabi64', icon: Linkdn }
]




const Header = () => {
  return (
    <header id='header'>
        <div className= " container headerContainer">
            <div className= "headerProfile">
                <img id='headImage' src= {HeaderImage} alt="header image" />
            </div>
            <h3>Helen Alabi</h3>
            {/* <h4 id="sD">Software Developer</h4> */}
            <p>I am passionate about crafting efficient, scalable solutions to real-world problems.</p>
            <div className= "headerCta">
              <a href="#contact" className= 'btn primary'>Let talk</a>
              <a href="#projects" className='btn light'>My Works</a>
            </div>
            <div className= "headerSocials">
              {
                socials.map(item =><a id='lIcon' key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'> <img id='icons' src={item.icon} alt="" /> </a>)
              }
            </div>
        </div>
    </header>
  )
}

export default Header;
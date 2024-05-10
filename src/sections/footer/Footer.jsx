import Logo from '../../assets/logo.png'
// import WhatsApp from '../../assets/whatsApp.png'
// import Git from '../../assets/github.png'
// import  Linkdn from '../../assets/linkdn.png'

import  './footer.css'


const data =[
  {id:1, link: '#', title:'Home'},
  {id:2, link: '#about', title:'About'},
  {id:3, link: '#services', title:'Services'},
  {id:4, link: '#projects', title:'Projects'},
  {id:5, link: '#contact', title:'Contact'}
]

// const socials =[
//   {id: 1, link: 'https://github.com/HelenAlabi', icon:Git },

//   {id: 2, link: 'https://wa.link/8ef3p6', icon:WhatsApp },
//   {id: 3, link: 'https://www.linkedin.com/in/helen-alabi64', icon: Linkdn }
// ]


const Footer = () => {
  return (
    <footer id='footer'>
        <div className= "container  navContainer">
            <a href="../../../index.html" className= 'navLogo'>
                <img src={Logo} alt="Logo" />
            </a>
            <div className= "navSoc">
            <ul className= 'navMenu'>
                {data.map(item =><li key={item.id}><a href={item.link}>{item.title}</a></li>)}
            </ul>
            {/* <div className= "footerSocials">
              {
                socials.map(item =><a id='lIcon' key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'> <img id='icons' src={item.icon} alt="" /> </a>)
              }
            </div> */}
            </div>

        </div>
        <p id='copy'> Helen Alabi &copy;2024</p>
    </footer>
  )
}

export default Footer;
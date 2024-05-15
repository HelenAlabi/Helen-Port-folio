import "./about.css"
import AboutImage from '../../assets/p3.jpg'
import CV from '../../assets/HELEN_ALABI_CV.pdf'
import { MdOutlineFileDownload } from "react-icons/md";

import Card from '../../components/Card'

const data =[
      {id:1,  title: 'Collaboration', dsc:'Effective at working in diverse teams, contributing ideas, and fostering a cooperative environment to achieve common goals'},
      {id:2,  title: 'Time Management',dsc:'Proficient in prioritizing tasks, meeting deadlines, and efficiently allocating time and resources to maximize productivity.'},
      {id:3,  title: 'Communication', dsc:'Skilled in conveying ideas clearly, actively listening to others, and adapting communication style to effectively engage with various individuals or team members '},
      
      

]



const About = () => {
  return (
    <section id="about">
      <div className= "container aboutContainer">
        <div className= "aboutLeft" id="aboutLeft">
          <div className= "aboutImage" >
            <img src={AboutImage} alt=""/>
          </div>
        </div>
        <div className= "aboutRight">
          <h2>About Me</h2>
          <h4 id="h4">I have soft skills in:</h4>
          <div className= "aboutCards" >
            {
              data.map(item =>(<Card key={item.id} className= 'aboutCard' id ='aboutCard'>
                <h5>{item.title}</h5>
                <p>{item.dsc}</p>
              </Card>))
            }

          </div>
          <p> I am Helen a passionate Software Engineer based in Lagos. I thrive on exploring new and innovative ways to create exceptional user experiences. With dedication and hard work, I have built a portfolio that showcases my skills and expertise. Feel free to explore my work and see how I can help bring your web dreams to life. Let&#39;s collaborate and make something amazing together! Check out my resume below!
          </p>
          <a href={CV} download  className= "btn primary">Download CV <MdOutlineFileDownload /> </a>

        </div>
      </div>
    </section>
  )
}

export default About;
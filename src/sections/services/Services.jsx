import './services.css'
import Card from '../../components/Card'
import { FaReact } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript } from "react-icons/di";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";



const data =[
  {id:1, icon: <IoLogoHtml5 /> , title: 'HTML'},
  {id:2, icon: <IoLogoCss3 /> , title: 'CSS'},
  {id:3, icon: <DiJavascript /> , title: 'JavaScript'},
  {id:4, icon: <TbBrandTypescript /> , title: 'TypeScript'},
  {id:5, icon: <FaReact /> , title: 'React'},
  {id:6, icon: <FaNodeJs /> , title: 'Node.js'}

]



const Services = () => {
  return (
    <section id='skills'>
      <h2>My Skill</h2>
      <p>My Skills </p>
      <div className= "container skillsContainer">
         {
          data.map(item =>(
            <Card key={item.id} className= 'skills light'>
              <div className= "skillsIcons">{item.icon}</div>
              <div className= 'sillsDetails'>
                <h4>{item.title}</h4>
              </div>

            </Card>
          ))
         }
      </div>
    </section>
  )
}

export default Services;
import './projects.css'
import Clicks from './Clicks';
import Disney from '../../assets/disney.jpg';
import Syntax from '../../assets/syntax4.png';
import Dashboard from '../../assets/dashboard.png';
import Card from '../../components/Card'


const data =[
  {id:1, image: Disney , title: 'Disney Web', desc:'Discover the magic of Disney on our captivating website. Dive into beloved characters, timeless stories, and unforgettable adventures. Explore articles, visuals, and multimedia. Join us on this journey of imagination and nostalgia.', click: <Clicks/>, git:'HelenAlabi/DisneyProject2', demo:'https://disney-project2.vercel.app/'},

  {id:2, image: Syntax , title: 'Rock Paper Scissors', desc:'Indulge in the timeless fun of Rock Paper Scissors with our sleek web application. Challenge friends or test your skills against the computer in thrilling matches. Experience quick, addictive gaming at your fingertips. Ready to play?', click: <Clicks/>,git:'Landlord209/-Syntax-Project', demo:'https://syntax-project.vercel.app/'},

  {id:3, image: Dashboard, title: 'Admin Dashboard', desc:'Discover efficiency redefined with our Admin Dashboard web app. Seamlessly manage tasks, data, and insights with intuitive design. Your centralized hub for streamlined administration. Welcome to simplified control.', click: <Clicks/> ,git:'HelenAlabi/DashBoard', demo:'https://dash-board-taupe-omega.vercel.app/'},

  // {id:4, image: Disney , title: 'Syntax Quiz', desc:'Optimize promotion decisions with our Quiz App web platform', click: <Clicks/> , git:'Adetoke0987/QUIZ-BY-SYNTAX', demo:''},
  

]


const Projects = () => {
  return (
    <section id='projects'>
      <h2 id='pro'>My Projects</h2>
      <p id='proP'>Explore </p>
      <div className= "container projectContainer">
         {
          data.map(item =>(
            <Card key={item.id} className= 'projects light'>
              <div className= "projectImages"><img id='proImg' src= {item.image} alt="" /></div>
              <div className= 'projectDetails'>
                <h4>{item.title}</h4>
                <p >{item.desc}</p>
                <div className= "clicking"><Clicks>
                     <a href= {item.demo} className= 'btn primary'>Demo</a>
                     <a href={item.git} className='btn light'>Github</a>
                  </Clicks></div>
              </div>

            </Card>
          ))
         }
      </div>
    </section>
  )
}

export default Projects;
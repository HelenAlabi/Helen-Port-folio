import './projects.css'
import Clicks from './Clicks';
import Disney from '../../assets/disney.jpg';
import Syntax from '../../assets/syntax4.png';
import Dashboard from '../../assets/dashboard.png';
import Card from '../../components/Card'


const data =[
  {id:1, image: Disney , title: 'Dispey Web', desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus aspernatur quidem, quia consequatur laborum minima modi reiciendis fugiat totam iste facilis. Explicabo iste corrupti, dolore aperiam laborum veniam nostrum!', click: <Clicks>
  <a href="#contact" className= 'btn primary'>Let talk</a>
  <a href="#projects" className='btn light'>My Works</a>
</Clicks>},
  {id:2, image: Syntax , title: 'Dispey Web', desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus aspernatur quidem, quia consequatur laborum minima modi reiciendis fugiat totam iste facilis. Explicabo iste corrupti, dolore aperiam laborum veniam nostrum!', click: <Clicks>
  <a href="#contact" className= 'btn primary'>Let talk</a>
  <a href="#projects" className='btn light'>My Works</a>
</Clicks>},
  {id:3, image: Dashboard, title: 'Dispey Web', desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus aspernatur quidem, quia consequatur laborum minima modi reiciendis fugiat totam iste facilis. Explicabo iste corrupti, dolore aperiam laborum veniam nostrum!', click: <Clicks>
  <a href="https://dash-board-taupe-omega.vercel.app/" className= 'btn primary'>Let talk</a>
  <a href="#projects" className='btn light'>My Works</a>
</Clicks>},
  {id:4, image: Disney , title: 'Dispey Web', desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus aspernatur quidem, quia consequatur laborum minima modi reiciendis fugiat totam iste facilis. Explicabo iste corrupti, dolore aperiam laborum veniam nostrum!', click: <Clicks>
  <a href="#contact" className= 'btn primary'>Let talk</a>
  <a href="#projects" className='btn light'>My Works</a>
</Clicks>},
  

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
                <p>{item.desc}</p>
                <div className="clicking"><Clicks>
                     <a href="#contact" className= 'btn primary'>Let talk</a>
                     <a href="#projects" className='btn light'>My Works</a>
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
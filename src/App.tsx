import './styles/App.css'
import Navbar from './components/Navbar'
import ProjectBoard from './components/ProjectBoard'

function App() {
  return (
    <div className='top'>

      <Navbar />

      <div className='mainScroller'>



        <section id="about" className='tile tileAbout'>
          <h2>About Me</h2>
          <p>
            I am a robotics and applied machine learning engineer focused on building intelligent systems that work on real hardware. My projects combine ROS 2, embedded control, sensing, SLAM/localization, simulation-driven prediction, and physics-guided machine learning. I like work that connects models to the physical world: robots that can drive, sense, map, learn, and be validated through real testing.
          </p>
          
        </section>

        

        <section id="projects" className='tile'>
          <h2>Project Portfolio </h2>
          <ProjectBoard/>
        </section>
        
      </div>
    </div>
  )
}


export default App

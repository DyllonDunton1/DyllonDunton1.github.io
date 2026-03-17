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
            I am a graduate researcher in Robotics and Applied Machine Learning focused on physics-guided models for physical and robotic systems. My work explores latent-state representations, reduced-order modeling, and simulation-driven prediction to enable efficient and stable learning from high-dimensional sensor and time-series data. In addition to academic research, I have industry experience developing embedded sensing, control, and data systems in production environments, which informs my emphasis on deployable ML pipelines, system validation, and real-world constraints.
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


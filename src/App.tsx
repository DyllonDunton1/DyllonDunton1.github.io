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
            I’m a Master’s student in Computer Engineering at the University of Maine, with dual Bachelor’s degrees in Electrical and Computer Engineering. Engineering has always felt like second nature to me — my father worked on jet engines, and my grandfather was an automotive mechanic. I grew up around machines, tools, and problem-solving, and I’ve followed that path ever since.
          </p>
          <br/>
          <p>
            My current research explores the use of Physically Informed Neural Networks (PINNs) combined with latent diffusion models to simulate offshore wind turbine dynamics — specifically during blade installation, where accurate prediction is critical. I also collaborate with the University Admissions Office on a project that leverages the GPT-4o API to extract student data from unstructured transcripts and automate scholarship matching.
          </p>
          <br/>
          <p>
            My professional experience spans industrial automation, embedded systems, computer vision, and sensor fusion. I interned at GE Gas Power in Bangor, ME, where I worked on automation tools, image processing, and data system integration. I also worked at the Advanced Structures and Composites Center, developing robotics infrastructure with ROS2 and using infrared vision systems to monitor 3D-printed components.
          </p>
          <br/>
          <p>
            I earned my dual degrees in 2024 and discovered a passion for robotics and AI while serving as software and hardware co-lead for the Black Bear Robotics Club. I’m now completing my final year of graduate research and expect to graduate with my M.S. in May 2026.
          </p>
          <br/>
          <p>
            I’m always looking for new opportunities to apply AI and robotics to complex, physical systems — especially in space exploration, renewable energy, and autonomous systems. If you're interested, take a look at my resume, GitHub, LinkedIn, or project portfolio to learn more.
          </p>
          <br/>
          <p>
            Outside of engineering, I’m a dedicated powerlifter and deeply value the discipline and structure it brings — traits that mirror how I approach technical challenges. I’m also on a personal weight loss journey to become more active in sports I enjoy, like soccer and volleyball.
          </p>
          <br/>
          <p>
            When I’m not lifting or coding, I enjoy spending time with friends hiking and birdwatching in Maine’s trails and woods. I also have an orange cat named Oscar, who’s pretty chill and occasionally supervises my code reviews.
          </p>
        </section>

        <section id="contact" className='tile'>
          <h2>Contact</h2>
          <p>Email: dyllon.dunton@maine.edu</p>
          <p>GitHub: <a href="https://github.com/DyllonDunton1">DyllonDunton1</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/dyllon-dunton-47ab8b1b8/">dyllon-dunton</a></p>
        </section>

        <section id="projects" className='tile'>
          <h2>Project Portfolio</h2>
          <ProjectBoard/>
        </section>
        
      </div>
    </div>
  )
}


export default App


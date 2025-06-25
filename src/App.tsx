import './styles/App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='top'>

      <Navbar />

      <div className='mainScroller'>
        <section id="about" className='tile'>
          <h2>About Me</h2>
          <p>I’m a Master’s student in Computer Engineering with dual Bachelor’s degrees in Electrical and Computer Engineering. My work focuses on robotics, autonomy, and AI-enhanced physical systems — especially in space and renewable energy.
            My dad was a jet engine mechanic and my grandfather is an automotive mechanic, so I have been around machines all my life and have a technical aptitude, so being an engineer was the one and only path that fit my interests perfectly.
            I graduated with two degrees in electrical and computer engineering in May of 2024 from the University of Maine, where I discovered my love of robotics and AI through being an officer in the University Black Bear Robotics Club. 
          </p>
        </section>

        <section id="projects" className='tile'>
          <h2>Projects</h2>
          <ul>
            <li><strong>Car Racing DQN</strong> – Reinforcement learning project using Gym + PyTorch</li>
            <li><strong>Height Map UNet</strong> – Semantic segmentation of terrain from drone images</li>
            <li><strong>Submarine Capstone</strong> – Autonomous navigation using ROS2</li>
          </ul>
        </section>

        <section id="contact" className='tile'>
          <h2>Contact</h2>
          <p>Email: dyllon.dunton@maine.edu</p>
          <p>GitHub: <a href="https://github.com/DyllonDunton1">DyllonDunton1</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/dyllon-dunton-47ab8b1b8/">dyllon-dunton</a></p>
        </section>

      </div>
    </div>
  )
}


export default App


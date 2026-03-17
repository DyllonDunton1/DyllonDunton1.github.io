import { Link } from 'react-router-dom'
import '../styles/ProjectNavbar.css'

const ProjectNavbar = () => {
  return (
      <nav>
        <div className='identify'>
          <div className='mugshot'>
              <img src="/mugshot.png" className='mugshotImage'></img>
          </div>
        </div>
        <div className='identify-text'>
          <h2 style={{ color: "black"}}>Dyllon Dunton</h2>
          <p>Graudate Researcher</p>
          <p>UMO M.S. Candidate</p>
          <p style={{ marginBottom: '5%' }} >Applied ML & Robotics Engineer</p>
          <p><i className="fa-solid fa-envelope linkIcon" style={{paddingRight: '1%'}}/><span className="linker" onClick={() => {navigator.clipboard.writeText("dyllon.dunton@maine.edu");alert("Email copied!");}} >dyllon.dunton@maine.edu</span></p>
          <p style={{ marginBottom: '5%' }}><i className="fa-solid fa-location-dot linkIcon" style={{paddingRight: '2%'}}/>Pittsfield, Maine (04967)</p>
          <p><i className="fa-brands fa-github linkIcon" style={{paddingRight: '1%'}}/>{" "}<a href="https://github.com/DyllonDunton1" className='linker'>DyllonDunton1</a></p>
          <p><i className="fa-brands fa-linkedin linkIcon" style={{paddingRight: '1%'}}/>{" "}<a href="https://www.linkedin.com/in/dyllon-dunton-47ab8b1b8/" className='linker'>dyllon-dunton</a></p>
          <p style={{ marginBottom: '5%' }} ><i className="fa-solid fa-file-arrow-down linkIcon" style={{paddingRight: '1%'}}/>{" "}<a href="/Dunton-Dyllon-Resume-Jan2026-Base.pdf" className='linker'  download>Resume</a></p>

          <p><i className="fa-solid fa-house-chimney" style={{paddingRight: '0.5%'}}/>{" "}<Link to={'/#projects'} className='linker'>Back Home</Link></p>

        </div>

  
    </nav>
  )
}



export default ProjectNavbar

import { Link } from 'react-router-dom'
import '../styles/ProjectNavbar.css'
import {
  EMAIL,
  GITHUB_LABEL,
  GITHUB_URL,
  LINKEDIN_LABEL,
  LINKEDIN_URL,
  LOCATION,
  PROFILE_IMAGE_ALT,
  PROFILE_IMAGE_PATH,
  PROFILE_LINES,
  RESUME_PATH,
} from '../config/profile'

const ProjectNavbar = () => {
  return (
      <nav>
        <div className='identify'>
          <div className='mugshot'>
              <img src={PROFILE_IMAGE_PATH} className='mugshotImage' alt={PROFILE_IMAGE_ALT}></img>
          </div>
        </div>
        <div className='identify-text'>
          <h2 style={{ color: "black"}}>Dyllon Dunton</h2>
          <p>{PROFILE_LINES[0]}</p>
          <p>{PROFILE_LINES[1]}</p>
          <p style={{ marginBottom: '5%' }} >{PROFILE_LINES[2]}</p>
          <p><i className="fa-solid fa-envelope linkIcon" style={{paddingRight: '1%'}}/><span className="linker" onClick={() => {navigator.clipboard.writeText(EMAIL);alert("Email copied!");}} >{EMAIL}</span></p>
          <p style={{ marginBottom: '5%' }}><i className="fa-solid fa-location-dot linkIcon" style={{paddingRight: '2%'}}/>{LOCATION}</p>
          <p><i className="fa-brands fa-github linkIcon" style={{paddingRight: '1%'}}/>{" "}<a href={GITHUB_URL} className='linker'>{GITHUB_LABEL}</a></p>
          <p><i className="fa-brands fa-linkedin linkIcon" style={{paddingRight: '1%'}}/>{" "}<a href={LINKEDIN_URL} className='linker'>{LINKEDIN_LABEL}</a></p>
          <p style={{ marginBottom: '5%' }} ><i className="fa-solid fa-file-arrow-down linkIcon" style={{paddingRight: '1%'}}/>{" "}<a href={RESUME_PATH} className='linker' download>Resume</a></p>

          <p><i className="fa-solid fa-house-chimney" style={{paddingRight: '0.5%'}}/>{" "}<Link to={'/#projects'} className='linker'>Back Home</Link></p>

        </div>

  
    </nav>
  )
}



export default ProjectNavbar

import { Link } from 'react-router-dom'
import '../styles/ProjectNavbar.css'

const ProjectNavbar = () => {
  return (
    <nav>
      <div className='identify'>
        <div className='mugshot'>
            <img src="/mugshot.png" className='mugshotImage'></img>
        </div>
        <h4 style={{ marginTop: '10%' }}>Dyllon</h4>
        <h4>Dunton</h4>
      </div>
      
      <ul style={{ width: '100%', height: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'center', listStyle: 'none', margin: 0 }}>
        <li className='navButton'><Link to={'/#projects'} className='navButtonLink'>Home</Link></li>
        <li className='navButton'><a href="/Dyllon-Dunton-Resume-June-2025.pdf" className='navButtonLink' style={{borderBottom: '1px solid rgb(156, 156, 156)'}} download>Resume</a></li>
      </ul>
    </nav>
  )
}



export default ProjectNavbar

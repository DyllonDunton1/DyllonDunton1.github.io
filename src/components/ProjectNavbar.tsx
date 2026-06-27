import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/ProjectNavbar.css'
import { useLazyProjectImages } from '../hooks/useLazyProjectImages'
import { useMainScrollerWheel } from '../hooks/useMainScrollerWheel'
import {
  ACTIVELY_LEARNING,
  CURRENT_FOCUS,
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

const PROJECT_GITHUB_LINKS: Record<string, string> = {
  '/projects/slambot-charlie': 'https://github.com/DyllonDunton1/Slambot_Charlie',
  '/projects/windmill': 'https://github.com/DyllonDunton1/Offshore_Wind_AE',
  '/projects/submarine': 'https://github.com/jacobcwildes/Submarine_Capstone',
  '/projects/carracing': 'https://github.com/DyllonDunton1/Car-Racing-V3-DQN',
  '/projects/aerialplan': 'https://github.com/DyllonDunton1/Height_Map_UNET',
  '/projects/robosoccer': 'https://github.com/DyllonDunton1/Smooth_Soccer',
  '/projects/robocoms': 'https://github.com/DyllonDunton1/roboComs',
}

const ProjectNavbar = () => {
  const location = useLocation()
  const isWindmillPage = location.pathname === '/projects/windmill'

  useMainScrollerWheel()
  useLazyProjectImages()

  useEffect(() => {
    document.querySelectorAll('.heroGithubLink').forEach((node) => node.remove())

    const githubUrl = PROJECT_GITHUB_LINKS[location.pathname]
    if (!githubUrl) return

    const mainScroller = document.querySelector('.mainScroller')
    if (!mainScroller) return

    const subtitleElements = Array.from(mainScroller.getElementsByClassName('subtitle'))
    const lastSubtitle = subtitleElements[subtitleElements.length - 1]
    if (!lastSubtitle) return

    const heroLink = document.createElement('a')
    heroLink.className = 'heroGithubLink'
    heroLink.href = githubUrl
    heroLink.target = '_blank'
    heroLink.rel = 'noreferrer'

    const githubIcon = document.createElement('i')
    githubIcon.className = 'fa-brands fa-github'
    githubIcon.setAttribute('aria-hidden', 'true')

    const githubText = document.createElement('span')
    githubText.textContent = 'GitHub Repository'

    heroLink.appendChild(githubIcon)
    heroLink.appendChild(githubText)
    lastSubtitle.after(heroLink)
  }, [location.pathname])

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
          <p>{PROFILE_LINES[2]}</p>
          <div className='currentFocus'>
            <p className='currentFocusLabel'>Current Focus</p>
            <p>{CURRENT_FOCUS.join(' · ')}</p>
          </div>
          <div className='currentFocus'>
            <p className='currentFocusLabel'>Actively Learning</p>
            <p>{ACTIVELY_LEARNING.join(' · ')}</p>
          </div>
          <p><i className="fa-solid fa-envelope linkIcon" style={{paddingRight: '1%'}}/><span className="linker" onClick={() => {navigator.clipboard.writeText(EMAIL);alert("Email copied!");}} >{EMAIL}</span></p>
          <p style={{ marginBottom: '5%' }}><i className="fa-solid fa-location-dot linkIcon" style={{paddingRight: '2%'}}/>{LOCATION}</p>
          <p><i className="fa-brands fa-github linkIcon" style={{paddingRight: '1%'}}/>{" "}<a href={GITHUB_URL} className='linker'>{GITHUB_LABEL}</a></p>
          <p><i className="fa-brands fa-linkedin linkIcon" style={{paddingRight: '1%'}}/>{" "}<a href={LINKEDIN_URL} className='linker'>{LINKEDIN_LABEL}</a></p>
          <p style={{ marginBottom: '5%' }} ><i className="fa-solid fa-file-arrow-down linkIcon" style={{paddingRight: '1%'}}/>{" "}<a href={RESUME_PATH} className='linker' download>Resume</a></p>

          <p><i className="fa-solid fa-house-chimney" style={{paddingRight: '0.5%'}}/>{" "}<Link to={'/#projects'} className='linker'>Back Home</Link></p>

          {isWindmillPage && (
            <div className='sidebarPublications'>
              <p className='currentFocusLabel'>Current Publications</p>
              <a
                className='sidebarPublicationButton'
                href='https://link.springer.com/article/10.1007/s00158-026-04368-w'
                target='_blank'
                rel='noreferrer'
              >
                Springer Paper
              </a>
              <span className='sidebarPublicationButton sidebarPublicationButtonDisabled'>
                Thesis Pending Digital Commons
              </span>
            </div>
          )}

        </div>

    
    </nav>
  )
}

export default ProjectNavbar
import '../styles/Navbar.css'

const Navbar = () => {
/*
  function scrollToSection(id: string) {
    const target = document.getElementById(id);
    const scroller = document.querySelector('.mainScroller');
    if (target && scroller) {
      (scroller as HTMLElement).scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
}
*/

  return (
    <nav>
      <div className='identify'>
        <div className='mugshot'>
            <img src="/mugshot.png" className='mugshotImage'></img>
        </div>
      </div>
      <div className='identify-text'>
        <h2 style={{ color: "black"}}>Dyllon Dunton</h2>
        <p>Robotics & Applied ML Engineer</p>
        <p>M.S. Computer Engineering</p>
        <p style={{ marginBottom: '5%' }} >University of Maine</p>
        <p><i className="fa-solid fa-envelope linkIcon" style={{paddingRight: '1%'}}/><span className="linker" onClick={() => {navigator.clipboard.writeText("dyllon.dunton@maine.edu");alert("Email copied!");}} >dyllon.dunton@maine.edu</span></p>
        <p style={{ marginBottom: '5%' }}><i className="fa-solid fa-location-dot linkIcon" style={{paddingRight: '2%'}}/>Pittsfield, Maine (04967)</p>
        <p><i className="fa-brands fa-github linkIcon" style={{paddingRight: '1%'}}/>{" "}<a href="https://github.com/DyllonDunton1" className='linker'>DyllonDunton1</a></p>
        <p><i className="fa-brands fa-linkedin linkIcon" style={{paddingRight: '1%'}}/>{" "}<a href="https://www.linkedin.com/in/dyllon-dunton-47ab8b1b8/" className='linker'>dyllon-dunton</a></p>
        <p><i className="fa-solid fa-file-arrow-down linkIcon" style={{paddingRight: '1%'}}/>{" "}<a href="/Dunton-Dyllon-Resume-Jan2026-Base.pdf" className='linker'  download>Resume</a></p>
      </div>

  
    </nav>
  )
}



export default Navbar

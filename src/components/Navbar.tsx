import '../styles/Navbar.css'

const Navbar = () => {

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
        <li className='navButton'>
          <a onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }} 
            className='navButtonLink'
          >
            About
          </a>
        </li>
        <li className='navButton'>
          <a onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }} 
            className='navButtonLink'
          >
            Contacts
          </a>
        </li>
        <li className='navButton'>
          <a onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }} 
            className='navButtonLink'
          >
            Projects
          </a>
        </li>
        <li className='navButton'><a href="/Dunton-Dyllon-Resume-June-2025.pdf" className='navButtonLink' style={{borderBottom: '1px solid rgb(156, 156, 156)'}} download>Resume</a></li>
      </ul>
    </nav>
  )
}



export default Navbar

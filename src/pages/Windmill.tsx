import '../styles/Windmill.css'
import ProjectNavbar from '../components/ProjectNavbar'

// I would love the top to be two photos of the work Ive been doing (Gramian and Time-series)
// Title
// Description
// Downloadable Tile for Abstract
// Downloadable Tile for Project Poster

const Windmill = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div className='ImageBanner'>
            <div className='BannerPic'>
                <img src='/windmill_board.png' className='img'></img>
            </div>
            <div className='BannerPic'>
                <img src='/windmill_timeseries.png' className='img'></img>
            </div>
        </div>

        <h1 className='title'>M.S. Thesis PINN Diffusion for Windmill Motion (Ongoing)</h1>

        <p className='desc'>
            My M.S. Thesis is a Physically Informed Latent Diffusion Model (LDM) that uses a large quantity of data to predict windmill motion at the tower-top in real time for blade installation. This project is being completed with the aid of Saravanan Bhaskaran, who is generating all of the data and PINN equations for me to use in my model. 
            The two of us presented our progress on the project at the 2nd Annual Maine AI Conference as a poster. To view the projects project as of May of 2025, download the Abstract and/or Poster below. More progress has been made since presenting at the conference in integrating PINN into the LDM. Please reach out to me if you are interested in this project and want to learn more about it!
            I am not posting source code yet since the project is still my ongoing thesis.
        </p>

        <div className='ContentBanner'>
            <a href="/windmill_abstract.pdf" className="tileBase" download>
                <div className="tileImgContainer">
                    <img src="/windmill_abstract.png" className="tileImg"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Abstract for 2nd Annual Maine AI Conference for poster submission</h2>
                </div>
            </a>

            <a href="/windmill_poster.png" className="tileBase" download>
                <div className="tileImgContainer">
                    <img src="/windmill_poster.png" className="tileImg"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Poster for 2nd Annual Maine AI Conference for poster submission</h2>
                </div>
            </a>
        </div>
      </div>
    </div>
  )
}



export default Windmill
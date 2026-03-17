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
        
        <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/ldm-overview.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
        </div>
        <br /><br />

        <h1 className='title'>Physics-Informed Latent Diffusion Modeling for Offshore Wind Turbine Motion</h1>
        <p className='subtitle'>University of Maine – M.S. Thesis</p>

        <p className='desc'>
            This project develops a physics-informed latent diffusion framework for predicting offshore wind turbine tower-top motion during blade installation, where accurate real-time motion forecasts are critical for operational safety. The system leverages large-scale, high-fidelity simulation data to learn compressed latent representations of complex structural dynamics, enabling fast inference while preserving physically meaningful behavior.
            <br /><br />
            At the core of the approach is a physics-informed autoencoder that compresses high-dimensional time-series motion signals into a stable latent state suitable for generative modeling. A latent diffusion model (LDM) is trained in this latent space to evolve system dynamics forward in time, allowing prediction of tower-top motion trajectories under varying environmental and wave conditions. Physical consistency is encouraged through temporal, spectral, and physics-guided constraints.
            <br /><br />
            <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                <img src='/auto_encoder.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
            </div>
            <br /><br />
            This work is conducted in collaboration with{' '}
            <a
                className='linker'
                href='https://www.researchgate.net/profile/Saravanan-Bhaskaran'
                target='_blank'
                rel='noopener noreferrer'
            >
                Saravanan Bhaskaran
            </a>
            , who leads the generation of high-fidelity simulation datasets and the derivation of physics-based model terms, while I design and implement the machine-learning architecture, training pipeline, validation methodology, and inference workflow.
            <br /><br />
            Results from this project have been presented at the 2nd Annual Maine AI Conference (2025) and IMECE 2025, and a manuscript describing the autoencoder and latent modeling framework is currently under peer review.
            <br /><br />
            The full implementation, including the autoencoder architecture, latent diffusion training pipeline, and evaluation utilities, is available at this  <a className='linker' href='https://github.com/DyllonDunton1/Offshore_Wind_AE' target='_blank' rel='noopener noreferrer'>GitHub Repository</a>.
        </p>

        <div className='desc'>
            <h2>Project Status</h2>
            <br/>
            <ul>
                <li style={{marginLeft: '1rem'}}>Physics-informed autoencoder implemented and validated on high-fidelity simulation data</li>
                <li style={{marginLeft: '1rem'}}>Results presented at Maine AI Conference (2025) and IMECE 2025</li>
                <li style={{marginLeft: '1rem'}}>Ongoing work in training latent diffusion model trained for short-horizon probabilistic motion prediction</li>
                <li style={{marginLeft: '1rem'}}>Manuscript under peer review</li>
            </ul>
        </div>

        <div className='ContentBanner'>

            
            <a href="https://github.com/DyllonDunton1/Offshore_Wind_AE" className="tileBase" download>
                <div className="tileImgContainer">
                    <img src="/Github_Mark.png" className="tileImg"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Github Repository</h2>
                </div>
            </a>
            
            <a href="/Dunton-Dyllon-IMECE-Conference-Poster.pptx" className="tileBase" download>
                <div className="tileImgContainer landscapeWhiteContainer">
                    <img src="/Dunton-Dyllon-IMECE-Conference-Poster.png" className="tileImg landscapeWhite"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Poster for IMECE 2025 Graduate Student Poster Competition (NSF)</h2>
                </div>
            </a>

            <a href="/windmill_abstract.pdf" className="tileBase" download>
                <div className="tileImgContainer portraitWhiteContainer">
                    <img src="/windmill_abstract.png" className="tileImg portraitWhite"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Abstract for 2nd Annual Maine AI Conference for poster submission</h2>
                </div>
            </a>

            <a href="/windmill_poster.png" className="tileBase" download>
                <div className="tileImgContainer landscapeClearContainer">
                    <img src="/windmill_poster.png" className="tileImg landscapeClear"></img>
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
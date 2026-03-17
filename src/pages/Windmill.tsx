import '../styles/Windmill.css'
import ProjectNavbar from '../components/ProjectNavbar'

const Windmill = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='windmill/Intro.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
        </div>
        <br /><br />

        <h1 className='title'>Physics-Informed Autoencoder and Latent Diffusion Modeling for Offshore Wind Turbine Motion</h1>
        <p >Curriculum-Trained Representation Learning for a Digital Twin</p>
        <p className='subtitle'>Manuscript under peer review.</p>

        <p className='desc'>
            <h2>Problem Statement</h2>
            <br />
            During offshore wind turbine blade installation, wave-induced tower-top motion can become difficult to predict in real time. These motions matter because excessive displacement can increase operational risk, delay installation, and reduce safety margins. The broader goal of this project is to support a digital twin capable of fast, physics-consistent motion prediction during installation.
            <br /><br />

            <h2>My Contribution</h2>
            <br />
            My contribution centered on the machine learning side of the project. I designed a physics-informed autoencoder that compresses offshore wind turbine tower-top motion into a compact latent representation while preserving the temporal and spectral behavior needed for accurate reconstruction. I also developed a multi-phase curriculum training strategy to stabilize learning across several competing loss terms. Building on that latent representation, I designed a latent diffusion framework intended for short-horizon prediction of future turbine motion under changing environmental conditions. The simulation data and reduced-order physics model provided the training foundation, but my primary work was the AI architecture and training methodology.
            <br /><br />

            <h2>Model Design</h2>
            <br />
            The first stage of the system is a physics-informed autoencoder that maps two-dimensional tower-top motion into a lower-dimensional latent vector while preserving the dominant temporal and spectral behavior of the original signal. In the final design, each sample is reduced from 840 floating-point values to a 256-dimensional latent representation, making downstream prediction much more tractable. The autoencoder was trained to produce reconstructions that were not only accurate, but also structured well enough to serve as the latent backbone for a diffusion-based forecasting model.
            <br /><br />
            <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                <img src='windmill/auto_encoder.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
            </div>
            <br /><br />

            <h2>Loss Terms</h2>
            <br />
            The model was trained with a mix of reconstruction, spectral, adversarial, latent regularization, and physics-based loss terms. Time-domain and FFT losses preserved the overall motion signal, STFT loss improved local spectral fidelity, adversarial loss reduced oversmoothing, latent regularization shaped the embedding for diffusion modeling, and the physics loss encouraged consistency with the governing dynamics. These terms were introduced progressively through curriculum learning so that more difficult objectives only appeared once the reconstructions were stable enough to support them.
            <br /><br />

            <h2>Training Strategy</h2>
            <br />
            A major part of my work was the design of a three-phase curriculum learning strategy. Rather than training with every objective at once, the model was trained progressively so it could first learn coarse reconstruction, then improve spectral fidelity, and finally incorporate physics-guided refinement once the outputs were smooth enough for those constraints to be meaningful. This staged process was important for stable convergence and for producing a latent space suitable for later diffusion modeling.
            <br /><br />
            <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                <img src='windmill/Train_vs_valid_Plot.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
            </div>
            <br /><br />

            <h2>Latent Diffusion Framework</h2>
            <br />
            The broader prediction system is built around a latent diffusion model that operates on the compressed motion representation produced by the autoencoder. Instead of predicting raw motion directly, the framework first encodes tower-top motion into latent space, evolves that latent representation forward under environmental conditioning, and then decodes it back into time-domain motion. This separation of tasks between the auto-encoder and diffusion model makes the prediction problem more efficient and more scalable than forecasting directly in the original signal space. The diffusion model selected for this framework is a DDIM, since its deterministic sampling is better suited for efficient inference in a real-time physical setting. As of now, the autoencoder has been completed and validated, while the latent diffusion stage is still under development.
            <br /><br />
            <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                <img src='windmill/ldm-overview.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
            </div>
            <br /><br />

            <h2>Results</h2>
            <br />
            The completed autoencoder achieved 2.9 mm mean absolute displacement error on both the training and testing sets, indicating strong reconstruction quality and good generalization. The close agreement between train and test error suggested that the model learned a stable latent representation rather than overfitting to the dataset. These results showed that the learned representation was suitable for integration into the larger latent diffusion framework.
            <br /><br />
            <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                <img src='windmill/recon-typical.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
                <img src='windmill/time-domain-rough.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
                <img src='windmill/time-domain-smooth.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
            </div>
            <br /><br />
        </p>

        <div className='desc'>
            <h2>Project Status</h2>
            <br/>
            <ul>
                <li style={{marginLeft: '1rem'}}>Physics-informed autoencoder implemented and validated on high-fidelity simulation data</li>
                <li style={{marginLeft: '1rem'}}>Results presented at Maine AI Conference (2025) and IMECE 2025</li>
                <li style={{marginLeft: '1rem'}}>Ongoing work in training latent diffusion model trained for short-horizon probabilistic motion prediction</li>
                <li style={{marginLeft: '1rem'}}>Manuscript under peer review</li>
                <li style={{marginLeft: '1rem'}}>Working on ablation study to prove significance of loss terms</li>
                <li style={{marginLeft: '1rem'}}>Testing longer range prediction windows and higher compression ratios</li>
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
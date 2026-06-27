import '../styles/Windmill.css'
import ProjectNavbar from '../components/ProjectNavbar'

const Windmill = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
          <img src='windmill/Intro.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}} alt='Hammerhead offshore wind turbine installation configuration and tower-top orbital motion'></img>
        </div>
        <br /><br />

        <h1 className='title'>Reduced-Order Prediction of Offshore Wind Turbine Motion Using Generative AI</h1>
        <p>Physics-informed autoencoder and latent diffusion forecasting for offshore wind turbine installation</p>
        <p className='subtitle'>Master’s Thesis Project — University of Maine, 2026</p>

        <div className='desc'>
          <h2>Problem Statement</h2>
          <br />
          <p>
            During offshore wind turbine blade installation, waves can cause the top of the turbine tower to move in complicated two-dimensional patterns. This motion matters because blade mating requires precise alignment between the blade root and the hub. If the tower-top motion is too large or poorly timed, installation becomes riskier, slower, and harder to plan.
          </p>

          <p>
            High-fidelity simulation tools can model this behavior, but they are too computationally expensive for real-time decision support. The goal of this project was to develop a faster reduced-order AI framework that could represent and forecast tower-top motion while still preserving the main physical structure of the response.
          </p>
          <br /><br />

          <h2>Project Overview</h2>
          <br />
          <p>
            This thesis developed a two-stage machine learning framework for offshore wind turbine motion prediction. The first stage uses a physics-informed autoencoder to compress two-dimensional tower-top motion into a compact latent representation. The second stage uses a conditional latent diffusion model to forecast future motion in that learned latent space.
          </p>

          <p>
            Instead of predicting the full motion signal directly, the system learns a smaller representation of the motion, predicts the future latent state, and then decodes it back into physical displacement. This makes the forecasting problem faster and more practical for digital-twin-style applications.
          </p>
          <br></br>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <table style={{borderCollapse: 'collapse', textAlign: 'center', minWidth: '20rem'}}>
              <thead>
                <tr>
                  <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Area</th>
                  <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Summary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Application</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Offshore wind turbine blade installation</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Main Task</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Forecast future tower-top motion</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Data Source</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>High-fidelity OrcaFlex simulation</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Turbine Model</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>IEA 10-MW offshore wind turbine in hammerhead configuration</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>AI Models</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Physics-informed autoencoder and latent diffusion model</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Physics Guide</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>SINDy-based reduced-order equations</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Forecast Horizon</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>One-minute future motion windows</td>
                </tr> 
              </tbody>
            </table>
          </div>
          <br /><br />

          <h2>My Contribution</h2>
          <br />
          <p>
            My work focused on the AI modeling side of the project. I developed and refined the autoencoder used to compress tower-top motion, designed the training strategy and loss structure, and built the latent diffusion model used for future-window prediction.
          </p>

          <p>
            The simulation data and reduced-order physics model provided the foundation, while my main contribution was developing the machine learning framework that connected representation learning, physics-guided training, and latent-space forecasting.
          </p>
          <br /><br />

          <h2>Data and Physics Foundation</h2>
          <br />
          <p>
            The model was trained and evaluated using tower-top motion data from OrcaFlex simulations. The simulation campaign covered a range of wave heights, peak periods, wave directions, and random wave realizations. The final dataset included thousands of ten-minute simulations, which were resampled and divided into shorter windows for machine learning.
          </p>

          <p>
            A simplified reduced-order physics model was also identified using SINDy. These equations were not used to replace the AI model. Instead, they acted as a physics guide during training, encouraging the learned motion to stay closer to the dominant structural dynamics.
          </p>
          <br /><br />

          <h2>AI Framework</h2>
          <br />
          <p>
            The framework has two connected parts. First, the autoencoder compresses tower-top motion into a smaller latent vector. The input motion contains both fore-aft and side-side displacement, so the model has to preserve not only the time history, but also the coupled orbital behavior between the two directions.
          </p>
          <br></br>
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white'}}>
            <img src='windmill/auto_enc.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center', paddingTop: '1vh'}} alt='Physics-informed autoencoder architecture for tower-top motion compression'></img>
          </div>
          <br />

          <p>
            Second, the latent diffusion model predicts the next motion window in latent space. It uses previous motion and future wave-state information as conditioning inputs. After the future latent vector is generated, the decoder converts it back into time-domain tower-top motion.
          </p>
          <br></br>
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white'}}>
            <img src='windmill/ldm_model.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center', paddingTop: '1vh'}} alt='Latent diffusion forecasting framework for future tower-top motion prediction'></img>
          </div>
          <br /><br />
          <p>
            The inference pipeline shown below starts with prior tower-top motion and future wave-state information, encodes the available motion into latent space, generates the next latent motion window through the diffusion model, and then decodes that result back into physical tower-top displacement. This latent-space workflow is what makes the final forecasting model fast enough for reduced-order prediction. In the final evaluation, the model generated a one-minute future motion forecast in about 2.094 ms per sample on the test setup.          </p>
          <br></br>
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white'}}>
            <img src='windmill/ldm_infer.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center', paddingTop: '1vh'}} alt='Latent diffusion forecasting framework for future tower-top motion prediction'></img>
          </div>
          <br /><br />

          <h2>Training Strategy</h2>
          <br />
          <p>
            The autoencoder was trained with a mix of reconstruction, frequency-domain, latent regularization, and physics-based loss terms. The main challenge was balancing signal accuracy with physical consistency. A staged training strategy helped the model first learn clean reconstructions before adding harder constraints.
          </p>
          <br></br>
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='windmill/revise_ae_loss.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}} alt='Training and validation loss curves for the offshore wind turbine motion model'></img>
          </div>
          <br /><br />
          <p>
            The latent diffusion model was then trained on the learned motion representation. The final prediction model used efficient diffusion sampling so that future motion windows could be generated quickly enough for reduced-order forecasting.
          </p>
          <br></br>
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='windmill/ldm_loss.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}} alt='Training and validation loss curves for the offshore wind turbine motion model'></img>
          </div>
          <br /><br />

          <h2>Results</h2>
          <br />
          <p>
            The final framework showed that offshore wind turbine installation motion can be compressed, reconstructed, and forecast in a reduced-order latent space. The autoencoder preserved the main displacement, orbital, and frequency behavior of the motion. The latent diffusion model then used that representation to generate future one-minute motion forecasts with low inference time.
          </p>
          <br></br>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <table style={{borderCollapse: 'collapse', textAlign: 'center', minWidth: '20rem'}}>
              <thead>
                <tr>
                  <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Result</th>
                  <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Autoencoder mean test MAE</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>7.050 mm</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Autoencoder median test MAE</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>5.769 mm</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Autoencoder p90 test MAE</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>13.529 mm</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>LDM mean test MAE</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>11.42 mm</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>LDM median test MAE</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>8.600 mm</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>LDM p90 test MAE</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>23.70 mm</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Average generation time</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>2.094 ms</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br /><br />

          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='windmill/ldm_typical_example.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}} alt='Typical latent diffusion forecasting example for offshore wind turbine tower-top motion'></img>
          </div>
          <br />

          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='windmill/ldm_typical_orbit.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}} alt='Typical latent diffusion forecasting orbit showing coupled fore-aft and side-side motion'></img>
          </div>
          <br />

          <p>
            The model performed best in typical response cases and was weaker in extreme low-amplitude cases, especially when one motion direction became very small. This matters because small absolute errors can become large normalized errors when the true signal is close to zero.
          </p>
          <br /><br />

          <h2>Why It Matters</h2>
          <br />
          <p>
            This work is not meant to replace high-fidelity simulation or engineering judgment. Instead, it shows a path toward a faster middle layer: a model that is much cheaper to evaluate than full simulation, but still tied to the physical behavior that matters during installation.
          </p>

          <p>
            That type of model could eventually support digital twin tools for marine operations, where operators need fast forecasts, clear motion trends, and practical decision support under changing environmental conditions.
          </p>
          <br /><br />

          <h2>Current Publications</h2>
          <br />
          <p>
            The Springer publication below covers the reduced-order modeling portion of this research. The full master’s thesis extends that foundation into physics-informed autoencoder and latent diffusion forecasting; the thesis has been fully accepted by the University of Maine and is awaiting Digital Commons publication.
          </p>
          <br />

          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <table style={{borderCollapse: 'collapse', textAlign: 'center', minWidth: '20rem'}}>
              <thead>
                <tr>
                  <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Publication</th>
                  <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Scope</th>
                  <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Reduced-order model of wind turbine motion</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Published Springer paper covering the reduced-order modeling component of the thesis work</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>
                    <a href="https://link.springer.com/article/10.1007/s00158-026-04368-w" target="_blank" rel="noreferrer">Springer / DOI: 10.1007/s00158-026-04368-w</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br /><br />

          <h2>Technologies Used</h2>
          <br />

          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <table style={{borderCollapse: 'collapse', textAlign: 'center', minWidth: '20rem'}}>
              <thead>
                <tr>
                  <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Category</th>
                  <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Tools / Methods</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Machine Learning</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>PyTorch, autoencoders, latent diffusion, DDIM-style sampling</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Scientific Computing</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Python, NumPy, pandas, SciPy</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Simulation</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>OrcaFlex</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Physics Modeling</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>SINDy, reduced-order dynamics</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Signal Processing</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>FFT, STFT, time-windowed motion analysis</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Visualization</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Matplotlib</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Hardware</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>CUDA-enabled GPU training</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br /><br />
        </div>

        <div className='desc'>
          <h2>Project Status</h2>
          <br />

          <ul>
            <li style={{marginLeft: '1rem'}}>Master’s thesis fully accepted by the University of Maine; Digital Commons publication pending</li>
            <li style={{marginLeft: '1rem'}}>Springer paper published for the reduced-order modeling portion of the research</li>
            <li style={{marginLeft: '1rem'}}>Physics-informed autoencoder completed and evaluated</li>
            <li style={{marginLeft: '1rem'}}>Latent diffusion forecasting model completed and evaluated</li>
            <li style={{marginLeft: '1rem'}}>Ablation studies completed</li>
            <li style={{marginLeft: '1rem'}}>Future work includes longer forecast windows, measured data, uncertainty estimation, and operator-facing visualization</li>
          </ul>
        </div>

        <div className='ContentBanner'>

          <a href="https://link.springer.com/article/10.1007/s00158-026-04368-w" className="tileBase" target="_blank" rel="noreferrer">
            <div className="tileImgContainer landscapeWhiteContainer">
              <img src="/windmill/Intro.png" className="tileImg landscapeWhite" alt="Springer publication preview"></img>
            </div>
            <div className="tileInfo">
              <h2 className="tileTitle">Springer Publication: Reduced-Order Model</h2>
            </div>
          </a>

          <a href="https://github.com/DyllonDunton1/Offshore_Wind_AE" className="tileBase" download>
            <div className="tileImgContainer">
              <img src="/common/Github_Mark.png" className="tileImg" alt="GitHub logo"></img>
            </div>
            <div className="tileInfo">
              <h2 className="tileTitle">GitHub Repository</h2>
            </div>
          </a>

          <div
            className="tileBase"
            aria-disabled="true"
            title="Fully accepted by the University of Maine; awaiting Digital Commons publication"
            style={{backgroundColor: 'rgb(135, 135, 135)', cursor: 'not-allowed', opacity: 0.75}}
          >
            <div className="tileImgContainer portraitWhiteContainer" style={{borderColor: 'rgb(135, 135, 135)', filter: 'grayscale(1)'}}>
              <img src="/windmill/trimmed_thesis.png" className="tileImg portraitWhite" alt="Final thesis preview unavailable until Digital Commons publication"></img>
            </div>
            <div className="tileInfo">
              <h2 className="tileTitle">Final Master’s Thesis (Accepted / Awaiting Digital Commons)</h2>
            </div>
          </div>
          
          <a href="/windmill/Dunton-Dyllon-IMECE-Conference-Poster.pptx" className="tileBase" download>
            <div className="tileImgContainer landscapeWhiteContainer">
              <img src="/windmill/Dunton-Dyllon-IMECE-Conference-Poster.png" className="tileImg landscapeWhite" alt="IMECE 2025 poster preview"></img>
            </div>
            <div className="tileInfo">
              <h2 className="tileTitle">IMECE 2025 Poster</h2>
            </div>
          </a>

          <a href="/windmill/windmill_abstract.pdf" className="tileBase" download>
            <div className="tileImgContainer portraitWhiteContainer">
              <img src="/windmill/windmill_abstract.png" className="tileImg portraitWhite" alt="Maine AI Conference abstract preview"></img>
            </div>
            <div className="tileInfo">
              <h2 className="tileTitle">Maine AI Conference Abstract</h2>
            </div>
          </a>

          <a href="/windmill/windmill_poster.png" className="tileBase" download>
            <div className="tileImgContainer landscapeClearContainer">
              <img src="/windmill/windmill_poster.png" className="tileImg landscapeClear" alt="Maine AI Conference poster preview"></img>
            </div>
            <div className="tileInfo">
              <h2 className="tileTitle">Maine AI Conference Poster</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Windmill
import '../styles/AerialPlan.css'
import ProjectNavbar from '../components/ProjectNavbar'

const AerialPlan = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/rover_nav_banner.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
        </div>
        <br /><br />


        <h1 className='title'>Rover Path Navigation via Aerial Imagery</h1>
        <p className='subtitle'>University of Maine – COS 573</p>

        <p className='desc'>
        <b>Why?</b> Autonomous ground vehicles are fundamentally constrained by limited local perception, which makes long-range navigation over unknown terrain difficult and risky. Recent robotics research and competition teams have shown that pairing rovers with aerial drones can dramatically improve situational awareness and planning. This project explores that idea by using top-down drone footage to reconstruct a traversable representation of terrain, enabling informed path planning before a rover ever moves. The broader goal is to reduce uncertainty, improve safety, and move toward autonomous navigation in complex outdoor environments.
        <br /><br />
        I designed and implemented the <b>core perception and mapping pipeline</b>, converting a single MP4 of drone footage into structured terrain representations suitable for planning. My work included panoramic video stitching using OpenCV, monocular depth estimation with ZoeDepth to generate heightmaps, and the design and training of a <b>custom U-Net semantic segmentation model</b> built on a ResNet-34 encoder. I constructed a large training dataset from high-resolution aerial imagery, trained the model to classify terrain types, and developed an overlap-and-vote aggregation strategy to eliminate patch-boundary artifacts in large-scale semantic maps. These outputs formed the foundational inputs required for downstream path planning and visualization.
        <br /><br />
        <b>Collaboration:</b> The A* path-planning algorithm and the Three.js-based 3D visualization were completed with{" "}
        <a className='linker' href="https://www.linkedin.com/in/sophie-walden-1227b9233/">
            Sophie Walden
        </a>
        .
        </p>

        
        <div className='ContentBanner'>

            <a href="https://github.com/DyllonDunton1/Height_Map_UNET" className="tileBase" download>
                <div className="tileImgContainer">
                    <img src="/Github_Mark.png" className="tileImg"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Github Repository</h2>
                </div>
            </a>

            <a href="/Dunton-Walden-COS573-Final-Report.pdf" className="tileBase" download>
                <div className="tileImgContainer">
                    <img src="/rover_paper.png" className="tileImg"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Rover Navigation Final Paper</h2>
                </div>
            </a>

            <a href="/Dunton-Walden-COS5473-FinalPres.pptx" className="tileBase" download>
                <div className="tileImgContainer">
                    <img src="/rover_presi.png" className="tileImg"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Rover Navigation Final Presentation</h2>
                </div>
            </a>
        </div>
        
        
      </div>
    </div>
  )
}



export default AerialPlan

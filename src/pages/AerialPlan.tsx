import '../styles/AerialPlan.css'
import ProjectNavbar from '../components/ProjectNavbar'

const AerialPlan = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div className='roverImageBanner'>
            <div className='roverBannerPic'>
                <img src='/rover_nav_banner.png' className='roverimg'></img>
            </div>
        </div>

        <h1 className='title'>Rover Path Naviagation via Aerial Imagery (Completed with <a style={{color:"cyan", backgroundColor:"rgb(100, 100, 100)", padding:"0.4vh", borderRadius:"2vw"}} href="https://www.linkedin.com/in/sophie-walden-1227b9233/">Sophie Walden</a>)</h1>

        <p className='desc'>
            Automatic navigation is a field that is hard for
            land-based rovers because they are only able to scan their
            immediate surroundings. This paper proposes an
            alternative solution using drone footage of the location to
            create a 3D scan of the environment. This scan includes
            using a depth estimator ZoeDepth to create a heightmap
            and a self-built UNet model to create a segmentation map.
            The segmentation map describes different surfaces the
            rover might interact with such as vegetation, water, roads,
            and more. From this, we created a pipeline where you can
            supply a single mp4 of top-down drone footage and we
            are able to create a 3D interactive visualization for you to
            see a rover's path through the footage

            An annual University Rover Challenge from the Mars
            Society brings robotics teams together to make new
            systems to guide rovers on Mars terrain. In recent year’s
            competitions, a couple of teams made a new
            augmentation to their strategies: using an aerial drone to
            accompany the rover with the sole purpose of aiding path
            planning. This allowed the teams piloting the drones to
            plan an optimal path for the rover around challenging
            terrain. What this paper proposes comes from a similar
            approach, but aims to work with top-down drone footage
            to make explorable visualizations of the mapped terrain to
            guide these teams with making planning decisions. This is
            a precursor to a system that will automatically guide
            rovers along the optimal planned path.

            Check out the paper and presentation to find out more about how the model works and it's performance. The video stitching, Zoedepth integration, and the segmentation U-net model were built by me, while the A* path planning and 3D interactive visualization were built by Sophie Walden.
        </p>

        <a className='desc' style={{color:"cyan", backgroundColor:"rgb(100, 100, 100)", padding:"0.4vh", borderRadius:"2vw"}}  href="https://github.com/DyllonDunton1/Height_Map_UNET">Find the source code for this project at our GitHub!</a>

        <div className='ContentBanner'>
            <a href="/Dunton-Walden-COS573-Final-Report.pdf" className="tileBase" download>
                <div className="tileImgContainer">
                    <img src="/rover_paper.png" className="tileImg"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Rover Naviagation Final Paper</h2>
                </div>
            </a>

            <a href="/Dunton-Walden-COS5473-FinalPres.pptx" className="tileBase" download>
                <div className="tileImgContainer">
                    <img src="/rover_presi.png" className="tileImg"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Rover Naviagation Final Presentation</h2>
                </div>
            </a>
        </div>
        
        
      </div>
    </div>
  )
}



export default AerialPlan
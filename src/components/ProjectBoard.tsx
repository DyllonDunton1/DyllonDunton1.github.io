import '../styles/ProjectBoard.css'
import Tile from './Tile'



const projects = [
    {
        staticUrl: "slambot_charlie/charlie_side_view.jpg",
        gifUrl: "slambot_charlie/charlie_motion.gif",
        title: "Slambot Charlie: ROS 2 SLAM Robot with Web Dashboard", 
        pagePath: "/projects/slambot-charlie",
        orientation: "landscapeClear",
    },
    {
        staticUrl: "submarine/submarine_tile.png",
        gifUrl: "submarine/submarine_tile.png",
        title: "Submersible Drone for Hull Inspection", 
        pagePath: "/projects/submarine",
        orientation: "landscapeClear",
    },
    {
        staticUrl: "windmill/ldm_model.png",
        gifUrl: "windmill/ldm_model.png",
        title: "Reduced-Order Prediction of Offshore Wind Turbine Motion Using Generative AI (M.S. Thesis)", 
        pagePath: "/projects/windmill",
        orientation: "landscapeWhite",
    },
    {
        staticUrl: "carracing/carracing.png",
        gifUrl: "carracing/gifs/comparison.gif",
        title: "Deep Reinforcement Learning Study with Car-Racing-V3", 
        pagePath: "/projects/carracing",
        orientation: "landscapeClear",
    },
    {
        staticUrl: "aerialplan/aerialplan.png",
        gifUrl: "aerialplan/aerialplan.png",
        title: "Rover Path Navigation via Aerial Imagery", 
        pagePath: "/projects/aerialplan",
        orientation: "portraitClear",
    },
    {
        staticUrl: "robosoccer/robosoccer.png",
        gifUrl: "robosoccer/robosoccer.gif",
        title: "Jetbot Soccer via RRT* Path Planning and AruCo Tag Detection", 
        pagePath: "/projects/robosoccer",
        orientation: "as_is",
    },
    {
        staticUrl: "transcript/sample.jpg",
        gifUrl: "transcript/sample.jpg",
        title: "RAGAI Transcript Reader: AI-Driven Academic Transcript Parsing", 
        pagePath: "/projects/transcript",
        orientation: "as_is",
    },
    {
        staticUrl: "eskate/eskat_full_view.jpeg",
        gifUrl: "eskate/eskat_full_view.jpeg",
        title: "Electric Skateboard V2: High-Power Electromechanical Build", 
        pagePath: "/projects/eskate",
        orientation: "landscapeClear",
    }, 
    {
        staticUrl: "cluster/cluster_photo.jpg",
        gifUrl: "cluster/cluster_photo.jpg",
        title: "BeagleBone Black 8-Node Cluster Undergraduate Research", 
        pagePath: "/projects/cluster",
        orientation: "as_is",
    },
]

const ProjectBoard = () => {
  return (
    <div className="projectBoard">
      {projects.map((proj, idx) => (
        <Tile
          key={idx}
          title={proj.title}
          staticUrl={proj.staticUrl}
          gifUrl={proj.gifUrl}
          pagePath={proj.pagePath}
          orientation={proj.orientation}
        />
      ))}
      <a href="/additional_projects/Dunton-Dyllon-Projects-June-2025.pdf"className="tileBase" download>
        <div className="tileImgContainer">
          <img src="/additional_projects/project-page-img.png" className="tileImg"></img>
        </div>
        <div className="tileInfo">
          <h2 className="tileTitle">Additional Project Page (Internship Projects I Can't Show Code For)</h2>
        </div>
      </a>
    </div>
  )
}


export default ProjectBoard

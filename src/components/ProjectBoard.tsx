import '../styles/ProjectBoard.css'
import Tile from './Tile'



const projects = [
    {
        staticUrl: "windmill/ldm_model.png",
        gifUrl: "windmill/ldm_model.png",
        title: "Reduced-Order Prediction of Offshore Wind Turbine Motion Using Generative AI (M.S. Thesis)", 
        pagePath: "/projects/windmill",
        orientation: "landscapeWhite",
    },
    {
        staticUrl: "transcript/sample.jpg",
        gifUrl: "transcript/sample.jpg",
        title: "RAGAI Transcript Reader: AI-Driven Academic Transcript Parsing", 
        pagePath: "/projects/transcript",
        orientation: "as_is",
    },
    {
        staticUrl: "submarine.png",
        gifUrl: "submarine.png",
        title: "Submersible Drone for Hull Inspection", 
        pagePath: "/projects/submarine",
        orientation: "landscapeClear",
    },
    {
        staticUrl: "carracing.png",
        gifUrl: "carracing/gifs/comparison.gif",
        title: "Deep Reinforcement Learning Study with Car-Racing-V3", 
        pagePath: "/projects/carracing",
        orientation: "landscapeClear",
    },
    {
        staticUrl: "aerialplan.png",
        gifUrl: "aerialplan.png",
        title: "Rover Path Naviagation via Aerial Imagery", 
        pagePath: "/projects/aerialplan",
        orientation: "portraitClear",
    },
    {
        staticUrl: "cluster_photo.jpg",
        gifUrl: "cluster_photo.jpg",
        title: "BeagleBone Black 8-Node Cluster Undergraduate Research", 
        pagePath: "/projects/cluster",
        orientation: "as_is",
    },
    {
        staticUrl: "robocoms.png",
        gifUrl: "robocoms.gif",
        title: "Robot Communication for Umaine Black Bear Robotics Club", 
        pagePath: "/projects/robocoms",
        orientation: "as_is",
    },
    {
        staticUrl: "robosoccer.png",
        gifUrl: "robosoccer.gif",
        title: "Jetbot Soccer via RRT* Path Planning and AruCo Tag Detection", 
        pagePath: "/projects/robosoccer",
        orientation: "as_is",
    },
    {
        staticUrl: "eskate_v2.jpg",
        gifUrl: "eskate_v1.gif",
        title: "Electric Skateboard V1 and V2", 
        pagePath: "/projects/eskate",
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
      <a href="/Dunton-Dyllon-Projects-June-2025.pdf"className="tileBase" download>
        <div className="tileImgContainer">
          <img src="/project-page-img.png" className="tileImg"></img>
        </div>
        <div className="tileInfo">
          <h2 className="tileTitle">Additional Project Page (Internship Projects I Can't Show Code For)</h2>
        </div>
      </a>
    </div>
  )
}



export default ProjectBoard

import '../styles/ProjectBoard.css'
import Tile from './Tile'



const projects = [
    {
        staticUrl: "windmill_board.png",
        gifUrl: "windmill_board.png",
        title: "M.S. Thesis PINN Diffusion for Windmill Motion (Ongoing)", 
        pagePath: "/projects/windmill",
    },
    {
        staticUrl: "submarine.png",
        gifUrl: "submarine.png",
        title: "Submarine Capstone (Ongoing)", 
        pagePath: "/projects/submarine",
    },
    {
        staticUrl: "aerialplan.png",
        gifUrl: "aerialplan.png",
        title: "Rover Path Naviagation via Aerial Imagery", 
        pagePath: "/projects/aerialplan",
    },
    {
        staticUrl: "carracing.png",
        gifUrl: "car-racing.gif",
        title: "Deep Reinforcement Learning Study with Car-Racing-V3", 
        pagePath: "/projects/carracing",
    },
    {
        staticUrl: "cluster_photo.jpg",
        gifUrl: "cluster_photo.jpg",
        title: "BeagleBone Black 8-Node Cluster Undergraduate Research", 
        pagePath: "/projects/cluster",
    },
    {
        staticUrl: "robocoms.png",
        gifUrl: "robocoms.gif",
        title: "Robot Communication for Umaine Black Bear Robotics Club", 
        pagePath: "/projects/robocoms",
    },
    {
        staticUrl: "robosoccer.png",
        gifUrl: "robosoccer.gif",
        title: "Jetbot Soccer via RRT* Path Planning and AruCo Tag Detection", 
        pagePath: "/projects/robosoccer",
    },
    {
        staticUrl: "eskate_v2.jpg",
        gifUrl: "eskate_v1.gif",
        title: "Electric Skateboard V1 and V2", 
        pagePath: "/projects/eskate",
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

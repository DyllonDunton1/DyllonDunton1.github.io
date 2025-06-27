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
        title: "Aerial Terrain Pathing via Depth and Segmentation", 
        pagePath: "/projects/aerialplan",
    },
    {
        staticUrl: "carracing.png",
        gifUrl: "car-racing.gif",
        title: "Deep Reinforcement Learning Study with Car-Racing-V3", 
        pagePath: "/projects/carracing",
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
    </div>
  )
}



export default ProjectBoard

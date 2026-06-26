import '../styles/RoboSoccer.css'
import ProjectNavbar from '../components/ProjectNavbar'

const RoboSoccer = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div className='ImageBanner'>
            <div className='BannerPic'>
                <img src='/robosoccer/robosoccer.gif' className='img'></img>
            </div>
            <div className='BannerPic'>
                <img src='/robosoccer/robosoccer.png' className='img'></img>
            </div>
        </div>

        <h1 className='title'>Jetbot Soccer via RRT* Path Planning and AruCo Tag Detection</h1>

        <p className='innerDesc' style={{textAlign:"left"}}>
            This project focuses on a small autonomous robotics pipeline that integrates visual tag detection, environment mapping, and path planning so a JetBot can navigate a constrained tabletop soccer-style task.
        </p>
        <p className='innerDesc' style={{textAlign:"left"}}>
            The system is composed of modular ROS2 nodes, each responsible for a core function:
        </p>

        <ul className='listDesc' style={{textAlign:"left"}}>
            <li className='listDesc' style={{textAlign:"left"}}>A <strong>motor control node</strong> drives the robot’s wheels using open-loop commands.</li>
            <li className='listDesc' style={{textAlign:"left"}}>An <strong>ArUco detection node</strong> captures camera frames and detects visual markers.</li>
            <li className='listDesc' style={{textAlign:"left"}}>A <strong>path planning node</strong> interprets marker positions and computes a trajectory using RRT*.</li>
        </ul>

        <p className='innerDesc' style={{textAlign:"left"}}>
            The robot used is based on the NVIDIA JetBot development kit, modified to use a standard Logitech webcam for improved image quality. Objects in the environment are marked with ArUco tags. Using a ROS2 ArUco node, the robot receives tag IDs and relative position/orientation data for each detected marker. With calibration, this data is converted into positions relative to the robot’s frame of reference.
        </p>
        <p className='innerDesc' style={{textAlign:"left"}}>
            Once the environment is mapped, the robot calculates a target pose and plans a path around marked obstacles. The RRT* planner samples candidate points throughout the environment, extends the path tree toward useful samples, rejects invalid segments, and backtracks a final path once a valid endpoint is reached.
        </p>
        <p className='innerDesc' style={{textAlign:"left"}}>
            A post-processing step simplifies the trajectory by checking whether a direct line between non-adjacent path nodes can be safely made without intersecting an obstacle. This reduces the number of control points the robot needs to process, which improves performance for the JetBot’s low-fidelity, open-loop wheel control system.
        </p>
        <p className='innerDesc' style={{textAlign:"left"}}>
            The system worked reliably and served as an effective study of perception-driven path planning in constrained environments.
        </p>

        <a className='linkDesc linker' href="https://github.com/DyllonDunton1/Smooth_Soccer">Find the source code for this project at our GitHub!</a>
       
      </div>
    </div>
  )
}



export default RoboSoccer

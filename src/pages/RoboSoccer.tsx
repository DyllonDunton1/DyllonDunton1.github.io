import '../styles/RoboSoccer.css'
import ProjectNavbar from '../components/ProjectNavbar'

const RoboSoccer = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div className='ImageBanner'>
            <div className='BannerPic'>
                <img src='/robosoccer.gif' className='img'></img>
            </div>
            <div className='BannerPic'>
                <img src='/robosoccer.png' className='img'></img>
            </div>
        </div>

        <h1 className='title'>Jetbot Soccer via RRT* Path Planning and AruCo Tag Detection</h1>

        <p className='innerDesc' style={{textAlign:"left"}}>
            This project focuses on building a full robotics pipeline that integrates visual tag detection, environment mapping, and path planning to autonomously score a goal by pushing a ball between two posts while avoiding defenders.
        </p>
        <p className='innerDesc' style={{textAlign:"left"}}>
            The system is composed of modular ROS2 nodes, each responsible for a core function:
        </p>

        <ul className='listDesc' style={{textAlign:"left"}}>
            <li className='listDesc' style={{textAlign:"left"}}>A <strong>motor control node</strong> drives the robot’s wheels using open-loop commands.</li>
            <li className='listDesc' style={{textAlign:"left"}}>An <strong>ArUco detection node</strong> captures camera frames and detects AprilTag-like ArUco markers.</li>
            <li className='listDesc' style={{textAlign:"left"}}>A <strong>path planning node</strong> interprets the tag positions and computes a trajectory using RRT*.</li>
        </ul>

        <p className='innerDesc' style={{textAlign:"left"}}>
            The robot used is based on the NVIDIA JetBot development kit, modified to use a standard Logitech webcam for improved image quality. Objects in the environment—including defenders, goal posts, and the ball—are marked with ArUco tags, which function similarly to AprilTags. Using a ROS2 ArUco node, the robot receives tag IDs and relative position/orientation data (in quaternion form) for each detected tag. With calibration, this data is converted into absolute positions relative to the robot’s frame of reference.
        </p>
        <p className='innerDesc' style={{textAlign:"left"}}>
            Once the environment is mapped, the robot calculates the midpoint between the two goal posts and evaluates the ball's position relative to this line. The objective is to navigate around the defenders to push the ball along a straight path through the goal.
        </p>
        <p className='innerDesc' style={{textAlign:"left"}}>
            To plan its motion, the robot uses the RRT* (Rapidly-exploring Random Tree Star) algorithm. Unlike A*, which expands locally, RRT* samples random points throughout the entire environment. From the nearest existing node in the path tree, a new point is extended toward the sample, but only a fixed maximum step size is added—encouraging outward exploration. If a proposed step passes too close to a defender, it’s discarded. The process continues until a node reaches within a minimum distance of the goal, at which point the algorithm connects to the goal and backtracks the full path.
        </p>
        <p className='innerDesc' style={{textAlign:"left"}}>
            A post-processing step simplifies the trajectory by checking whether a direct line between non-adjacent path nodes can be safely made without intersecting an obstacle. If so, intermediate nodes are removed. This significantly reduces the number of control points the robot needs to process, which improves performance—especially important for the JetBot’s low-fidelity, open-loop wheel control system, which can drift from intended paths.
        </p>
        <p className='innerDesc' style={{textAlign:"left"}}>
            Once the robot reaches the target position and orientation behind the ball, it drives forward to push the ball through the goal. This system worked reliably and served as an effective study of perception-driven path planning in constrained environments.
        </p>

        <a className='linkDesc' style={{color:"cyan", backgroundColor:"rgb(100, 100, 100)", padding:"0.4vh", borderRadius:"2vw"}} href="https://github.com/DyllonDunton1/Smooth_Soccer">Find the source code for this project at our GitHub!</a>
       
      </div>
    </div>
  )
}



export default RoboSoccer
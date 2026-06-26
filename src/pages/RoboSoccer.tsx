import '../styles/RoboSoccer.css'
import ProjectNavbar from '../components/ProjectNavbar'

const mediaStyle = {
  border: '0.2rem solid gray',
  borderRadius: '0.5rem',
  width: '100%',
  textAlign: 'center' as const,
}

const tableCellStyle = {
  border: '0.15rem solid black',
  padding: '0.6rem',
}

const tableHeaderStyle = {
  ...tableCellStyle,
  fontWeight: 700,
  backgroundColor: '#f3f3f3',
}

const mediaContainerStyle = {
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'flex-start',
  alignItems: 'center',
}

const RoboSoccer = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div style={mediaContainerStyle}>
          <img src='/robosoccer/robosoccer.gif' style={mediaStyle} alt='JetBot robot soccer demo'></img>
        </div>
        <br /><br />

        <h1 className='title'>JetBot Soccer: ROS 2 Perception and RRT-Smooth Path Planning</h1>
        <p className='subtitle'>Autonomous tabletop robot pipeline using ArUco tag detection, robot-relative mapping, RRT path planning, path smoothing, and open-loop JetBot execution</p>
        <p className='subtitle'>University of Maine ECE 598 — Mobile Robotics / Robot Soccer Project</p>

        <div className='desc'>
          <h2>Project Overview</h2>
          <br />
          <p>
            This project explored perception-driven path planning for a small mobile robot in a tabletop soccer-style environment. The robot’s task was to identify tagged obstacles, locate the ball and goal posts, calculate a useful shooting position, and plan a collision-free path through the environment.
          </p>
          <br />
          <p>
            The core idea was to use a faster RRT-style planner to quickly find a valid path, then smooth that path afterward so it could be executed more reliably by a real JetBot. This mattered because a raw RRT path often contains many sharp turns, and small differential-drive robots with open-loop wheel control can accumulate significant error during repeated turning.
          </p>
          <br />
          <p>
            The final system combined camera-based ArUco tag detection, robot-relative object localization, continuous-space path planning, path smoothing, matplotlib visualization, and robot command publication.
          </p>
          <br /><br />

          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <table style={{borderCollapse: 'collapse', textAlign: 'center', minWidth: '20rem'}}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Area</th>
                  <th style={tableHeaderStyle}>Summary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Platform</td>
                  <td style={tableCellStyle}>NVIDIA JetBot-based mobile robot</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Task</td>
                  <td style={tableCellStyle}>Navigate around tagged defenders and approach a ball/goal objective</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Perception</td>
                  <td style={tableCellStyle}>Logitech C270 camera with ArUco tag detection</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>World Model</td>
                  <td style={tableCellStyle}>Obstacle, ball, and goal-post locations represented in robot-relative continuous space</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Planning</td>
                  <td style={tableCellStyle}>RRT path generation followed by smoothing/post-processing</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Path Optimization</td>
                  <td style={tableCellStyle}>Reduced jagged RRT paths into fewer execution waypoints</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Control</td>
                  <td style={tableCellStyle}>Open-loop wheel movement with tuned forward/turn multipliers</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Visualization</td>
                  <td style={tableCellStyle}>Matplotlib plot of obstacles, generated path, and final trajectory before execution</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>My Focus</td>
                  <td style={tableCellStyle}>Pathing module, RRT-smooth implementation, and movement-standardization helpers</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Result</td>
                  <td style={tableCellStyle}>Functional perception-to-planning demo that reduced path complexity for real robot execution</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br /><br />

          <h2>My Contribution</h2>
          <br />
          <p>
            My main contribution was the pathing side of the project. I implemented the RRT-style path planner, post-processing/smoothing logic, and helper modules for standardizing robot movement.
          </p>
          <br />
          <p>
            The path planner used ArUco-derived object positions to build a continuous map of the tabletop environment. It represented defenders as obstacles, identified the ball and goal posts, calculated the final pose needed to shoot through the goal, and generated a path from the robot’s current position to that target.
          </p>
          <br />
          <p>
            I also worked on the practical execution problem: getting a JetBot to follow planned movements consistently enough for the planning algorithm to matter. Because the robot turned differently depending on the surface, I built movement-standardization modules that let me tune forward and turning multipliers, then reuse those calibrated values in the main pathing module.
          </p>
          <br /><br />

          <h2>System Architecture</h2>
          <br />
          <p>
            The system is best understood as a compact autonomy pipeline: camera input feeds ArUco detection, detected tags become a robot-relative world model, the planner selects a target pose near the ball and goal, RRT generates a valid route, smoothing removes unnecessary waypoints, and the final path is previewed before commands are sent to the JetBot.
          </p>
          <br />
          <div style={mediaContainerStyle}>
            <img src='/robosoccer/robosoccer_autonomy_flow.svg' style={mediaStyle} alt='RoboSoccer autonomy flow diagram'></img>
          </div>
          <br />
          <p>
            This structure made the project more than a standalone planning algorithm. The planner operated on perception-derived object positions, generated a route through a physical environment, previewed that route for the operator, and then sent motion commands for the robot to execute.
          </p>
          <br /><br />

          <h2>ArUco Perception and World Modeling</h2>
          <br />
          <p>
            The robot used a Logitech C270 webcam to detect ArUco tags placed on objects in the environment. These tags represented defenders, the ball, and the goal posts. The detected tag positions were used to build a robot-relative map of the tabletop field.
          </p>
          <br />
          <div style={mediaContainerStyle}>
            <img src='/robosoccer/robosoccer.png' style={{...mediaStyle, maxWidth: '85%'}} alt='Robot soccer tabletop layout and planned path'></img>
          </div>
          <br />
          <p>
            This simplified the perception problem while still preserving the important robotics challenge: converting camera detections into a spatial representation that a planner can use. Instead of manually defining the course, the robot could infer obstacle and target positions from visual markers.
          </p>
          <br /><br />

          <h2>Target Pose Selection</h2>
          <br />
          <p>
            The robot did not simply plan to the ball. It needed to calculate a useful final position for kicking or pushing the ball through the goal. That required using the ball and goal-post locations to choose a target pose behind the ball, aligned with the direction of the goal.
          </p>
          <br />
          <p>
            This made the planning problem more interesting than driving to a point. The planner had to route around obstacles while ending at a pose that was useful for the task objective.
          </p>
          <br /><br />

          <h2>RRT Path Planning</h2>
          <br />
          <p>
            RRT was used because it can quickly find a path in a continuous state space. The planner randomly samples candidate points, extends a tree through free space, rejects invalid segments that collide with obstacles, and eventually connects a route from the robot to the target pose.
          </p>
          <br />
          <p>
            The tradeoff is that raw RRT paths are usually jagged. They often contain too many intermediate nodes, sharp turns, and unnecessary detours. That is acceptable for finding a valid path quickly, but it is not ideal for a small physical robot with imperfect open-loop movement.
          </p>
          <br /><br />

          <h2>Path Smoothing for Real Robot Execution</h2>
          <br />
          <p>
            The most important engineering step was the smoothing pass after the initial RRT path was found. The smoothing algorithm checked whether later path nodes could connect directly back toward earlier nodes without intersecting obstacles. If a straight segment was valid, the unnecessary intermediate points were removed.
          </p>
          <br />
          <p>
            In testing, this reduced paths from more than 30 points to around 3 points. That matters because every extra point usually requires another turn, and every turn is an opportunity for error on a JetBot. Reducing the number of turns made the path much more realistic for the hardware to execute.
          </p>
          <br />
          <p>
            This is the strongest robotics lesson from the project: a planner that looks good in software is not automatically good for a real robot. The path has to be shaped around the limitations of the platform.
          </p>
          <br /><br />

          <h2>Movement Standardization</h2>
          <br />
          <p>
            A major practical challenge was that the JetBot did not turn exactly the same way on every surface. Small differences in friction changed how far the robot rotated for the same motor command. This made open-loop execution difficult.
          </p>
          <br />
          <p>
            To manage this, I created helper modules for standardizing movement. These modules allowed me to tune forward and turning multipliers, then copy those values into the main pathing module. This did not make the robot perfectly accurate, but it made the system much more controllable and repeatable during testing.
          </p>
          <br /><br />

          <h2>Results</h2>
          <br />
          <p>
            The project completed the planned objectives: visual tag information was converted into a robot-relative world model, a target pose was calculated, an RRT path was generated, the path was smoothed, and the final path could be previewed before execution.
          </p>
          <br />
          <p>
            The most useful result was the path simplification. Reducing a path from 30+ waypoints to roughly 3 waypoints created a much more realistic command sequence for the JetBot. The system demonstrated an end-to-end robotics workflow: perception, mapping, planning, smoothing, visualization, and physical execution constraints.
          </p>
          <br /><br />

          <h2>Limitations</h2>
          <br />
          <p>
            The main limitation was open-loop movement accuracy. The robot’s turning behavior changed with surface conditions, so movement commands required manual tuning. A stronger future version would use wheel encoders, visual servoing, or closed-loop localization to correct motion while executing the path.
          </p>
          <br />
          <p>
            The ArUco setup also simplified the perception problem. It was useful for focusing on planning and control, but a more advanced robot soccer system would need to handle untagged objects, moving opponents, and continuous tracking under occlusion.
          </p>
          <br /><br />

          <h2>Why It Matters</h2>
          <br />
          <p>
            This project is useful for robotics engineering because it shows the connection between planning algorithms and physical robot constraints. The goal was not just to implement RRT, but to make the generated path practical for a real mobile robot.
          </p>
          <br />
          <p>
            The project demonstrates a complete autonomy chain: camera perception, world modeling, target selection, path planning, path smoothing, and movement execution. It also shows an important engineering habit: adapting the software output to the limitations of the hardware instead of assuming the robot can perfectly follow any planned path.
          </p>
          <br /><br />

          <h2>Technologies Used</h2>
          <br />
          <p>
            ROS 2, Python, JetBot, Logitech C270 webcam, ArUco markers, RRT path planning, path smoothing, matplotlib, mobile robotics, and open-loop differential-drive control.
          </p>
          <br /><br />

          <a className='linkDesc linker' href='https://github.com/DyllonDunton1/Smooth_Soccer'>Find the source code for this project at our GitHub!</a>
        </div>
      </div>
    </div>
  )
}

export default RoboSoccer

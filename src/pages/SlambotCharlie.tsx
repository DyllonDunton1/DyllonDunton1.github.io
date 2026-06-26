import '../styles/Windmill.css'
import ProjectNavbar from '../components/ProjectNavbar'

const mediaStyle = {
  border: '0.2rem solid gray',
  borderRadius: '0.5rem',
  width: '100%',
  textAlign: 'center' as const,
}

const captionStyle = {
  fontSize: '0.85rem',
  color: 'black',
  marginTop: '0.35rem',
  textAlign: 'right' as const,
  width: '100%',
}

const tableCellStyle = {
  border: '0.15rem solid black',
  padding: '0.6rem',
}

const SlambotCharlie = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
          <img src='/slambot_charlie/charlie_motion.gif' style={mediaStyle} alt='Slambot Charlie driving during a motion test'></img>
          <p style={captionStyle}>Motion showcase GIF shown at 4x speed.</p>
        </div>
        <br /><br />

        <h1 className='title'>Slambot Charlie: ROS 2 SLAM Robot with Web Dashboard</h1>
        <p className='subtitle'>Raspberry Pi + Teensy mobile robot for LiDAR mapping, closed-loop wheel odometry, camera streaming, and field testing through a custom web dashboard</p>

        <div className='desc'>
          <p>
            This project is a personal robotics platform built to test practical SLAM and embedded control on real hardware. Charlie uses a Raspberry Pi 4B for the high-level ROS 2 stack, including LiDAR, camera, mapping, dashboard, and robot bringup. A Teensy 4.1 handles the lower-level motor control, encoder feedback, and serial communication. The final system can drive under closed-loop wheel control, stream a live camera feed, build maps with SLAM Toolbox, expose debug data, and support field testing through a custom browser dashboard.
          </p>
          <br />

          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <table style={{borderCollapse: 'collapse', textAlign: 'center', minWidth: '20rem'}}>
              <thead>
                <tr>
                  <th style={tableCellStyle}>Area</th>
                  <th style={tableCellStyle}>Summary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Platform</td>
                  <td style={tableCellStyle}>ROS 2 Humble differential-drive SLAM robot built as a working physical prototype.</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Main Computer</td>
                  <td style={tableCellStyle}>Raspberry Pi 4B running ROS 2, LiDAR/camera drivers, mapping, dashboard, and high-level control.</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Microcontroller</td>
                  <td style={tableCellStyle}>Teensy 4.1 handling low-level stepper motor control, encoder feedback, and serial communication.</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Software Stack</td>
                  <td style={tableCellStyle}>C++ ROS 2 base driver, PlatformIO/Arduino firmware, Python/FastAPI backend, and browser-based dashboard.</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Motor Control</td>
                  <td style={tableCellStyle}>Closed-loop stepper wheel-speed control using AS5600-style encoder feedback and runtime tuning.</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Sensors</td>
                  <td style={tableCellStyle}>ROBOTIS LiDAR, Logitech C270 USB camera, AS5600-style wheel encoders, and planned SparkFun ICM-20948 IMU.</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Mapping / Localization</td>
                  <td style={tableCellStyle}>SLAM Toolbox currently builds maps from LiDAR, wheel odometry, and TF; IMU/EKF fusion is the next localization milestone.</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Operator Interface</td>
                  <td style={tableCellStyle}>Custom dashboard for teleop, live map, camera feed, pose marker, tuning, debug/status data, and SLAM checkpoint save/load.</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Field Test Result</td>
                  <td style={tableCellStyle}>A second-floor loop-building trial produced a useful baseline map, with visible yaw drift causing a start/end mismatch.</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Current Status</td>
                  <td style={tableCellStyle}>Working prototype ready for IMU gyro integration, robot_localization EKF, and repeat loop-mapping validation.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br /><br />

          <h2>System Architecture</h2>
          <br />
          <p>
            Charlie is split into two main control layers. The Raspberry Pi runs ROS 2, mapping, camera/LiDAR drivers, and the dashboard. The Teensy handles timing-sensitive stepper motor control and reads the wheel encoders. This keeps the real-time motor work on the microcontroller while leaving mapping, visualization, and higher-level robot logic on the Raspberry Pi.
          </p>
          <br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/slambot_charlie/charlie_hardware_diagram.png' style={mediaStyle} alt='Hardware architecture flowchart for Slambot Charlie'></img>
          </div>
          <br /><br />
          <p>
            The software stack connects the dashboard, ROS 2 base driver, Teensy firmware, LiDAR, camera, robot description, and SLAM Toolbox. The dashboard publishes velocity commands, the C++ base driver converts those commands into left and right wheel targets, and the Teensy returns odometry and debug data back to ROS 2.
          </p>
          <br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/slambot_charlie/charlie_software_diagram.png' style={mediaStyle} alt='Software architecture flowchart for Slambot Charlie'></img>
          </div>
          <br /><br />

          <h2>Closed-Loop Wheel Control</h2>
          <br />
          <p>
            The robot uses stepper motors with AS5600-style encoder feedback. The Raspberry Pi sends wheel-speed targets over serial, and the Teensy closes the wheel-speed loop locally. Runtime tuning was added so wheel radius, wheel separation, and controller values could be adjusted from the dashboard without reflashing the firmware every time.
          </p>
          <br />
          <p>
            This made calibration much more practical during testing. Instead of treating motion tuning as a separate bench task, I could drive the robot, observe odometry and map behavior, adjust the parameters, and immediately test again.
          </p>
          <br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/slambot_charlie/charlie_aerial_view.jpg' style={mediaStyle} alt='Aerial view of Slambot Charlie hardware layout'></img>
          </div>
          <br /><br />

          <h2>Web Dashboard</h2>
          <br />
          <p>
            A major part of this project is the custom web dashboard. I wanted Charlie to be testable outside of RViz, so the dashboard became the main field interface for driving, viewing sensor feedback, tuning, and checkpointing.
          </p>
          <br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/slambot_charlie/charlie_dashboard.png' style={mediaStyle} alt='Slambot Charlie web dashboard showing map, camera feed, controls, and status'></img>
          </div>
          <br />
          <p>
            The dashboard includes teleoperation controls, a live camera feed, live map display, robot pose marker, runtime tuning, debug/status data, and SLAM Toolbox checkpoint save/load. This made hallway testing much easier because the controls, camera, map, and robot feedback were all visible in one browser window.
          </p>
          <br /><br />

          <h2>Field Mapping Trial</h2>
          <br />
          <p>
            The main field test was a second-floor loop-shaped building trial. Charlie was driven through the hallway loop while SLAM Toolbox built a map from LiDAR data, wheel odometry, and TF. The trial confirmed that the system worked end-to-end: the robot drove, streamed sensor data, updated the dashboard, and produced a usable baseline map in a real indoor environment.
          </p>
          <br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <video controls muted playsInline style={mediaStyle}>
              <source src='/slambot_charlie/charlie_map_barrows_no_audio.mp4' type='video/mp4' />
            </video>
            <p style={captionStyle}>Field mapping trial video shown at 64x speed.</p>
          </div>
          <br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/slambot_charlie/charlie_barrows_map.png' style={mediaStyle} alt='Final SLAM map from the second-floor loop mapping trial'></img>
          </div>
          <br />
          <p>
            The map also showed the current localization limitation. The start and end of the loop did not meet cleanly because wheel odometry accumulated yaw drift over the course of the run.
          </p>
          <br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/slambot_charlie/charlie_barrows_map_drift.png' style={mediaStyle} alt='Annotated SLAM map showing yaw drift between the beginning and end of the loop'></img>
          </div>
          <br />
          <p>
            The red boxes show the same room appearing at the beginning and end of the loop. Since the two copies do not line up, this gives a clear visual example of the yaw drift. I treat this as a useful baseline result: the robot worked as a complete mapping system, and the remaining localization problem became obvious.
          </p>
          <br /><br />

          <h2>Mapping Observations and Next Step</h2>
          <br />
          <p>
            The current best mapping behavior came from relying mostly on wheel odometry and LiDAR without aggressive scan matching. In flat hallway-like environments, scan matching could over-correct the pose and make yaw behavior worse. For now, scan matching is disabled until the robot has better fused localization.
          </p>
          <br />
          <p>
            The next milestone is to integrate the SparkFun ICM-20948 IMU and fuse gyro yaw-rate with wheel odometry using <code>robot_localization</code>. Once that is working, the base driver will publish <code>/wheel/odom</code>, and the EKF will own the <code>odom -&gt; base_link</code> transform. I plan to repeat the same loop-building trial afterward so I can compare map closure before and after IMU/EKF fusion.
          </p>
          <br /><br />

          <h2>Results</h2>
          <br />
          <p>
            Charlie is currently a working SLAM robot prototype. The base platform, closed-loop motor control, ROS 2 base driver, LiDAR, camera, dashboard, TF tree, SLAM Toolbox mapping, and checkpoint workflow are all working.
          </p>
          <br />
          <p>
            The main limitation is yaw drift over longer loop-shaped mapping runs. That limitation is now the next engineering target rather than a vague problem: add IMU data, fuse it with wheel odometry, and rerun the same field test.
          </p>
          <br />
          <a className='linkDesc linker' href='https://github.com/DyllonDunton1/Slambot_Charlie'>Find the source code for this project here!</a>
        </div>
      </div>
    </div>
  )
}

export default SlambotCharlie

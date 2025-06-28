import '../styles/RoboComs.css'
import ProjectNavbar from '../components/ProjectNavbar'

const RoboComs = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div className='ImageBanner'>
            <div className='BannerPic'>
                <img src='/robocoms.gif' className='img'></img>
            </div>
            <div className='BannerPic'>
                <img src='/com_motors.gif' className='img'></img>
            </div>
        </div>

        <h1 className='title'>Robot Communication for Umaine Black Bear Robotics Club (Completed with Help from <a style={{color:"cyan", backgroundColor:"rgb(100, 100, 100)", padding:"0.4vh", borderRadius:"2vw"}} href="https://www.linkedin.com/in/jacob-wildes-88923b246/">Jacob Wildes</a>)</h1>

        <p className='innerDesc' style={{textAlign:"left"}}>
            This project was the software communication backbone for the <strong>University of Maine Black Bear Robotics</strong> entry in the 
            <strong> 2023 NASA Lunabotics Competition</strong>. Designed to control and monitor the team’s lunar excavation robot, this system is
            still actively in use and easily adaptable for future robots with minimal configuration.
        </p>
        <p className='innerDesc' style={{textAlign:"left"}}>
            The software is built on <strong>ROS2 Foxy</strong>, running across a <strong>wireless network between a Raspberry Pi 4B onboard the robot and a
            laptop base station</strong>. It provides a seamless communication pipeline between the user and robot using ROS2 nodes and serial communication.
        </p>

        <ul className='listDesc' style={{textAlign:"left"}}>
            <li className='listDesc' style={{textAlign:"left"}}><strong>Real-Time Control via Keyboard</strong>: Drive the robot with arrow keys, and use hotkeys to trigger auger spin, dumping, and more.</li>
            <li className='listDesc' style={{textAlign:"left"}}><strong>Live Dual-Camera Feeds</strong>: Real-time, low-latency video streaming from front and rear cameras to the laptop.</li>
            <li className='listDesc' style={{textAlign:"left"}}><strong>Diagnostic Interface</strong>: See motor encoder values, sensor readings, and system status in real time.</li>
            <li className='listDesc' style={{textAlign:"left"}}><strong>Hardware Integration</strong>: Raspberry Pi communicates via serial to an Arduino, which controls all motors using PWM signals.</li>
            <li className='listDesc' style={{textAlign:"left"}}><strong>Reusable Framework</strong>: Designed for easy reuse on future robots with minimal reconfiguration.</li>
        </ul>

        <p className='desc' style={{textAlign:"left"}}>
            This system enabled smooth operation of the robot during all phases of development and competition, offering reliable teleoperation, diagnostics, and modularity.
        </p>

        <a className='linkDesc' style={{color:"cyan", backgroundColor:"rgb(100, 100, 100)", padding:"0.4vh", borderRadius:"2vw"}} href="https://github.com/DyllonDunton1/roboComs">Find the source code for this project at our GitHub!</a>

        <div className='ContentBanner'>
            <a href="https://www.instagram.com/blackbearrobotics/" className="tileBase">
                <div className="tileImgContainer">
                    <img src="/bbr_bot_2025.jpeg" className="tileImg"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Go see what the Umaine Black Bear Robotics Club is up to!</h2>
                </div>
            </a>
        </div>
        
        
      </div>
    </div>
  )
}



export default RoboComs
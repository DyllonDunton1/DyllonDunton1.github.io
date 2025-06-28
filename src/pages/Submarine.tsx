import '../styles/Submarine.css'
import ProjectNavbar from '../components/ProjectNavbar'

const Submarine = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div className='subImageBanner'>
            <div className='subBannerPic'>
                <img src='/sub_photos.png' className='subimg'></img>
            </div>
            <div className='subBannerPic'>
                <img src='/controller_photos.png' className='subimg'></img>
            </div>
        </div>

        <h1 className='title'>Submarine Capstone (Completed With <a style={{color:"cyan", backgroundColor:"rgb(100, 100, 100)", padding:"0.4vh", borderRadius:"2vw"}} href="https://www.linkedin.com/in/jacob-wildes-88923b246/">Jacob Wildes</a>)</h1>

        <p className='desc'>
            The Autonomous Submarine project is my senior engineering capstone that I completed with my best friend Jacob Wildes. The project features both a submarine and a control station. The submarine (completed by me) receives ROS2 commands from the controller and sends data to the controller over ethernet on a Raspberry PI 4B (RPI). It relays the information to an STM32 L-series microcontroller, which is connected to a custom PCB with motor drivers for controlling both propellors, the stepper motor driven balast tanks, and the 2D servo driven camera gimbal. There is also an onboard IMU that is used to determine how to adjust balast tanks levels to level out the submarine. The submarine is currently not submersible since the capstone judges discouraged spending time on the structural aspects of the project. 

            The controller, designed by Jacob Wildes, features a custom battery pack and GUI for displaying all data from the submarine including the camera feed, diagnostics, balast tank levels, IMU readings, and batery levels of both the submarin and controller. The controller also has controls for propelling the submarine and moving the camera using two 2D joysticks.

            Both the submarine and controller have their own custom built rechargable battery packs designed by the team. 

            Jacob Wildes also completed his <a style={{color:"cyan", backgroundColor:"rgb(100, 100, 100)", padding:"0.4vh", borderRadius:"2vw"}} href='https://digitalcommons.library.umaine.edu/honors/862/'>Honor's thesis</a>, which is an extension of this project based on using the submarine to detect fish in Maine lakes for the purpose of recording population levels.

            The reason this project is ongoing, is because both of us hold the submarine dear to our hearts and want to build a submersible shell for the submarine and test it. We would also like to do work to make it autonomously pilot itself on a predetermined path, in addition to several tweaks and optimizations.
        </p>

        <a className='desc' style={{color:"cyan", backgroundColor:"rgb(100, 100, 100)", padding:"0.4vh", borderRadius:"2vw"}} href="https://github.com/jacobcwildes/Submarine_Capstone">Find the source code for this project at our GitHub!</a>

        <div className='ContentBanner'>
            <a href="/Capstone_Final.pdf" className="tileBase" download>
                <div className="tileImgContainer">
                    <img src="/capstone_paper.png" className="tileImg"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Submarine Capstone Final Paper</h2>
                </div>
            </a>

            <a href="/capstone_presi.pdf" className="tileBase" download>
                <div className="tileImgContainer">
                    <img src="/capstone_presi.png" className="tileImg"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Submarine Capstone Final Presentation</h2>
                </div>
            </a>
        </div>
        
        
      </div>
    </div>
  )
}



export default Submarine
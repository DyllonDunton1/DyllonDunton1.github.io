import '../styles/Submarine.css'
import ProjectNavbar from '../components/ProjectNavbar'

const Submarine = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div className='subImageBanner' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}>
            <div className='subBannerPic'>
                <img src='/sub_photos.png' className='subimg' style={{borderRadius: '0.2rem'}}></img>
            </div>
            <div className='subBannerPic'>
                <img src='/controller_photos.png' className='subimg' style={{borderRadius: '0.2rem'}}></img>
            </div>
        </div>

        <h1 className='title noBottomMargin'>Submersible Drone for Hull Inspection</h1>
        <p className='subtitle'>University of Maine – ECE Senior Capstone</p>


        <div className='desc'>
            Ship hull inspection is expensive, logistically complex, and often unsafe, typically requiring dry docking or human divers. Many commercial underwater vehicles are designed for deep or extreme environments and are therefore over-engineered and prohibitively expensive for shallow-water inspection tasks. This project aimed to address that gap by developing a purpose-built, tethered submersible optimized specifically for close-range visual inspection, prioritizing reliability, controllability, and deployment efficiency.
            <br /><br />
            I was responsible for the complete design and implementation of the <b>submarine system</b>, including embedded electronics, power distribution, sensing, motor control, and submarine-side software. The submarine receives commands over Ethernet via ROS2 on a Raspberry Pi 4B, interfaces with an STM32 microcontroller over USB, and actuates DC propellers, stepper-driven ballast tanks, and a 2-axis servo camera gimbal through custom motor-control firmware. I implemented closed-loop depth and roll stabilization using IMU and position feedback, validated performance through electrical measurement and bench testing, and designed and fabricated <b>all custom PCBs for both the submarine and controller</b>, including power regulation, motor drivers, and sensor interfaces.
            <br /><br />
            <b>Collaboration:</b> The controller hardware, operator interface, and controller-side software were designed and implemented by{" "}
            <a className='linker' href="https://www.linkedin.com/in/jacob-wildes-88923b246/">
                Jacob Wildes
            </a>
            , whose work complemented the submarine system by enabling robust operator control and data visualization.
        </div>


        <div className='ContentBanner'>
            
            <a href="https://github.com/jacobcwildes/Submarine_Capstone" className="tileBase" download>
                <div className="tileImgContainer">
                    <img src="/Github_Mark.png" className="tileImg"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Github Repository</h2>
                </div>
            </a>

            <a href="/Capstone_Final.pdf" className="tileBase" download>
                <div className="tileImgContainer portraitWhiteContainer">
                    <img src="/capstone_paper.png" className="tileImg portraitWhite"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Submarine Capstone Final Paper</h2>
                </div>
            </a>

            <a href="/capstone_presi.pdf" className="tileBase" download>
                <div className="tileImgContainer landscapeClearContainer">
                    <img src="/capstone_presi.png" className="tileImg landscapeClear"></img>
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
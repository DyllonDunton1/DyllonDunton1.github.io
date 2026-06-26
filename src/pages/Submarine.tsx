import '../styles/Submarine.css'
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

const Submarine = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>

        <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
          <img src='/submarine/pretty_submarine.png' style={mediaStyle} alt='Completed submersible drone'></img>
        </div>

        <br /><br />

        <h1 className='title noBottomMargin'>Submersible Drone for Hull Inspection</h1>
        <p>Embedded submersible ROV with custom submarine electronics, motor control, ROS2 communication, and live camera feedback</p>
        <p className='subtitle'>University of Maine ECE Senior Capstone — 2024</p>

        <div className='desc'>

          <h2>Project Overview</h2>
          <br />

          <p>
            This senior capstone project developed a tethered submersible ROV for close-range ship hull inspection.
            Ship hull inspection can be expensive, slow, and unsafe when it requires dry docking or human divers, so
            the goal was to build a lower-cost inspection platform that could be operated from shore.
          </p>

          <p>
            My focus was the submarine-side embedded system: power distribution, custom submarine PCB design,
            motor-driver integration, sensing interfaces, actuator wiring, and submarine-side control software.
            The controller/operator interface was handled by my project teammate, so this page focuses on the
            vehicle-side work I owned directly.
          </p>

          <br />

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
                  <td style={tableCellStyle}>Application</td>
                  <td style={tableCellStyle}>Ship hull and shallow-water visual inspection</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>System Type</td>
                  <td style={tableCellStyle}>Tethered submersible ROV</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>My Focus</td>
                  <td style={tableCellStyle}>Submarine-side electronics, power, sensing, motor control, and integration</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Processing</td>
                  <td style={tableCellStyle}>Raspberry Pi 4B and STM32 microcontroller</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Communication</td>
                  <td style={tableCellStyle}>ROS2 over Ethernet between shore-side and submarine-side systems</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Result</td>
                  <td style={tableCellStyle}>Working prototype with over one hour runtime and validated submarine-side electronics</td>
                </tr>
              </tbody>
            </table>
          </div>

          <br /><br />

          <h2>System Architecture</h2>
          <br />

          <p>
            The ROV was split into a shore-side controller subsystem and a submarine-side embedded subsystem. The
            submarine received commands over Ethernet, used onboard sensors for state feedback, and actuated the
            propellers, ballast tanks, and camera gimbal through embedded control hardware.
          </p>

          <p>
            ROS2 handled communication between the two Raspberry Pis, while the STM32 handled low-level timing and
            actuation for the submarine hardware.
          </p>

          <br />

          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/submarine/hardware_functional_block.png' style={mediaStyle} alt='Hardware functional block diagram for the submersible drone'></img>
          </div>

          <br />

          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/submarine/software_functional_block.png' style={mediaStyle} alt='Software functional block diagram for the submersible drone'></img>
          </div>

          <br /><br />

          <h2>Submarine-Side Electronics</h2>
          <br />

          <p>
            The submarine PCB acted as the central integration point for the vehicle. It organized the motor drivers,
            power rails, STM32 I/O, sensors, lighting, and subsystem connectors into a more reliable package than a
            breadboarded prototype.
          </p>

          <p>
            The board integrated DRV8841 dual H-bridge motor-driver ICs for the DC propeller motors and the stepper
            motors used in the ballast system. Modular headers made the vehicle easier to assemble, debug, and service
            during testing.
          </p>

          <br />

          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/submarine/submarine_pcb.png' style={{...mediaStyle, maxWidth: '75%'}} alt='Custom submarine PCB'></img>
          </div>

          <br />

          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/submarine/Submarine_Driver.png' style={{...mediaStyle, maxWidth: '75%'}} alt='Submarine motor driver schematic'></img>
          </div>

          <br /><br />

          <h2>Motor Control and Ballast System</h2>
          <br />

          <p>
            The submarine used DC propeller motors for forward motion and yaw, servo motors for the camera gimbal,
            and stepper motors for the ballast tank walls. The STM32 handled low-level actuation for each motor type.
          </p>

          <p>
            The ballast tanks were used for depth adjustment and roll control. Linear variable resistors measured the
            ballast tank wall positions, while IMU feedback supported roll and motion estimation.
          </p>

          <br />

          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/submarine/ballast.png' style={mediaStyle} alt='Ballast tank hardware'></img>
          </div>

          <br />

          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/submarine/roll_control_feedback_system.png' style={mediaStyle} alt='Roll control feedback system'></img>
          </div>

          <br /><br />

          <h2>Power and Testing</h2>
          <br />

          <p>
            The submarine power system used a 4S2P 18650 battery pack with regulated 12 V and 5 V rails for the motor
            and electronics subsystems. The design was validated through bench testing, oscilloscope measurements,
            load checks, and system-level operation.
          </p>

          <br />

          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <table style={{borderCollapse: 'collapse', textAlign: 'center', minWidth: '20rem'}}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Requirement / Test</th>
                  <th style={tableHeaderStyle}>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Deployment Time</td>
                  <td style={tableCellStyle}>Over 1 hour</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Recharge Time</td>
                  <td style={tableCellStyle}>Under 4 hours</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Camera Display Rate</td>
                  <td style={tableCellStyle}>15-20 FPS during testing</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Power Supply</td>
                  <td style={tableCellStyle}>12 V rail verified under load</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Communication</td>
                  <td style={tableCellStyle}>ROS2 communication over Ethernet</td>
                </tr>
              </tbody>
            </table>
          </div>

          <br />

          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/submarine/charge_plot.png' style={mediaStyle} alt='Submarine and controller charge time graph'></img>
          </div>

          <br /><br />

          <h2>What I Learned</h2>
          <br />

          <p>
            This project gave me hands-on experience taking a robotics system from requirements to a working prototype.
            My work combined embedded programming, PCB design, power electronics, motor control, sensor integration,
            ROS2 communication, and system-level debugging into one complete underwater platform.
          </p>

          <br /><br />

          <h2>Collaboration</h2>
          <br />

          <p>
            This project was completed with Jacob Wildes, who focused heavily on the controller hardware, operator
            interface, and controller-side software. My focus was the submarine platform, custom submarine PCB, power
            distribution, motor drivers, embedded control, and submarine-side integration.
          </p>

        </div>

        <div className='ContentBanner'>
            
          <a href="https://github.com/jacobcwildes/Submarine_Capstone" className="tileBase" download>
            <div className="tileImgContainer">
              <img src="/common/Github_Mark.png" className="tileImg" alt="GitHub logo"></img>
            </div>
            <div className="tileInfo">
              <h2 className="tileTitle">GitHub Repository</h2>
            </div>
          </a>

          <a href="/submarine/Capstone_Final.pdf" className="tileBase" download>
            <div className="tileImgContainer portraitWhiteContainer">
              <img src="/submarine/capstone_paper.png" className="tileImg portraitWhite" alt="Submarine capstone final paper preview"></img>
            </div>
            <div className="tileInfo">
              <h2 className="tileTitle">Submarine Capstone Final Paper</h2>
            </div>
          </a>

          <a href="/submarine/capstone_presi.pdf" className="tileBase" download>
            <div className="tileImgContainer landscapeClearContainer">
              <img src="/submarine/capstone_presi.png" className="tileImg landscapeClear" alt="Submarine capstone final presentation preview"></img>
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

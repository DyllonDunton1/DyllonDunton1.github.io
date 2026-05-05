import '../styles/Submarine.css'
import ProjectNavbar from '../components/ProjectNavbar'

const Submarine = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>

        <div className='subImageBanner' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}>
          <div className='subBannerPic'>
            <img src='/submarine/pretty_submarine.png' className='subimg' style={{borderRadius: '0.2rem'}} alt='Completed submersible drone'></img>
          </div>
          <div className='subBannerPic'>
            <img src='/submarine/controller_photo.png' className='subimg' style={{borderRadius: '0.2rem'}} alt='Handheld controller for the submersible drone'></img>
          </div>
        </div>

        <br /><br />

        <h1 className='title noBottomMargin'>Submersible Drone for Hull Inspection</h1>
        <p>Embedded submersible ROV with custom PCBs, motor control, ROS2 communication, and live camera feedback</p>
        <p className='subtitle'>University of Maine ECE Senior Capstone — 2024</p>

        <div className='desc'>

          <h2>Project Overview</h2>
          <br />

          <p>
            This senior capstone project developed a tethered submersible ROV for close-range ship hull inspection.
            Ship hull inspection can be expensive, slow, and unsafe when it requires dry docking or human divers, so
            the goal of this project was to build a lower-cost inspection platform that could be operated from shore.
          </p>

          <p>
            The final system consisted of two major subsystems: a shore-side controller and a submarine-side embedded
            platform. The controller allowed the operator to pilot the submarine, view a live camera feed, monitor
            system status, and save inspection images. The submarine received commands over Ethernet, estimated its
            state using onboard sensors, and actuated its propellers, ballast tanks, and camera gimbal.
          </p>

          <br />

          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <table style={{borderCollapse: 'collapse', textAlign: 'center', minWidth: '20rem'}}>
              <thead>
                <tr>
                  <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Area</th>
                  <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Summary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Application</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Ship hull and shallow-water visual inspection</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>System Type</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Tethered submersible ROV</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Communication</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>ROS2 over Ethernet using TCP and UDP</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Processing</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Raspberry Pi 4B and STM32 microcontrollers</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>My Main Focus</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Submarine system, custom PCBs, power, sensing, and motor control</td>
                </tr>
              </tbody>
            </table>
          </div>

          <br /><br />

          <h2>System Architecture</h2>
          <br />

          <p>
            The ROV was split into a controller subsystem and a submarine subsystem. The controller collected user
            input, displayed the live camera feed, showed operating data, and saved images when requested. The
            submarine handled onboard sensing, actuation, camera movement, ballast control, and low-level motor timing.
          </p>

          <p>
            ROS2 was used for communication between the two Raspberry Pis over Ethernet. TCP was used for control
            commands so that operator inputs were reliably delivered to the submarine. UDP was used for lower-latency
            data and camera updates where receiving old frames would be less useful than keeping the display current.
          </p>

          <br />

          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/submarine/hardware_functional_block.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}} alt='Hardware functional block diagram for the submersible drone'></img>
          </div>

          <br />

          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/submarine/software_functional_block_system.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}} alt='Software functional block diagram for the submersible drone'></img>
          </div>

          <br /><br />

          <h2>My Contribution</h2>
          <br />

          <p>
            My primary contribution was the submarine-side system and the custom electronics that supported the full
            build. I designed and implemented the submarine’s embedded hardware architecture, power distribution,
            motor-driver system, sensing interfaces, actuator wiring, and submarine-side control software.
          </p>

          <p>
            I also designed and fabricated the custom PCBs used in the project, including the submarine PCB and the
            controller PCB. The submarine PCB was the central integration point for the vehicle, tying together the
            motor drivers, power rails, STM32 I/O, sensors, lights, and subsystem connectors.
          </p>

          <br /><br />

          <h2>Custom PCB Design</h2>
          <br />

          <p>
            The project used custom PCBs to make the system more reliable, compact, and easier to assemble than a
            breadboarded or point-to-point wired prototype. The controller PCB organized the joysticks, button, switch,
            LED, and STM32 connections for the handheld controller. The submarine PCB was more complex and handled
            power distribution, motor-driver integration, sensor connections, lighting, and routing between the STM32
            and the rest of the submarine hardware.
          </p>

          <p>
            The submarine PCB integrated three DRV8841 dual H-bridge motor-driver ICs. These drivers controlled the
            two DC propeller motors and the two stepper motors used in the ballast system. The PCB also provided modular
            headers so components could be connected, removed, debugged, and replaced more cleanly during testing.
          </p>

          <br />

          <div className='subImageBanner' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}>
            <div className='subBannerPic'>
              <img src='/submarine/controller_pcb.png' className='subimg' style={{borderRadius: '0.2rem'}} alt='Custom controller PCB'></img>
            </div>
            <div className='subBannerPic'>
              <img src='/submarine/submarine_pcb.png' className='subimg' style={{borderRadius: '0.2rem'}} alt='Custom submarine PCB'></img>
            </div>
          </div>

          <br />

          <div className='subImageBanner' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}>
            <div className='subBannerPic'>
              <img src='/submarine/Submarine_Driver.png' className='subimg' style={{borderRadius: '0.2rem'}} alt='Submarine motor driver schematic'></img>
            </div>
            <div className='subBannerPic'>
              <img src='/submarine/Prop_Driver.png' className='subimg' style={{borderRadius: '0.2rem'}} alt='Propeller motor driver schematic'></img>
            </div>
          </div>

          <br /><br />

          <h2>Submarine Motors and Control</h2>
          <br />

          <p>
            The submarine used six motors in total. Two DC propeller motors controlled forward motion and yaw, two
            servo motors controlled the camera gimbal, and two stepper motors moved the ballast tank walls. The STM32
            microcontroller handled the low-level timing and actuation for each motor type.
          </p>

          <p>
            The ballast tanks were used for depth adjustment and roll control. Linear variable resistors measured the
            position of the ballast tank walls, while the IMU provided roll and motion feedback. These measurements
            were used to form closed-loop behavior for ballast position and roll stabilization.
          </p>

          <br />

          <div className='subImageBanner' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}>
            <div className='subBannerPic'>
              <img src='/submarine/camera_gimbal.png' className='subimg' style={{borderRadius: '0.2rem'}} alt='Camera gimbal hardware'></img>
            </div>
            <div className='subBannerPic'>
              <img src='/submarine/ballast.png' className='subimg' style={{borderRadius: '0.2rem'}} alt='Ballast tank hardware'></img>
            </div>
          </div>

          <br />

          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/submarine/roll_control_feedback_system.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}} alt='Roll control feedback system'></img>
          </div>

          <br /><br />

          <h2>Power System</h2>
          <br />

          <p>
            The submarine power system used a 4S2P 18650 battery pack with regulated power rails for the motor and
            electronics subsystems. The system provided a 12 V rail for the motors and a 5 V rail for the Raspberry Pi,
            camera, and supporting electronics. The power design was sized from the expected loads of the propellers,
            stepper motors, servos, lights, Raspberry Pi, STM32, camera, and IMU.
          </p>

          <p>
            The controller used its own rechargeable battery system and regulator so that the full ROV could operate
            without being tied to wall power during deployment.
          </p>

          <br />

          <div className='subImageBanner' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}>
            <div className='subBannerPic'>
              <img src='/submarine/twelve_volts_supply_voltage.png' className='subimg' style={{borderRadius: '0.2rem'}} alt='Measured 12 volt supply voltage'></img>
            </div>
            <div className='subBannerPic'>
              <img src='/submarine/hundred_mv_ripple.png' className='subimg' style={{borderRadius: '0.2rem'}} alt='Measured power supply ripple'></img>
            </div>
          </div>

          <br />

          <div className='subImageBanner' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}>
            <div className='subBannerPic'>
              <img src='/submarine/load_current.png' className='subimg' style={{borderRadius: '0.2rem'}} alt='Measured load current'></img>
            </div>
            <div className='subBannerPic'>
              <img src='/submarine/discharge_plot.png' className='subimg' style={{borderRadius: '0.2rem'}} alt='Submarine and controller discharge time graph'></img>
            </div>
          </div>

          <br /><br />

          <h2>Controller and Operator Interface</h2>
          <br />

          <p>
            The controller gave the operator a handheld interface for movement, camera control, depth control, and image
            capture. The live camera feed was displayed with operating data overlaid on top, including battery level,
            ballast tank position, heading, runtime, and error messages.
          </p>

          <p>
            Although my main focus was the submarine-side system, the controller was an important part of the complete
            capstone because it allowed the ROV to be operated as a full inspection platform rather than only as a bench
            prototype.
          </p>

          <br />

          <div className='subImageBanner' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}>
            <div className='subBannerPic'>
              <img src='/submarine/basic_gui.png' className='subimg' style={{borderRadius: '0.2rem'}} alt='Controller GUI under operating conditions'></img>
            </div>
            <div className='subBannerPic'>
              <img src='/submarine/controller_hardware.png' className='subimg' style={{borderRadius: '0.2rem'}} alt='Controller hardware'></img>
            </div>
          </div>

          <br /><br />

          <h2>Testing and Results</h2>
          <br />

          <p>
            The completed ROV met or exceeded the major capstone requirements. The submarine and controller both
            operated for over one hour, recharged in under four hours, displayed the camera feed at the required frame
            rate, and maintained the required 12 V power-supply performance under load.
          </p>

          <p>
            Bench testing verified the motor-driver circuits, PWM control signals, ballast actuation, controller
            interface, power supply behavior, camera display, and communication between the controller and submarine.
          </p>

          <br />

          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <table style={{borderCollapse: 'collapse', textAlign: 'center', minWidth: '20rem'}}>
              <thead>
                <tr>
                  <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Requirement / Test</th>
                  <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Deployment Time</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Over 1 hour</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Recharge Time</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Under 4 hours</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Camera Display Rate</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>15-20 FPS during testing</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Power Supply</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>12 V rail verified under load</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Communication</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>ROS2 communication over Ethernet</td>
                </tr>
              </tbody>
            </table>
          </div>

          <br />

          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/submarine/charge_plot.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}} alt='Submarine and controller charge time graph'></img>
          </div>

          <br /><br />

          <h2>What I Learned</h2>
          <br />

          <p>
            This project gave me hands-on experience taking a robotics system from requirements to a working prototype.
            My work combined embedded programming, PCB design, power electronics, motor control, sensor integration,
            ROS2 communication, and system-level debugging into one complete underwater platform.
          </p>

          <p>
            It was one of my first large projects where the electrical design, mechanical constraints, software
            architecture, and real-world testing all had to work together for the system to succeed.
          </p>

          <br /><br />

          <h2>Technologies Used</h2>
          <br />

          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <table style={{borderCollapse: 'collapse', textAlign: 'center', minWidth: '20rem'}}>
              <thead>
                <tr>
                  <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Category</th>
                  <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Tools / Components</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Embedded Systems</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>STM32, Raspberry Pi 4B, serial communication</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Robotics Software</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>ROS2, Python, C, OpenCV, Tkinter</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>PCB Design</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Altium Designer, custom controller PCB, custom submarine PCB</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Motor Control</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>PWM, GPIO control, DRV8841 dual H-bridges, DC motors, steppers, servos</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Power Electronics</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>18650 battery packs, BMS selection, 12 V and 5 V regulation</td>
                </tr>
                <tr>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Testing</td>
                  <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Oscilloscope measurements, load testing, motor-driver validation, bench testing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <br /><br />

          <h2>Collaboration</h2>
          <br />

          <p>
            This project was completed with Jacob Wildes, who focused heavily on the controller hardware, operator
            interface, and controller-side software. My focus was the submarine platform, custom PCBs, power
            distribution, motor drivers, embedded control, and submarine-side integration.
          </p>

        </div>

        <div className='ContentBanner'>
            
          <a href="https://github.com/jacobcwildes/Submarine_Capstone" className="tileBase" download>
            <div className="tileImgContainer">
              <img src="/Github_Mark.png" className="tileImg" alt="GitHub logo"></img>
            </div>
            <div className="tileInfo">
              <h2 className="tileTitle">Github Repository</h2>
            </div>
          </a>

          <a href="/Capstone_Final.pdf" className="tileBase" download>
            <div className="tileImgContainer portraitWhiteContainer">
              <img src="/capstone_paper.png" className="tileImg portraitWhite" alt="Submarine capstone final paper preview"></img>
            </div>
            <div className="tileInfo">
              <h2 className="tileTitle">Submarine Capstone Final Paper</h2>
            </div>
          </a>

          <a href="/capstone_presi.pdf" className="tileBase" download>
            <div className="tileImgContainer landscapeClearContainer">
              <img src="/capstone_presi.png" className="tileImg landscapeClear" alt="Submarine capstone final presentation preview"></img>
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
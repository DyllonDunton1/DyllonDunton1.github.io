import '../styles/Eskate.css'
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

const imagePairStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row' as const,
  gap: '1rem',
  justifyContent: 'center',
  alignItems: 'stretch',
  flexWrap: 'wrap' as const,
}

const pairedImageStyle = {
  ...mediaStyle,
  flex: '1 1 20rem',
  maxWidth: '48%',
  objectFit: 'cover' as const,
}

const Eskate = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div style={mediaContainerStyle}>
          <img src='/eskate/eskat_full_view.jpeg' style={mediaStyle} alt='Electric skateboard V2 full board view'></img>
        </div>
        <br /><br />

        <h1 className='title'>Electric Skateboard V2: High-Power Electromechanical Build</h1>
        <p className='subtitle'>Dual-motor belt-driven electric skateboard with sealed electronics packaging, 12s3p battery pack, anti-spark switching, embedded power routing, and serviceable 3D-printed hardware</p>

        <div className='desc'>
          <h2>Project Overview</h2>
          <br />
          <p>
            Eskate V2 is a ground-up electric skateboard rebuild focused on making the board faster, more durable, easier to charge, and more practical for real commuting. It is not an autonomy project, but it is a strong electromechanical hardware build: high-current battery power, motor control, drivetrain packaging, enclosure design, waterproofing, serviceability, and iteration from a rough first prototype into a real vehicle.
          </p>
          <br />
          <p>
            The project started with Eskate V1, a simple single-motor proof of concept with removable batteries and limited range. V2 reworked the design around a dual-motor belt drive, a sealed electronics enclosure, integrated charging, anti-spark switching, and cleaner high-current power routing hidden under the grip tape.
          </p>
          <br />
          <p>
            The current photos show the full V2 board, handheld controller, drivetrain/enclosure area, open electronics enclosure, and combined power switch / charge port. A motion GIF can be added later once outdoor riding footage is recorded.
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
                  <td style={tableCellStyle}>Project Type</td>
                  <td style={tableCellStyle}>Personal electromechanical hardware build</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Platform</td>
                  <td style={tableCellStyle}>Custom electric skateboard V2</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Drive System</td>
                  <td style={tableCellStyle}>Dual-motor belt-driven rear-wheel configuration</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Power System</td>
                  <td style={tableCellStyle}>12s3p battery pack with board-mounted charging port</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Control</td>
                  <td style={tableCellStyle}>2.4 GHz remote receiver sending PWM to a dual ESC</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Electrical Packaging</td>
                  <td style={tableCellStyle}>Anti-spark switch, ESC enclosure, receiver enclosure, and embedded copper-braid power routing</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Mechanical Packaging</td>
                  <td style={tableCellStyle}>3D-printed enclosure with TPU gasket, silicone sealing, rubber spray coating, and heat-set inserts</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Result</td>
                  <td style={tableCellStyle}>Real-world V2 board used for warm-weather commuting</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br /><br />

          <h2>Design Evolution: V1 to V2</h2>
          <br />
          <p>
            Eskate V1 was my first proof of concept. It used a single motor and two custom orange 3D-printed enclosures bolted to the deck: one for batteries and one for the ESC and battery meter. It worked, but the design had clear limitations. The batteries had to be removed for charging, the range was only about two miles, and the board was more of a functional prototype than a durable vehicle.
          </p>
          <br />
          <p>
            V2 was a full redesign rather than a small revision. The goal was to solve the problems from V1 by improving speed, range, power delivery, charging convenience, weather resistance, and maintainability. The result is a cleaner and more capable board that better reflects the kind of practical engineering tradeoffs needed for real hardware.
          </p>
          <br />
          <div style={mediaContainerStyle}>
            <img src='/eskate/eskate_controller.jpeg' style={{...mediaStyle, maxWidth: '75%'}} alt='Electric skateboard V2 handheld controller'></img>
          </div>
          <br /><br />

          <h2>Power and Drive System</h2>
          <br />
          <p>
            V2 uses a dual-motor, belt-driven configuration for both rear wheels. Compared with the single-motor V1 design, the dual-drive setup improves power delivery and makes the board feel much more capable under real riding conditions.
          </p>
          <br />
          <p>
            The battery pack is a 12s3p configuration, and the board charges through a mounted port instead of requiring battery removal. Power is routed to the ESC through embedded copper braids hidden under the grip tape, which keeps high-current wiring cleaner, reduces exposed cabling, and allows the deck to flex without a rigid external wire run.
          </p>
          <br />
          <div style={mediaContainerStyle}>
            <img src='/eskate/eskate_enclosure_drivetrain.jpeg' style={mediaStyle} alt='Electric skateboard V2 enclosure and drivetrain area'></img>
          </div>
          <br /><br />

          <h2>Electronics and Control</h2>
          <br />
          <p>
            A 2.4 GHz receiver pairs with the handheld remote and outputs a PWM signal to the dual ESC. The ESC then drives both motors with three-phase power. An anti-spark switch controls board activation, which is important for a high-power system where connecting or switching the battery can otherwise create harsh inrush behavior.
          </p>
          <br />
          <p>
            The board-mounted charge port and power switch make the system easier to use than V1, where the battery had to be removed for charging. That usability change was one of the major goals of the V2 rebuild.
          </p>
          <br />
          <div style={mediaContainerStyle}>
            <img src='/eskate/eskate_power_switch_and_charge_port.jpeg' style={{...mediaStyle, maxWidth: '85%'}} alt='Electric skateboard V2 power switch and charge port'></img>
          </div>
          <br />
          <p>
            The main engineering challenge was packaging the electronics in a way that was compact, serviceable, and protected from normal road exposure while still leaving access for maintenance and future repairs.
          </p>
          <br /><br />

          <h2>Mechanical Packaging and Weather Resistance</h2>
          <br />
          <p>
            The electronics are housed in a 3D-printed enclosure bolted to the board. The enclosure uses a TPU gasket and silicone sealing to improve water resistance, and both the lid and base are coated with rubber spray for additional protection. The lid is removable and fastened with heat-set metal inserts, which makes repeated service much more reliable than threading directly into plastic.
          </p>
          <br />
          <p>
            Cable exits are reinforced with brass bushings and protected with heat shrink to reduce wear and help prevent water ingress. These details are small, but they matter for hardware that is expected to survive vibration, road debris, flexing, moisture, and repeated handling.
          </p>
          <br />
          <div style={imagePairStyle}>
            <img src='/eskate/eskate_open_enclosure.jpeg' style={pairedImageStyle} alt='Electric skateboard V2 open electronics enclosure'></img>
            <img src='/eskate/eskate_v2_side.jpg' style={pairedImageStyle} alt='Electric skateboard V2 side profile'></img>
          </div>
          <br /><br />

          <h2>Real-World Use and Limitations</h2>
          <br />
          <p>
            V2 has been used as a real warm-weather commuting board. It is faster, smoother, easier to charge, and more practical than V1. The design is still a personal build rather than a commercial product, so future improvements would focus on cleaner documentation, more formal electrical protection notes, and updated ride footage showing the final hardware in use.
          </p>
          <br />
          <p>
            Because this is a high-power lithium battery and motor system, I am intentionally not adding unverified claims about protection hardware beyond what is already represented in the build. The page can be updated later with exact BMS, fuse, connector, and charging details if those are documented.
          </p>
          <br /><br />

          <h2>Why It Matters</h2>
          <br />
          <p>
            This project is relevant as a supporting hardware build because it demonstrates the kind of hands-on electromechanical work that also shows up in robotics: power distribution, motor control, packaging, sealed enclosures, serviceability, vibration resistance, and real-world iteration.
          </p>
          <br />
          <p>
            The strongest part of the project is the engineering progression from V1 to V2. V1 proved that the basic idea worked. V2 turned that idea into a more durable, usable, and maintainable system.
          </p>
          <br /><br />

          <h2>Technologies and Fabrication Used</h2>
          <br />
          <p>
            Electric skateboard drivetrain, dual ESC, 2.4 GHz remote receiver, PWM control signal, 12s3p battery pack, anti-spark switch, 3D-printed enclosure, TPU gasket, silicone sealing, heat-set inserts, brass bushings, heat shrink, embedded copper-braid power routing, and rubberized coating.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Eskate

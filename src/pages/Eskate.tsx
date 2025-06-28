import '../styles/Eskate.css'
import ProjectNavbar from '../components/ProjectNavbar'

const Eskate = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div className='ImageBanner'>
            <div className='BannerPic'>
                <img src='/eskate_v1.gif' className='img'></img>
            </div>
            <div className='BannerPic'>
                <picture>
                    <source className="img" media="(max-width: 1300px)" srcSet="/eskate_v2.jpg"/>
                    <source className="img" media="(min-width: 1301px)" srcSet="/eskate_v2_side.jpg"/>
                    <img className="img" src="large.jpg" alt="Responsive image"/>
                </picture>
            </div>
        </div>

        <h1 className='title'>Electric Skateboard V1 and V2</h1>

        <p className='desc' style={{textAlign:"left"}}>
            I’ve designed and built two electric skateboards from scratch — each iteration improving significantly in performance, durability, and design.
        </p>

        <h4 className='listDesc' style={{textAlign:"left"}}><strong>Eskate V1</strong> was my first prototype:</h4>
        <ul className='listDesc' style={{textAlign:"left"}}>
            <li className='listDesc' style={{textAlign:"left"}}>A simple single-motor board with two custom orange 3D-printed enclosures bolted to the deck.</li>
            <li className='listDesc' style={{textAlign:"left"}}>One enclosure housed the batteries, which had to be manually removed for charging.</li>
            <li className='listDesc' style={{textAlign:"left"}}>The other contained the electronic speed controller (ESC) and a battery level meter.</li>
            <li className='listDesc' style={{textAlign:"left"}}>The board had limited speed and a range of only about 2 miles, making it more of a proof of concept.</li>
        </ul>

        <h4 className='listDesc' style={{textAlign:"left"}}><strong>Eskate V2</strong> is a fully re-engineered version that solves V1’s limitations and adds robust new features:</h4>
        <ul className='listDesc' style={{textAlign:"left"}}>
            <li className='listDesc' style={{textAlign:"left"}}>It uses a dual-motor, belt-driven configuration for both rear wheels.</li>
            <li className='listDesc' style={{textAlign:"left"}}>A 3D-printed enclosure houses the 2.4 GHz receiver (paired to a remote) which outputs a PWM signal to the dual ESC. The ESC delivers three-phase power to both motors.</li>
            <li className='listDesc' style={{textAlign:"left"}}>An anti-spark switch controls board activation.</li>
            <li className='listDesc' style={{textAlign:"left"}}>The entire enclosure is bolted to the board and sealed using a TPU gasket and silicone to ensure water resistance. The lid is removable for easy maintenance and is attached using heat-set metal inserts for added strength.</li>
            <li className='listDesc' style={{textAlign:"left"}}>Both the lid and base are coated with rubber spray for extra waterproofing.</li>
            <li className='listDesc' style={{textAlign:"left"}}>Cable routes out of the enclosure are reinforced with brass bushings and protected with heat shrink to prevent water ingress.</li>
            <li className='listDesc' style={{textAlign:"left"}}>Power is routed to the ESC via embedded copper braids hidden under the grip tape — allowing for board flex and eliminating visible wiring.</li>
            <li className='listDesc' style={{textAlign:"left"}}>The battery is charged via a port, so there’s no need to remove it — a significant usability upgrade from V1.</li>
            <li className='listDesc' style={{textAlign:"left"}}>The battery pack is a 12s3p configuration that provides up to 25 mph of speed and a 12-mile range.</li>
        </ul>        
        
        <p className='desc' style={{textAlign:"left"}}>
            I currently commute on Eskate V2 during the warmer months. It’s fast, smooth, and built for real-world use — a huge leap from my first design.
        </p>

      </div>
    </div>
  )
}



export default Eskate
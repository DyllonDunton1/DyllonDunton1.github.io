import '../styles/CarRacing.css'
import ProjectNavbar from '../components/ProjectNavbar'

const CarRacing = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div className='ImageBanner'>
            <div className='BannerPic'>
                <img src='/car-racing.gif' className='img'></img>
            </div>
            <div className='BannerPic'>
                <img src='/cartpole.gif' className='img'></img>
            </div>
        </div>

        <h1 className='title'>Deep Reinforcement Learning Study with Car-Racing-V3</h1>

        <p className='desc' style={{textAlign:"left"}}>
            This project applies Deep Q-Networks (DQN) to the CarRacing-v3 environment to explore reinforcement learning in high-dimensional visual and continuous action spaces. I began by testing a DQN framework on CartPole, then extended it to CarRacing by discretizing the car’s throttle, brake, and steering into 24 discrete actions.
        </p>

        <p className='innerDesc' style={{textAlign:"left"}}>
            I built a custom reward-shaping system that encourages staying on the road, maintaining smooth velocity, and penalizes sharp or unnecessary turns. The agent uses image inputs and also receives auxiliary sensor data like orientation and velocity to support better decision-making.
        </p>

        <p className='innerDesc' style={{textAlign:"left"}}>
            To further improve driving performance, I implemented a truncated rollout planner. At every frame:
            the agent simulates all 24 actions for 40 steps using the trained DQN, evaluates which leads to the highest cumulative reward, and then executes that action — leading to dramatically improved stability and responsiveness.
        </p>

        <p  className='innerDesc' style={{textAlign:"left"}}>
            After initial training, I found that the model performed well on left turns but struggled on right turns due to the track’s default winding direction. To address this, I am currently enhancing training by randomly flipping the car’s orientation at episode start, effectively reversing the track direction. This helps the agent generalize better across all turning scenarios.
        </p>

        <h4 className='listDesc' style={{textAlign:"left"}}>Key Features</h4>
        <ul className='listDesc' style={{textAlign:"left"}}>
            <li className='listDesc' style={{textAlign:"left"}}>Deep Q-Network (DQN) with image inputs</li>
            <li className='listDesc' style={{textAlign:"left"}}>Discrete action mapping (24 combinations)</li>
            <li className='listDesc' style={{textAlign:"left"}}>Reward shaping for speed, road position, and smooth control</li>
            <li className='listDesc' style={{textAlign:"left"}}>Auxiliary state inputs: orientation, speed, steering angle</li>
            <li className='listDesc' style={{textAlign:"left"}}>Episode truncation on prolonged off-road behavior</li>
            <li className='listDesc' style={{textAlign:"left"}}><strong>Rollout planning</strong> with 40-step single-lookahead per action</li>
            <li className='listDesc' style={{textAlign:"left"}}><strong>Ongoing work:</strong> randomized car orientation to improve generalization</li>
        </ul>

        <a className='linkDesc' style={{color:"cyan", backgroundColor:"rgb(100, 100, 100)", padding:"0.4vh", borderRadius:"2vw"}} href="https://github.com/DyllonDunton1/Car-Racing-V3-DQN">Find the source code for this project at our GitHub!</a>
        
        
      </div>
    </div>
  )
}



export default CarRacing
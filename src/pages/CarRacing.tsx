import '../styles/Windmill.css'
import ProjectNavbar from '../components/ProjectNavbar'

const CarRacing = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
          <img src='/carracing/gifs/comparison.gif' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
        </div>
        <br /><br />

        <h1 className='title'>Deep Reinforcement Learning for Autonomous Driving</h1>
        <p className='subtitle'>Double-DQN with Rollout Planning in CarRacing-v3</p>

        <p className='desc'>
          This project is a study in dynamic programming, specifically with deep reinforcement learning. I chose to use an environment from OpenAI Gymnasium called CarRacingV3 for this project, since it has a sparse reward system and I happen to enjoy racing games. My solution for this environment is an implementation of a Double Deep Q-Network (Double DQN) system with a Dueling Head structure, programmed from scratch, with a focus on a stable driving behavior while maintaining a fast lap time. The final system integrates state conditioning, action discretization, reward shaping, and short-horizon rollout planning to produce stable driving behavior.
          <br /><br />

          <h2>State Space Conditioning</h2>
          <br />
          The CarRacingV3 environment provides 96x96 RGB images of car on the map as the state space. In order to give the model a sense of speed, A stack of the 4 most recent frames is used as the input to the agent’s brain. Each frame is converted to grayscale and cropped to a square of 80 pixels in length. Using this method, the channel dimension is no longer color, but time. This is used as an input to a Convolutional Neural Network (CNN), which converts the frames into an estimated future sum of rewards expected for all possible actions. This is accomplished through a dueling head structure. After a few convolutional layers, and flattening to a linear layer, two dueling heads are then constructed which are both fully connected to the flattened layer. The first is the Value Head, which quantifies the value of being in the current state. This is a single output. The next is the Advantage Head, which quantifies the advantage of taking each action from this state. The final layer is computed by subtracting the mean from all of the advantages, thereby normalizing them to zero, and adding in the output from the value head to each of them. This gives the Q-Value for each action.
          <br /><br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/carracing/imgs/q_network.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
          </div>
          <br /><br />

          <h2>Action Space Conditioning</h2>
          <br />
          The CarRacingV3 environment uses a continuous action space, allowing for full control of the throttle, steering, and braking. In order to use Q-learning, it was necessary to discretize the action space into a select few possible combinations of the three values. After testing, it was determined that only 9 combinations were needed. This allows the agent to perform complex trajectories while keeping the learning problem tractable.
          <br /><br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/carracing/imgs/action_space.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
          </div>
          <br /><br />

          <h2>Reward Shaping</h2>
          <br />
          The default reward signal in CarRacing is sparse and difficult for reinforcement learning algorithms to optimize, only giving a reward for each tile reached on the track, and a small penalty each frame to make sure the agent is attempting to find rewarding actions. To address this, I designed a custom reward shaping system that encourages stable progression through the track.
          <br /><br />
          The reward function includes:
          <br /><br />
          <ul>
            <li style={{marginLeft: '1rem'}}>Original forward progress reward for advancing along the track, gated by the checking if the car is fully on the road and not driving over the speed limit when a turn is visible</li>
            <li style={{marginLeft: '1rem'}}>Turn preparation reward for slowing down when a turn is coming up and speed is high</li>
            <li style={{marginLeft: '1rem'}}>Angular velocity stabilization reward for reducing angular velocity when at speed and angular velocity is too high</li>
            <li style={{marginLeft: '1rem'}}>Centerness reward for keeping centered on the track when no turn is visible</li>
            <li style={{marginLeft: '1rem'}}>Target speed reward for being close to a target speed limit when no turn is visible</li>
          </ul>
          <br />
          In order to implement these passive rewards, several new pieces of information were calculated. This includes whether or not the car is on or off the road, the centeredness of the vehicle on the road, and if there is a turn visible on the screen. These are all calculated by creating a luminosity map of the RGB image, and polling specific locations around the car, or casting rays from the car to find distance to road borders. These modifications significantly improved training stability and allowed the agent to learn effective driving policies.
          
          <br /><br />

          <h2>Rollout Planning</h2>
          <br />
          A key innovation in this project is the integration of a short-horizon rollout planner that can simulate possible future trajectories to more accurately simulate the reward-to-go for each possible action. At each timestep, 9 agents are spawned in that will each take one of the 9 possible actions. Then, each agent uses the learned policy from the Q-Net to simulate an additional amount of steps. This step amount was tuned later to find an optimal value. The reward sum is then compared across all 9 trajectories to determine the optimal action. In the result of a tie, the base policy is used to generate the Q-Net’s chosen action. If that action is amongst the rollout actions that are tied, that will break the tie. If not, the chosen action is simply the lowest index in the array of actions. This dramatically improves stability during driving and allows the agent to reach the end of the track more quickly. Testing across many combinations of lookahead lengths and speed limits, the optimal combination was found to be 20 steps at a speed limit of 95 units.
          <br /><br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/carracing/gifs/comparison.gif' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
          </div>
          <br /><br />
          <h2>Training Observations and Generalization</h2>
          <br />
          During early experiments, the agent became highly proficient at left turns but struggled with right turns. This was because the default CarRacing tracks tend to wind predominantly counter-clockwise. To improve generalization, I modified the training pipeline to randomly flip the vehicle orientation at the start of each episode, effectively reversing the track direction. This simple augmentation balanced the distribution of turning scenarios and improved performance across both directions.
          <br /><br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/carracing/gifs/flip_comparison.gif' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
          </div>
          <br /><br />

          <h2>Results</h2>
          <br />
          While training the model, both the reward for each episode and the tiles visited on the track were recorded in order to monitor progress. These are plotted below. After nearly 1200 episodes, the Q-Network started to learn from its accumulated experiences and slowly improved over a total of 12000 total episodes. Expectedly, the amount of tiles visited is roughly proportional to the episode reward. This shows that the primary driver of the reward system was in fact progression through the track, and that the passive rewards only helped the agent learn more optimal strategies.
          <br /><br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/carracing/plots/tiles_over_episodes.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
            <img src='/carracing/plots/reward_over_episodes.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
            <img src='/carracing/plots/rewards_and_tiles_over_episodes.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}}></img>
          </div>
          <br /><br />
          Finally, the base policy and rollout rewards are shown below. While the base policy is able to achieve an impressive score on its own, it is driving through the track sloppily. This leads it to cut corners from time to time, and manage its speed poorly, causing it to over-brake late in a turn, losing too much speed. The rollout of the base policy is seen breaking lightly just before a turn, to keep speed close to the maximum amount entering the turn. The rollout model also drives more accurate lines, which shortens the overall distance driven and allows for a higher speed through each turn while maintaining grip. These strategies are well known and used at the highest levels of professional racing. Seeing them emerge from training is a success for this environment.
          <br /><br />
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <table style={{borderCollapse: 'collapse', textAlign: 'center', minWidth: '20rem'}}>
                <thead>
                <tr>
                    <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Policy</th>
                    <th style={{border: '0.15rem solid black', padding: '0.6rem'}}>Score</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Base Policy</td>
                    <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>901</td>
                </tr>
                <tr>
                    <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>Rollout Policy</td>
                    <td style={{border: '0.15rem solid black', padding: '0.6rem'}}>923</td>
                </tr>
                </tbody>
            </table>
            </div>
          <br /><br />
          <a className='linkDesc linker' href='https://github.com/DyllonDunton1/Car-Racing-V3-DQN'>Find the source code for this project here!</a>
        </p>
      </div>
    </div>
  )
}

export default CarRacing
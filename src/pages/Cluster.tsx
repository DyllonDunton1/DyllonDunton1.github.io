import '../styles/Cluster.css'
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

const Cluster = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div style={mediaContainerStyle}>
          <img src='/cluster/cluster_photo.jpg' style={mediaStyle} alt='BeagleBone Black cluster hardware'></img>
        </div>
        <br /><br />

        <h1 className='title'>BeagleBone Black 8-Node Cluster: First Undergraduate Research Project</h1>
        <p className='subtitle'>Undergraduate research project comparing low-cost single-board computers for small-scale cluster computing</p>
        <p className='subtitle'>Maine Space Grant Consortium Research Project — University of Maine, 2023</p>

        <div className='desc'>
          <h2>Project Overview</h2>
          <br />
          <p>
            This project was my first formal research experience as an undergraduate. Supported by a Maine Space Grant Consortium award, I investigated whether low-cost single-board computers could be used as practical building blocks for small-scale cluster computing.
          </p>
          <br />
          <p>
            The project compared BeagleBone Black RevC boards against Raspberry Pi 4B boards across performance, power consumption, and cost-effectiveness. I assembled an 8-node BeagleBone Black cluster, ran benchmark tests, compared the results against a Raspberry Pi-based system, and presented the work at the 2023 University of Maine Student Symposium.
          </p>
          <br />
          <p>
            The project was early in my engineering path, but it was important because it introduced me to research workflow: defining a technical question, building a test platform, collecting measurements, interpreting tradeoffs, and communicating results through a report and poster.
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
                  <td style={tableCellStyle}>Undergraduate research</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Research Support</td>
                  <td style={tableCellStyle}>Maine Space Grant Consortium</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Platforms Studied</td>
                  <td style={tableCellStyle}>BeagleBone Black RevC and Raspberry Pi 4B</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Built System</td>
                  <td style={tableCellStyle}>8-node BeagleBone Black cluster</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Research Question</td>
                  <td style={tableCellStyle}>Whether low-cost single-board computers are practical for small cluster computing</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Evaluation Criteria</td>
                  <td style={tableCellStyle}>Performance, power efficiency, scalability, and cost-effectiveness</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Output</td>
                  <td style={tableCellStyle}>Final report and University of Maine Student Symposium poster</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Personal Significance</td>
                  <td style={tableCellStyle}>First research project and first experience presenting technical findings</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br /><br />

          <h2>My Contribution</h2>
          <br />
          <p>
            I assembled and configured the BeagleBone Black cluster, ran comparative tests, collected measurements, and analyzed how the BeagleBone Black and Raspberry Pi 4B platforms behaved when scaled into small multi-node systems.
          </p>
          <br />
          <p>
            The work required both hands-on setup and research-style comparison. I had to think about the cluster as a system instead of evaluating the boards as isolated devices: how much performance each platform offered, how much power it consumed, how cost scaled across multiple nodes, and whether the result made sense for lightweight distributed computing.
          </p>
          <br /><br />

          <h2>Research Motivation</h2>
          <br />
          <p>
            Low-cost single-board computers are attractive for education, experimentation, and small distributed systems because they are inexpensive, compact, and relatively easy to network. The research question was whether these advantages still held when the boards were scaled into a cluster.
          </p>
          <br />
          <p>
            The project compared two common embedded Linux platforms: the BeagleBone Black RevC and the Raspberry Pi 4B. The goal was not to build a production high-performance computer, but to understand the tradeoffs between cost, energy use, and compute capability in a small experimental cluster.
          </p>
          <br /><br />

          <h2>Cluster Setup and Testing</h2>
          <br />
          <p>
            The main hardware build was an 8-node BeagleBone Black cluster. I configured the nodes, set up the test environment, and ran benchmarks to evaluate performance and energy behavior.
          </p>
          <br />
          <p>
            The comparison focused on practical cluster characteristics: processing speed, power usage, scalability, and cost-effectiveness. These metrics helped show where the BeagleBone Black was useful and where the Raspberry Pi 4B offered stronger performance for the same kind of small-cluster workload.
          </p>
          <br /><br />

          <h2>Results and Lessons Learned</h2>
          <br />
          <p>
            The strongest outcome of this project was not just the benchmark result. It was the research process. This was the first project where I moved from building something that works toward building something to answer a technical question.
          </p>
          <br />
          <p>
            The project taught me how to compare hardware platforms, document assumptions, organize results, and present findings clearly. It also gave me early experience with Linux-based embedded systems, distributed computing concepts, and research communication.
          </p>
          <br /><br />

          <h2>Why It Matters</h2>
          <br />
          <p>
            This project is less directly tied to my current robotics and autonomy focus than my later work, but it was an important starting point. It helped build the foundation for later projects involving embedded Linux, Raspberry Pi systems, hardware/software integration, and research-driven engineering.
          </p>
          <br />
          <p>
            It also marks the beginning of my research path: from this undergraduate cluster-computing project to later robotics, AI, and graduate research work.
          </p>
          <br /><br />

          <h2>Technologies Used</h2>
          <br />
          <p>
            BeagleBone Black RevC, Raspberry Pi 4B, embedded Linux, multi-node cluster setup, benchmarking, power/performance comparison, technical report writing, and research poster presentation.
          </p>
        </div>

        <div className='ContentBanner'>
          <a href='/cluster/Dunton_MSGC_AY2023_Report.pdf' className='tileBase' download>
            <div className='tileImgContainer'>
              <img src='/cluster/cugr_paper_img.png' className='tileImg' alt='Cluster computer final report preview'></img>
            </div>
            <div className='tileInfo'>
              <h2 className='tileTitle'>Cluster Computer Final Report</h2>
            </div>
          </a>

          <a href='/cluster/Umaine_Symposium_Poster.png' className='tileBase' download>
            <div className='tileImgContainer'>
              <img src='/cluster/Umaine_Symposium_Poster.png' className='tileImg' alt='Cluster computer symposium poster preview'></img>
            </div>
            <div className='tileInfo'>
              <h2 className='tileTitle'>Cluster Computer Poster</h2>
            </div>
          </a>
        </div>        
        
      </div>
    </div>
  )
}



export default Cluster

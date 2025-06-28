import '../styles/Cluster.css'
import ProjectNavbar from '../components/ProjectNavbar'

const Cluster = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div className='ImageBanner'>
            <div className='BannerPic'>
                <img src='/cluster_photo.jpg' className='img'></img>
            </div>
        </div>

        <h1 className='title'>BeagleBone Black 8-Node Cluster Undergraduate Research</h1>

        <p  className='desc'>
          In April 2023, I conducted undergraduate research through a grant from the
          <strong> Maine Space Grant Consortium (MSGC)</strong>, evaluating the
          <strong> BeagleBone Black RevC (BBB)</strong> and the
          <strong> Raspberry Pi 4B (RPI4B)</strong> for basic cluster computing.
        </p>
        <p className='desc'>
          The research focused on comparing <strong> performance, power efficiency, and cost-effectiveness</strong>
          of each platform when scaled into multi-node systems. I assembled an
          <strong> 8-node BBB cluster</strong> and benchmarked it against a similarly sized RPI cluster.
        </p>
        <p className='desc'>
          I ran performance tests to analyze <strong> processing speed, energy usage, and scalability</strong>
          of both platforms. The project concluded with a
          <strong> poster presentation</strong> at the
          <em> 2023 University of Maine Student Symposium</em>, where I shared my findings and insights.
        </p>
        <p className='desc'>
          You can download the final report and poster below:
        </p>

        <div className='ContentBanner'>
            <a href="/Dunton_MSGC_AY2023_Report.pdf" className="tileBase" download>
                <div className="tileImgContainer">
                    <img src="/cugr_paper_img.png" className="tileImg"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Cluster Computer Final Report</h2>
                </div>
            </a>

            <a href="/Umaine_Symposium_Poster.png" className="tileBase" download>
                <div className="tileImgContainer">
                    <img src="/Umaine_Symposium_Poster.png" className="tileImg"></img>
                </div>
                <div className="tileInfo">
                    <h2 className="tileTitle">Cluster Computer Poster</h2>
                </div>
            </a>
        </div>        
        
      </div>
    </div>
  )
}



export default Cluster
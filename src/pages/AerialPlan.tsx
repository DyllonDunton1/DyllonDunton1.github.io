import '../styles/AerialPlan.css'
import ProjectNavbar from '../components/ProjectNavbar'

const mediaStyle = {
  border: '0.2rem solid gray',
  borderRadius: '0.5rem',
  width: '100%',
  textAlign: 'center' as const,
}

const captionStyle = {
  fontSize: '0.85rem',
  color: 'black',
  marginTop: '0.35rem',
  textAlign: 'right' as const,
  width: '100%',
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

const AerialPlan = () => {
  return (
    <div className='top'>

      <ProjectNavbar />

      <div className='mainScroller'>
        
        <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
          <img src='/aerialplan/aerialplan_banner.png' style={mediaStyle} alt='Aerial imagery to rover path planning pipeline banner'></img>
          <p style={captionStyle}>End-to-end aerial planning pipeline: drone imagery is converted into terrain maps, traversability estimates, and a rover path.</p>
        </div>
        <br /><br />

        <h1 className='title'>Rover Path Navigation via Aerial Imagery</h1>
        <p className='subtitle'>Aerial-perception pipeline for terrain mapping, traversability estimation, and rover path planning</p>
        <p className='subtitle'>University of Maine COS 573 — Computer Vision / Robotics Planning Project</p>

        <div className='desc'>
          <h2>Project Overview</h2>
          <br />
          <p>
            Autonomous ground vehicles are limited by what they can sense from their own onboard sensors. A rover may be able to react to nearby obstacles, but it often lacks a long-range understanding of the terrain ahead: where rough ground begins, where a route is blocked, or where a safer path exists around vegetation, rocks, or elevation changes.
          </p>
          <br />
          <p>
            This project explores a scout-style autonomy workflow: use drone footage to build a higher-level terrain representation before the rover drives through the environment. The system converts aerial video into a stitched panorama, estimates relative terrain height, classifies terrain with semantic segmentation, reduces those outputs into traversability categories, and generates an A* rover path across the mapped area.
          </p>
          <br />
          <p>
            The result is not just an image-processing demo. It is a perception-to-planning pipeline that turns aerial data into a structured navigation layer for a ground robot.
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
                  <td style={tableCellStyle}>Application</td>
                  <td style={tableCellStyle}>Long-range terrain understanding for rover navigation</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Input</td>
                  <td style={tableCellStyle}>Aerial drone video</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Mapping</td>
                  <td style={tableCellStyle}>OpenCV panorama stitching from selected video frames</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Height Estimation</td>
                  <td style={tableCellStyle}>ZoeDepth monocular depth inference converted into an intensity-style height map</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Segmentation</td>
                  <td style={tableCellStyle}>ResNet-34 encoder / decoder segmentation model trained on semantic drone imagery</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Traversability</td>
                  <td style={tableCellStyle}>Semantic classes reduced into ideal, drivable, and non-drivable terrain categories</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Planning</td>
                  <td style={tableCellStyle}>A* path planning over the generated terrain representation</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>My Focus</td>
                  <td style={tableCellStyle}>Perception and mapping pipeline: stitching, height maps, segmentation, dataset preparation, patch aggregation, and traversability output</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Collaboration</td>
                  <td style={tableCellStyle}>A* path planning and visualization completed with Sophie Walden</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br /><br />

          <h2>My Contribution</h2>
          <br />
          <p>
            I designed and implemented the core perception and terrain-mapping pipeline. My work included converting drone video into a stitched panorama, generating a height-style map using ZoeDepth, preparing semantic drone imagery for training, building and training the segmentation model, and converting raw semantic classes into a simplified traversability representation for planning.
          </p>
          <br />
          <p>
            I also developed the large-image segmentation workflow used to handle panorama-scale inputs. Rather than segmenting the full panorama in one pass, the system divides the image into patches, runs the model across multiple shifted patch grids, and uses majority voting to reduce patch-boundary artifacts. This made the segmentation output more useful as a map layer instead of just a collection of isolated predictions.
          </p>
          <br />
          <p>
            <strong>Collaboration:</strong> The A* path-planning and visualization portions of the project were completed with{' '}
            <a className='linker' href='https://www.linkedin.com/in/sophie-walden-1227b9233/'>Sophie Walden</a>.
          </p>
          <br /><br />

          <h2>Pipeline Architecture</h2>
          <br />
          <p>
            The system is organized as a four-stage autonomy pipeline: aerial video stitching, height mapping, semantic segmentation, and path planning. This structure separates perception from planning. The perception stages create useful map products, and the planner consumes those products to decide where the rover should drive.
          </p>
          <br /><br />

          <h2>Aerial Video Stitching</h2>
          <br />
          <p>
            The first stage extracts frames from the drone video and stitches them into a single panorama using OpenCV. This creates a map-like view of the environment from a moving aerial camera. After stitching, the image is cropped to remove invalid regions around the panorama.
          </p>
          <br />
          <p>
            This stage is important because the rest of the pipeline assumes a coherent terrain image. A clean panorama gives the height-estimation and segmentation stages a shared spatial reference.
          </p>
          <br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/aerialplan/aerialplan_stitched_panorama.png' style={mediaStyle} alt='Stitched panorama generated from aerial drone footage'></img>
            <p style={captionStyle}>OpenCV panorama stitching converts selected drone-video frames into a single top-down terrain view.</p>
          </div>
          <br /><br />

          <h2>Height Map Generation</h2>
          <br />
          <p>
            After the panorama is created, the system runs ZoeDepth to estimate relative depth from the aerial image. The output is normalized into an intensity-style height map that provides a second terrain layer beyond RGB color.
          </p>
          <br />
          <p>
            This is not a survey-grade elevation model, but it gives the planner useful structure. For rover navigation, approximate height information can help identify slopes, ditches, mounds, and terrain transitions that may affect whether a route is safe or efficient.
          </p>
          <br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/aerialplan/aerialplan_height_map.png' style={mediaStyle} alt='Relative height map generated from the stitched aerial panorama'></img>
            <p style={captionStyle}>Monocular depth estimation provides a relative height-map layer for identifying terrain structure.</p>
          </div>
          <br /><br />

          <h2>Semantic Segmentation</h2>
          <br />
          <p>
            The semantic segmentation stage classifies terrain at the pixel level using a ResNet-34 encoder and decoder-style segmentation model. The model was trained on semantic drone imagery with classes such as paved area, dirt, grass, gravel, vegetation, structures, fences, vehicles, and obstacles.
          </p>
          <br />
          <p>
            This transforms the aerial panorama from a visual image into a machine-interpretable terrain map. Instead of only showing what the environment looks like, the segmentation output gives the system information about what different regions likely are.
          </p>
          <br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/aerialplan/aerialplan_semantic_segmentation.png' style={{...mediaStyle, maxWidth: '80%'}} alt='Semantic segmentation output for aerial terrain imagery'></img>
            <p style={captionStyle}>Semantic segmentation classifies aerial terrain into surface and object categories.</p>
          </div>
          <br /><br />

          <h2>Traversability Mapping</h2>
          <br />
          <p>
            The raw semantic output is then reduced into a simpler traversability map. This step is important because a rover planner does not need to reason about every semantic class individually. It needs to know which terrain should be preferred, which terrain may be acceptable, and which terrain should be avoided.
          </p>
          <br />
          <p>
            This turns computer vision output into robotics planning input. The semantic segmentation model identifies terrain and object classes, while the traversability map converts those classes into a form that a path planner can use.
          </p>
          <br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/aerialplan/aerialplan_traversability_map.png' style={mediaStyle} alt='Traversability map generated from semantic segmentation classes'></img>
            <p style={captionStyle}>Raw semantic classes are reduced into planning-oriented terrain categories: preferred, drivable, and avoided regions.</p>
          </div>
          <br /><br />

          <h2>Path Planning</h2>
          <br />
          <p>
            The final stage uses A* search to plan a rover route across the generated map. The path planner uses the processed terrain representation to avoid poor regions and route through more favorable terrain.
          </p>
          <br />
          <p>
            The final output is a planned path overlaid on the aerial map. This demonstrates the main idea of the project: aerial perception can become a useful planning layer for a ground robot before the robot physically drives into the environment.
          </p>
          <br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/aerialplan/aerialplan_path_overlay.png' style={mediaStyle} alt='A* rover path overlay on aerial terrain map'></img>
            <p style={captionStyle}>A* path planning uses the generated terrain representation to route the rover through the mapped environment.</p>
          </div>
          <br /><br />

          <h2>Results</h2>
          <br />
          <p>
            The project produced an end-to-end prototype that connected drone footage to rover path planning. The system was able to stitch aerial imagery, estimate relative height, classify terrain, reduce semantic labels into traversability categories, and generate a planned route through the mapped area.
          </p>
          <br />
          <p>
            The strongest result is the integration of multiple perception products into a planning workflow. Instead of treating panorama stitching, depth estimation, segmentation, and path planning as separate demos, the project combines them into one autonomy-oriented system.
          </p>
          <br /><br />

          <h2>Limitations</h2>
          <br />
          <p>
            This was a course project prototype, not a finished field-deployed rover navigation stack. The height map is based on monocular depth estimation, so it should be treated as relative terrain structure rather than accurate metric elevation. The segmentation model depends on the training distribution of the semantic drone dataset and may not generalize perfectly to every outdoor environment.
          </p>
          <br />
          <p>
            The path planner also operates on generated aerial map products rather than closed-loop rover feedback. A strong next step would be to connect this pipeline to a physical rover or simulation environment, then compare planned traversability against actual driving performance.
          </p>
          <br /><br />

          <h2>Why It Matters</h2>
          <br />
          <p>
            This project is relevant to robotics and autonomy because it connects perception to planning. A rover does not only need to detect objects; it needs to turn sensor data into decisions about where it can safely and efficiently move. This project demonstrates how aerial imagery can become a useful planning prior by converting raw drone footage into structured terrain, height, and traversability information.
          </p>
          <br /><br />

          <h2>Technologies Used</h2>
          <br />
          <p>
            Python, OpenCV, PyTorch, torchvision, ResNet-34, ZoeDepth, semantic segmentation, A* path planning, pygame, PIL, NumPy, aerial imagery, and semantic drone data.
          </p>
        </div>

        <div className='ContentBanner'>
          <a href='https://github.com/DyllonDunton1/Height_Map_UNET' className='tileBase'>
            <div className='tileImgContainer'>
              <img src='/common/Github_Mark.png' className='tileImg' alt='GitHub logo'></img>
            </div>
            <div className='tileInfo'>
              <h2 className='tileTitle'>GitHub Repository</h2>
            </div>
          </a>

          <a href='/aerialplan/Dunton-Walden-COS573-Final-Report.pdf' className='tileBase' download>
            <div className='tileImgContainer'>
              <img src='/aerialplan/rover_paper.png' className='tileImg' alt='Rover navigation final paper preview'></img>
            </div>
            <div className='tileInfo'>
              <h2 className='tileTitle'>Rover Navigation Final Paper</h2>
            </div>
          </a>

          <a href='/aerialplan/Dunton-Walden-COS5473-FinalPres.pptx' className='tileBase' download>
            <div className='tileImgContainer'>
              <img src='/aerialplan/rover_presi.png' className='tileImg' alt='Rover navigation final presentation preview'></img>
            </div>
            <div className='tileInfo'>
              <h2 className='tileTitle'>Rover Navigation Final Presentation</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AerialPlan

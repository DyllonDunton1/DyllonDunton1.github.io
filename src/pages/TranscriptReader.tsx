import '../styles/TranscriptReader.css'
import ProjectNavbar from '../components/ProjectNavbar'

const TranscriptReader = () => {
  return (
    <div className='top'>
      <ProjectNavbar />

      <div className='mainScroller'>
        <div style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
          <img src='/transcript/sample.jpg' style={{ border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center' }} alt='Sample transcript document for the transcript reader project'></img>
        </div>
        <br /><br />

        <h1 className='title'>RAGAI Transcript Reader: AI-Driven Academic Transcript Parsing</h1>
        <p>Automated Academic Transcript Parsing with Local LLM Inference and Voting</p>
        <p className='subtitle'>Code Not Available for Sharing</p>

        <div className='desc'>
          <p>
            The Transcript Reader (TR) is a system designed to automatically parse unstructured academic transcripts and convert them into a structured database that can be used for admissions analytics and scholarship assignments. High school transcripts are inherently inconsistent across the thousands of schools in the United States of America. As a result, the TR must be able to accommodate for these differences using structural and semantic reasoning, rather than a simple template match. In addition, since large language models are occasionally confidently wrong, the TR must also be designed to tolerate hallucinations using repair systems as well as conducting votes across several agents. Lastly, working in a university environment with sensitive student data, FERPA guidelines must be followed to ensure security and privacy for students. To achieve this, the TR is processed using a local LLM server using Ollama running gpt-oss:120b.
          </p>

          <br />
          <h2>Extracting Information</h2>
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/transcript/Reader_flow.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}} alt='Transcript reader information extraction flow diagram'></img>
          </div>
          <br /><br />
          


          <br /><br />
          <h2>Voting and Repair Systems</h2>
          <br />
          <p>
            Since gpt-oss:120b is small relative to the modernly available consumer models such as GPT-5, the LLM is much more likely to be confidently wrong and hallucinate information. Though the likelihood of such an event is low, over hundreds of queries per transcript, the chance that this will occur is not insignificant. To combat this, I developed a thorough system of validations, repairs, and voting that make the error likelihood insignificant.
          </p>
          <br />
          <p>
            The first step was to force the model to output in JSON for every response. Each response includes metadata (confidence, rationale, evidence, counter evidence, warnings) as well a result payload that can have different JSON templates for different queries. This forces the model to reason more about how sure it is, and makes the result consistent with its rationale and evidence. In addition, the evidence is checked against the transcript text to ensure that it actually exists.
          </p>
          <br /><br />
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/transcript/Safe_flow.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}} alt='Transcript reader validation and repair safety flow diagram'></img>
          </div>
          <br /><br />
          <p>
            In addition to the repair system, several voting strategies have also been implemented. Most voting attempts follow the same binary-vote-and-explanation strategy where the model returns a payload with a vote and an explanation. If the metadata’s confidence is above some threshold, the vote and explanation are used directly. Otherwise, the system will leverage the inherent stochasticity of the LLM by querying with the exact same prompt a number of times. The votes are then aggregated by adding the confidence of all positive votes, and subtracting the confidence of all negative votes. The final vote is decided by the sign of the confidence sum, and the final explanation is the one tied to the vote with the highest confidence that agrees with the final vote. This system significantly reduces the chance of errors.
          </p>
          <br></br>
          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src='/transcript/Vote_flow.png' style={{border: '0.2rem solid gray', borderRadius: '0.5rem', width: '100%', textAlign: 'center'}} alt='Transcript reader multi-agent voting flow diagram'></img>
          </div>



          <br /><br />
          <h2>Current Status</h2>
          <br />
          <ul>
            <li style={{ marginLeft: '1rem' }}>FERPA Compliant Local LLM Server</li>
            <li style={{ marginLeft: '1rem' }}>Full Pipeline Works Well for Simple Transcripts</li>
            <li style={{ marginLeft: '1rem' }}>Outputs Validated and Graded by University Admissions Office</li>
            <li style={{ marginLeft: '1rem' }}>Struggles to Infer Continuity Across Columns of Information</li>
            <li style={{ marginLeft: '1rem' }}>Working on a System to Detect Column Layouts When Present and Auto Wrap Columns Before Sending to Pipeline</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TranscriptReader

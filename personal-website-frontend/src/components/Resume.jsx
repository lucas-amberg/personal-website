import { Fade } from "react-awesome-reveal"
import resume from '../assets/Lucas_Amberg_Resume.pdf'
import '../styles/resume.css'


//This component has a button to access my resume
export default function Resume() {
  return(
    <div className="resume">
      <Fade>
        <h1>View my Resume</h1>
        <a href={resume} rel="noreferrer" target="_blank">Click Here</a>
      </Fade>
    </div>
  )
}
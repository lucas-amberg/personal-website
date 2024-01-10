import { Fade } from "react-awesome-reveal"
import resume from '../assets/Lucas_Amberg_Resume.pdf'
import '../styles/resume.css'

export default function Resume() {
  return(
    <div className="resume">
      <Fade>
        <h1>View my Resume:</h1>
        <a href={resume} target="_blank">Resume</a>
      </Fade>
    </div>
  )
}
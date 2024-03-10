import { Fade } from "react-awesome-reveal"
import '../styles/education.css'
import csulbLogo from '../assets/images/logos/csulb-logo.png'

function EducationItem({direction, title, school, location, endDate, GPA, major, courses, alt, img, memberOf, deansList, presidentsList}) {
  return(
    <Fade triggerOnce  direction={direction}>
      <div className='education-item'>
        <div className='education-title'>
          <div className='education-title-desc'>
            <div className='education-name'>{title}</div>
            <div>{school}</div>
            <em>{location}</em>
          </div>
          <img src={img} alt={alt} />
          <div className="education-major">{major}</div>
        </div>
        <div className='location-date'>
          <div>{endDate}</div>
        </div>
        <div className='education-description'>{GPA}</div>
        <div className='education-description'>{courses}</div>
        <div className='education-description'>{memberOf}</div>
        <div className='education-description'>{deansList}</div>
        <div className='education-description'>{presidentsList}</div>
      </div>
    </Fade>
  )
}

export default function Education() {
  return(
    <div className="education-container">
      <Fade triggerOnce >
        <h1>Education</h1>
        <EducationItem 
          title={'California State University, Long Beach'} 
          school={'Long Beach, CA'} 
          img={csulbLogo} 
          endDate={'Expected May 2026'} 
          major={'B.S. Computer Science'} 
          skills={'Test'} 
          GPA={'GPA: 3.723'} 
          courses={'Relevant Coursework: Data Structures, Algorithms, Object Oriented Application Development'} 
          memberOf={'Member of Kappa Sigma Fraternity, Google Developer Student Club, and Association for Computing Machinery'} 
          deansList={'Dean\'s Honor List (Fall 2022, Spring 2023)'} 
          presidentsList={'President\'s Honor List (Fall 2023)'} 
          direction={'right'}
        />
      </Fade>
    </div>
  )
}
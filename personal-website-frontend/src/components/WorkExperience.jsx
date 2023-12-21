import {Fade} from 'react-awesome-reveal'
import '../styles/work-experience.css'
import polaLogo from '../assets/images/logos/pola-logo.jpg'

function Job({direction, title, img, business, location, startDate, endDate, description, skills, alt}) {
    return(
        <Fade direction={direction}>
            <div className='job-item'>
                <div className='job-title'>
                    <div className='job-title-desc'>
                        <div className='job-name'>{title}</div>
                        <div>{business}</div>
                        <em>{location}</em>
                    </div>
                    <img src={img} alt={alt} />
                </div>
                <div className='location-date'>
            
                    <div>{startDate} - {endDate}</div>
                </div>
                <div className='job-description'>{description}</div>
            </div>
        </Fade>
    )
}

const polaDescription = "Completed 100+ repairs for PC's, laptops, printers, and network devices, reducing downtime and ensuring smooth operations. Streamlined application and computer setup process through the implementation of customized Batch files and command line operations, resulting in a 30% reduction in overall setup time. Collaborated with co-workers to solve complex hardware/software issues on a daily basis."

function WorkExperience() {
    return(
        <Fade>
            <div className='work-experience-container'>
                <h1>Work Experience</h1>\
                <Job title='Information Technology Student Specialist'
                business={'Port of Los Angeles'}
                img={polaLogo}
                alt='Port of Los Angeles'
                startDate={"March 2023"}
                endDate={"Present"}
                description={polaDescription}
                location={'Los Angeles, CA'}
                direction="left"
                />
            </div>
        </Fade>
    )
}

export default WorkExperience
import {Fade} from 'react-awesome-reveal'
import '../styles/work-experience.css'
import polaLogo from '../assets/images/logos/pola-logo.jpg'
import hireBirdLogo from '../assets/images/logos/hirebird-logo.jpg'

//This component is currently only used once because I only have one job experience
//of note to put on my portfolio but it contains a section for job title,
//company, dates worked, an image/logo, and a description of what I did.
function Job({direction, title, img, business, location, startDate, endDate, description, skills, alt}) {
    return(
        <Fade triggerOnce  direction={direction}>
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

//This is the descriptions for the job components
const polaDescription = "Completed 100+ repairs for PC's, laptops, printers, and network devices, reducing downtime and ensuring smooth operations. Streamlined application and computer setup process through the implementation of customized Batch files and command line operations, resulting in a 30% reduction in overall setup time. Collaborated with co-workers to solve complex hardware/software issues on a daily basis."
const hirebirdDescription = "Engineered a full stack website using Next.js and TypeScript, used by 14,000+ active users."

//This is the workexperience component and it stores all of the jobs I have listed under my work experience
function WorkExperience() {
    return(
        <Fade triggerOnce >
            <div className='work-experience-container'>
                <h1>Work Experience</h1>

                <Job title="Software Engineering Intern"
                business="Hirebird"
                img={hireBirdLogo}
                alt="Hirebird Logo"
                startDate="February 2024"
                endDate="Present"
                description={hirebirdDescription}
                location="Albany, NY"
                direction="right"
                />

                {/*Job #1 Port of LA*/}
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
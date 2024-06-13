import {Fade} from 'react-awesome-reveal'
import '../styles/work-experience.css'
import polaLogo from '../assets/images/logos/pola-logo.jpg'
import hireBirdLogo from '../assets/images/logos/hirebird-logo.jpg'
import plutoLogo from '../assets/images/logos/plutotv.png'


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
                {typeof description === 'string' ? 
                <div className='job-description'>{description}</div> :
                <ul className='job-description'
                style={{paddingLeft: '25px'}}>
                    {description.map((item, index) => <li 
                    style={{listStyleType: 'disc', paddingTop: index !== 0 ? '10px' : '0px', paddingBottom: index !== description.length - 1 ? '10px' : '0px'}}
                    key={index}>{item}</li>)}
                </ul>}
            </div>
        </Fade>
    )
}

//This is the descriptions for the job components
const polaDescription = ["Completed 100+ repairs for PC's, laptops, printers, and network devices, reducing downtime and ensuring smooth operations.", "Automated Microsoft Office patches across 200+ computers using Visual Basic scripts reducing update times by 80%.", "Streamlined application and computer setup process through the implementation of customized batch files and command line operations, resulting in a 30% reduction in overall setup time."]
const hirebirdDescription = ["Early-stage intern in a start-up environment, working in all areas of the stack including but not limited to frontend with Next.js, backend with Node.js/TypeScript, and cloud infrastructure development with AWS and Pulumi.", "Implemented live messaging with file uploading functionality using AWS S3, Liveblocks, and Next.js API routes along with Panda CSS and Radix UI for clean and consistent styling.", "Designed onboarding flow utilizing OpenAI API with GPT-4o in a chat-like UI format, speeding up onboarding for over 17,000 job candidates to Hirebird.", "Scrumming with team of 10+ developers 2-3 times weekly using Figma, Jira, Miro, Notion, and other collaboration tools to visualize concepts and plan kanban or sprints."]
const plutoDescription = ['Initialized documentation for onboarding developers to the cross platform monorepo using Next.js and Docusaurus.', 'Refactoring component library using Gluestack-UI, React Native, and Storybook to allow for seamless cross platform development.']


//This is the workexperience component and it stores all of the jobs I have listed under my work experience
function WorkExperience() {
    return(
        <Fade triggerOnce >
            <div className='work-experience-container'>
                <h1>Work Experience</h1>

                <Job title="Software Engineering Intern"
                business="Pluto TV"
                img={plutoLogo}
                alt="Pluto TV Logo"
                startDate="June 2024"
                endDate="Present"
                description={plutoDescription}
                location="Los Angeles, CA"
                direction="left"
                />

                <Job title="Software Engineering Intern"
                business="Hirebird"
                img={hireBirdLogo}
                alt="Hirebird Logo"
                startDate="February 2024"
                endDate="Present"
                description={hirebirdDescription}
                location="New York, NY"
                direction="right"
                />

                {/*Job #1 Port of LA*/}
                <Job title='Information Technology Student Specialist'
                business={'Port of Los Angeles'}
                img={polaLogo}
                alt='Port of Los Angeles'
                startDate={"March 2023"}
                endDate={"May 2024"}
                description={polaDescription}
                location={'Los Angeles, CA'}
                direction="left"
                />
            </div>
        </Fade>
    )
}

export default WorkExperience
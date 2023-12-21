import {Fade, Slide} from 'react-awesome-reveal'
import '../styles/my-skills.css'

function MySkills() {
    return(
        <div className='skills-container'>
                <Fade direction='right' cascade duration={2000}>
                    <div className='skills'>
                        <div className='skills-title'>My Skills</div>
                        <div className='great-with'>
                            <div className='title'>Proficient In</div>
                            <ul>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>Python</li>
                                <li>Full Stack Web Development</li>
                                <li>GitHub</li>
                            </ul>
                        </div>
                        <div className='comfortable-with'>
                            <div className='title'>Versed In</div>
                            <ul>
                                <li>Node.js</li>
                                <li>Linux</li>
                                <li>MongoDB</li>
                                <li>Docker</li>
                                <li>RESTful APIs</li>
                                <li>Express</li>
                            </ul>
                        </div>
                    </div>
                </Fade>
        </div>
    )
}

export default MySkills
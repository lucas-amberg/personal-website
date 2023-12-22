import {Fade, Slide} from 'react-awesome-reveal'
import '../styles/my-skills.css'
import pythonImg from '../assets/images/logos/python.svg'
import jsImg from '../assets/images/logos/javascript.png'
import reactImg from '../assets/images/logos/react.png'


function MySkills() {
    return(
        <div className='skills-container'>
                <Fade direction='right' cascade>
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
                        <div className='images'>
                            <Fade cascade direction='up' damping={0.2}>
                                <img src={reactImg} alt='React Developer' />
                                <img src={pythonImg} alt="Python Developer" />
                                <img src={jsImg} alt="JavaScript Developer" />
                            </Fade>
                        </div>
                    </div>
                </Fade>
        </div>
    )
}

export default MySkills
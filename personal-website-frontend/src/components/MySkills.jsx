import {Fade, Slide} from 'react-awesome-reveal'
import '../styles/my-skills.css'
import pythonImg from '../assets/images/logos/python.svg'
import jsImg from '../assets/images/logos/javascript.png'
import reactImg from '../assets/images/logos/react.png'
import cppImg from '../assets/images/logos/cpp.png'


//This is the My Skills section it is a table with 5 sections
//each corresponding with a different type skill and it will list
//all of them accordingly. At the bottom there are logos for some of
//the languages and technologies I kow
function MySkills() {
    return(
        <div className='skills-container'>
                <Fade direction='right' cascade>
                    <div className='skills'>
                        <div className='skills-title'>My Skills</div> {/*Header*/}
                        <div className='skills-sections-container'> {/* Holds all of the skill sections */}
                            <div className='skill-section'>

                                {/*Languages section*/}
                            <div className='skill-section-title'>Languages</div>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>C++</li>
                                    <li>TypeScript</li>
                                    <li>HTML/CSS</li>
                                </ul>
                            </div>

                            {/*Frameworks section*/}
                            <div className='skill-section'>
                                <div className='skill-section-title'>Frameworks</div>
                                <ul>
                                    <li>React.js</li>
                                    <li>Node.js</li>
                                    <li>Tailwind CSS</li>
                                    <li>Express.js</li>
                                    <li>Next.js</li>
                                </ul>
                            </div>

                            {/*Dev tools section*/}
                            <div className='skill-section'>
                                <div className='skill-section-title'>Developer Tools</div>
                                <ul>
                                    <li>Git</li>
                                    <li>VS Code</li>
                                    <li>Visual Studio</li>
                                    <li>PyCharm</li>
                                    <li>Linux OS</li>
                                </ul>
                            </div>

                            {/*Databases section*/}
                            <div className='skill-section'>
                                <div className='skill-section-title'>Databases</div>
                                <ul>
                                    <li>MongoDB</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>

                            {/*Concepts section*/}
                            <div className='skill-section'>
                                <div className='skill-section-title'>Concepts</div>
                                <ul>
                                    <li>RESTful APIs</li>
                                    <li>Frontend Web Development</li>
                                    <li>Backend Web Development</li>
                                    <li>Full Stack Web Development</li>
                                    <li>Data Structures</li>
                                </ul>
                            </div>

                            {/* Libraries section */}
                            {/* <div className='skill-section'>
                                <div className='skill-section-title'>Libraries</div>
                                <ul>
                                    <li>PyTorch</li>
                                </ul>
                            </div> */}
                        </div>

                        {/*Logos for tech I know*/}
                        <div className='images'>
                            <Fade cascade direction='up' damping={0.2}>
                                <img src={reactImg} alt='React Developer' />
                                <img src={pythonImg} alt="Python Developer" />
                                <img src={jsImg} alt="JavaScript Developer" />
                                <img src={cppImg} alt="C++ Developer"/>
                            </Fade>
                        </div>
                    </div>
                </Fade>
        </div>
    )
}

export default MySkills
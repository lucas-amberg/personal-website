import {Fade, Slide} from "react-awesome-reveal"
import '../styles/who-am-i.css'
import logo from '/logo.jpg'


function WhoAmI() {
    return(
        <div className="who-am-i">
            <Slide >
                <Fade fraction={0.3} duration={2000} cascade={true} damping={0.1}>
                    <div className="who-container">
                        <div className="who-title">Who Am I?</div>
                        <div className="who-info">
                            <div>I am a 19 year old <span className="who-important">Full Stack Developer </span>
                            and I am currently a <span className="who-important">Sophomore</span> studying 
                            <span className="who-important"> Computer Science </span>at
                            <span className="who-important"> California State University, Long Beach</span>.</div>
                            <div>I have been coding for 4 years, since my Sophomore year of high school. When I am not
                                at school, I am based in <span className="who-important">San Diego County, California</span>.
                            </div>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </Fade>
            </Slide>
        </div>
    )
}

export default WhoAmI
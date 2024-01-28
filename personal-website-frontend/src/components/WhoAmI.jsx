import {Fade} from "react-awesome-reveal"
import '../styles/who-am-i.css'
import me from '../assets/images/me.jpg'


//This component contains a description about me and a picture of me
//All of the text wrapped in span elements are colored purple to
//distinguish themselves
function WhoAmI() {
    return(
        <div className="who-am-i">
                <Fade direction='left' cascade>
                    <div className="who-container">
                        <div className="who-title">Who Am I?</div>
                        <div className="who-info">
                            <div>I am a 20 year old <span className="who-important">Software Engineer</span>
                            &nbsp;and I am currently a <span className="who-important">Sophomore</span> studying 
                            <span className="who-important"> Computer Science </span>at
                            <span className="who-important"> California State University, Long Beach</span>.</div>
                            <div>I have been coding for 4 years, since my Sophomore year of high school. When I am not
                                at school, I am based in <span className="who-important">San Diego County, California</span>.
                            </div>
                            <img src={me} alt="A picture of me" />
                        </div>
                    </div>
                </Fade>
        </div>
    )
}

export default WhoAmI
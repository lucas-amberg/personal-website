import {Fade} from 'react-awesome-reveal'
import '../styles/contact.css'
import linkedinLogo from '../assets/images/logos/linkedin.svg'
import githubLogo from '../assets/images/logos/github.png'
import emailLogo from '../assets/images/logos/email.svg'


function ContactItem({image, platform, link, direction, type}) {

    let realLink = `https://${link}`
    if (type === 'email') {
        realLink = `mailto:${link}`
    }

    return(
        <Fade direction={direction}>
            <a href={realLink} target="_blank" className='contact-item'>
                <img src={image} alt={platform} />
                <div className='contact-info'>
                    <div>{platform}</div>
                    <a href={realLink}>{link}</a>
                </div>
            </a>
        </Fade>
    )
}

function Contact() {
    return(
        <Fade>
            <div className='contact-container'>
                <h1>Contact Me</h1>
                <ContactItem direction={'left'}
                image={linkedinLogo}
                platform={'LinkedIn'}
                link={'linkedin.com/in/lucasamberg'}
                />
                <ContactItem direction={'right'}
                image={githubLogo}
                platform={'GitHub'}
                link={'github.com/lucas-amberg'}
                />
                <ContactItem direction={'left'}
                image={emailLogo}
                platform={'Email'}
                link={'lucasamberg@icloud.com'}
                type='email'
                />
            </div>
        </Fade>
    )
}

export default Contact
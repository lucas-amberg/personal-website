import {Fade} from 'react-awesome-reveal'
import '../styles/contact.css'
import linkedinLogo from '../assets/images/logos/linkedin.svg'
import githubLogo from '../assets/images/logos/github.png'
import emailLogo from '../assets/images/logos/email.svg'


//Each contact item displays an icon, a title for the link, and a url to be used.
//Each contact item can be clicked on to redirect to a different page
function ContactItem({image, platform, link, direction, type}) {

    //This section of code will check to see if the contact item is an email or
    //a website if it a website then it will use a mailto: instead of https://
    let realLink = `https://${link}`
    if (type === 'email') {
        realLink = `mailto:${link}`
    }

    return(
        <Fade triggerOnce direction={direction}>
            <a href={realLink} rel="noreferrer" target="_blank" className='contact-item'>
                <img src={image} alt={platform} />
                <div className='contact-info'>
                    <div>{platform}</div>
                    <a href={realLink}>{link}</a>
                </div>
            </a>
        </Fade>
    )
}

//This stores all of the contact items to be used on the app component
function Contact() {
    return(
        <Fade triggerOnce >
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
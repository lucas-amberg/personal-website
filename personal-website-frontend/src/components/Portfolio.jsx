import {Fade} from 'react-awesome-reveal'
import '../styles/portfolio.css'
import rhaptecImage from '../assets/images/portfolio-images/rhaptec-image.png'
import toDoImage from '../assets/images/portfolio-images/to-do-image.png'

function PortfolioItem({img, title, description, tech, alt, link, dir}) {

    return(
        <Fade direction={dir}>
            <div className='portfolio-item'>
                <img src={img} alt={alt} />
                <div className='portfolio-info'>
                    <div className='item-title'>{title}</div>
                    <div className='item-tech'>{tech}</div>
                    <div className='item-description'>{description}</div>
                    <a className='item-link' href={`https://${link}`}>{link}</a>
                </div>
            </div>
        </Fade>
    )
}

const rhaptecDescription = 'Website I created for a client and his manufacturing company, Rhaptec.'
const toDoDescription = 'To Do List application with browser storage capabilities utilizing JS, HTML, and CSS.'


function Portfolio() {
    return(
        <Fade cascade>
            <div className='portfolio'>
                <h1>Portfolio Projects</h1>
                <div className='portfolio-items'>
                    <PortfolioItem img={rhaptecImage} dir='left' title={'Rhaptec Website'} tech={'React, CSS, Node.js, Express'} description={rhaptecDescription} link={'rhaptec-dev.fly.dev'} />
                    <PortfolioItem img={toDoImage} dir='right' title={'To Do List'} tech={'JavaScript, HTML, CSS'} description={toDoDescription} link={'lucas-amberg.github.io/to-do-list'} />
                </div>
            </div>
        </Fade>
    )
}

export default Portfolio
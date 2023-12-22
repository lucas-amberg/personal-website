import {Fade} from 'react-awesome-reveal'
import '../styles/portfolio.css'
import rhaptecImage from '../assets/images/portfolio-images/rhaptec-image.png'
import toDoImage from '../assets/images/portfolio-images/to-do-image.png'
import ticTacToeImage from '../assets/images/portfolio-images/tic-tac-toe.png'

function PortfolioItem({img, title, description, tech, alt, link, dir}) {

    return(
        <Fade direction={dir}>
            <a href={`https://${link}`} target="_blank" className='portfolio-item'>
                <img src={img} alt={alt} />
                <div className='portfolio-info'>
                    <div className='item-title'>{title}</div>
                    <div className='item-tech'>{tech}</div>
                    <div className='item-description'>{description}</div>
                    <a className='item-link' target="_blank" href={`https://${link}`}>{link}</a>
                </div>
            </a>
        </Fade>
    )
}

const rhaptecDescription = 'Website I created for a client and his manufacturing company, Rhaptec.'
const toDoDescription = 'To Do List application with browser storage capabilities utilizing JS, HTML, and CSS.'
const ticTacToeDescription = 'Mobile and Desktop friendly Tic Tac Toe game with custom name features and beautiful styling.'

function Portfolio() {
    return(
        <Fade cascade>
            <div className='portfolio'>
                <h1>Portfolio Projects</h1>
                <div className='portfolio-items'>
                    <PortfolioItem img={rhaptecImage} dir='left' title={'Rhaptec Website'} tech={'React, CSS, Node.js, Express'} description={rhaptecDescription} link={'rhaptec-dev.fly.dev'} />
                    <PortfolioItem img={toDoImage} dir='right' title={'To Do List'} tech={'JavaScript, HTML, CSS'} description={toDoDescription} link={'lucas-amberg.github.io/to-do-list'} />
                    <PortfolioItem img={ticTacToeImage} dir='left' title='Tic Tac Toe' tech='JavaScript, HTML, CSS' description={ticTacToeDescription} link='lucas-amberg.github.io/tic-tac-toe' />
                </div>
            </div>
        </Fade>
    )
}

export default Portfolio
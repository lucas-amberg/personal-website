import {Fade} from 'react-awesome-reveal'
import '../styles/portfolio.css'
import rhaptecImage from '../assets/images/portfolio-images/rhaptec-image.png'
import toDoImage from '../assets/images/portfolio-images/to-do-image.png'
import ticTacToeImage from '../assets/images/portfolio-images/tic-tac-toe.png'
import weatherAppImage from '../assets/images/portfolio-images/weather-app.png'
import restaurantImage from '../assets/images/portfolio-images/restaurant.png'

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

const rhaptecDescription = 'Website I created for a client and his manufacturing company, Rhaptec, showcasing my ability in JavaScript in all areas of the stack.'
const toDoDescription = 'To Do List application with browser storage capabilities utilizing JS, HTML, and CSS.'
const ticTacToeDescription = 'Mobile and Desktop friendly Tic Tac Toe game with custom name features and beautiful styling.'
const weatherAppDescription = 'User friendly weather app which utilizes Weather and Geocoding APIs to show you current and future weather information for any city.'
const restaurantDescription = 'Eye catching full stack restaurant page using Next.js/React, Vercel, PostgreSQL, and TypeScript. Utilizes TailwindCSS for dynamic styles.'

function Portfolio() {
    return(
        <Fade cascade>
            <div className='portfolio'>
                <h1>Portfolio Projects</h1>
                <div className='portfolio-items'>
                    <PortfolioItem img={rhaptecImage} dir='left' title={'Rhaptec Website'} tech={'React (JavaScript), CSS, Node.js, Express'} description={rhaptecDescription} link={'rhaptec-dev.fly.dev'} />
                    <PortfolioItem img={weatherAppImage} dir='right' title={'Weather App'} tech={'Next.js (TypeScript), Tailwind CSS'} description={weatherAppDescription} link={'weather-app-two-alpha-12.vercel.app'}/>
                    <PortfolioItem img={toDoImage} dir='left' title={'To Do List'} tech={'JavaScript, HTML, CSS'} description={toDoDescription} link={'lucas-amberg.github.io/to-do-list'} />
                    <PortfolioItem img={ticTacToeImage} dir='right' title='Tic Tac Toe' tech='JavaScript, HTML, CSS' description={ticTacToeDescription} link='lucas-amberg.github.io/tic-tac-toe' />
                    <PortfolioItem img={restaurantImage} dir='left' description={restaurantDescription} title='Restaurant Page' tech='Next.js (TypeScript), TailwindCSS, PostgreSQL, Vercel' link='https://next-restaurant-weld.vercel.app'/>
                </div>
            </div>
        </Fade>
    )
}

export default Portfolio
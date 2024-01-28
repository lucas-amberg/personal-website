import {Fade} from 'react-awesome-reveal'
import '../styles/portfolio.css'
import rhaptecImage from '../assets/images/portfolio-images/rhaptec-image.png'
import toDoImage from '../assets/images/portfolio-images/to-do-image.png'
import ticTacToeImage from '../assets/images/portfolio-images/tic-tac-toe.png'
import weatherAppImage from '../assets/images/portfolio-images/weather-app.png'
import restaurantImage from '../assets/images/portfolio-images/restaurant.png'
import aiConvoImage from '../assets/images/portfolio-images/ai-conversation.png'

//Each portfolio item component will display an image preview of the project,
//a list of skills used in the project, a description of the project,
// and a link to the project
function PortfolioItem({img, title, description, tech, alt, link, dir}) {

    return(
        <Fade direction={dir}>
            <a href={`https://${link}`} target="_blank" rel='noreferrer' className='portfolio-item'>
                <img src={img} alt={alt} />
                <div className='portfolio-info'>
                    <div className='item-title'>{title}</div>
                    <div className='item-tech'>{tech}</div>
                    <div className='item-description'>{description}</div>
                    <a className='item-link' rel="noreferrer" target="_blank" href={`https://${link}`}>{link}</a>
                </div>
            </a>
        </Fade>
    )
}

//These variables hold all of the descriptions used for the portfolio items
const rhaptecDescription = 'Website I created for a client and his manufacturing company, Rhaptec, showcasing my ability in JavaScript in all areas of the stack.'
const toDoDescription = 'To Do List application with browser storage capabilities utilizing JS, HTML, and CSS.'
const ticTacToeDescription = 'Mobile and Desktop friendly Tic Tac Toe game with custom name features and beautiful styling.'
const weatherAppDescription = 'User friendly weather app which utilizes Weather and Geocoding APIs to show you current and future weather information for any city.'
const restaurantDescription = 'Eye catching full stack restaurant page using Next.js/React, Vercel, PostgreSQL, and TypeScript. Utilizes TailwindCSS for dynamic styles.'
const aiConvoDescription = 'Python Application using the OpenAI API to simulate a conversation between two AI agents, either random or preselected.'

//This component stores all of the portfolio items and it is used in the app component
function Portfolio() {
    return(
            <div className='portfolio'>
                <h1>Portfolio Projects</h1>
                <div className='portfolio-items'>
                    <PortfolioItem img={rhaptecImage} dir='left' title={'Rhaptec Website'} tech={'React (JavaScript), CSS, Node.js, Express'} description={rhaptecDescription} link={'rhaptec-dev.fly.dev'} />
                    <PortfolioItem img={weatherAppImage} dir='right' title={'Weather App'} tech={'Next.js (TypeScript), Tailwind CSS'} description={weatherAppDescription} link={'weather-app-two-alpha-12.vercel.app'}/>
                    <PortfolioItem img={aiConvoImage} dir='left' description={aiConvoDescription} title='AI Conversation' tech='Python, OpenAI API' link='github.com/lucas-amberg/ai-conversation'/>
                    <PortfolioItem img={restaurantImage} dir='right' description={restaurantDescription} title='Restaurant Page' tech='Next.js (TypeScript), TailwindCSS, PostgreSQL, Vercel' link='next-restaurant-weld.vercel.app'/>
                    <PortfolioItem img={toDoImage} dir='left' title={'To Do List'} tech={'JavaScript, HTML, CSS'} description={toDoDescription} link={'lucas-amberg.github.io/to-do-list'} />
                    <PortfolioItem img={ticTacToeImage} dir='right' title='Tic Tac Toe' tech='JavaScript, HTML, CSS' description={ticTacToeDescription} link='lucas-amberg.github.io/tic-tac-toe' />
                    
                </div>
            </div>
    )
}

export default Portfolio
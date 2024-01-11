import '../styles/header.css'
import logo from '/logo.jpg'
import { Fade } from 'react-awesome-reveal'

//This is the header component it is the first thing a user sees on
//the page and is at the top of all other components
function Header() {


    return(
        <div className='header'>
            <Fade>
                <div className='logo-item'>
                    <img src={logo} alt="Lucas Amberg Logo" />
                    <div>
                        Lucas Amberg
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Header
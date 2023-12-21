import '../styles/header.css'
import logo from '/logo.jpg'
import { Fade } from 'react-awesome-reveal'

function Header() {
    return(
        <div className='header'>
            <Fade>
                <div className='logo-item'>
                    <img src={logo} alt="Lucas Amberg Logo" />
                    <div>Lucas Amberg</div>
                </div>
            </Fade>
        </div>
    )
}

export default Header
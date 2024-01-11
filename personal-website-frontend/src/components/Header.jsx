import '../styles/header.css'
import logo from '/logo.jpg'
import { Fade } from 'react-awesome-reveal'
import { useState, useEffect } from 'react';

//This is the header component it is the first thing a user sees on
//the page and is at the top of all other components
function Header() {

    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setShowScroll(!showScroll);
        }, 5000);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [showScroll]);


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
            <div>
                {showScroll ? 
                <div className='scroll-down-text'>
                    <Fade>
                        <div>Scroll Down</div>
                    </Fade>
                </div> : ""}
            </div>
        </div>
    )
}

export default Header
import '../styles/header.css'
import logo from '/logo.jpg'
import { Fade } from 'react-awesome-reveal'
import { useState, useEffect } from 'react';

//This is the header component it is the first thing a user sees on
//the page and is at the top of all other components
function Header() {

    const [showScroll, setShowScroll] = useState('show-scroll')

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            showScroll === 'show-scroll' ?
                setShowScroll('hide-scroll') :
                setShowScroll('show-scroll');
                if(window.scrollY + window.innerHeight >= 0.9 * document.body.scrollHeight) {
                    setShowScroll('hide-scroll');
                }
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
                <div className={`${showScroll} scroll-down-container`}>
                    <div className='scroll-text'>Scroll Down</div>
                </div>
            </div>
        </div>
    )
}

export default Header
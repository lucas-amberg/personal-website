import '../styles/header.css'
import logo from '/logo.jpg'
import { Fade, AttentionSeeker } from 'react-awesome-reveal'
import { useState, useEffect } from 'react';

//This is the header component it is the first thing a user sees on
//the page and is at the top of all other components
function Header() {

    const [showScroll, setShowScroll] = useState('hide-scroll')

    useEffect(() => {
        //Rotates between showing the scroll animation and hiding it every 5 seconds
        const interval = setInterval(() => {
            showScroll === 'show-scroll' ?
                setShowScroll('hide-scroll') :
                setShowScroll('show-scroll');
                if(window.scrollY + window.innerHeight >= 0.2 * document.body.scrollHeight) {
                    setShowScroll('hide-scroll'); //Hides the scroll indicator if the user is at the bottom
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
                    <AttentionSeeker delay={8000} effect='wobble'>
                        <div className='scroll-text'>↓</div>
                    </AttentionSeeker>
                </div>
            </div>
        </div>
    )
}

export default Header
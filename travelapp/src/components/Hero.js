import React from 'react';
import Button from './Button';
import './Navbar.css/Hero.css';
import '../App.css';



function Hero(){


    return(
    <div>
       <video src="/videos/video-2.mp4"autoPlay loop muted/>
       <h1>Join The Adventure</h1>
        <p>Lets get Started</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                Get Started
            </Button>
            <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                Watch Trailer <i className="far fa-play-circle"/>
            </Button>
        </div>
    </div>


    )

    }

    export default Hero
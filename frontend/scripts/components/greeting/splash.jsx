import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../image-viewer/slider'

class Splash extends React.Component {

    render() {
        return (
            <div className="splash-body">
                <div className="splash-header">
                    <img className="hiretual-logo"
                        alt="hiretual logo"
                        src="https://s3.amazonaws.com/coding-challenge-hiretual/logo.png"/>
                    
                    <Link to="/">Try Hiretual for Business</Link>
                    <Link to="/">Pricing</Link>
                    <Link to="/">Sign Up</Link>
                    <Link to="/">Log in</Link>
                </div>
                <Slider />
            </div>
        );
    }
}

export default Splash;
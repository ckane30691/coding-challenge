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
                    
                    <div className="header-links-ctnr">
                        <Link className="biz" to="/">Try Hiretual for Business</Link>
                        <Link className="header-link" to="/">Pricing</Link>
                        <Link className="header-link" to="/">Sign Up</Link>
                        <Link className="header-link" to="/">Log in</Link>
                    </div>
                </div>

                <div className='learn-more-ctnr'>
                    <div className="call-to-action">
                        <h1 className='cta-title'>10x Faster Talent <br/>Sourcing</h1>

                        <p className='cta-tagline'>Sourcer/Recruiter's best friend.</p>
                        
                        <Link className='cta-btn cta-signup' to="/">Get Started for Free</Link>
                        <Link className='cta-btn cta-xtn' to="/">Add to Chrome <span>it's free</span></Link>

                        <div className="testimonials">
                            <h1>" So many personal emails and phone numbers. "</h1>
                            <p>- Katie Gechijian</p>
                        </div>
                    </div>
                    <Slider />
                </div>
            </div>
        );
    }
}

export default Splash;
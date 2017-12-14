import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <div className="dash-header">
                    <Link className="dash-home-link" to='/'>HIRETUAL</Link>

                    <div className="burger">
                        |||
                    </div>

                    <div className="dash-header-ctnr">


                        <div className="support-menu">
                            Support<span>▽</span>
                        </div>

                        <img className="profile-icon" 
                            src="https://s3.amazonaws.com/coding-challenge-hiretual/profile.png"/>             

                    </div>



                </div>

                <div className="dash-body">
                    <div className="side-bar">
                        <Link className="side-link" to='#'>
                        <img 
                            className="globe-icon" 
                            src="https://s3.amazonaws.com/coding-challenge-hiretual/globe.png" 
                        />
                        &nbsp; <span /> Discovery
                        </Link>
                    
                        <Link className="side-link" to='#'>🖴 &nbsp; <span/> Pipeline</Link>
                        <Link className="side-link" to='#'>🖴 &nbsp; <span/> Account</Link>
                        <Link className="side-link" to='#'>⚙ &nbsp; <span/> Integration</Link>
                        <Link className="side-link" to='#'>💬 <span/> Help Center</Link>


                        <Link className="side-btn" to='#'>Try Hiretual Premium</Link>
                    </div>

                    <div className="dash-console">
                        <div className="add-to-chrome-ctnr">
                            <img 
                                className="chrome-logo"
                                src="https://hiretual.com/assets/img/chrome.png" 
                                alt="chrome logo"/>
                            <h1> Add Hiretual to Chrome </h1>
                            <p>Hiretual is now assisting you in Google Chrome</p>
                            <Link className="install-btn" to="#">Install Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
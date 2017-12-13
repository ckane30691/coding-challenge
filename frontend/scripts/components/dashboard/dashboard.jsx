import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

    render() {
        return (
            <div className="dash-body">
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

                <div className="side-bar">
                </div>
            </div>
        )
    }
}

export default Dashboard;
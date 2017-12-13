import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Splash from "./greeting/splash.jsx";

const App = () => (
    <div>
        <header>
        </header>

        <Switch>
            <Route exact path="/" component={Splash} />
            {/* <Route exact path="/:vitamin" component={ProductIndexContainer} /> */}
        </Switch>
    </div>
);

export default App;
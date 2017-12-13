import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Splash from "./greeting/splash";
import Dashboard from "./dashboard/dashboard"

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    </div>
);

export default App;
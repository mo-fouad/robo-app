import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import StepOne from './components/FormSteps/StepOne'
import Welcome from './components/FormSteps/Welcome'
import StepTwo from "./components/FormSteps/StepTwo";
import Result from "./components/FormSteps/Result";

function App() {
    return (
        <Router>
            <div className="container dashboard">
                <Switch>
                    <Route exact  path="/">
                        <Welcome></Welcome>
                    </Route>
                    <Route exact path="/step-one">
                        <StepOne></StepOne>
                    </Route>
                    <Route exact path="/step-two">
                        <StepTwo></StepTwo>
                    </Route>
                    <Route exact path="/result">
                        <Result></Result>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

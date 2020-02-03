import React, {useState} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import StepOne from './components/FormSteps/StepOne'
import Welcome from './components/FormSteps/Welcome'
import StepTwo from "./components/FormSteps/StepTwo";
import Result from "./components/FormSteps/Result";
import StepThree from "./components/FormSteps/StepThree";

function App() {
    const [NumbersOfCommands, SetNumOfCommands] = useState(3);
    const [startPoint, setStartPoint] = useState({x: "0", y: "0"});

    const stepOneData = (data) => {
        SetNumOfCommands(data);
    };
    const SetpTwoData = (data) => {
        setStartPoint({x: data.StarX, y: data.StarY});
    };

    console.log(startPoint);

    return (
        <Router>
            <div className="container dashboard">
                {NumbersOfCommands && <p>Number of Commands is <b>{NumbersOfCommands}</b></p>}
                {startPoint && <p>And your Start Pint is x : <b>{startPoint.x}</b> & y : <b>{startPoint.y}</b></p>}
                <Switch>
                    <Route exact path="/">
                        <Welcome></Welcome>
                    </Route>
                    <Route exact path="/step-one">
                        <StepOne getData={stepOneData}></StepOne>
                    </Route>
                    <Route exact path="/step-two">
                        <StepTwo getData={SetpTwoData}></StepTwo>
                    </Route>
                    <Route exact path="/step-three">
                        <StepThree numOfCommands={NumbersOfCommands} getData={StepThree}></StepThree>
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

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
import NotFound from "./components/NotFound";

function App() {
    const [NumbersOfCommands, SetNumOfCommands] = useState(1);
    const [startPoint, setStartPoint] = useState({x: "0", y: "0"});
    const [commandsArr, setCommandsArr] = useState([]);

    const stepOneData = (data) => {
        SetNumOfCommands(data);
    };
    const SetpTwoData = (data) => {
        setStartPoint({x: data.StarX, y: data.StarY});
    };

    const StepThreeData = (data) => {
        setCommandsArr(data);
    };

    return (
        <Router>
            <div className="container dashboard">

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
                        <StepThree numOfCommands={NumbersOfCommands} getData={StepThreeData}></StepThree>
                    </Route>
                    <Route exact path="/result">
                        <Result arrOfCommands={commandsArr} numOfCommands={NumbersOfCommands} stPoint={startPoint}></Result>
                    </Route>
                    <Route exact path="/result">
                        <Result></Result>
                    </Route>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

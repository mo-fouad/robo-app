import React from 'react';
import {Link} from 'react-router-dom'

function Welcome() {
    return (
        <>
            <h1>Welcome to Robo Cleaner Program</h1>
            <p>in this simple application we are trying to guide our robot to find his pass cleaning rooms
            </p>
            <hr/>
            <ul>
                <li>- First enter the number of commands that the robot will receive in the last step to guide him</li>
                <li>- Second enter the Start Point for or robot .. to start cleaning this room</li>
                <li>- Third enter the commands that will show the pass for the robot, give him the direction and the
                    amount of the steps that he will walk
                </li>
            </ul>
            <hr/>
            <Link to="/step-one" className="btn">Start</Link>
        </>
    );
}

export default Welcome;

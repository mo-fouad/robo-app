import React from 'react';
import {Link} from "react-router-dom";

function StepTwo() {
    return (
        <>
            <div className="row step-form-row">
                <label htmlFor="">Please inter the commands that you need to the robot to go</label>
                <input className="input input-half" type="text" placeholder="X"/>
                <input className="input input-half" type="text" placeholder="Y"/>

            </div>
            <Link to="/result" className="btn btn-blue">Do Magic</Link>
        </>
    );
}

export default StepTwo;
